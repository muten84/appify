# Appify - a tiny frontend framework
A tiny framework for developing complex HTML5 web applications in a simple way using:
 - Responsive layout
 - Touch events
 - CSS3 Transitions
 - MVVM pattern
 - MVP pattern
 - Offline Application Cache API
 - Storage API
 - Geolocation HTML5 API
 - Notification API
 - Push State API (for history Page mechanism)
 - Advanced Javascript API such as: Battery Status, Acceloremeter, Orientation).
 
The goal of appify is to provide a good starting point to develop an HTML5 mobile web app in Java.
The philosophy is to have the skeleton (Controllers, Offline, Geolocation, etc.) of your app written in Java and your View in pure HTML5.

Furthermore, Appify provide a simple way to reuse:
 - your Views written in HTML5
 - your  data bindings written in VueJs (or other libraries)
 - your code written in Java
 
Appify enables developers to write the View in HTML/CSS and the frontend Controller logic in Java.
You can reuse all your Java business logic and your Java POJO Model in the offered VMMV pattern.

Appify is a young project i'm working hard for docs and other modules compatibility. Stay tuned for updates and docs.

#Getting started with Appify:
##Introduction
Appify was developed mainly for Java Web developers. If you have skills on HTML5 and Javascript and you want to develop your application logic Java using pure HTML5 only for th view, you are using the right framework. Thre reuse of the code is critical and its maintanability too.... Java has a good infrastrucuture for getting these features and a good distribution mechanism for sharing your builds with other developers. The mix between Java and all others web technologies is possible thanks to the GWT compiler a great toolkit developed by Google and now developed as a community project. GWT enable your Java project to be compiled in Javascript and executed as a normal webapp frontend application ina  browser. If you want to use Appify, you have to start a simple GWT project and inherits the right module in your gwt.xml file:

``` xml
<inherits name="it.appify.App" />
``` 

###@WebApp
Now your are ready to use all Appify features. First of all you have to declare your web app inteface. Appify offers some annotations to make the development of your web app, fast and easy.Infact the webapp interface can be annotated with some web app capabilities and inject them in your webapp such as: Geolocation, Storage, Application Cache, Notification, Offline support, and many others.

``` java
@it.appify.annotations.WebApp(appStateType = AppModel.class)
public interface ExampleApp extends WebApp<AppModel> {

}
```
In this code section we have declared our webapp interface and annotated it with @WebApp annotation. Note that we have to pass the application state model type to the WebApp annotation. This is the only mandatory step to appify our app. The AppModel class will contains all data representing your application state. The application state will be injected and presented to the HTML5 view. This is possible thanks to the MVVM pattern offered by the Appify framework.

In your GWT EntryPoint you have to create your app in a very simple way:
``` java
ExampleApp myApp = GWT.create(ExampleApp.class);
``` 

GWT.create starts the magic....your app interface will be processed and it will be generated its realization. The generated webapp results in a kind of skeleton of your app. All your app features will be injected in order to the declared webapp annotations.
In this first example we have declared a webapp with no particular features but we can develop a simple app by adding to our project the views and the controllers. If you want to add some others features to your app you can annotate your webapp interface with others non-manadatory annotations such as Geolocation, Storage, Offline,  etc. See at appify annotations for all features you can enable in your app.

##Controller annotations:
Developing a controller is very simple with Appify. Controller is a simple class annotated with @Controller annotation. The controller can be bound to a View (in Appify a view is a page) by its name. So if you want to bind a MenuController to your main page you have write this simple code:

``` java
@Controller(page = "mainPage")
public class MainPageMenuController {

	private WebApp<EmsMobileModel> app;

	public MainPageMenuController(WebApp<EmsMobileModel> app) {
		this.app = app;
	}
}
``` 
Now suppose we have this HTML code for our menu view....:

``` java
<div class="snap-drawers">
		<div class="snap-drawer snap-drawer-left">
			<div class="app-section">
				<a id="checkInBtn" class="btn btn-block">Check In</a>
				<button id="manageEquipButton" class="btn btn-block">Equipments</button>
				<button id="lastEmergencyBtn" class="btn btn-block">Last Call</button>
			</div>
		</div>
		<div class="snap-drawer snap-drawer-right"></div>
	</div>
``` 
###@ViewHandler
if you want to intercept the click event on the button with id checkInBtn you have to write this simple code in your controller class:
``` java
@ViewHandler(eventType = "click", viewId = "checkInBtn")
	public void onCheckInStart() {
		GWT.log("onCheckInStart");
	}
``` 
Classes annotated with @Controller annotation MUST have a constructor with a WebApp type parameter. This constructor will enables the framework to inject the WebApp interface. Trough this interface you can develop your controller to programmatically interact with your services, trigger a page transition, obtain your current app state, change some view behavior like CSS toggles, show modals, show tooltips and popovers, and to read and write the persistent storage.



##Appify annotations:
###@Geolocation

``` java
@Geolocation(enableHighAccuracy=true, maxAge=5000, timeout=4000)
@it.appify.annotations.WebApp(appStateType = AppModel.class)
public interface ExampleApp extends WebApp<AppModel> {

}
```

You can enable Geolocation support by adding this simple annotation. You can use annotation parameter to configure your geolocation behavior.

``` html
<div class="app-page" id="mainPage" data-page="mainPage">
		<div class="app-topbar">
			<div id="header" class="app-title">{{title}}</div>
		</div>
		<div class="app-content">
			<div class="app-section">
				<div id="content">{{content}}</div>
				<input v-model="input" class="app-input" placeholder="Subject">
				<textarea v-model="message" class="app-input" placeholder="Message"></textarea>
				<label>Simple List </label>
				<ul class="app-list app-section">
					<li v-repeat="items">{{$value}}</li>
					<li>Item 1</li>
					<li>Item 2</li>
				</ul>
				<div class="app-button">Send</div>
				<div id="getModelBtn" class="app-button">Read Current Model</div>
				<div id="getBatteryStatusBtn" class="app-button">Read Battery Status</div>
				<div id="getModelFromStorageBtn" class="app-button">Get Model
					From Storage</div>
				<div id="changeValueBtn" class="app-button">ChangeValue</div>
				<div id="nextBtn" class="app-button">Go to Next Page</div>
			</div>
		</div>
</div>
```	
2)Write your controllers in Java:

``` java
	@Controller(page = "mainPage")
  	public class MainPageController {
	private WebApp<?> app;
	
	public MainPageController(WebApp<?> app) {
		this.app = app;
	}
	@ViewHandler(viewId = "nextBtn", eventType = "click")
	public void onNextPageClick() {
		this.app.moveTo("childPage");
	}
  }
```
3)Define your Model and bind it to your App:
``` java
@JsonAutoDetect
public class AppModel implements Serializable {
	private String title;
	private String content;
}

@it.appify.annotations.WebApp(appStateType = AppModel.class)
public interface ExampleApp extends WebApp<AppModel> {

}
```

4)Congratulations, you have developed a mobile web app in a just few seconds :) ... let's start our newly app:
``` java
ExampleApp myApp = GWT.create(ExampleApp.class);
myApp.startApp(initializeAppState());
```
5)If you prefer, you can use the Javascript Api version of Appify:
``` javascript
//construct your appify object
var myapp = new appify.app();

//define your model
var mymodel = {title: 'Title', content: 'Lorem Ipsum...'};

//let's start your app
myapp.startApp(mymodel);

//navigate trough pages
myapp.moveTo('childPage');

//update model view 
mymodel.title='New Title';
myapp.updateAppState(mymodel);
```
#Updates:
Actually Appify rely on these modules:
  - App.Js for the View and the Page transition
  - VueJs for the MVVM pattern
  - GWT for compiling your Java Controllers and Models in Javascript

These modules (except of GWT) are not mandatory and you can use what you prefer, for example for the MVVM instead of VueJs you can use AngularJs. This is not a priority requirement, but it's planned in the road-map and will be provided in the next future.
All other features such as Geolocation, Notification and PushState are offered with Java API.


#License 
GNU GPLv3

  
