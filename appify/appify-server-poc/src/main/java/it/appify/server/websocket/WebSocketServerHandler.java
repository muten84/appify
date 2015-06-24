package it.appify.server.websocket;

import io.netty.buffer.ByteBuf;
import io.netty.buffer.Unpooled;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelFutureListener;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.handler.codec.http.DefaultFullHttpResponse;
import io.netty.handler.codec.http.FullHttpRequest;
import io.netty.handler.codec.http.FullHttpResponse;
import io.netty.handler.codec.http.HttpHeaderNames;
import io.netty.handler.codec.http.HttpHeaderUtil;
import io.netty.handler.codec.http.HttpMethod;
import io.netty.handler.codec.http.HttpResponseStatus;
import io.netty.handler.codec.http.HttpVersion;
import io.netty.handler.codec.http.websocketx.CloseWebSocketFrame;
import io.netty.handler.codec.http.websocketx.PingWebSocketFrame;
import io.netty.handler.codec.http.websocketx.PongWebSocketFrame;
import io.netty.handler.codec.http.websocketx.TextWebSocketFrame;
import io.netty.handler.codec.http.websocketx.WebSocketFrame;
import io.netty.handler.codec.http.websocketx.WebSocketServerHandshaker;
import io.netty.handler.codec.http.websocketx.WebSocketServerHandshakerFactory;
import io.netty.util.CharsetUtil;
import it.appify.server.channel.ChannelEvent;
import it.appify.server.channel.IChannel;
import it.appify.server.data.GPSData;
import it.appify.server.gps.GpsEvent;
import it.appify.server.gps.GpsObservable;
import it.appify.server.gps.impl.EselGps;

import java.util.Observable;
import java.util.Observer;

public class WebSocketServerHandler extends SimpleChannelInboundHandler<Object> {

	private static final String WEBSOCKET_PATH = "/websocket";

	private WebSocketServerHandshaker handshaker;

	private EselGps gps;

	private GPSData last = null;

	public WebSocketServerHandler(EselGps gps) {
		this.gps = gps;
		this.gps.addObserver(new Observer() {

			public void update(Observable o, Object arg) {
				GpsObservable obs = (GpsObservable) o;
				if (arg instanceof GpsEvent) {
					GpsEvent ev = (GpsEvent) arg;
					GPSData newData = ev.getGpsData();
					last = newData;
				}
				else if(arg instanceof ChannelEvent) {
					ChannelEvent ev = (ChannelEvent)arg;
					short status = ev.getStatus();
					switch (status) {
					case IChannel.STATUS_AVAILABLE:
						System.out.println("gps status STATUS_AVAILABLE ");
						break;
					case IChannel.STATUS_OUT_OF_ORDER:
						System.out.println("gps status STATUS_OUT_OF_ORDER ");
						break;
					case IChannel.STATUS_TEMP_UNAVAILABLE:
						System.out.println("gps status STATUS_TEMP_UNAVAILABLE ");
						break;
					default:
						break;
					}
				}
			}
		});
		if(!gps.isRunning()) {
			gps.startup();
		}
	}

	@Override
	public void messageReceived(ChannelHandlerContext ctx, Object msg) {
		if (msg instanceof FullHttpRequest) {
			handleHttpRequest(ctx, (FullHttpRequest) msg);
		} else if (msg instanceof WebSocketFrame) {
			handleWebSocketFrame(ctx, (WebSocketFrame) msg);
		}
	}

	@Override
	public void channelReadComplete(ChannelHandlerContext ctx) {
		ctx.flush();
	}

	private void handleHttpRequest(ChannelHandlerContext ctx, FullHttpRequest req) {
		// Handle a bad request.
		if (!req.decoderResult().isSuccess()) {
			sendHttpResponse(ctx, req, new DefaultFullHttpResponse(HttpVersion.HTTP_1_1, HttpResponseStatus.BAD_REQUEST));
			return;
		}

		// Allow only GET methods.
		if (req.method() != HttpMethod.GET) {
			sendHttpResponse(ctx, req, new DefaultFullHttpResponse(HttpVersion.HTTP_1_1, HttpResponseStatus.FORBIDDEN));
			return;
		}

		// Send the demo page and favicon.ico
		if ("/".equals(req.uri())) {
			ByteBuf content = WebSocketServerIndexPage.getContent(getWebSocketLocation(req));
			FullHttpResponse res = new DefaultFullHttpResponse(HttpVersion.HTTP_1_1, HttpResponseStatus.OK, content);

			res.headers().set(HttpHeaderNames.CONTENT_TYPE, "text/html; charset=UTF-8");
			HttpHeaderUtil.setContentLength(res, content.readableBytes());

			sendHttpResponse(ctx, req, res);
			return;
		}
		if ("/favicon.ico".equals(req.uri())) {
			FullHttpResponse res = new DefaultFullHttpResponse(HttpVersion.HTTP_1_1, HttpResponseStatus.NOT_FOUND);
			sendHttpResponse(ctx, req, res);
			return;
		}

		// Handshake
		WebSocketServerHandshakerFactory wsFactory = new WebSocketServerHandshakerFactory(getWebSocketLocation(req), null, true);
		handshaker = wsFactory.newHandshaker(req);
		if (handshaker == null) {
			WebSocketServerHandshakerFactory.sendUnsupportedVersionResponse(ctx.channel());
		} else {
			handshaker.handshake(ctx.channel(), req);
		}
	}

	private void handleWebSocketFrame(ChannelHandlerContext ctx, WebSocketFrame frame) {

		// Check for closing frame
		if (frame instanceof CloseWebSocketFrame) {
			handshaker.close(ctx.channel(), (CloseWebSocketFrame) frame.retain());
			return;
		}
		if (frame instanceof PingWebSocketFrame) {
			ctx.channel().write(new PongWebSocketFrame(frame.content().retain()));
			return;
		}
		if (!(frame instanceof TextWebSocketFrame)) {
			throw new UnsupportedOperationException(String.format("%s frame types not supported", frame.getClass().getName()));
		}

		// Send the uppercase string back.
		String request = ((TextWebSocketFrame) frame).text();
		System.err.printf("%s received %s%n", ctx.channel(), request);
		if (request.equalsIgnoreCase("getCurrentPosition")) {

			long ts = System.currentTimeMillis();
			double lat = 0;
			double lon = 0;
			if (last != null) {
				lat = last.getLatitude();
				lon = last.getLongitude();
			}
			String msg = "{\"timestamp\": " + ts + ", \"coords\":{\"latitude\": " + String.valueOf(lat) + ", \"longitude\": " + String.valueOf(lon) + "}}";
			TextWebSocketFrame gpsFrame = new TextWebSocketFrame(msg);
			ctx.channel().write(gpsFrame);
		} else {
			TextWebSocketFrame gpsFrame = new TextWebSocketFrame("{}");
			ctx.channel().write(gpsFrame);
		}
		// ctx.channel().write(new TextWebSocketFrame(request.toUpperCase()));
	}

	private static void sendHttpResponse(ChannelHandlerContext ctx, FullHttpRequest req, FullHttpResponse res) {
		// Generate an error page if response getStatus code is not OK (200).
		if (res.status().code() != 200) {
			ByteBuf buf = Unpooled.copiedBuffer(res.status().toString(), CharsetUtil.UTF_8);
			res.content().writeBytes(buf);
			buf.release();
			HttpHeaderUtil.setContentLength(res, res.content().readableBytes());
		}

		// Send the response and close the connection if necessary.
		ChannelFuture f = ctx.channel().writeAndFlush(res);
		if (!HttpHeaderUtil.isKeepAlive(req) || res.status().code() != 200) {
			f.addListener(ChannelFutureListener.CLOSE);
		}
	}

	@Override
	public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) {
		cause.printStackTrace();
		ctx.close();
	}

	private static String getWebSocketLocation(FullHttpRequest req) {
		String location = req.headers().get(HttpHeaderNames.HOST) + WEBSOCKET_PATH;
		if (WebSocketServer.SSL) {
			return "wss://" + location;
		} else {
			return "ws://" + location;
		}
	}
}