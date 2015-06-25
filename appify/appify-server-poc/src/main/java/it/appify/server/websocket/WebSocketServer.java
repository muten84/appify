package it.appify.server.websocket;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.Channel;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.handler.logging.LogLevel;
import io.netty.handler.logging.LoggingHandler;
import io.netty.handler.ssl.SslContext;
import io.netty.handler.ssl.util.SelfSignedCertificate;
import it.appify.server.data.GPSData;
import it.appify.server.gps.GpsEvent;
import it.appify.server.gps.GpsObservable;
import it.appify.server.gps.impl.EselGps;
import it.appify.server.ui.TrayIconHelper;
import it.appify.server.ui.UiHelper;

import java.util.Observable;
import java.util.Observer;

public final class WebSocketServer {

    static final boolean SSL = System.getProperty("ssl") != null;
    static final int PORT = Integer.parseInt(System.getProperty("port", SSL? "8443" : "8080"));
    
    static final String GPS_COM_PORT = System.getProperty("gps_port","COM8");
    static final String GPS_RATE = System.getProperty("gps_rate","4800");

    public static void main(String[] args) throws Exception {
    	UiHelper.addTrayIcon();
    	TrayIconHelper.launchBrowser();
    	EselGps gps = new EselGps();   
    	System.out.println("STARTING GPS WITH: "+GPS_COM_PORT+" - "+GPS_RATE);
    	gps.config(GPS_COM_PORT, GPS_RATE);
    	gps.startup();

        // Configure SSL.
        final SslContext sslCtx;
        if (SSL) {
            SelfSignedCertificate ssc = new SelfSignedCertificate();
            sslCtx = SslContext.newServerContext(ssc.certificate(), ssc.privateKey());
        } else {
            sslCtx = null;
        }

        EventLoopGroup bossGroup = new NioEventLoopGroup(1);
        EventLoopGroup workerGroup = new NioEventLoopGroup();
        try {
            ServerBootstrap b = new ServerBootstrap();
            b.group(bossGroup, workerGroup)
             .channel(NioServerSocketChannel.class)
             .handler(new LoggingHandler(LogLevel.INFO))
             .childHandler(new WebSocketServerInitializer(sslCtx,gps));

            Channel ch = b.bind(PORT).sync().channel();

            System.out.println("Open your web browser and navigate to " +
                    (SSL? "https" : "http") + "://127.0.0.1:" + PORT + '/');

            ch.closeFuture().sync();
        } finally {
            bossGroup.shutdownGracefully();
            workerGroup.shutdownGracefully();
        }
    }
}