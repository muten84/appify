# Appify - a tiny frontend framework
A tiny framework for developing complex HTML5 web applications in a simple way using:
 - Responsive layout
 - Touch events
 - CSS3 Transitions
 - MVVM pattern
 - MVP pattern
 - Offline Application Cache API
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

#Updates:
Actually Appify rely on these modules:
  - App.Js for the View and the Page transition
  - VueJs for the MVVM pattern
  - GWT for compiling your Java Controllers and Models in Javascript

All other features such as Geolocation, Notification and PushState are offered with Java API.
These modules are not mandatory and you can use what you prefer, for example for the MVVM instead of VueJs you can use AngularJs. 


  
