# appify
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
 
The goal of appify is to provide a good starting point for develop an HTML5 mobile web app and to provide a simple way to reuse:
 - the View written in HTML5
 - the data bindings written in VueJs (or other libraries)
 - your code written in Java or in Javascript
 
 Appify enables developers to write the View in HTML/CSS and the frontend Controller logic in Java.
 You can reuse all your Java business logic and your Java POJO Model in the offered VMMV pattern.
 
 Appify rely on these modules:
  - App.Js for the View and the Page transition
  - VueJs for the MVVM pattern
  - GWT for compiling your Java Controllers and Models in Javascript
  - All other features such as Geolocation, Notification and PushState are offered in Javascript and in Java.
These modules are not mandatory and you can use what you prefer, for example for the MVVM instead of VueJs you can use AngularJs. 

You are free to use plain Javascript or Java Code for writing your business logic.
The use of GWT for the View is discouraged because you have to recompile your app for a View modify.

Appify is a young project i'm working hard for docs and other modules compatibility. Stay tuned for updates and docs.

#Updates:
Actually Appify support App.Js for the ViewPage mechanism 
  
