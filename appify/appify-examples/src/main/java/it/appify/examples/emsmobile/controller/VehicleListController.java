package it.appify.examples.emsmobile.controller;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.RepeatingCommand;
import com.google.gwt.dom.client.Element;
import com.google.gwt.i18n.client.DateTimeFormat;
import com.google.gwt.i18n.client.DateTimeFormat.PredefinedFormat;
import com.google.gwt.user.client.rpc.AsyncCallback;

import it.appify.annotations.Controller;
import it.appify.annotations.OnPageReady;
import it.appify.annotations.ViewElement;
import it.appify.annotations.ViewHandler;
import it.appify.annotations.ViewModelHandler;
import it.appify.api.HasViewHandlers;
import it.appify.api.Notification;
import it.appify.api.Notification.NotificationCallback;
import it.appify.api.Page.KeyboardActionCallback;
import it.appify.api.Page.PageActionCallback;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;
import it.appify.examples.emsmobile.model.Item;
import it.appify.examples.emsmobile.model.Section;
import it.appify.examples.emsmobile.util.ViewUtils;
import it.appify.logging.ConsoleLogger;

@Controller(page = "vehiclesPage")
public class VehicleListController {

	private WebApp<EmsMobileModel> app;

	@ViewElement("waitModalText")
	private Element waitModalText;

	private boolean firstTime = true;

	public VehicleListController(WebApp<EmsMobileModel> app) {
		this.app = app;
	}

	@OnPageReady
	public void onPageReady() {
		if (firstTime) {
			firstTime = false;
			app.notify(Notification.NOTICE, "Prova a tirare la pagina verso il basso per scatenare un refresh...", new NotificationCallback() {

				@Override
				public void onClose() {
					app.notify(Notification.NOTICE, "Puoi filtrare il contenuto della lista utilizzando il campo di testo in alto");

				}
			});
		}
		ConsoleLogger.getConsoleLogger().log("PAGE READY :) YEAAAAAAAAAAAAAAH!");
		app.getCurrentPage().keyboard("keyboard", new KeyboardActionCallback() {

			@Override
			public void accepted(String text) {
				ConsoleLogger.getConsoleLogger().log("keyboard accepted text: " + text);
				Element vehicleSearchTextEl = app.getCurrentPage().getElementInPage("vehicleSearchText");
				vehicleSearchTextEl.setInnerText(text);
				app.getCurrentPage().setElementValue("vehicleSearchText", text);
				app.getCurrentPage().triggerEvent("vehicleSearchText", "input");
			}
		});

		app.getCurrentPage().addPullToRefreshHandler(new PageActionCallback() {

			@Override
			public void refresh(final AsyncCallback<Boolean> cb) {
				final EmsMobileModel model = app.<EmsMobileModel> getCurrentAppState();
				List<Section> sections = model.getVehicles();
				sections.add(new Section("NUOVA POSTAZIONE", Arrays.asList(new Item[] { new Item("10", "NUOVO MEZZO") })));
				model.setVehicles(sections);

				Scheduler.get().scheduleFixedDelay(new RepeatingCommand() {

					@Override
					public boolean execute() {
						ConsoleLogger.getConsoleLogger().log("executing async refresh request...");
						app.updateAppState(model);
						cb.onSuccess(true);
						app.notify(Notification.NOTICE, "Esatto!!");
						return false;
					}
				}, 2000);

			}
		});
	}

	@ViewHandler(eventType = "click", viewId = "backBtn")
	public void back() {
		this.app.back();
	}

	@ViewHandler(eventType = "focusin", viewId = "vehicleSearchText")
	public void vehicleSearchTextFocusIn() {
		Element keyboardEl = app.getCurrentPage().getElementInPage("keyboard");
		String id = keyboardEl.getAttribute("id");
		keyboardEl.setAttribute("id", "showKeyboard");
		keyboardEl = app.getCurrentPage().getElementInPage("showKeyboard");
		final Element showKeyboardEl = keyboardEl;
		app.getCurrentPage().addViewHandler("showKeyboard", "focusout", new HasViewHandlers.ViewHandler() {

			@Override
			public void onEvent(String type, String source) {
				ConsoleLogger.getConsoleLogger().log("onEvent source: " + source + " - type: " + type);
				showKeyboardEl.setAttribute("id", "keyboard");

			}
		});
		keyboardEl.focus();
	}

	@ViewHandler(eventType = "click", viewId = "closeWaitModalBtn")
	public void onCloseModal() {
		ViewUtils.showModal(app, "waitModal");
	}

	@ViewModelHandler(modelType = Item.class, viewId = "vehicleList")
	public void onItemReceived(final Item i) {
		ConsoleLogger.getConsoleLogger().log("Received item from listOfItems1: " + i.getCode() + " - " + i.getItemName());
		waitModalText.setInnerText("Hai selezionato: " + i.getCode() + " - " + i.getItemName());
		app.getCurrentPage().mask("");
		// ViewUtils.showModal(app, "waitModal");
		/* emulate remote request */
		Scheduler.get().scheduleFixedDelay(new RepeatingCommand() {

			@Override
			public boolean execute() {
				// ViewUtils.showModal(app, "waitModal");
				EmsMobileModel model = app.<EmsMobileModel> getCurrentAppState();
				String formattedTime = DateTimeFormat.getFormat(PredefinedFormat.TIME_MEDIUM).format(new Date());
				model.getBarStatus().setCheckInDate(formattedTime);
				model.getBarStatus().setVehicleCode(i.getItemName());
				model.setCheckInLabel("Fine Turno");
				app.updateAppState(model);
				app.back();
				return false;
			}
		}, 5000);
		/**/
		// request checkin to service
	}

	public Element getWaitModalText() {
		return waitModalText;
	}

	public void setWaitModalText(Element waitModalText) {
		this.waitModalText = waitModalText;
	}

}
