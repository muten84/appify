package it.appify.examples.emsmobile.controller;

import it.appify.annotations.Controller;
import it.appify.annotations.OnPageReady;
import it.appify.annotations.ViewElement;
import it.appify.annotations.ViewHandler;
import it.appify.annotations.ViewModelHandler;
import it.appify.api.Page.PageActionCallback;
import it.appify.app.WebApp;
import it.appify.examples.emsmobile.model.EmsMobileModel;
import it.appify.examples.emsmobile.model.Item;
import it.appify.examples.emsmobile.util.ViewUtils;

import com.google.gwt.core.client.Scheduler;
import com.google.gwt.core.client.Scheduler.RepeatingCommand;
import com.google.gwt.core.shared.GWT;
import com.google.gwt.dom.client.Element;
import com.google.gwt.user.client.rpc.AsyncCallback;

@Controller(page = "vehiclesPage")
public class VehicleListController {

	private WebApp<EmsMobileModel> app;

	@ViewElement("waitModalText")
	private Element waitModalText;

	public VehicleListController(WebApp<EmsMobileModel> app) {
		this.app = app;
	}

	@OnPageReady
	public void onPageReady() {
		GWT.log("PAGE READY :) YEAAAAAAAAAAAAAAH!");
		app.getCurrentPage().addPullToRefreshHandler(new PageActionCallback() {

			@Override
			public void refresh(final AsyncCallback<Boolean> cb) {
				Scheduler.get().scheduleFixedDelay(new RepeatingCommand() {

					@Override
					public boolean execute() {
						GWT.log("executing async refresh request...");
						cb.onSuccess(true);
						return false;
					}
				}, 3000);

			}
		});
	}

	@ViewHandler(eventType = "click", viewId = "backBtn")
	public void back() {
		this.app.back();
	}

	@ViewHandler(eventType = "click", viewId = "closeWaitModalBtn")
	public void onCloseModal() {
		ViewUtils.showModal(app, "waitModal");
	}

	@ViewModelHandler(modelType = Item.class, viewId = "vehicleList")
	public void onItemReceived(final Item i) {
		GWT.log("Received item from listOfItems1: " + i.getCode() + " - " + i.getItemName());
		waitModalText.setInnerText("Hai selezionato: " + i.getCode() + " - " + i.getItemName());
		app.getCurrentPage().mask("");
		// ViewUtils.showModal(app, "waitModal");
		/* emulate remote request */
		Scheduler.get().scheduleFixedDelay(new RepeatingCommand() {

			@Override
			public boolean execute() {
				// ViewUtils.showModal(app, "waitModal");
				EmsMobileModel model = app.<EmsMobileModel> getCurrentAppState();
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
