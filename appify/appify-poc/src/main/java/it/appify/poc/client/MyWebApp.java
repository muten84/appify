package it.appify.poc.client;

import it.appify.annotations.ScreenOrientation;
import it.appify.annotations.WebApp;
import it.appify.poc.client.model.Model;

@WebApp(appStateType = Model.class)
@ScreenOrientation
public interface MyWebApp extends it.appify.app.WebApp<Model> {

}
