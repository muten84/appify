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

####@WebApp
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
<div class="app-page" id="dumpPage" data-page="dumpPage">
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
</div>
``` 
####@ViewHandler
if you want to intercept the click event on the button with id checkInBtn you have to write this simple code in your controller class:
``` java
@ViewHandler(eventType = "click", viewId = "checkInBtn")
	public void onCheckInStart() {
		GWT.log("onCheckInStart");
	}
``` 
Classes annotated with @Controller annotation MUST have a constructor with a WebApp type parameter. This constructor will enables the framework to inject the WebApp interface. Trough this interface you can develop your controller to programmatically interact with your services, trigger a page transition, obtain your current app state, change some view behavior like CSS toggles, show modals, show tooltips and popovers, and to read and write the persistent storage.

####@ViewElement
Appify can inject the desired view element in your controller. If you have the need to get a reference to an input text element you can declare it as a field of your controller class:

``` java
	@ViewElement("myInputText")
	private Element inputText;
``` 
Note that you have to provide at least some getters and setters of your private fields. Getters and Setters will enable Appify to correctly inject your view element in your controller. Alternatively you can use the public modifier for your UI fields. Note that all ViewElement (ui fields) are simply DOM elements. GWT offers its Element class and a great mechanism that wraps an HTML DOM Element in a Java Object.

####@ViewModelHandler
If you need to intercpet the data behind the user interaction with a view you have to use the ViewModelHandler annotation. ViewModelHandler is a special ViewHandler for intercept events from a ViewElement and its related model data. This annotation is useful for List, Combo or Radio Button. In general all usr interaction with a UI field with a model bound to it can be intercepted trough a ViewModelHandler. The example above show you how you can ge this described behavior in a few lines of code:

``` java
@ViewModelHandler(modelType = Item.class, viewId = "itemList")
	public void onItemReceived(Item i) {
		GWT.log("Received item from listOfItems1: " + i.getCode() + " - "
				+ i.getName());
	
	}
``` 
The onItemReceived method will receive the data behind a list of items when user click on an item in the list. The viewId MUST correspond simply to the id of our HTML list. Note that ViewModelHandler need to know the model type in terms of fields bound to our views, in this case the HTML list. The declaration of the binding between View and Model is made trough special attributes that can be used in your HTML page. We call this attributes directives. For all directives see the relative Appendix 'Appify supported Directives'.   

##Appify WebApp annotations:
####@Geolocation

``` java
@Geolocation(enableHighAccuracy=true, maxAge=5000, timeout=4000)
@it.appify.annotations.WebApp(appStateType = AppModel.class)
public interface ExampleApp extends WebApp<AppModel> {

}
```

You can enable Geolocation support by adding this simple annotation. You can use annotation parameter to configure your geolocation behavior.

##Service annotations:

#Javascript API
If you prefer, you can use the Javascript Api version of Appify:
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
  - App.Js for the View and the Page transition.
  - VueJs for the MVVM pattern.
  - Zepto or Jquery for access the DOM.
  - Ratchet for view components
  - Some other libraries like popover and snapjs for particular view behavior 
  - GWT for compiling your Java Controllers and Models in Javasvcript

These modules (except of GWT) are not mandatory and you can use what you prefer, for example for the MVVM instead of VueJs you can use AngularJs. This is not a priority requirement, but it's planned in the road-map and will be provided in the next future.

#License 
GNU GPLv3

#Appendix

##Appify supported Directives
