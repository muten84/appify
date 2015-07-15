package it.appify.examples.mdl;

import it.appify.annotations.Storage;
import it.appify.app.WebApp;


@it.appify.annotations.WebApp(mainPage = "mdlmain", appStateType = MdlModel.class)
@Storage(modelType = MdlModel.class)
public interface MdlApp extends WebApp<MdlModel>{
	

}
