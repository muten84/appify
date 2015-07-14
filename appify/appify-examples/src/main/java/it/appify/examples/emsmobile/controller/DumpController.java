package it.appify.examples.emsmobile.controller;

import java.util.Date;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.RepeatingCommand;
import com.google.gwt.dom.client.Element;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.i18n.client.DateTimeFormat.PredefinedFormat;

import it.appify.annotations.Controller;
import it.appify.annotations.OnPageReady;
import it.appify.annotations.ViewElement;
import it.appify.annotations.ViewHandler;
import it.appify.api.Notification;
import it.appify.api.Notification.NotificationCallback;
import it.appify.api.Sound;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;
import it.appify.examples.emsmobile.service.ActivationService;
import it.appify.examples.emsmobile.util.Registry;
import it.appify.logging.ConsoleLogger;

@Controller(page = "dumpPage")
public class DumpController {

	private WebApp<EmsMobileModel> app;

	@ViewElement("dumpFrame")
	private Element dumpFrameElement;

	@ViewElement("cacheProgress")
	private Element cacheProgress;

	@ViewElement("dumpTopBar")
	private Element dumpTopBar;

	private boolean firstTime = true;

	public DumpController(WebApp<EmsMobileModel> app) {
		this.app = app;

	}

	@OnPageReady
	public void onPageReady() {
		if (firstTime) {
			firstTime=false;
			app.notify(Notification.NOTICE, "La maschera di inizio turno &egrave stata integrata con il dump del sinottico", new NotificationCallback() {

				@Override
				public void onClose() {
					app.notify(Notification.NOTICE, "Per visualizzare il menu toccare il bottone in alto a sinistra.");

				}
			});
		}
		ConsoleLogger.getConsoleLogger().log("onPageReady DumpController");

		dumpTopBar.toggleClassName("progress-space");
		/* test */
		// Scheduler.get().scheduleFixedPeriod(new RepeatingCommand() {
		// int perc = 0;
		// @Override
		// public boolean execute() {
		// ConsoleLogger.getConsoleLogger().log("emsmobile progress event: "+perc+"%");
		// perc++;
		// app.getCurrentPage().width("cacheProgress", perc+"%");
		// if(perc==100){
		// return false;
		// }
		// return true;
		// }
		// }, 1000);
		/* test */

		EmsMobileModel model = this.app.getCurrentAppState();
		if (model.getActivation() != null) {
			ConsoleLogger.getConsoleLogger().log("ACTIVATION IS NOT NULL MOVING TO ACTIVATION PAGE");
			//app.moveTo("activationPage");
		} else {
			if(model.getBarStatus().getVehicleCode()!=null){
				app.notify(Notification.NOTICE, "Il sistema &egrave pronto per ricevere attivazioni dalla centrale operativa");
			}
			else{
				app.notify(Notification.NOTICE, "Per poter ricevere attivazioni dalla centrale &egrave necessario entrare in turno");
			}
			ConsoleLogger.getConsoleLogger().log("ACTIVATION IS NULL");
		}

	}

	@ViewHandler(eventType = "click", viewId = "lastEmergencyBtn")
	public void viewLastEmergency() {
		app.moveTo("activationPageRO");
	}

	@ViewHandler(eventType = "click", viewId = "checkInBtn")
	public void onCheckInStart() {
		ConsoleLogger.getConsoleLogger().log("checkInBtn clicked");
		checkIn();
	}

	@ViewHandler(eventType = "click", viewId = "reloadBtn")
	public void onReload() {
		// app.refresh();
		try {
			app.getApplicationCacheService().update();
		} catch (Exception e) {
			app.getCurrentPage().popover("relaodBtn", "Stato Cache", "Error: " + e.getMessage(), "fade");
			EmsMobileModel model = app.<EmsMobileModel> getCurrentAppState();
			model.getBarStatus().setCacheStatus("status-off");
			app.updateAppState(model);
			ConsoleLogger.getConsoleLogger().log("on reload error", e);
			app.notify(Notification.NOTICE, "Non &egrave; stato possibile aggiornare la cache, l'applicazione sar&agrave; ricaricata in ogni caso");
			Scheduler.get().scheduleFixedDelay(new RepeatingCommand() {

				@Override
				public boolean execute() {
					app.refresh();
					return false;
				}
			}, 2000);
		}
	}

	@ViewHandler(eventType = "click", viewId = "checkInAccels")
	public void onCheckInAccel() {
		// checkIn();
	}

	protected void checkIn() {
		ConsoleLogger.getConsoleLogger().log("onCheckInStart");
		// app.getScreenOrientationService().requestFullScreen();
		app.getCurrentPage().mask("");
		if (app.<EmsMobileModel> getCurrentAppState().getBarStatus().getVehicleCode() == null) {
			// app.getScreenOrientationService().requestFullScreen();
			app.moveTo("vehiclesPage");
		} else {
			// start checkout request...
			// ViewUtils.showModal(app, "waitModal");
			Scheduler.get().scheduleFixedDelay(new RepeatingCommand() {

				@Override
				public boolean execute() {
					// ViewUtils.showModal(app, "waitModal");
					// app.getScreenOrientationService().exitFullScreen();
					EmsMobileModel model = app.<EmsMobileModel> getCurrentAppState();
					model.getBarStatus().setVehicleCode(null);
					model.setCheckInLabel("Inizio Turno");					
					app.updateAppState(model);
					app.getCurrentPage().unmask();
					//app.getCurrentPage().popover("checkInAccels", "Orario inizio turno", model.getBarStatus().getCheckInDate(), "fade");
					ActivationService service = Registry.get("ActivationService");
					service.scheduleActivation();

					return false;
				}
			}, 5000);
		}
	}

	@ViewHandler(eventType = "click", viewId = "refreshDumpBtn")
	public void onRefreshDump() {
		// Element frameElement = app.<Element> getViewFragment("dumpFrame");
		EmsMobileModel model = app.getCurrentAppState();
		_refreshFrame(dumpFrameElement.cast(), model.getDumpUrl());
	}

	@ViewHandler(eventType = "click", viewId = "confirmModalBtn")
	public void onActivatioConfirm() {
		app.getCurrentPage().closeModal("intervIncomeModal");
		Sound sound = Registry.get("activationSound");
		sound.stop();
		app.moveTo("activationPage");
	}

	private native void _refreshFrame(JavaScriptObject frame, String url)/*-{
		frame.src = url;
	}-*/;

	/* getter and setter */
	public Element getDumpFrameElement() {
		return dumpFrameElement;
	}

	public void setDumpFrameElement(Element dumpFrameElement) {
		this.dumpFrameElement = dumpFrameElement;
	}

	public Element getCacheProgress() {
		return cacheProgress;
	}

	public void setCacheProgress(Element cacheProgress) {
		this.cacheProgress = cacheProgress;
	}

	public Element getDumpTopBar() {
		return dumpTopBar;
	}

	public void setDumpTopBar(Element dumpTopBar) {
		this.dumpTopBar = dumpTopBar;
	}

}
