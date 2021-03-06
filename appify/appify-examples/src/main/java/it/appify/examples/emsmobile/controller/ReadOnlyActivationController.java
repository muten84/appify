package it.appify.examples.emsmobile.controller;

import java.util.Date;
import java.util.List;

import com.google.gwt.dom.client.Element;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.i18n.client.DateTimeFormat.PredefinedFormat;

import it.appify.annotations.Controller;
import it.appify.annotations.OnPageReady;
import it.appify.annotations.ViewElement;
import it.appify.annotations.ViewHandler;
import it.appify.api.Sound;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;
import it.appify.examples.emsmobile.model.Phase;
import it.appify.examples.emsmobile.util.Registry;
import it.appify.logging.ConsoleLogger;

@Controller(page="activationPageRO")
public class ReadOnlyActivationController {

	private WebApp<EmsMobileModel> app;

	@ViewElement("activationContent")
	private Element activationContent;

	@ViewElement("bottomBar")
	private Element bottomBar;

	@ViewElement("sendBtn")
	private Element sendBtn;

	public ReadOnlyActivationController(WebApp<EmsMobileModel> app) {
		this.app = app;
	}

	@OnPageReady
	public void onPageReady() {		
		showMap();
		EmsMobileModel model = app.getCurrentAppState();
		if(model.getPrecActivation()==null){
			return;
		}
		List<Phase> phases = model.getPrecActivation().getPhases();
		if (phases != null && phases.size() > 0) {
			app.getCurrentPage().mask("");
			for (Phase phase : phases) {
				int code = phase.getCode();
				long time = phase.getTimestamp();
				Date d = new Date();
				d.setTime(time);
				String formattedTime = DateTimeFormat.getFormat(PredefinedFormat.TIME_MEDIUM).format(d);
				switch (code) {
				case Phase.SEND:
					app.getCurrentPage().setElementText("sendLabel", formattedTime);
					disableStageBtn("sendBtn");
					break;
				case Phase.PL_ARRIVAL:
					app.getCurrentPage().setElementText("placeArrivalLabel", formattedTime);
					disableStageBtn("placeArrivalBtn");
					break;
				case Phase.PL_DEPARTURE:
					app.getCurrentPage().setElementText("departureLabel", formattedTime);
					disableStageBtn("departureBtn");
					break;
				case Phase.HOSP_ARRIVAL:
					app.getCurrentPage().setElementText("hospitalArrivalLabel", formattedTime);
					disableStageBtn("hospitalArrivalBtn");
					break;
				case Phase.CLOSURE:
					app.getCurrentPage().setElementText("closureLabel", formattedTime);
					disableStageBtn("closureBtn");
					break;
				default:
					break;
				}
			}
			app.getCurrentPage().unmask();
		} else {
			ConsoleLogger.getConsoleLogger().log("THERE ARE NO PHASES TO PROCESS IN THE ACTIVATION");
		}
	}
	
	@ViewHandler(eventType = "click", viewId = "backBtn")
	public void backBtnClicked() {		
		app.back();
	}
	
	@ViewHandler(eventType="click", viewId = "patientsBtn")
	public void showPatientPage() {
		app.moveTo("patientPage");
	}
	
	@ViewHandler(eventType = "click", viewId = "showMenuBtn")
	public void controlMenu() {
		if (app.isMenuOpen()) {
			app.closeContextMenu();
		} else {
			app.openContextMenu("content");
		}
	}

	@ViewHandler(eventType = "click", viewId = "itemEmergencyData")
	public void showEmergencyData() {
		showFooterInfo();
		disablaAll();
		enableSection("EmergencyData");
		restoreMapElement();
		showMap();
	}

	@ViewHandler(eventType = "click", viewId = "itemAddressData")
	public void showAddressData() {
		showFooterInfo();
		disablaAll();
		enableSection("AddressData");

	}

	@ViewHandler(eventType = "click", viewId = "itemNoteData")
	public void showNoteData() {
		showFooterInfo();
		disablaAll();
		enableSection("NoteData");

	}
	
	@ViewHandler(eventType = "click", viewId = "confirmModalBtn")
	public void onActivatioConfirm() {
		app.getCurrentPage().closeModal("intervIncomeModal");
		Sound sound = Registry.get("activationSound");
		sound.stop();
		app.moveTo("activationPage");
	}
	
	protected void disableStageBtn(String btnId) {
		app.getCurrentPage().disableElements(btnId);
	}

	protected void showFooterInfo() {
		ConsoleLogger.getConsoleLogger().log("confirmModalBtn onActivatioConfirm ....");
		String height = activationContent.getPropertyString("height");
		ConsoleLogger.getConsoleLogger().log("activation content height is: " + height);
	}

	private void disableSection(String suffix) {
		if (app.getCurrentPage().hasStyle("item" + suffix, "active")) {
			app.getCurrentPage().toggleClassViewStyle("item" + suffix, "active");
		}
		if (app.getCurrentPage().hasStyle("card" + suffix, "active")) {
			app.getCurrentPage().toggleClassViewStyle("card" + suffix, "active");
		}
	}

	private void enableSection(String suffix) {
		if (!app.getCurrentPage().hasStyle("item" + suffix, "active")) {
			app.getCurrentPage().toggleClassViewStyle("item" + suffix, "active");
		}
		if (!app.getCurrentPage().hasStyle("card" + suffix, "active")) {
			app.getCurrentPage().toggleClassViewStyle("card" + suffix, "active");
		}
	}

	protected void disablaAll() {
		disableSection("EmergencyData");
		disableSection("NoteData");
		disableSection("AddressData");

	}

	public Element getActivationContent() {
		return activationContent;
	}

	public void setActivationContent(Element activationContent) {
		this.activationContent = activationContent;
	}

	public Element getBottomBar() {
		return bottomBar;
	}

	public void setBottomBar(Element bottomBar) {
		this.bottomBar = bottomBar;
	}

	public Element getSendBtn() {
		return sendBtn;
	}

	public void setSendBtn(Element sendBtn) {
		this.sendBtn = sendBtn;
	}

	private native void showGoogleMap()/*-{
		var myLatlng = new $wnd.google.maps.LatLng(44.505829,11.311359);
		var mapOptions = {
			zoom : 16,
			center : myLatlng
		}
		var map = new $wnd.google.maps.Map($doc.getElementById('map-canvas'),
				mapOptions);

		var marker = new $wnd.google.maps.Marker({
			position : myLatlng,
			map : map,
			title : 'Luogo Emergenza'
		});
	}-*/;

	private native void restoreMapElement()/*-{
		var map = $wnd.$('#map');
		map.remove();
		var card = $wnd.$('#cardEmergencyData')
		card
				.append($wnd
						.$("<div class='app-section' id='map' style='padding: 0; margin: 0; width: 100%; height: 100%;'></div>"));
	}-*/;

	private native void showMap()/*-{

		var iconFeature = new $wnd.ol.Feature({
			geometry : new $wnd.ol.geom.Point([ 11.311359, 44.505829 ]),
			name : 'Luogo Emergenza'
		//population : 4000,
		//rainfall : 500
		});
		$wnd.iconFeature = iconFeature;
		console.log('iconFeature: ' + iconFeature);
		var iconStyle = new $wnd.ol.style.Style({
			image : new $wnd.ol.style.Icon(({
				anchor : [ 0.5, 46 ],
				anchorXUnits : 'fraction',
				anchorYUnits : 'pixels',
				opacity : 0.75,
				src : '../img/marker.png'
			}))
		});

		iconFeature.setStyle(iconStyle);
		$wnd.iconStyle = iconStyle;
		console.log('iconStyle: ' + iconStyle);

		var vectorSource = new $wnd.ol.source.Vector({
			features : [ iconFeature ]
		});

		$wnd.vectorSource = vectorSource;
		console.log('vectorSource: ' + vectorSource);

		var vectorLayer = new $wnd.ol.layer.Vector({
			source : vectorSource

		});

		$wnd.vectorLayer = vectorLayer;

		console.log('vectorLayer: ' + vectorLayer);

		var map = new $wnd.ol.Map({
			target : 'map',
			layers : [ new $wnd.ol.layer.Tile({
				source : new $wnd.ol.source.MapQuest({
					layer : 'osm'
				})
			}), vectorLayer ],
			view : new $wnd.ol.View({
				center : $wnd.ol.proj.transform([ 11.311359, 44.505829 ],
						'EPSG:4326', 'EPSG:3857'),
				zoom : 16
			})
		});

		$wnd.map = map;

	}-*/;
}
