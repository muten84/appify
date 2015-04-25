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
#Examples
1) Write your view:

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

4)Congratulations, you have developed a mobile web app in just few seconds :) let's start it:
``` java
ExampleApp myApp = GWT.create(ExampleApp.class);
myApp.startApp(initializeAppState());
```

#Updates:
Actually Appify rely on these modules:
  - App.Js for the View and the Page transition
  - VueJs for the MVVM pattern
  - GWT for compiling your Java Controllers and Models in Javascript

These modules (except of GWT) are not mandatory and you can use what you prefer, for example for the MVVM instead of VueJs you can use AngularJs. This is not a priority requirement, but it's planned in the road-map and will be provided in the next future.
All other features such as Geolocation, Notification and PushState are offered with Java API.




  
