/* Zepto v1.0rc1 - polyfill zepto event detect fx ajax form touch - zeptojs.com/license */
(function(a){String.prototype.trim===a&&(String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")}),Array.prototype.reduce===a&&(Array.prototype.reduce=function(b){if(this===void 0||this===null)throw new TypeError;var c=Object(this),d=c.length>>>0,e=0,f;if(typeof b!="function")throw new TypeError;if(d==0&&arguments.length==1)throw new TypeError;if(arguments.length>=2)f=arguments[1];else do{if(e in c){f=c[e++];break}if(++e>=d)throw new TypeError}while(!0);while(e<d)e in c&&(f=b.call(a,f,c[e],e,c)),e++;return f})})();var Zepto=function(){function A(a){return v.call(a)=="[object Function]"}function B(a){return a instanceof Object}function C(b){var c,d;if(v.call(b)!=="[object Object]")return!1;d=A(b.constructor)&&b.constructor.prototype;if(!d||!hasOwnProperty.call(d,"isPrototypeOf"))return!1;for(c in b);return c===a||hasOwnProperty.call(b,c)}function D(a){return a instanceof Array}function E(a){return typeof a.length=="number"}function F(b){return b.filter(function(b){return b!==a&&b!==null})}function G(a){return a.length>0?[].concat.apply([],a):a}function H(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function I(a){return a in i?i[a]:i[a]=new RegExp("(^|\\s)"+a+"(\\s|$)")}function J(a,b){return typeof b=="number"&&!k[H(a)]?b+"px":b}function K(a){var b,c;return h[a]||(b=g.createElement(a),g.body.appendChild(b),c=j(b,"").getPropertyValue("display"),b.parentNode.removeChild(b),c=="none"&&(c="block"),h[a]=c),h[a]}function L(b,d){return d===a?c(b):c(b).filter(d)}function M(a,b,c,d){return A(b)?b.call(a,c,d):b}function N(a,b,d){var e=a%2?b:b.parentNode;e?e.insertBefore(d,a?a==1?e.firstChild:a==2?b:null:b.nextSibling):c(d).remove()}function O(a,b){b(a);for(var c in a.childNodes)O(a.childNodes[c],b)}var a,b,c,d,e=[],f=e.slice,g=window.document,h={},i={},j=g.defaultView.getComputedStyle,k={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,m=[1,3,8,9,11],n=["after","prepend","before","append"],o=g.createElement("table"),p=g.createElement("tr"),q={tr:g.createElement("tbody"),tbody:o,thead:o,tfoot:o,td:p,th:p,"*":g.createElement("div")},r=/complete|loaded|interactive/,s=/^\.([\w-]+)$/,t=/^#([\w-]+)$/,u=/^[\w-]+$/,v={}.toString,w={},x,y,z=g.createElement("div");return w.matches=function(a,b){if(!a||a.nodeType!==1)return!1;var c=a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector;if(c)return c.call(a,b);var d,e=a.parentNode,f=!e;return f&&(e=z).appendChild(a),d=~w.qsa(e,b).indexOf(a),f&&z.removeChild(a),d},x=function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},y=function(a){return a.filter(function(b,c){return a.indexOf(b)==c})},w.fragment=function(b,d){d===a&&(d=l.test(b)&&RegExp.$1),d in q||(d="*");var e=q[d];return e.innerHTML=""+b,c.each(f.call(e.childNodes),function(){e.removeChild(this)})},w.Z=function(a,b){return a=a||[],a.__proto__=arguments.callee.prototype,a.selector=b||"",a},w.isZ=function(a){return a instanceof w.Z},w.init=function(b,d){if(!b)return w.Z();if(A(b))return c(g).ready(b);if(w.isZ(b))return b;var e;if(D(b))e=F(b);else if(C(b))e=[c.extend({},b)],b=null;else if(m.indexOf(b.nodeType)>=0||b===window)e=[b],b=null;else if(l.test(b))e=w.fragment(b.trim(),RegExp.$1),b=null;else{if(d!==a)return c(d).find(b);e=w.qsa(g,b)}return w.Z(e,b)},c=function(a,b){return w.init(a,b)},c.extend=function(c){return f.call(arguments,1).forEach(function(d){for(b in d)d[b]!==a&&(c[b]=d[b])}),c},w.qsa=function(a,b){var c;return a===g&&t.test(b)?(c=a.getElementById(RegExp.$1))?[c]:e:a.nodeType!==1&&a.nodeType!==9?e:f.call(s.test(b)?a.getElementsByClassName(RegExp.$1):u.test(b)?a.getElementsByTagName(b):a.querySelectorAll(b))},c.isFunction=A,c.isObject=B,c.isArray=D,c.isPlainObject=C,c.inArray=function(a,b,c){return e.indexOf.call(b,a,c)},c.trim=function(a){return a.trim()},c.uuid=0,c.map=function(a,b){var c,d=[],e,f;if(E(a))for(e=0;e<a.length;e++)c=b(a[e],e),c!=null&&d.push(c);else for(f in a)c=b(a[f],f),c!=null&&d.push(c);return G(d)},c.each=function(a,b){var c,d;if(E(a)){for(c=0;c<a.length;c++)if(b.call(a[c],c,a[c])===!1)return a}else for(d in a)if(b.call(a[d],d,a[d])===!1)return a;return a},c.fn={forEach:e.forEach,reduce:e.reduce,push:e.push,indexOf:e.indexOf,concat:e.concat,map:function(a){return c.map(this,function(b,c){return a.call(b,c,b)})},slice:function(){return c(f.apply(this,arguments))},ready:function(a){return r.test(g.readyState)?a(c):g.addEventListener("DOMContentLoaded",function(){a(c)},!1),this},get:function(b){return b===a?f.call(this):this[b]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})},each:function(a){return this.forEach(function(b,c){a.call(b,c,b)}),this},filter:function(a){return c([].filter.call(this,function(b){return w.matches(b,a)}))},add:function(a,b){return c(y(this.concat(c(a,b))))},is:function(a){return this.length>0&&w.matches(this[0],a)},not:function(b){var d=[];if(A(b)&&b.call!==a)this.each(function(a){b.call(this,a)||d.push(this)});else{var e=typeof b=="string"?this.filter(b):E(b)&&A(b.item)?f.call(b):c(b);this.forEach(function(a){e.indexOf(a)<0&&d.push(a)})}return c(d)},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){var a=this[0];return a&&!B(a)?a:c(a)},last:function(){var a=this[this.length-1];return a&&!B(a)?a:c(a)},find:function(a){var b;return this.length==1?b=w.qsa(this[0],a):b=this.map(function(){return w.qsa(this,a)}),c(b)},closest:function(a,b){var d=this[0];while(d&&!w.matches(d,a))d=d!==b&&d!==g&&d.parentNode;return c(d)},parents:function(a){var b=[],d=this;while(d.length>0)d=c.map(d,function(a){if((a=a.parentNode)&&a!==g&&b.indexOf(a)<0)return b.push(a),a});return L(b,a)},parent:function(a){return L(y(this.pluck("parentNode")),a)},children:function(a){return L(this.map(function(){return f.call(this.children)}),a)},siblings:function(a){return L(this.map(function(a,b){return f.call(b.parentNode.children).filter(function(a){return a!==b})}),a)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(a){return this.map(function(){return this[a]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display=null),j(this,"").getPropertyValue("display")=="none"&&(this.style.display=K(this.nodeName))})},replaceWith:function(a){return this.before(a).remove()},wrap:function(a){return this.each(function(){c(this).wrapAll(c(a)[0].cloneNode(!1))})},wrapAll:function(a){return this[0]&&(c(this[0]).before(a=c(a)),a.append(this)),this},unwrap:function(){return this.parent().each(function(){c(this).replaceWith(c(this).children())}),this},clone:function(){return c(this.map(function(){return this.cloneNode(!0)}))},hide:function(){return this.css("display","none")},toggle:function(b){return(b===a?this.css("display")=="none":b)?this.show():this.hide()},prev:function(){return c(this.pluck("previousElementSibling"))},next:function(){return c(this.pluck("nextElementSibling"))},html:function(b){return b===a?this.length>0?this[0].innerHTML:null:this.each(function(a){var d=this.innerHTML;c(this).empty().append(M(this,b,a,d))})},text:function(b){return b===a?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=b})},attr:function(c,d){var e;return typeof c=="string"&&d===a?this.length==0||this[0].nodeType!==1?a:c=="value"&&this[0].nodeName=="INPUT"?this.val():!(e=this[0].getAttribute(c))&&c in this[0]?this[0][c]:e:this.each(function(a){if(this.nodeType!==1)return;if(B(c))for(b in c)this.setAttribute(b,c[b]);else this.setAttribute(c,M(this,d,a,this.getAttribute(c)))})},removeAttr:function(a){return this.each(function(){this.nodeType===1&&this.removeAttribute(a)})},prop:function(b,c){return c===a?this[0]?this[0][b]:a:this.each(function(a){this[b]=M(this,c,a,this[b])})},data:function(b,c){var d=this.attr("data-"+H(b),c);return d!==null?d:a},val:function(b){return b===a?this.length>0?this[0].value:a:this.each(function(a){this.value=M(this,b,a,this.value)})},offset:function(){if(this.length==0)return null;var a=this[0].getBoundingClientRect();return{left:a.left+window.pageXOffset,top:a.top+window.pageYOffset,width:a.width,height:a.height}},css:function(c,d){if(d===a&&typeof c=="string")return this.length==0?a:this[0].style[x(c)]||j(this[0],"").getPropertyValue(c);var e="";for(b in c)typeof c[b]=="string"&&c[b]==""?this.each(function(){this.style.removeProperty(H(b))}):e+=H(b)+":"+J(b,c[b])+";";return typeof c=="string"&&(d==""?this.each(function(){this.style.removeProperty(H(c))}):e=H(c)+":"+J(c,d)),this.each(function(){this.style.cssText+=";"+e})},index:function(a){return a?this.indexOf(c(a)[0]):this.parent().children().indexOf(this[0])},hasClass:function(a){return this.length<1?!1:I(a).test(this[0].className)},addClass:function(a){return this.each(function(b){d=[];var e=this.className,f=M(this,a,b,e);f.split(/\s+/g).forEach(function(a){c(this).hasClass(a)||d.push(a)},this),d.length&&(this.className+=(e?" ":"")+d.join(" "))})},removeClass:function(b){return this.each(function(c){if(b===a)return this.className="";d=this.className,M(this,b,c,d).split(/\s+/g).forEach(function(a){d=d.replace(I(a)," ")}),this.className=d.trim()})},toggleClass:function(b,d){return this.each(function(e){var f=M(this,b,e,this.className);(d===a?!c(this).hasClass(f):d)?c(this).addClass(f):c(this).removeClass(f)})}},["width","height"].forEach(function(b){c.fn[b]=function(d){var e,f=b.replace(/./,function(a){return a[0].toUpperCase()});return d===a?this[0]==window?window["inner"+f]:this[0]==g?g.documentElement["offset"+f]:(e=this.offset())&&e[b]:this.each(function(a){var e=c(this);e.css(b,M(this,d,a,e[b]()))})}}),n.forEach(function(a,b){c.fn[a]=function(){var a=c.map(arguments,function(a){return B(a)?a:w.fragment(a)});if(a.length<1)return this;var d=this.length,e=d>1,f=b<2;return this.each(function(c,g){for(var h=0;h<a.length;h++){var i=a[f?a.length-h-1:h];O(i,function(a){a.nodeName!=null&&a.nodeName.toUpperCase()==="SCRIPT"&&(!a.type||a.type==="text/javascript")&&window.eval.call(window,a.innerHTML)}),e&&c<d-1&&(i=i.cloneNode(!0)),N(b,g,i)}})},c.fn[b%2?a+"To":"insert"+(b?"Before":"After")]=function(b){return c(b)[a](this),this}}),w.Z.prototype=c.fn,w.camelize=x,w.uniq=y,c.zepto=w,c}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(a){function f(a){return a._zid||(a._zid=d++)}function g(a,b,d,e){b=h(b);if(b.ns)var g=i(b.ns);return(c[f(a)]||[]).filter(function(a){return a&&(!b.e||a.e==b.e)&&(!b.ns||g.test(a.ns))&&(!d||f(a.fn)===f(d))&&(!e||a.sel==e)})}function h(a){var b=(""+a).split(".");return{e:b[0],ns:b.slice(1).sort().join(" ")}}function i(a){return new RegExp("(?:^| )"+a.replace(" "," .* ?")+"(?: |$)")}function j(b,c,d){a.isObject(b)?a.each(b,d):b.split(/\s/).forEach(function(a){d(a,c)})}function k(b,d,e,g,i,k){k=!!k;var l=f(b),m=c[l]||(c[l]=[]);j(d,e,function(c,d){var e=i&&i(d,c),f=e||d,j=function(a){var c=f.apply(b,[a].concat(a.data));return c===!1&&a.preventDefault(),c},l=a.extend(h(c),{fn:d,proxy:j,sel:g,del:e,i:m.length});m.push(l),b.addEventListener(l.e,j,k)})}function l(a,b,d,e){var h=f(a);j(b||"",d,function(b,d){g(a,b,d,e).forEach(function(b){delete c[h][b.i],a.removeEventListener(b.e,b.proxy,!1)})})}function p(b){var c=a.extend({originalEvent:b},b);return a.each(o,function(a,d){c[a]=function(){return this[d]=m,b[a].apply(b,arguments)},c[d]=n}),c}function q(a){if(!("defaultPrevented"in a)){a.defaultPrevented=!1;var b=a.preventDefault;a.preventDefault=function(){this.defaultPrevented=!0,b.call(this)}}}var b=a.zepto.qsa,c={},d=1,e={};e.click=e.mousedown=e.mouseup=e.mousemove="MouseEvents",a.event={add:k,remove:l},a.proxy=function(b,c){if(a.isFunction(b)){var d=function(){return b.apply(c,arguments)};return d._zid=f(b),d}if(typeof c=="string")return a.proxy(b[c],b);throw new TypeError("expected function")},a.fn.bind=function(a,b){return this.each(function(){k(this,a,b)})},a.fn.unbind=function(a,b){return this.each(function(){l(this,a,b)})},a.fn.one=function(a,b){return this.each(function(c,d){k(this,a,b,null,function(a,b){return function(){var c=a.apply(d,arguments);return l(d,b,a),c}})})};var m=function(){return!0},n=function(){return!1},o={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};a.fn.delegate=function(b,c,d){var e=!1;if(c=="blur"||c=="focus")a.iswebkit?c=c=="blur"?"focusout":c=="focus"?"focusin":c:e=!0;return this.each(function(f,g){k(g,c,d,b,function(c){return function(d){var e,f=a(d.target).closest(b,g).get(0);if(f)return e=a.extend(p(d),{currentTarget:f,liveFired:g}),c.apply(f,[e].concat([].slice.call(arguments,1)))}},e)})},a.fn.undelegate=function(a,b,c){return this.each(function(){l(this,b,c,a)})},a.fn.live=function(b,c){return a(document.body).delegate(this.selector,b,c),this},a.fn.die=function(b,c){return a(document.body).undelegate(this.selector,b,c),this},a.fn.on=function(b,c,d){return c==undefined||a.isFunction(c)?this.bind(b,c):this.delegate(c,b,d)},a.fn.off=function(b,c,d){return c==undefined||a.isFunction(c)?this.unbind(b,c):this.undelegate(c,b,d)},a.fn.trigger=function(b,c){return typeof b=="string"&&(b=a.Event(b)),q(b),b.data=c,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(b)})},a.fn.triggerHandler=function(b,c){var d,e;return this.each(function(f,h){d=p(typeof b=="string"?a.Event(b):b),d.data=c,d.target=h,a.each(g(h,b.type||b),function(a,b){e=b.proxy(d);if(d.isImmediatePropagationStopped())return!1})}),e},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout change select keydown keypress keyup error".split(" ").forEach(function(b){a.fn[b]=function(a){return this.bind(b,a)}}),["focus","blur"].forEach(function(b){a.fn[b]=function(a){if(a)this.bind(b,a);else if(this.length)try{this.get(0)[b]()}catch(c){}return this}}),a.Event=function(a,b){var c=document.createEvent(e[a]||"Events"),d=!0;if(b)for(var f in b)f=="bubbles"?d=!!b[f]:c[f]=b[f];return c.initEvent(a,d,!0,null,null,null,null,null,null,null,null,null,null,null,null),c}}(Zepto),function(a){function b(a){var b=this.os={},c=this.browser={},d=a.match(/WebKit\/([\d.]+)/),e=a.match(/(Android)\s+([\d.]+)/),f=a.match(/(iPad).*OS\s([\d_]+)/),g=!f&&a.match(/(iPhone\sOS)\s([\d_]+)/),h=a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),i=h&&a.match(/TouchPad/),j=a.match(/Kindle\/([\d.]+)/),k=a.match(/Silk\/([\d._]+)/),l=a.match(/(BlackBerry).*Version\/([\d.]+)/);if(c.webkit=!!d)c.version=d[1];e&&(b.android=!0,b.version=e[2]),g&&(b.ios=b.iphone=!0,b.version=g[2].replace(/_/g,".")),f&&(b.ios=b.ipad=!0,b.version=f[2].replace(/_/g,".")),h&&(b.webos=!0,b.version=h[2]),i&&(b.touchpad=!0),l&&(b.blackberry=!0,b.version=l[2]),j&&(b.kindle=!0,b.version=j[1]),k&&(c.silk=!0,c.version=k[1]),!k&&b.android&&a.match(/Kindle Fire/)&&(c.silk=!0)}b.call(a,navigator.userAgent),a.__detect=b}(Zepto),function(a,b){function l(a){return a.toLowerCase()}function m(a){return d?d+a:l(a)}var c="",d,e,f,g={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},h=window.document,i=h.createElement("div"),j=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,k={};a.each(g,function(a,e){if(i.style[a+"TransitionProperty"]!==b)return c="-"+l(a)+"-",d=e,!1}),k[c+"transition-property"]=k[c+"transition-duration"]=k[c+"transition-timing-function"]=k[c+"animation-name"]=k[c+"animation-duration"]="",a.fx={off:d===b&&i.style.transitionProperty===b,cssPrefix:c,transitionEnd:m("TransitionEnd"),animationEnd:m("AnimationEnd")},a.fn.animate=function(b,c,d,e){return a.isObject(c)&&(d=c.easing,e=c.complete,c=c.duration),c&&(c/=1e3),this.anim(b,c,d,e)},a.fn.anim=function(d,e,f,g){var h,i={},l,m=this,n,o=a.fx.transitionEnd;e===b&&(e=.4),a.fx.off&&(e=0);if(typeof d=="string")i[c+"animation-name"]=d,i[c+"animation-duration"]=e+"s",o=a.fx.animationEnd;else{for(l in d)j.test(l)?(h||(h=[]),h.push(l+"("+d[l]+")")):i[l]=d[l];h&&(i[c+"transform"]=h.join(" ")),!a.fx.off&&typeof d=="object"&&(i[c+"transition-property"]=Object.keys(d).join(", "),i[c+"transition-duration"]=e+"s",i[c+"transition-timing-function"]=f||"linear")}return n=function(b){if(typeof b!="undefined"){if(b.target!==b.currentTarget)return;a(b.target).unbind(o,arguments.callee)}a(this).css(k),g&&g.call(this)},e>0&&this.bind(o,n),setTimeout(function(){m.css(i),e<=0&&setTimeout(function(){m.each(function(){n.call(this)})},0)},0),this},i=null}(Zepto),function($){function triggerAndReturn(a,b,c){var d=$.Event(b);return $(a).trigger(d,c),!d.defaultPrevented}function triggerGlobal(a,b,c,d){if(a.global)return triggerAndReturn(b||document,c,d)}function ajaxStart(a){a.global&&$.active++===0&&triggerGlobal(a,null,"ajaxStart")}function ajaxStop(a){a.global&&!--$.active&&triggerGlobal(a,null,"ajaxStop")}function ajaxBeforeSend(a,b){var c=b.context;if(b.beforeSend.call(c,a,b)===!1||triggerGlobal(b,c,"ajaxBeforeSend",[a,b])===!1)return!1;triggerGlobal(b,c,"ajaxSend",[a,b])}function ajaxSuccess(a,b,c){var d=c.context,e="success";c.success.call(d,a,e,b),triggerGlobal(c,d,"ajaxSuccess",[b,c,a]),ajaxComplete(e,b,c)}function ajaxError(a,b,c,d){var e=d.context;d.error.call(e,c,b,a),triggerGlobal(d,e,"ajaxError",[c,d,a]),ajaxComplete(b,c,d)}function ajaxComplete(a,b,c){var d=c.context;c.complete.call(d,b,a),triggerGlobal(c,d,"ajaxComplete",[b,c]),ajaxStop(c)}function empty(){}function mimeToDataType(a){return a&&(a==htmlType?"html":a==jsonType?"json":scriptTypeRE.test(a)?"script":xmlTypeRE.test(a)&&"xml")||"text"}function appendQuery(a,b){return(a+"&"+b).replace(/[&?]{1,2}/,"?")}function serializeData(a){isObject(a.data)&&(a.data=$.param(a.data)),a.data&&(!a.type||a.type.toUpperCase()=="GET")&&(a.url=appendQuery(a.url,a.data))}function serialize(a,b,c,d){var e=$.isArray(b);$.each(b,function(b,f){d&&(b=c?d:d+"["+(e?"":b)+"]"),!d&&e?a.add(f.name,f.value):(c?$.isArray(f):isObject(f))?serialize(a,f,c,b):a.add(b,f)})}var jsonpID=0,isObject=$.isObject,document=window.document,key,name,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,scriptTypeRE=/^(?:text|application)\/javascript/i,xmlTypeRE=/^(?:text|application)\/xml/i,jsonType="application/json",htmlType="text/html",blankRE=/^\s*$/;$.active=0,$.ajaxJSONP=function(a){var b="jsonp"+ ++jsonpID,c=document.createElement("script"),d=function(){$(c).remove(),b in window&&(window[b]=empty),ajaxComplete("abort",e,a)},e={abort:d},f;return a.error&&(c.onerror=function(){e.abort(),a.error()}),window[b]=function(d){clearTimeout(f),$(c).remove(),delete window[b],ajaxSuccess(d,e,a)},serializeData(a),c.src=a.url.replace(/=\?/,"="+b),$("head").append(c),a.timeout>0&&(f=setTimeout(function(){e.abort(),ajaxComplete("timeout",e,a)},a.timeout)),e},$.ajaxSettings={type:"GET",beforeSend:empty,success:empty,error:empty,complete:empty,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:jsonType,xml:"application/xml, text/xml",html:htmlType,text:"text/plain"},crossDomain:!1,timeout:0},$.ajax=function(options){var settings=$.extend({},options||{});for(key in $.ajaxSettings)settings[key]===undefined&&(settings[key]=$.ajaxSettings[key]);ajaxStart(settings),settings.crossDomain||(settings.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(settings.url)&&RegExp.$2!=window.location.host);var dataType=settings.dataType,hasPlaceholder=/=\?/.test(settings.url);if(dataType=="jsonp"||hasPlaceholder)return hasPlaceholder||(settings.url=appendQuery(settings.url,"callback=?")),$.ajaxJSONP(settings);settings.url||(settings.url=window.location.toString()),serializeData(settings);var mime=settings.accepts[dataType],baseHeaders={},protocol=/^([\w-]+:)\/\//.test(settings.url)?RegExp.$1:window.location.protocol,xhr=$.ajaxSettings.xhr(),abortTimeout;settings.crossDomain||(baseHeaders["X-Requested-With"]="XMLHttpRequest"),mime&&(baseHeaders.Accept=mime,mime.indexOf(",")>-1&&(mime=mime.split(",",2)[0]),xhr.overrideMimeType&&xhr.overrideMimeType(mime));if(settings.contentType||settings.data&&settings.type.toUpperCase()!="GET")baseHeaders["Content-Type"]=settings.contentType||"application/x-www-form-urlencoded";settings.headers=$.extend(baseHeaders,settings.headers||{}),xhr.onreadystatechange=function(){if(xhr.readyState==4){clearTimeout(abortTimeout);var result,error=!1;if(xhr.status>=200&&xhr.status<300||xhr.status==304||xhr.status==0&&protocol=="file:"){dataType=dataType||mimeToDataType(xhr.getResponseHeader("content-type")),result=xhr.responseText;try{dataType=="script"?(1,eval)(result):dataType=="xml"?result=xhr.responseXML:dataType=="json"&&(result=blankRE.test(result)?null:JSON.parse(result))}catch(e){error=e}error?ajaxError(error,"parsererror",xhr,settings):ajaxSuccess(result,xhr,settings)}else ajaxError(null,"error",xhr,settings)}};var async="async"in settings?settings.async:!0;xhr.open(settings.type,settings.url,async);for(name in settings.headers)xhr.setRequestHeader(name,settings.headers[name]);return ajaxBeforeSend(xhr,settings)===!1?(xhr.abort(),!1):(settings.timeout>0&&(abortTimeout=setTimeout(function(){xhr.onreadystatechange=empty,xhr.abort(),ajaxError(null,"timeout",xhr,settings)},settings.timeout)),xhr.send(settings.data?settings.data:null),xhr)},$.get=function(a,b){return $.ajax({url:a,success:b})},$.post=function(a,b,c,d){return $.isFunction(b)&&(d=d||c,c=b,b=null),$.ajax({type:"POST",url:a,data:b,success:c,dataType:d})},$.getJSON=function(a,b){return $.ajax({url:a,success:b,dataType:"json"})},$.fn.load=function(a,b){if(!this.length)return this;var c=this,d=a.split(/\s/),e;return d.length>1&&(a=d[0],e=d[1]),$.get(a,function(a){c.html(e?$(document.createElement("div")).html(a.replace(rscript,"")).find(e).html():a),b&&b.call(c)}),this};var escape=encodeURIComponent;$.param=function(a,b){var c=[];return c.add=function(a,b){this.push(escape(a)+"="+escape(b))},serialize(c,a,b),c.join("&").replace("%20","+")}}(Zepto),function(a){a.fn.serializeArray=function(){var b=[],c;return a(Array.prototype.slice.call(this.get(0).elements)).each(function(){c=a(this);var d=c.attr("type");this.nodeName.toLowerCase()!="fieldset"&&!this.disabled&&d!="submit"&&d!="reset"&&d!="button"&&(d!="radio"&&d!="checkbox"||this.checked)&&b.push({name:c.attr("name"),value:c.val()})}),b},a.fn.serialize=function(){var a=[];return this.serializeArray().forEach(function(b){a.push(encodeURIComponent(b.name)+"="+encodeURIComponent(b.value))}),a.join("&")},a.fn.submit=function(b){if(b)this.bind("submit",b);else if(this.length){var c=a.Event("submit");this.eq(0).trigger(c),c.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(a){function d(a){return"tagName"in a?a:a.parentNode}function e(a,b,c,d){var e=Math.abs(a-b),f=Math.abs(c-d);return e>=f?a-b>0?"Left":"Right":c-d>0?"Up":"Down"}function h(){g=null,b.last&&(b.el.trigger("longTap"),b={})}function i(){g&&clearTimeout(g),g=null}var b={},c,f=750,g;a(document).ready(function(){var j,k;a(document.body).bind("touchstart",function(e){j=Date.now(),k=j-(b.last||j),b.el=a(d(e.touches[0].target)),c&&clearTimeout(c),b.x1=e.touches[0].pageX,b.y1=e.touches[0].pageY,k>0&&k<=250&&(b.isDoubleTap=!0),b.last=j,g=setTimeout(h,f)}).bind("touchmove",function(a){i(),b.x2=a.touches[0].pageX,b.y2=a.touches[0].pageY}).bind("touchend",function(a){i(),b.isDoubleTap?(b.el.trigger("doubleTap"),b={}):b.x2&&Math.abs(b.x1-b.x2)>30||b.y2&&Math.abs(b.y1-b.y2)>30?(b.el.trigger("swipe")&&b.el.trigger("swipe"+e(b.x1,b.x2,b.y1,b.y2)),b={}):"last"in b&&(b.el.trigger("tap"),c=setTimeout(function(){c=null,b.el.trigger("singleTap"),b={}},250))}).bind("touchcancel",function(){c&&clearTimeout(c),g&&clearTimeout(g),g=c=null,b={}})}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(b){a.fn[b]=function(a){return this.bind(b,a)}})}(Zepto);/**
 * Vue.js v0.11.10
 * (c) 2015 Evan You
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):"object"==typeof exports?exports.Vue=e():t.Vue=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return t[n].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){function n(t){this._init(t)}var r=i(11),s=r.extend;s(n,i(1)),n.options={directives:i(12),filters:i(13),partials:{},transitions:{},components:{}};var o=n.prototype;Object.defineProperty(o,"$data",{get:function(){return this._data},set:function(t){this._setData(t)}}),s(o,i(2)),s(o,i(3)),s(o,i(4)),s(o,i(5)),s(o,i(6)),s(o,i(7)),s(o,i(8)),s(o,i(9)),s(o,i(10)),t.exports=r.Vue=n},function(t,e,i){function n(t){return new Function("return function "+s.classify(t)+" (options) { this._init(options) }")()}function r(t){c.forEach(function(e){t[e]=function(t,i){return i?void(this.options[e+"s"][t]=i):this.options[e+"s"][t]}}),t.component=function(t,e){return e?(s.isPlainObject(e)&&(e.name=t,e=s.Vue.extend(e)),void(this.options.components[t]=e)):this.options.components[t]}}var s=i(11),o=i(14);e.util=s,e.nextTick=s.nextTick,e.config=i(15),e.compiler={compile:i(16),transclude:i(17)},e.parsers={path:i(18),text:i(19),template:i(20),directive:i(21),expression:i(22)},e.cid=0;var a=1;e.extend=function(t){t=t||{};var e=this,i=n(t.name||e.options.name||"VueComponent");return i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.cid=a++,i.options=o(e.options,t),i["super"]=e,i.extend=e.extend,r(i),i},e.use=function(t){var e=s.toArray(arguments,1);return e.unshift(this),"function"==typeof t.install?t.install.apply(t,e):t.apply(null,e),this};var c=["directive","filter","partial","transition"];r(e)},function(t,e,i){var n=i(14);e._init=function(t){t=t||{},this.$el=null,this.$parent=t._parent,this.$root=t._root||this,this.$={},this.$$={},this._watcherList=[],this._watchers={},this._userWatchers={},this._directives=[],this._isVue=!0,this._events={},this._eventsCount={},this._eventCancelled=!1,this._isBlock=!1,this._blockStart=this._blockEnd=null,this._isCompiled=this._isDestroyed=this._isReady=this._isAttached=this._isBeingDestroyed=!1,this._children=[],this._childCtors={},this._containerUnlinkFn=this._contentUnlinkFn=null,this._transCpnts=[],this._host=t._host,this.$parent&&this.$parent._children.push(this),this._host&&this._host._transCpnts.push(this),this._new=!0,this._reused=!1,t=this.$options=n(this.constructor.options,t,this),this._data=t.data||{},this._initScope(),this._initEvents(),this._callHook("created"),t.el&&this.$mount(t.el)}},function(t,e,i){function n(t,e,i){if(i){var n,s,o,a;for(s in i)if(n=i[s],h.isArray(n))for(o=0,a=n.length;a>o;o++)r(t,e,s,n[o]);else r(t,e,s,n)}}function r(t,e,i,n){var r=typeof n;if("function"===r)t[e](i,n);else if("string"===r){var s=t.$options.methods,o=s&&s[n];o&&t[e](i,o)}}function s(){this._isAttached=!0,this._children.forEach(o),this._transCpnts.length&&this._transCpnts.forEach(o)}function o(t){!t._isAttached&&u(t.$el)&&t._callHook("attached")}function a(){this._isAttached=!1,this._children.forEach(c),this._transCpnts.length&&this._transCpnts.forEach(c)}function c(t){t._isAttached&&!u(t.$el)&&t._callHook("detached")}var h=i(11),u=h.inDoc;e._initEvents=function(){var t=this.$options;n(this,"$on",t.events),n(this,"$watch",t.watch)},e._initDOMHooks=function(){this.$on("hook:attached",s),this.$on("hook:detached",a)},e._callHook=function(t){var e=this.$options[t];if(e)for(var i=0,n=e.length;n>i;i++)e[i].call(this);this.$emit("hook:"+t)}},function(t,e,i){function n(){}var r=i(11),s=i(49),o=i(23);e._initScope=function(){this._initData(),this._initComputed(),this._initMethods(),this._initMeta()},e._initData=function(){for(var t,e=this._data,i=Object.keys(e),n=i.length;n--;)t=i[n],r.isReserved(t)||this._proxy(t);s.create(e).addVm(this)},e._setData=function(t){t=t||{};var e=this._data;this._data=t;var i,n,o;for(i=Object.keys(e),o=i.length;o--;)n=i[o],r.isReserved(n)||n in t||this._unproxy(n);for(i=Object.keys(t),o=i.length;o--;)n=i[o],this.hasOwnProperty(n)||r.isReserved(n)||this._proxy(n);e.__ob__.removeVm(this),s.create(t).addVm(this),this._digest()},e._proxy=function(t){var e=this;Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return e._data[t]},set:function(i){e._data[t]=i}})},e._unproxy=function(t){delete this[t]},e._digest=function(){for(var t=this._watcherList.length;t--;)this._watcherList[t].update();var e=this._children;for(t=e.length;t--;){var i=e[t];i.$options.inherit&&i._digest()}},e._initComputed=function(){var t=this.$options.computed;if(t)for(var e in t){var i=t[e],s={enumerable:!0,configurable:!0};"function"==typeof i?(s.get=r.bind(i,this),s.set=n):(s.get=i.get?r.bind(i.get,this):n,s.set=i.set?r.bind(i.set,this):n),Object.defineProperty(this,e,s)}},e._initMethods=function(){var t=this.$options.methods;if(t)for(var e in t)this[e]=r.bind(t[e],this)},e._initMeta=function(){var t=this.$options._meta;if(t)for(var e in t)this._defineMeta(e,t[e])},e._defineMeta=function(t,e){var i=new o;Object.defineProperty(this,t,{enumerable:!0,configurable:!0,get:function(){return s.target&&s.target.addDep(i),e},set:function(t){t!==e&&(e=t,i.notify())}})}},function(t,e,i){var n=i(11),r=i(24),s=i(16),o=i(17);e._compile=function(t){var e=this.$options;if(e._linkFn)this._initElement(t),e._linkFn(this,t);else{var i=t;t=o(t,e),this._initElement(t),s(t,e)(this,t),e.replace&&n.replace(i,t)}return t},e._initElement=function(t){t instanceof DocumentFragment?(this._isBlock=!0,this.$el=this._blockStart=t.firstChild,this._blockEnd=t.lastChild,this._blockFragment=t):this.$el=t,this.$el.__vue__=this,this._callHook("beforeCompile")},e._bindDir=function(t,e,i,n,s){this._directives.push(new r(t,e,this,i,n,s))},e._destroy=function(t,e){if(!this._isBeingDestroyed){this._callHook("beforeDestroy"),this._isBeingDestroyed=!0;var i,n=this.$parent;n&&!n._isBeingDestroyed&&(i=n._children.indexOf(this),n._children.splice(i,1));var r=this._host;for(r&&!r._isBeingDestroyed&&(i=r._transCpnts.indexOf(this),r._transCpnts.splice(i,1)),i=this._children.length;i--;)this._children[i].$destroy();for(i=0;i<this._directives.length;i++)this._directives[i]._teardown();var s;for(i in this._userWatchers)s=this._userWatchers[i],s&&s.teardown();this.$el&&(this.$el.__vue__=null);var o=this;t&&this.$el?this.$remove(function(){o._cleanup()}):e||this._cleanup()}},e._cleanup=function(){this._data.__ob__.removeVm(this),this._data=this._watchers=this._userWatchers=this._watcherList=this.$el=this.$parent=this.$root=this._children=this._transCpnts=this._directives=null,this._isDestroyed=!0,this._callHook("destroyed"),this.$off()}},function(t,e,i){var n=i(11),r=i(25),s=i(18),o=i(19),a=i(21),c=i(22),h=/[^|]\|[^|]/;e.$get=function(t){var e=c.parse(t);if(e)try{return e.get.call(this,this)}catch(i){}},e.$set=function(t,e){var i=c.parse(t,!0);i&&i.set&&i.set.call(this,this,e)},e.$add=function(t,e){this._data.$add(t,e)},e.$delete=function(t){this._data.$delete(t)},e.$watch=function(t,e,i,n){var s=this,o=i?t+"**deep**":t,a=s._userWatchers[o],c=function(t,i){e.call(s,t,i)};return a?a.addCb(c):a=s._userWatchers[o]=new r(s,t,c,{deep:i,user:!0}),n&&c(a.value),function(){a.removeCb(c),a.active||(s._userWatchers[o]=null)}},e.$eval=function(t){if(h.test(t)){var e=a.parse(t)[0];return e.filters?n.applyFilters(this.$get(e.expression),n.resolveFilters(this,e.filters).read,this):this.$get(e.expression)}return this.$get(t)},e.$interpolate=function(t){var e=o.parse(t),i=this;return e?1===e.length?i.$eval(e[0].value):e.map(function(t){return t.tag?i.$eval(t.value):t.value}).join(""):t},e.$log=function(t){var e=t?s.get(this._data,t):this._data;e&&(e=JSON.parse(JSON.stringify(e))),console.log(e)}},function(t,e,i){function n(t,e,i,n,o,a){e=s(e);var c=!h.inDoc(e),u=n===!1||c?o:a,l=!c&&!t._isAttached&&!h.inDoc(t.$el);return t._isBlock?r(t,e,u,i):u(t.$el,e,t,i),l&&t._callHook("attached"),t}function r(t,e,i,n){for(var r,s=t._blockStart,o=t._blockEnd;r!==o;)r=s.nextSibling,i(s,e,t),s=r;i(o,e,t,n)}function s(t){return"string"==typeof t?document.querySelector(t):t}function o(t,e,i,n){e.appendChild(t),n&&n()}function a(t,e,i,n){h.before(t,e),n&&n()}function c(t,e,i){h.remove(t),i&&i()}var h=i(11),u=i(50);e.$appendTo=function(t,e,i){return n(this,t,e,i,o,u.append)},e.$prependTo=function(t,e,i){return t=s(t),t.hasChildNodes()?this.$before(t.firstChild,e,i):this.$appendTo(t,e,i),this},e.$before=function(t,e,i){return n(this,t,e,i,a,u.before)},e.$after=function(t,e,i){return t=s(t),t.nextSibling?this.$before(t.nextSibling,e,i):this.$appendTo(t.parentNode,e,i),this},e.$remove=function(t,e){var i=this._isAttached&&h.inDoc(this.$el);i||(e=!1);var n,s=this,a=function(){i&&s._callHook("detached"),t&&t()};return this._isBlock&&!this._blockFragment.hasChildNodes()?(n=e===!1?o:u.removeThenAppend,r(this,this._blockFragment,n,a)):(n=e===!1?c:u.remove)(this.$el,this,a),this}},function(t,e,i){function n(t,e,i){var n=t.$parent;if(n&&i&&!s.test(e))for(;n;)n._eventsCount[e]=(n._eventsCount[e]||0)+i,n=n.$parent}var r=i(11);e.$on=function(t,e){return(this._events[t]||(this._events[t]=[])).push(e),n(this,t,1),this},e.$once=function(t,e){function i(){n.$off(t,i),e.apply(this,arguments)}var n=this;return i.fn=e,this.$on(t,i),this},e.$off=function(t,e){var i;if(!arguments.length){if(this.$parent)for(t in this._events)i=this._events[t],i&&n(this,t,-i.length);return this._events={},this}if(i=this._events[t],!i)return this;if(1===arguments.length)return n(this,t,-i.length),this._events[t]=null,this;for(var r,s=i.length;s--;)if(r=i[s],r===e||r.fn===e){n(this,t,-1),i.splice(s,1);break}return this},e.$emit=function(t){this._eventCancelled=!1;var e=this._events[t];if(e){for(var i=arguments.length-1,n=new Array(i);i--;)n[i]=arguments[i+1];i=0,e=e.length>1?r.toArray(e):e;for(var s=e.length;s>i;i++)e[i].apply(this,n)===!1&&(this._eventCancelled=!0)}return this},e.$broadcast=function(t){if(this._eventsCount[t]){for(var e=this._children,i=0,n=e.length;n>i;i++){var r=e[i];r.$emit.apply(r,arguments),r._eventCancelled||r.$broadcast.apply(r,arguments)}return this}},e.$dispatch=function(){for(var t=this.$parent;t;)t.$emit.apply(t,arguments),t=t._eventCancelled?null:t.$parent;return this};var s=/^hook:/},function(t,e,i){var n=i(11);e.$addChild=function(t,e){e=e||n.Vue,t=t||{};var i,r=this,s=void 0!==t.inherit?t.inherit:e.options.inherit;if(s){var o=r._childCtors;if(i=o[e.cid],!i){var a=e.options.name,c=a?n.classify(a):"VueComponent";i=new Function("return function "+c+" (options) {this.constructor = "+c+";this._init(options) }")(),i.options=e.options,i.prototype=this,o[e.cid]=i}}else i=e;t._parent=r,t._root=r.$root;var h=new i(t);return h}},function(t,e,i){function n(){this._isAttached=!0,this._isReady=!0,this._callHook("ready")}var r=i(11),s=i(16);e.$mount=function(t){if(!this._isCompiled){if(t){if("string"==typeof t){if(t=document.querySelector(t),!t)return}}else t=document.createElement("div");return this._compile(t),this._isCompiled=!0,this._callHook("compiled"),r.inDoc(this.$el)?(this._callHook("attached"),this._initDOMHooks(),n.call(this)):(this._initDOMHooks(),this.$once("hook:attached",n)),this}},e.$destroy=function(t,e){this._destroy(t,e)},e.$compile=function(t){return s(t,this.$options,!0)(this,t)}},function(t,e,i){var n=i(26),r=n.extend;r(e,n),r(e,i(27)),r(e,i(28)),r(e,i(29)),r(e,i(30))},function(t,e,i){e.text=i(31),e.html=i(32),e.attr=i(33),e.show=i(34),e["class"]=i(35),e.el=i(36),e.ref=i(37),e.cloak=i(38),e.style=i(39),e.partial=i(40),e.transition=i(41),e.on=i(42),e.model=i(51),e.component=i(43),e.repeat=i(44),e["if"]=i(45),e["with"]=i(46),e.events=i(47)},function(t,e,i){var n=i(11);e.json={read:function(t,e){return"string"==typeof t?t:JSON.stringify(t,null,Number(e)||2)},write:function(t){try{return JSON.parse(t)}catch(e){return t}}},e.capitalize=function(t){return t||0===t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""},e.uppercase=function(t){return t||0===t?t.toString().toUpperCase():""},e.lowercase=function(t){return t||0===t?t.toString().toLowerCase():""};var r=/(\d{3})(?=\d)/g;e.currency=function(t,e){if(t=parseFloat(t),!isFinite(t)||!t&&0!==t)return"";e=e||"$";var i=Math.floor(Math.abs(t)).toString(),n=i.length%3,s=n>0?i.slice(0,n)+(i.length>3?",":""):"",o=Math.abs(parseInt(100*t%100,10)),a="."+(10>o?"0"+o:o);return(0>t?"-":"")+e+s+i.slice(n).replace(r,"$1,")+a},e.pluralize=function(t){var e=n.toArray(arguments,1);return e.length>1?e[t%10-1]||e[e.length-1]:e[0]+(1===t?"":"s")};var s={enter:13,tab:9,"delete":46,up:38,left:37,right:39,down:40,esc:27};e.key=function(t,e){if(t){var i=s[e];return i||(i=parseInt(e,10)),function(e){return e.keyCode===i?t.call(this,e):void 0}}},e.key.keyCodes=s,n.extend(e,i(48))},function(t,e,i){function n(t,e){var i,r,o;for(i in e)r=t[i],o=e[i],t.hasOwnProperty(i)?s.isObject(r)&&s.isObject(o)&&n(r,o):t.$add(i,o);return t}function r(t){if(t){var e;for(var i in t)e=t[i],s.isPlainObject(e)&&(e.name=i,t[i]=s.Vue.extend(e))}}var s=i(11),o=s.extend,a=Object.create(null);a.data=function(t,e,i){if(i){var r="function"==typeof e?e.call(i):e,s="function"==typeof t?t.call(i):void 0;return r?n(r,s):s}return e?"function"!=typeof e?t:t?function(){return n(e.call(this),t.call(this))}:e:t},a.el=function(t,e,i){if(i||!e||"function"==typeof e){var n=e||t;return i&&"function"==typeof n?n.call(i):n}},a.created=a.ready=a.attached=a.detached=a.beforeCompile=a.compiled=a.beforeDestroy=a.destroyed=a.paramAttributes=function(t,e){return e?t?t.concat(e):s.isArray(e)?e:[e]:t},a.directives=a.filters=a.partials=a.transitions=a.components=function(t,e,i,n){var r=Object.create(i&&i.$parent?i.$parent.$options[n]:s.Vue.options[n]);if(t)for(var a,c=Object.keys(t),h=c.length;h--;)a=c[h],r[a]=t[a];return e&&o(r,e),r},a.watch=a.events=function(t,e){if(!e)return t;if(!t)return e;var i={};o(i,t);for(var n in e){var r=i[n],a=e[n];r&&!s.isArray(r)&&(r=[r]),i[n]=r?r.concat(a):[a]}return i},a.methods=a.computed=function(t,e){if(!e)return t;if(!t)return e;var i=Object.create(t);return o(i,e),i};var c=function(t,e){return void 0===e?t:e};t.exports=function h(t,e,i){function n(n){var r=a[n]||c;o[n]=r(t[n],e[n],i,n)}r(e.components);var s,o={};if(e.mixins)for(var u=0,l=e.mixins.length;l>u;u++)t=h(t,e.mixins[u],i);for(s in t)n(s);for(s in e)t.hasOwnProperty(s)||n(s);return o}},function(t,e,i){t.exports={prefix:"v-",debug:!1,silent:!1,proto:!0,interpolate:!0,async:!0,warnExpressionErrors:!0,_delimitersChanged:!0};var n=["{{","}}"];Object.defineProperty(t.exports,"delimiters",{get:function(){return n},set:function(t){n=t,this._delimitersChanged=!0}})},function(t,e,i){function n(t,e,i,n){function o(t,e){var r=t._directives.length,s=t.$parent&&t.$parent._directives.length;h&&h(t,e);var o=$.toArray(e.childNodes),a=n?t.$parent:t,c=n?t:void 0;if(u&&u(a,e,c),f&&f(a,o,c),i&&!n){var l=t._directives.slice(r),d=t.$parent&&t.$parent._directives.slice(s),p=function(t,e){for(var i=e.length;i--;)e[i]._teardown();i=t._directives.indexOf(e[0]),t._directives.splice(i,e.length)};return function(){p(t,l),d&&p(t.$parent,d)}}}var a=11===t.nodeType,c=e.paramAttributes,h=!c||i||n||a?null:d(t,c,e),u=a?r(e._containerAttrs,c,e):s(t,e),f=u&&u.terminal||"SCRIPT"===t.tagName||!t.hasChildNodes()?null:l(t.childNodes,e);return n&&(o.terminal=!0),o}function r(t,e,i){if(!t)return null;var n=e?d(t,e,i):null,r=t[x.prefix+"with"],s=null;if(r){var o=C.parse(r)[0],a=i.directives["with"];s=function(t,e){t._bindDir("with",e,o,a)}}return function(t){n&&n(t,null),s&&s(t,null)}}function s(t,e){var i=t.nodeType;return 1===i&&"SCRIPT"!==t.tagName?o(t,e):3===i&&x.interpolate&&t.data.trim()?c(t,e):null}function o(t,e){if(w(t))return t.hasAttribute("__vue__wrap")&&(t=t.firstChild),n(t,e._parent.$options,!0,!0);var i,r,s;if(t.__vue__||(r=t.tagName.toLowerCase(),s=r.indexOf("-")>0&&e.components[r],s&&t.setAttribute(x.prefix+"component",r)),(s||t.hasAttributes())&&(i=m(t,e),!i)){var o=b(t,e);i=o.length?a(o):null}if("TEXTAREA"===t.tagName){var c=i;i=function(t,e){e.value=t.$interpolate(e.value),c&&c(t,e)},i.terminal=!0}return i}function a(t){return function(e,i,n){for(var r,s,o,a,c=t.length;c--;)if(r=t[c],a=r.transcluded?e.$parent:e,r._link)r._link(a,i);else for(o=r.descriptors.length,s=0;o>s;s++)a._bindDir(r.name,i,r.descriptors[s],r.def,n)}}function c(t,e){var i=k.parse(t.data);if(!i)return null;for(var n,r,s=document.createDocumentFragment(),o=0,a=i.length;a>o;o++)r=i[o],n=r.tag?h(r,e):document.createTextNode(r.value),s.appendChild(n);return u(i,s,e)}function h(t,e){function i(i){t.type=i,t.def=e.directives[i],t.descriptor=C.parse(t.value)[0]}var n;return t.oneTime?n=document.createTextNode(t.value):t.html?(n=document.createComment("v-html"),i("html")):t.partial?(n=document.createComment("v-partial"),i("partial")):(n=document.createTextNode(" "),i("text")),n}function u(t,e){return function(i,n){for(var r,s,o,a=e.cloneNode(!0),c=$.toArray(a.childNodes),h=0,u=t.length;u>h;h++)r=t[h],s=r.value,r.tag&&(o=c[h],r.oneTime?(s=i.$eval(s),r.html?$.replace(o,A.parse(s,!0)):o.data=s):i._bindDir(r.type,o,r.descriptor,r.def));$.replace(n,a)}}function l(t,e){for(var i,n,r,o=[],a=0,c=t.length;c>a;a++)r=t[a],i=s(r,e),n=i&&i.terminal||"SCRIPT"===r.tagName||!r.hasChildNodes()?null:l(r.childNodes,e),o.push(i,n);return o.length?f(o):null}function f(t){return function(e,i,n){for(var r,s,o,a=0,c=0,h=t.length;h>a;c++){r=i[c],s=t[a++],o=t[a++];var u=$.toArray(r.childNodes);s&&s(e,r,n),o&&o(e,u,n)}}}function d(t,e,i){for(var n,r,s,o=[],a=t.nodeType,c=e.length;c--;)if(n=e[c],/[A-Z]/.test(n),r=a?t.getAttribute(n):t[n],null!==r){s={name:n,value:r};var h=k.parse(r);if(h){if(a&&t.removeAttribute(n),h.length>1)continue;s.dynamic=!0,s.value=h[0].value}o.push(s)}return p(o,i)}function p(t,e){var i=e.directives["with"];return function(e,n){for(var r,s,o=t.length;o--;)r=t[o],s=$.camelize(r.name.replace(E,"")),r.dynamic?e._bindDir("with",n,{arg:s,expression:r.value},i):e.$set(s,r.value)}}function v(){}function m(t,e){if(null!==$.attr(t,"pre"))return v;for(var i,n,r=0;3>r;r++)if(n=T[r],i=$.attr(t,n))return _(t,n,i,e)}function _(t,e,i,n){var r=C.parse(i)[0],s=n.directives[e],o=function(t,i,n){t._bindDir(e,i,r,s,n)};return o.terminal=!0,o}function b(t,e){for(var i,n,r,s,o,a,c=$.toArray(t.attributes),h=c.length,u=[];h--;)i=c[h],n=i.name,a=e._transcludedAttrs&&e._transcludedAttrs[n],0===n.indexOf(x.prefix)?(s=n.slice(x.prefix.length),o=e.directives[s],o&&u.push({name:s,descriptors:C.parse(i.value),def:o,transcluded:a})):x.interpolate&&(r=g(t,n,i.value,e),r&&(r.transcluded=a,u.push(r)));return u.sort(y),u}function g(t,e,i,n){var r=k.parse(i);if(r){for(var s=n.directives.attr,o=r.length,a=!0;o--;){var c=r[o];c.tag&&!c.oneTime&&(a=!1)}return{def:s,_link:a?function(t,n){n.setAttribute(e,t.$interpolate(i))}:function(t,i){var n=k.tokensToExp(r,t),o=C.parse(e+":"+n)[0];t._bindDir("attr",i,o,s)}}}}function y(t,e){return t=t.def.priority||0,e=e.def.priority||0,t>e?1:-1}function w(t){return 1===t.nodeType&&t.hasAttribute(D)?(t.removeAttribute(D),!0):void 0}var $=i(11),x=i(15),k=i(19),C=i(21),A=i(20);t.exports=n;var E=/^data-/,T=["repeat","if","component"];v.terminal=!0;var D="__vue__transcluded"},function(t,e,i){function n(t,e){var i=e.template,n=u.parse(i,!0);if(n){var s=e._content||c.extractContent(t);if(e.replace){if(n.childNodes.length>1){for(var o=e._containerAttrs={},a=t.attributes.length;a--;){var h=t.attributes[a];o[h.name]=h.value}return r(n,s),n}var l=n.firstChild;return c.copyAttributes(t,l),r(l,s),l}return t.appendChild(n),r(t,s),t}}function r(t,e){function i(t){return t.parentNode===e}var n=s(t),r=n.length;if(r){for(var a,h,u,l,f;r--;)a=n[r],e?(h=a.getAttribute("select"),h?(u=e.querySelectorAll(h),u.length&&(u=[].filter.call(u,i)),a.content=u.length?u:c.toArray(a.childNodes)):f=a):a.content=c.toArray(a.childNodes);for(r=0,l=n.length;l>r;r++)a=n[r],a!==f&&o(a,a.content);f&&o(f,c.toArray(e.childNodes))}}function s(t){return c.isArray(t)?f.apply([],t.map(s)):t.querySelectorAll?c.toArray(t.querySelectorAll("content")):[]}function o(t,e){for(var i=t.parentNode,n=0,r=e.length;r>n;n++)i.insertBefore(e[n],t);i.removeChild(t)}function a(t){if(!t)return null;for(var e={},i=h.prefix+"with",n=t.length;n--;){var r=t[n].name;r!==i&&(e[r]=!0)}return e}var c=i(11),h=i(15),u=i(20),l="__vue__transcluded";t.exports=function(t,e){if(e&&e._asComponent){e._transcludedAttrs=a(t.attributes);for(var i=t.childNodes.length;i--;){var r=t.childNodes[i];if(1===r.nodeType)r.setAttribute(l,"");else if(3===r.nodeType&&r.data.trim()){var s=document.createElement("span");s.textContent=r.data,s.setAttribute("__vue__wrap",""),s.setAttribute(l,""),t.replaceChild(s,r)}}}return"TEMPLATE"===t.tagName&&(t=u.parse(t)),e&&e.template&&(t=n(t,e)),t instanceof DocumentFragment&&(c.prepend(document.createComment("v-start"),t),t.appendChild(document.createComment("v-end"))),t};var f=[].concat},function(t,e,i){function n(){}function r(t){if(void 0===t)return"eof";var e=t.charCodeAt(0);switch(e){case 91:case 93:case 46:case 34:case 39:case 48:return t;case 95:case 36:return"ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"ws"}return e>=97&&122>=e||e>=65&&90>=e?"ident":e>=49&&57>=e?"number":"else"}function s(t){function e(){var e=t[d+1];return"inSingleQuote"===p&&"'"===e||"inDoubleQuote"===p&&'"'===e?(d++,s=e,v.append(),!0):void 0}for(var i,s,o,a,c,h,u,f=[],d=-1,p="beforePath",v={push:function(){void 0!==o&&(f.push(o),o=void 0)},append:function(){void 0===o?o=s:o+=s}};p;)if(d++,i=t[d],"\\"!==i||!e()){if(a=r(i),u=l[p],c=u[a]||u["else"]||"error","error"===c)return;if(p=c[0],h=v[c[1]]||n,s=void 0===c[2]?i:c[2],h(),"afterPath"===p)return f}}function o(t){return u.test(t)?"."+t:+t===t>>>0?"["+t+"]":'["'+t.replace(/"/g,'\\"')+'"]'}var a=i(11),c=i(52),h=new c(1e3),u=/^[$_a-zA-Z]+[\w$]*$/,l={beforePath:{ws:["beforePath"],ident:["inIdent","append"],"[":["beforeElement"],eof:["afterPath"]},inPath:{ws:["inPath"],".":["beforeIdent"],"[":["beforeElement"],eof:["afterPath"]},beforeIdent:{ws:["beforeIdent"],ident:["inIdent","append"]},inIdent:{ident:["inIdent","append"],0:["inIdent","append"],number:["inIdent","append"],ws:["inPath","push"],".":["beforeIdent","push"],"[":["beforeElement","push"],eof:["afterPath","push"]},beforeElement:{ws:["beforeElement"],0:["afterZero","append"],number:["inIndex","append"],"'":["inSingleQuote","append",""],'"':["inDoubleQuote","append",""]},afterZero:{ws:["afterElement","push"],"]":["inPath","push"]},inIndex:{0:["inIndex","append"],number:["inIndex","append"],ws:["afterElement"],"]":["inPath","push"]},inSingleQuote:{"'":["afterElement"],eof:"error","else":["inSingleQuote","append"]},inDoubleQuote:{'"':["afterElement"],eof:"error","else":["inDoubleQuote","append"]},afterElement:{ws:["afterElement"],"]":["inPath","push"]}};e.compileGetter=function(t){var e="return o"+t.map(o).join("");return new Function("o",e)},e.parse=function(t){var i=h.get(t);return i||(i=s(t),i&&(i.get=e.compileGetter(i),h.put(t,i))),i},e.get=function(t,i){return i=e.parse(i),i?i.get(t):void 0},e.set=function(t,i,n){if("string"==typeof i&&(i=e.parse(i)),!i||!a.isObject(t))return!1;for(var r,s,o=0,c=i.length-1;c>o;o++)r=t,s=i[o],t=t[s],a.isObject(t)||(t={},r.$add(s,t));return s=i[o],s in t?t[s]=n:t.$add(s,n),!0}},function(t,e,i){function n(t){return t.replace(v,"\\$&")}function r(){d._delimitersChanged=!1;var t=d.delimiters[0],e=d.delimiters[1];u=t.charAt(0),l=e.charAt(e.length-1);var i=n(u),r=n(l),s=n(t),o=n(e);c=new RegExp(i+"?"+s+"(.+?)"+o+r+"?","g"),h=new RegExp("^"+i+s+".*"+o+r+"$"),a=new f(1e3)}function s(t,e,i){return t.tag?e&&t.oneTime?'"'+e.$eval(t.value)+'"':i?t.value:o(t.value):'"'+t.value+'"'}function o(t){if(m.test(t)){var e=p.parse(t)[0];if(e.filters){t=e.expression;for(var i=0,n=e.filters.length;n>i;i++){var r=e.filters[i],s=r.args?',"'+r.args.join('","')+'"':"";r='this.$options.filters["'+r.name+'"]',t="("+r+".read||"+r+").apply(this,["+t+s+"])"}return t}return"("+t+")"}return"("+t+")"}var a,c,h,u,l,f=i(52),d=i(15),p=i(21),v=/[-.*+?^${}()|[\]\/\\]/g;e.parse=function(t){d._delimitersChanged&&r();var e=a.get(t);if(e)return e;if(!c.test(t))return null;for(var i,n,s,o,u,l,f=[],p=c.lastIndex=0;i=c.exec(t);)n=i.index,n>p&&f.push({value:t.slice(p,n)}),o=i[1].charCodeAt(0),u=42===o,l=62===o,s=u||l?i[1].slice(1):i[1],f.push({tag:!0,value:s.trim(),html:h.test(i[0]),oneTime:u,partial:l}),p=n+i[0].length;return p<t.length&&f.push({value:t.slice(p)}),a.put(t,f),f},e.tokensToExp=function(t,e){return t.length>1?t.map(function(t){return s(t,e)}).join("+"):s(t[0],e,!0)};var m=/[^|]\|[^|]/},function(t,e,i){function n(t){var e=a.get(t);if(e)return e;var i=document.createDocumentFragment(),n=t.match(u),r=l.test(t);if(n||r){var s=n&&n[1],o=h[s]||h._default,c=o[0],f=o[1],d=o[2],p=document.createElement("div");for(p.innerHTML=f+t.trim()+d;c--;)p=p.lastChild;for(var v;v=p.firstChild;)i.appendChild(v)}else i.appendChild(document.createTextNode(t));return a.put(t,i),i}function r(t){var i=t.tagName;if("TEMPLATE"===i&&t.content instanceof DocumentFragment)return t.content;if("SCRIPT"===i)return n(t.textContent);for(var r,s=e.clone(t),o=document.createDocumentFragment();r=s.firstChild;)o.appendChild(r);return o}var s=i(11),o=i(52),a=new o(1e3),c=new o(1e3),h={_default:[0,"",""],legend:[1,"<fieldset>","</fieldset>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]};h.td=h.th=[3,"<table><tbody><tr>","</tr></tbody></table>"],h.option=h.optgroup=[1,'<select multiple="multiple">',"</select>"],h.thead=h.tbody=h.colgroup=h.caption=h.tfoot=[1,"<table>","</table>"],h.g=h.defs=h.symbol=h.use=h.image=h.text=h.circle=h.ellipse=h.line=h.path=h.polygon=h.polyline=h.rect=[1,'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events"version="1.1">',"</svg>"];var u=/<([\w:]+)/,l=/&\w+;/,f=s.inBrowser?function(){var t=document.createElement("div");return t.innerHTML="<template>1</template>",!t.cloneNode(!0).firstChild.innerHTML}():!1,d=s.inBrowser?function(){var t=document.createElement("textarea");return t.placeholder="t","t"===t.cloneNode(!0).value}():!1;e.clone=function(t){var e,i,n,r=t.cloneNode(!0);if(f&&(i=t.querySelectorAll("template"),i.length))for(n=r.querySelectorAll("template"),e=n.length;e--;)n[e].parentNode.replaceChild(i[e].cloneNode(!0),n[e]);if(d)if("TEXTAREA"===t.tagName)r.value=t.value;else if(i=t.querySelectorAll("textarea"),i.length)for(n=r.querySelectorAll("textarea"),e=n.length;e--;)n[e].value=i[e].value;return r},e.parse=function(t,i,s){var o,a;return t instanceof DocumentFragment?i?t.cloneNode(!0):t:("string"==typeof t?s||"#"!==t.charAt(0)?a=n(t):(a=c.get(t),a||(o=document.getElementById(t.slice(1)),o&&(a=r(o),c.put(t,a)))):t.nodeType&&(a=r(t)),a&&i?e.clone(a):a)}},function(t,e,i){function n(){_.raw=s.slice(p,a).trim(),void 0===_.expression?_.expression=s.slice(v,a).trim():b!==p&&r(),(0===a||_.expression)&&m.push(_)}function r(){var t,e=s.slice(b,a).trim();if(e){t={};var i=e.match(k);t.name=i[0],t.args=i.length>1?i.slice(1):null}t&&(_.filters=_.filters||[]).push(t),b=a+1}var s,o,a,c,h,u,l,f,d,p,v,m,_,b,g,y=i(11),w=i(52),$=new w(1e3),x=/^[^\{\?]+$|^'[^']*'$|^"[^"]*"$/,k=/[^\s'"]+|'[^']+'|"[^"]+"/g;e.parse=function(t){var e=$.get(t);if(e)return e;for(s=t,h=u=!1,l=f=d=p=v=0,b=0,m=[],_={},g=null,a=0,c=s.length;c>a;a++)if(o=s.charCodeAt(a),h)39===o&&(h=!h);else if(u)34===o&&(u=!u);else if(44!==o||d||l||f)if(58!==o||_.expression||_.arg)if(124===o&&124!==s.charCodeAt(a+1)&&124!==s.charCodeAt(a-1))void 0===_.expression?(b=a+1,_.expression=s.slice(v,a).trim()):r();else switch(o){case 34:u=!0;break;case 39:h=!0;break;case 40:d++;break;case 41:d--;break;case 91:f++;break;case 93:f--;break;case 123:l++;break;case 125:l--}else g=s.slice(p,a).trim(),x.test(g)&&(v=a+1,_.arg=y.stripQuotes(g)||g);else n(),_={},p=v=b=a+1;return(0===a||p!==a)&&n(),$.put(t,m),m}},function(t,e,i){function n(t,e){var i=C.length;return C[i]=e?t.replace(g,"\\n"):t,'"'+i+'"'}function r(t){var e=t.charAt(0),i=t.slice(1);return v.test(i)?t:(i=i.indexOf('"')>-1?i.replace(w,s):i,e+"scope."+i)}function s(t,e){return C[e]}function o(t,e){_.test(t),C.length=0;var i=t.replace(y,n).replace(b,"");i=(" "+i).replace(x,r).replace(w,s);var o=c(i);return o?{get:o,body:i,set:e?h(i):null}:void 0}function a(t){var e,i;return t.indexOf("[")<0?(i=t.split("."),e=l.compileGetter(i)):(i=l.parse(t),e=i.get),{get:e,set:function(t,e){l.set(t,i,e)}}}function c(t){try{return new Function("scope","return "+t+";")}catch(e){}}function h(t){try{return new Function("scope","value",t+"=value;")}catch(e){}}function u(t){t.set||(t.set=h(t.body))}var l=(i(11),i(18)),f=i(52),d=new f(1e3),p="Math,Date,this,true,false,null,undefined,Infinity,NaN,isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,parseInt,parseFloat",v=new RegExp("^("+p.replace(/,/g,"\\b|")+"\\b)"),m="break,case,class,catch,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,let,return,super,switch,throw,try,var,while,with,yield,enum,await,implements,package,proctected,static,interface,private,public",_=new RegExp("^("+m.replace(/,/g,"\\b|")+"\\b)"),b=/\s/g,g=/\n/g,y=/[\{,]\s*[\w\$_]+\s*:|('[^']*'|"[^"]*")|new |typeof |void /g,w=/"(\d+)"/g,$=/^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\])*$/,x=/[^\w$\.]([A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\])*)/g,k=/^(true|false)$/,C=[];e.parse=function(t,e){t=t.trim();var i=d.get(t);if(i)return e&&u(i),i;var n=$.test(t)&&!k.test(t)&&"Math."!==t.slice(0,5)?a(t):o(t,e);return d.put(t,n),n},e.pathTestRE=$},function(t,e,i){function n(){this.id=++r,this.subs=[]}var r=0,s=i(11),o=n.prototype;o.addSub=function(t){this.subs.push(t)},o.removeSub=function(t){if(this.subs.length){var e=this.subs.indexOf(t);e>-1&&this.subs.splice(e,1)}},o.notify=function(){for(var t=s.toArray(this.subs),e=0,i=t.length;i>e;e++)t[e].update()},t.exports=n},function(t,e,i){function n(t,e,i,n,s,o){this.name=t,this.el=e,this.vm=i,this.raw=n.raw,this.expression=n.expression,this.arg=n.arg,this.filters=r.resolveFilters(i,n.filters),this._host=o,this._locked=!1,this._bound=!1,this._bind(s)}var r=i(11),s=i(15),o=i(25),a=i(19),c=i(22),h=n.prototype;h._bind=function(t){if("cloak"!==this.name&&this.el&&this.el.removeAttribute&&this.el.removeAttribute(s.prefix+this.name),"function"==typeof t?this.update=t:r.extend(this,t),this._watcherExp=this.expression,this._checkDynamicLiteral(),this.bind&&this.bind(),this._watcherExp&&(this.update||this.twoWay)&&(!this.isLiteral||this._isDynamicLiteral)&&!this._checkStatement()){var e=this,i=this._update=this.update?function(t,i){e._locked||e.update(t,i)}:function(){},n=this.vm._watchers[this.raw];n&&"repeat"!==this.name?n.addCb(i):n=this.vm._watchers[this.raw]=new o(this.vm,this._watcherExp,i,{filters:this.filters,twoWay:this.twoWay,deep:this.deep}),this._watcher=n,null!=this._initValue?n.set(this._initValue):this.update&&this.update(n.value)}this._bound=!0},h._checkDynamicLiteral=function(){var t=this.expression;if(t&&this.isLiteral){var e=a.parse(t);if(e){var i=a.tokensToExp(e);this.expression=this.vm.$get(i),this._watcherExp=i,this._isDynamicLiteral=!0}}},h._checkStatement=function(){var t=this.expression;if(t&&this.acceptStatement&&!c.pathTestRE.test(t)){var e=c.parse(t).get,i=this.vm,n=function(){e.call(i,i)};return this.filters&&(n=r.applyFilters(n,this.filters.read,i)),this.update(n),!0}},h._checkParam=function(t){var e=this.el.getAttribute(t);return null!==e&&this.el.removeAttribute(t),e},h._teardown=function(){if(this._bound){this.unbind&&this.unbind();var t=this._watcher;t&&t.active&&(t.removeCb(this._update),t.active||(this.vm._watchers[this.raw]=null)),this._bound=!1,this.vm=this.el=this._watcher=null}},h.set=function(t,e){if(this.twoWay&&(e&&(this._locked=!0),this._watcher.set(t),e)){var i=this;r.nextTick(function(){i._locked=!1})}},t.exports=n},function(t,e,i){function n(t,e,i,n){this.vm=t,t._watcherList.push(this),
this.expression=e,this.cbs=[i],this.id=++u,this.active=!0,n=n||{},this.deep=!!n.deep,this.user=!!n.user,this.deps=Object.create(null),n.filters&&(this.readFilters=n.filters.read,this.writeFilters=n.filters.write);var r=c.parse(e,n.twoWay);this.getter=r.get,this.setter=r.set,this.value=this.get()}function r(t){var e,i,n;for(e in t)if(i=t[e],s.isArray(i))for(n=i.length;n--;)r(i[n]);else s.isObject(i)&&r(i)}var s=i(11),o=i(15),a=i(49),c=i(22),h=i(53),u=0,l=n.prototype;l.addDep=function(t){var e=t.id;this.newDeps[e]||(this.newDeps[e]=t,this.deps[e]||(this.deps[e]=t,t.addSub(this)))},l.get=function(){this.beforeGet();var t,e=this.vm;try{t=this.getter.call(e,e)}catch(i){o.warnExpressionErrors}return this.deep&&r(t),t=s.applyFilters(t,this.readFilters,e),this.afterGet(),t},l.set=function(t){var e=this.vm;t=s.applyFilters(t,this.writeFilters,e,this.value);try{this.setter.call(e,e,t)}catch(i){o.warnExpressionErrors}},l.beforeGet=function(){a.target=this,this.newDeps={}},l.afterGet=function(){a.target=null;for(var t in this.deps)this.newDeps[t]||this.deps[t].removeSub(this);this.deps=this.newDeps},l.update=function(){!o.async||o.debug?this.run():h.push(this)},l.run=function(){if(this.active){var t=this.get();if(t!==this.value||Array.isArray(t)||this.deep){var e=this.value;this.value=t;for(var i=this.cbs,n=0,r=i.length;r>n;n++){i[n](t,e);var s=r-i.length;s&&(n-=s,r-=s)}}}},l.addCb=function(t){this.cbs.push(t)},l.removeCb=function(t){var e=this.cbs;if(e.length>1){var i=e.indexOf(t);i>-1&&e.splice(i,1)}else t===e[0]&&this.teardown()},l.teardown=function(){if(this.active){if(!this.vm._isBeingDestroyed){var t=this.vm._watcherList,e=t.indexOf(this);e>-1&&t.splice(e,1)}for(var i in this.deps)this.deps[i].removeSub(this);this.active=!1,this.vm=this.cbs=this.value=null}},t.exports=n},function(t,e,i){function n(t,e){return e?e.toUpperCase():""}e.isReserved=function(t){var e=(t+"").charCodeAt(0);return 36===e||95===e},e.toString=function(t){return null==t?"":t.toString()},e.toNumber=function(t){return isNaN(t)||null===t||"boolean"==typeof t?t:Number(t)},e.stripQuotes=function(t){var e=t.charCodeAt(0),i=t.charCodeAt(t.length-1);return e!==i||34!==e&&39!==e?!1:t.slice(1,-1)};var r=/-(\w)/g;e.camelize=function(t){return t.replace(r,n)};var s=/(?:^|[-_\/])(\w)/g;e.classify=function(t){return t.replace(s,n)},e.bind=function(t,e){return function(){return t.apply(e,arguments)}},e.toArray=function(t,e){e=e||0;for(var i=t.length-e,n=new Array(i);i--;)n[i]=t[i+e];return n},e.extend=function(t,e){for(var i in e)t[i]=e[i];return t},e.isObject=function(t){return t&&"object"==typeof t};var o=Object.prototype.toString;e.isPlainObject=function(t){return"[object Object]"===o.call(t)},e.isArray=function(t){return Array.isArray(t)},e.define=function(t,e,i,n){Object.defineProperty(t,e,{value:i,enumerable:!!n,writable:!0,configurable:!0})},e.debounce=function(t,e){var i,n,r,s,o,a=function(){var c=Date.now()-s;e>c&&c>=0?i=setTimeout(a,e-c):(i=null,o=t.apply(r,n),i||(r=n=null))};return function(){return r=this,n=arguments,s=Date.now(),i||(i=setTimeout(a,e)),o}}},function(t,e,i){e.hasProto="__proto__"in{};var n=Object.prototype.toString,r=e.inBrowser="undefined"!=typeof window&&"[object Object]"!==n.call(window);if(e.nextTick=function(){function t(){n=!1;var t=i.slice(0);i=[];for(var e=0;e<t.length;e++)t[e]()}var e,i=[],n=!1;if("undefined"!=typeof MutationObserver){var r=1,s=new MutationObserver(t),o=document.createTextNode(r);s.observe(o,{characterData:!0}),e=function(){r=(r+1)%2,o.data=r}}else e=setTimeout;return function(r,s){var o=s?function(){r.call(s)}:r;i.push(o),n||(n=!0,e(t,0))}}(),e.isIE9=r&&navigator.userAgent.indexOf("MSIE 9.0")>0,r&&!e.isIE9){var s=void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend,o=void 0===window.onanimationend&&void 0!==window.onwebkitanimationend;e.transitionProp=s?"WebkitTransition":"transition",e.transitionEndEvent=s?"webkitTransitionEnd":"transitionend",e.animationProp=o?"WebkitAnimation":"animation",e.animationEndEvent=o?"webkitAnimationEnd":"animationend"}},function(t,e,i){var n=i(15),r="undefined"!=typeof document&&document.documentElement;e.inDoc=function(t){var e=t&&t.parentNode;return r===t||r===e||!(!e||1!==e.nodeType||!r.contains(e))},e.attr=function(t,e){e=n.prefix+e;var i=t.getAttribute(e);return null!==i&&t.removeAttribute(e),i},e.before=function(t,e){e.parentNode.insertBefore(t,e)},e.after=function(t,i){i.nextSibling?e.before(t,i.nextSibling):i.parentNode.appendChild(t)},e.remove=function(t){t.parentNode.removeChild(t)},e.prepend=function(t,i){i.firstChild?e.before(t,i.firstChild):i.appendChild(t)},e.replace=function(t,e){var i=t.parentNode;i&&i.replaceChild(e,t)},e.copyAttributes=function(t,e){if(t.hasAttributes())for(var i=t.attributes,n=0,r=i.length;r>n;n++){var s=i[n];e.setAttribute(s.name,s.value)}},e.on=function(t,e,i){t.addEventListener(e,i)},e.off=function(t,e,i){t.removeEventListener(e,i)},e.addClass=function(t,e){if(t.classList)t.classList.add(e);else{var i=" "+(t.getAttribute("class")||"")+" ";i.indexOf(" "+e+" ")<0&&t.setAttribute("class",(i+e).trim())}},e.removeClass=function(t,e){if(t.classList)t.classList.remove(e);else{for(var i=" "+(t.getAttribute("class")||"")+" ",n=" "+e+" ";i.indexOf(n)>=0;)i=i.replace(n," ");t.setAttribute("class",i.trim())}},e.extractContent=function(t,e){var i,n;if(t.hasChildNodes())for(n=e?document.createDocumentFragment():document.createElement("div");i=t.firstChild;)n.appendChild(i);return n}},function(t,e,i){i(30);e.resolveFilters=function(t,e,i){if(e){var n=i||{};return e.forEach(function(e){var i=t.$options.filters[e.name];if(i){var r,s,o=e.args;"function"==typeof i?r=i:(r=i.read,s=i.write),r&&(n.read||(n.read=[]),n.read.push(function(e){return o?r.apply(t,[e].concat(o)):r.call(t,e)})),s&&(n.write||(n.write=[]),n.write.push(function(e,i){return o?s.apply(t,[e,i].concat(o)):s.call(t,e,i)}))}}),n}},e.applyFilters=function(t,e,i,n){if(!e)return t;for(var r=0,s=e.length;s>r;r++)t=e[r].call(i,t,n);return t}},function(t,e,i){i(15)},function(t,e,i){var n=i(11);t.exports={bind:function(){this.attr=3===this.el.nodeType?"nodeValue":"textContent"},update:function(t){this.el[this.attr]=n.toString(t)}}},function(t,e,i){var n=i(11),r=i(20);t.exports={bind:function(){8===this.el.nodeType&&(this.nodes=[])},update:function(t){t=n.toString(t),this.nodes?this.swap(t):this.el.innerHTML=t},swap:function(t){for(var e=this.nodes.length;e--;)n.remove(this.nodes[e]);var i=r.parse(t,!0,!0);this.nodes=n.toArray(i.childNodes),n.before(i,this.el)}}},function(t,e,i){function n(t){t||0===t?this.el.setAttribute(this.arg,t):this.el.removeAttribute(this.arg)}function r(t){null!=t?this.el.setAttributeNS(s,this.arg,t):this.el.removeAttributeNS(s,"href")}var s="http://www.w3.org/1999/xlink",o=/^xlink:/;t.exports={priority:850,bind:function(){var t=this.arg;this.update=o.test(t)?r:n}}},function(t,e,i){var n=i(50);t.exports=function(t){var e=this.el;n.apply(e,t?1:-1,function(){e.style.display=t?"":"none"},this.vm)}},function(t,e,i){var n=i(11),r=n.addClass,s=n.removeClass;t.exports=function(t){if(this.arg){var e=t?r:s;e(this.el,this.arg)}else this.lastVal&&s(this.el,this.lastVal),t&&(r(this.el,t),this.lastVal=t)}},function(t,e,i){t.exports={isLiteral:!0,bind:function(){this.vm.$$[this.expression]=this.el},unbind:function(){delete this.vm.$$[this.expression]}}},function(t,e,i){i(11);t.exports={isLiteral:!0,bind:function(){var t=this.el.__vue__;t&&(t._refID=this.expression)}}},function(t,e,i){var n=i(15);t.exports={bind:function(){var t=this.el;this.vm.$once("hook:compiled",function(){t.removeAttribute(n.prefix+"cloak")})}}},function(t,e,i){function n(t){if(l[t])return l[t];var e=r(t);return l[t]=l[e]=e,e}function r(t){t=t.replace(h,"$1-$2").toLowerCase();var e=s.camelize(t),i=e.charAt(0).toUpperCase()+e.slice(1);if(u||(u=document.createElement("div")),e in u.style)return t;for(var n,r=o.length;r--;)if(n=a[r]+i,n in u.style)return o[r]+t}var s=i(11),o=["-webkit-","-moz-","-ms-"],a=["Webkit","Moz","ms"],c=/!important;?$/,h=/([a-z])([A-Z])/g,u=null,l={};t.exports={deep:!0,update:function(t){if(this.arg)this.setProp(this.arg,t);else if("object"==typeof t){this.cache||(this.cache={});for(var e in t)this.setProp(e,t[e]),t[e]!=this.cache[e]&&(this.cache[e]=t[e],this.setProp(e,t[e]))}else this.el.style.cssText=t},setProp:function(t,e){if(t=n(t))if(null!=e&&(e+=""),e){var i=c.test(e)?"important":"";i&&(e=e.replace(c,"").trim()),this.el.style.setProperty(t,e,i)}else this.el.style.removeProperty(t)}}},function(t,e,i){var n=i(11),r=i(20),s=i(45);t.exports={isLiteral:!0,compile:s.compile,teardown:s.teardown,getContainedComponents:s.getContainedComponents,unbind:s.unbind,bind:function(){var t=this.el;this.start=document.createComment("v-partial-start"),this.end=document.createComment("v-partial-end"),8!==t.nodeType&&(t.innerHTML=""),"TEMPLATE"===t.tagName||8===t.nodeType?n.replace(t,this.end):t.appendChild(this.end),n.before(this.start,this.end),this._isDynamicLiteral||this.insert(this.expression)},update:function(t){this.teardown(),this.insert(t)},insert:function(t){var e=this.vm.$options.partials[t];if(e){var i=this.filters&&this.filters.read;i&&(e=n.applyFilters(e,i,this.vm)),this.compile(r.parse(e,!0))}}}},function(t,e,i){t.exports={priority:1e3,isLiteral:!0,bind:function(){this._isDynamicLiteral||this.update(this.expression)},update:function(t){var e=this.el.__vue__||this.vm;this.el.__v_trans={id:t,fns:e.$options.transitions[t]}}}},function(t,e,i){var n=i(11);t.exports={acceptStatement:!0,priority:700,bind:function(){if("IFRAME"===this.el.tagName&&"load"!==this.arg){var t=this;this.iframeBind=function(){n.on(t.el.contentWindow,t.arg,t.handler)},n.on(this.el,"load",this.iframeBind)}},update:function(t){if("function"==typeof t){this.reset();var e=this.vm;this.handler=function(i){i.targetVM=e,e.$event=i;var n=t(i);return e.$event=null,n},this.iframeBind?this.iframeBind():n.on(this.el,this.arg,this.handler)}},reset:function(){var t=this.iframeBind?this.el.contentWindow:this.el;this.handler&&n.off(t,this.arg,this.handler)},unbind:function(){this.reset(),n.off(this.el,"load",this.iframeBind)}}},function(t,e,i){var n=i(11),r=i(20);t.exports={isLiteral:!0,bind:function(){if(!this.el.__vue__)if(this.ref=document.createComment("v-component"),n.replace(this.el,this.ref),this.keepAlive=null!=this._checkParam("keep-alive"),this.refID=n.attr(this.el,"ref"),this.keepAlive&&(this.cache={}),null!==this._checkParam("inline-template")&&(this.template=n.extractContent(this.el,!0)),this._isDynamicLiteral)this.readyEvent=this._checkParam("wait-for"),this.transMode=this._checkParam("transition-mode");else{this.resolveCtor(this.expression);var t=this.build();t.$before(this.ref),this.setCurrent(t)}},resolveCtor:function(t){this.ctorId=t,this.Ctor=this.vm.$options.components[t]},build:function(){if(this.keepAlive){var t=this.cache[this.ctorId];if(t)return t}var e=this.vm,i=r.clone(this.el);if(this.Ctor){var n=e.$addChild({el:i,template:this.template,_asComponent:!0,_host:this._host},this.Ctor);return this.keepAlive&&(this.cache[this.ctorId]=n),n}},unbuild:function(){var t=this.childVM;t&&!this.keepAlive&&t.$destroy(!1,!0)},remove:function(t,e){var i=this.keepAlive;t?t.$remove(function(){i||t._cleanup(),e&&e()}):e&&e()},update:function(t){if(t){this.resolveCtor(t),this.unbuild();var e=this.build(),i=this;this.readyEvent?e.$once(this.readyEvent,function(){i.swapTo(e)}):this.swapTo(e)}else this.unbuild(),this.remove(this.childVM),this.unsetCurrent()},swapTo:function(t){var e=this,i=this.childVM;switch(this.unsetCurrent(),this.setCurrent(t),e.transMode){case"in-out":t.$before(e.ref,function(){e.remove(i)});break;case"out-in":e.remove(i,function(){t.$before(e.ref)});break;default:e.remove(i),t.$before(e.ref)}},setCurrent:function(t){this.childVM=t;var e=t._refID||this.refID;e&&(this.vm.$[e]=t)},unsetCurrent:function(){var t=this.childVM;this.childVM=null;var e=t&&t._refID||this.refID;e&&(this.vm.$[e]=null)},unbind:function(){if(this.unbuild(),this.cache){for(var t in this.cache)this.cache[t].$destroy();this.cache=null}}}},function(t,e,i){function n(t,e){for(var i=(t._blockEnd||t.$el).nextSibling;!i.__vue__&&i!==e;)i=i.nextSibling;return i.__vue__}function r(t){if(this.rawValue=t,!c(t))return t;for(var e,i=Object.keys(t),n=i.length,r=new Array(n);n--;)e=i[n],r[n]={$key:e,$value:t[e]};return this.converted=!0,r}function s(t){for(var e=-1,i=new Array(t);++e<t;)i[e]=e;return i}var o=i(11),a=o.isObject,c=o.isPlainObject,h=i(19),u=i(22),l=i(20),f=i(16),d=i(17),p=i(14),v=0;t.exports={bind:function(){this.id="__v_repeat_"+ ++v,this.filters||(this.filters={});var t=o.bind(r,this);this.filters.read?this.filters.read.unshift(t):this.filters.read=[t],this.ref=document.createComment("v-repeat"),o.replace(this.el,this.ref),this.template="TEMPLATE"===this.el.tagName?l.parse(this.el,!0):this.el,this.checkIf(),this.checkRef(),this.checkComponent(),this.idKey=this._checkParam("track-by")||this._checkParam("trackby"),this.cache=Object.create(null)},checkIf:function(){null!==o.attr(this.el,"if")},checkRef:function(){var t=o.attr(this.el,"ref");this.refID=t?this.vm.$interpolate(t):null;var e=o.attr(this.el,"el");this.elId=e?this.vm.$interpolate(e):null},checkComponent:function(){var t=o.attr(this.el,"component"),e=this.vm.$options;if(t){this.asComponent=!0,null!==this._checkParam("inline-template")&&(this.inlineTempalte=o.extractContent(this.el,!0));var i=h.parse(t);if(i){var n=h.tokensToExp(i);this.ctorGetter=u.parse(n).get}else{var r=this.Ctor=e.components[t],s=p(r.options,{},{$parent:this.vm});s.template=this.inlineTempalte||s.template,s._asComponent=!0,s._parent=this.vm,this.template=d(this.template,s),this.template.__vue__=!0,this._linkFn=f(this.template,s)}}else this.Ctor=o.Vue,this.inherit=!0,this.template=d(this.template),this._linkFn=f(this.template,e)},update:function(t){t=t||[];var e=typeof t;"number"===e?t=s(t):"string"===e&&(t=o.toArray(t)),this.vms=this.diff(t,this.vms),this.refID&&(this.vm.$[this.refID]=this.vms),this.elId&&(this.vm.$$[this.elId]=this.vms.map(function(t){return t.$el}))},diff:function(t,e){var i,r,s,o,a,c=this.idKey,h=this.converted,u=this.ref,l=this.arg,f=!e,d=new Array(t.length);for(o=0,a=t.length;a>o;o++)i=t[o],r=h?i.$value:i,s=!f&&this.getVm(r),s?(s._reused=!0,s.$index=o,h&&(s.$key=i.$key),c&&(l?s[l]=r:s._setData(r))):(s=this.build(i,o,!0),s._new=!0,s._reused=!1),d[o]=s,f&&s.$before(u);if(f)return d;for(o=0,a=e.length;a>o;o++)s=e[o],s._reused||(this.uncacheVm(s),s.$destroy(!0));var p,v;for(o=d.length;o--;){if(s=d[o],p=d[o+1]){var m=p.$el;s._reused?(v=n(s,u),v!==p&&s.$before(m,null,!1)):s.$before(m)}else s._reused||s.$before(u);s._new=!1,s._reused=!1}return d},build:function(t,e,i){var n={$index:e};this.converted&&(n.$key=t.$key);var r=this.converted?t.$value:t,s=this.arg;s?(t={},t[s]=r):c(r)?t=r:(t={},n.$value=r);var o=this.Ctor||this.resolveCtor(t,n),a=this.vm.$addChild({el:l.clone(this.template),_asComponent:this.asComponent,_host:this._host,_linkFn:this._linkFn,_meta:n,data:t,inherit:this.inherit,template:this.inlineTempalte},o);a._repeat=!0,i&&this.cacheVm(r,a);var h=this;return a.$watch("$value",function(t){h.converted?h.rawValue[a.$key]=t:h.rawValue.$set(a.$index,t)}),a},resolveCtor:function(t,e){var i,n=Object.create(this.vm);for(i in t)o.define(n,i,t[i]);for(i in e)o.define(n,i,e[i]);var r=this.ctorGetter.call(n,n),s=this.vm.$options.components[r];return s},unbind:function(){if(this.refID&&(this.vm.$[this.refID]=null),this.vms)for(var t,e=this.vms.length;e--;)t=this.vms[e],this.uncacheVm(t),t.$destroy()},cacheVm:function(t,e){var i,n=this.idKey,r=this.cache;n?(i=t[n],r[i]||(r[i]=e)):a(t)?(i=this.id,t.hasOwnProperty(i)?null===t[i]&&(t[i]=e):o.define(t,this.id,e)):r[t]?r[t].push(e):r[t]=[e],e._raw=t},getVm:function(t){if(this.idKey)return this.cache[t[this.idKey]];if(a(t))return t[this.id];var e=this.cache[t];if(e){for(var i=0,n=e[i];n&&(n._reused||n._new);)n=e[++i];return n}},uncacheVm:function(t){var e=t._raw;this.idKey?this.cache[e[this.idKey]]=null:a(e)?(e[this.id]=null,t._raw=null):this.cache[e].pop()}}},function(t,e,i){function n(t){t._isAttached||t._callHook("attached")}function r(t){t._isAttached&&t._callHook("detached")}var s=i(11),o=i(16),a=i(20),c=i(50);t.exports={bind:function(){var t=this.el;t.__vue__?this.invalid=!0:(this.start=document.createComment("v-if-start"),this.end=document.createComment("v-if-end"),s.replace(t,this.end),s.before(this.start,this.end),"TEMPLATE"===t.tagName?this.template=a.parse(t,!0):(this.template=document.createDocumentFragment(),this.template.appendChild(a.clone(t))),this.linker=o(this.template,this.vm.$options,!0))},update:function(t){if(!this.invalid)if(t){if(!this.unlink){var e=a.clone(this.template);this.compile(e)}}else this.teardown()},compile:function(t){var e=this.vm;if(this.unlink=this.linker?this.linker(e,t):e.$compile(t),c.blockAppend(t,this.end,e),s.inDoc(e.$el)){var i=this.getContainedComponents();i&&i.forEach(n)}},teardown:function(){if(this.unlink){var t;s.inDoc(this.vm.$el)&&(t=this.getContainedComponents()),c.blockRemove(this.start,this.end,this.vm),t&&t.forEach(r),this.unlink(),this.unlink=null}},getContainedComponents:function(){function t(t){for(var e,r=i;e!==n;){if(e=r.nextSibling,r.contains(t.$el))return!0;r=e}return!1}var e=this.vm,i=this.start.nextSibling,n=this.end,r=e._children.length&&e._children.filter(t),s=e._transCpnts&&e._transCpnts.filter(t);return r?s?r.concat(s):r:s},unbind:function(){this.unlink&&this.unlink()}}},function(t,e,i){var n=i(11),r=i(25),s=i(22),o=/^(true|false|\s?('[^']*'|"[^"]")\s?)$/;t.exports={priority:900,bind:function(){var t=this.vm,e=t.$parent,i=this.arg||"$data",a=this.expression;if(this.el&&this.el!==t.$el);else if(e)if(o.test(a))if(this.arg){var c=s.parse(a).get();t.$set(i,c)}else;else{var h=!1,u=function(){h=!0,n.nextTick(l)},l=function(){h=!1};this.parentWatcher=new r(e,a,function(e){h||(u(),t.$set(i,e))}),t.$set(i,this.parentWatcher.value),this.childWatcher=new r(t,i,function(t){h||(u(),e.$set(a,t))})}else;},unbind:function(){this.parentWatcher&&(this.parentWatcher.teardown(),this.childWatcher.teardown())}}},function(t,e,i){i(11);t.exports={acceptStatement:!0,bind:function(){var t=this.el.__vue__;!t||this.vm!==t.$parent},update:function(t,e){if("function"==typeof t){var i=this.el.__vue__;e&&i.$off(this.arg,e),i.$on(this.arg,t)}}}},function(t,e,i){function n(t,e){if(r.isObject(t)){for(var i in t)if(n(t[i],e))return!0}else if(null!=t)return t.toString().toLowerCase().indexOf(e)>-1}var r=i(11),s=i(18);e.filterBy=function(t,e,i,o){i&&"in"!==i&&(o=i);var a=r.stripQuotes(e)||this.$get(e);return a?(a=(""+a).toLowerCase(),o=o&&(r.stripQuotes(o)||this.$get(o)),t.filter(function(t){return o?n(s.get(t,o),a):n(t,a)})):t},e.orderBy=function(t,e,i){var n=r.stripQuotes(e)||this.$get(e);if(!n)return t;var o=1;return i&&("-1"===i?o=-1:33===i.charCodeAt(0)?(i=i.slice(1),o=this.$get(i)?1:-1):o=this.$get(i)?-1:1),t.slice().sort(function(t,e){return t=r.isObject(t)?s.get(t,n):t,e=r.isObject(e)?s.get(e,n):e,t===e?0:t>e?o:-o})}},function(t,e,i){function n(t,e){t.__proto__=e}function r(t,e,i){for(var n,r=i.length;r--;)n=i[r],o.define(t,n,e[n])}function s(t,e){if(this.id=++l,this.value=t,this.active=!0,this.deps=[],o.define(t,"__ob__",this),e===f){var i=a.proto&&o.hasProto?n:r;i(t,h,u),this.observeArray(t)}else e===d&&this.walk(t)}var o=i(11),a=i(15),c=i(23),h=i(54),u=Object.getOwnPropertyNames(h);i(55);var l=0,f=0,d=1;s.target=null;var p=s.prototype;s.create=function(t){return t&&t.hasOwnProperty("__ob__")&&t.__ob__ instanceof s?t.__ob__:o.isArray(t)?new s(t,f):o.isPlainObject(t)&&!t._isVue?new s(t,d):void 0},p.walk=function(t){for(var e,i,n=Object.keys(t),r=n.length;r--;)e=n[r],i=e.charCodeAt(0),36!==i&&95!==i&&this.convert(e,t[e])},p.observe=function(t){return s.create(t)},p.observeArray=function(t){for(var e=t.length;e--;)this.observe(t[e])},p.convert=function(t,e){var i=this,n=i.observe(e),r=new c;n&&n.deps.push(r),Object.defineProperty(i.value,t,{enumerable:!0,configurable:!0,get:function(){return i.active&&s.target&&s.target.addDep(r),e},set:function(t){if(t!==e){var n=e&&e.__ob__;if(n){var s=n.deps;s.splice(s.indexOf(r),1)}e=t;var o=i.observe(t);o&&o.deps.push(r),r.notify()}}})},p.notify=function(){for(var t=this.deps,e=0,i=t.length;i>e;e++)t[e].notify()},p.addVm=function(t){(this.vms=this.vms||[]).push(t)},p.removeVm=function(t){this.vms.splice(this.vms.indexOf(t),1)},t.exports=s},function(t,e,i){var n=i(11),r=i(56),s=i(57),o="undefined"==typeof document?null:document;e.append=function(t,e,i,n){a(t,1,function(){e.appendChild(t)},i,n)},e.before=function(t,e,i,r){a(t,1,function(){n.before(t,e)},i,r)},e.remove=function(t,e,i){a(t,-1,function(){n.remove(t)},e,i)},e.removeThenAppend=function(t,e,i,n){a(t,-1,function(){e.appendChild(t)},i,n)},e.blockAppend=function(t,i,r){for(var s=n.toArray(t.childNodes),o=0,a=s.length;a>o;o++)e.before(s[o],i,r)},e.blockRemove=function(t,i,n){for(var r,s=t.nextSibling;s!==i;)r=s.nextSibling,e.remove(s,n),s=r};var a=e.apply=function(t,e,i,a,c){var h=t.__v_trans;if(!h||!a._isCompiled||a.$parent&&!a.$parent._isCompiled)return i(),void(c&&c());var u=h.fns;u?s(t,e,i,h,u,a,c):!n.transitionEndEvent||o&&o.hidden?(i(),c&&c()):r(t,e,i,h,c)}},function(t,e,i){var n=(i(11),{_default:i(58),radio:i(59),select:i(60),checkbox:i(61)});t.exports={priority:800,twoWay:!0,handlers:n,bind:function(){var t=this.filters;t&&t.read&&!t.write;var e,i=this.el,r=i.tagName;if("INPUT"===r)e=n[i.type]||n._default;else if("SELECT"===r)e=n.select;else{if("TEXTAREA"!==r)return;e=n._default}e.bind.call(this),this.update=e.update,this.unbind=e.unbind}}},function(t,e,i){function n(t){this.size=0,this.limit=t,this.head=this.tail=void 0,this._keymap={}}var r=n.prototype;r.put=function(t,e){var i={key:t,value:e};return this._keymap[t]=i,this.tail?(this.tail.newer=i,i.older=this.tail):this.head=i,this.tail=i,this.size===this.limit?this.shift():void this.size++},r.shift=function(){var t=this.head;return t&&(this.head=this.head.newer,this.head.older=void 0,t.newer=t.older=void 0,this._keymap[t.key]=void 0),t},r.get=function(t,e){var i=this._keymap[t];if(void 0!==i)return i===this.tail?e?i:i.value:(i.newer&&(i===this.head&&(this.head=i.newer),i.newer.older=i.older),i.older&&(i.older.newer=i.newer),i.newer=void 0,i.older=this.tail,this.tail&&(this.tail.newer=i),this.tail=i,e?i:i.value)},t.exports=n},function(t,e,i){function n(){c=[],h=[],u={},l=!1,f=!1}function r(){f=!0,s(c),s(h),n()}function s(t){for(var e=0;e<t.length;e++)t[e].run()}var o=i(11),a=10,c=[],h=[],u={},l=!1,f=!1;e.push=function(t){var e=t.id;if(!e||!u[e]||f){if(u[e]){if(u[e]++,u[e]>a)return}else u[e]=1;if(f&&!t.user)return void t.run();(t.user?h:c).push(t),l||(l=!0,o.nextTick(r))}}},function(t,e,i){var n=i(11),r=Array.prototype,s=Object.create(r);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=r[t];n.define(s,t,function(){for(var i=arguments.length,n=new Array(i);i--;)n[i]=arguments[i];var r,s=e.apply(this,n),o=this.__ob__;switch(t){case"push":r=n;break;case"unshift":r=n;break;case"splice":r=n.slice(2)}return r&&o.observeArray(r),o.notify(),s})}),n.define(r,"$set",function(t,e){return t>=this.length&&(this.length=t+1),this.splice(t,1,e)[0]}),n.define(r,"$remove",function(t){return"number"!=typeof t&&(t=this.indexOf(t)),t>-1?this.splice(t,1)[0]:void 0}),t.exports=s},function(t,e,i){var n=i(11),r=Object.prototype;n.define(r,"$add",function(t,e){if(!this.hasOwnProperty(t)){var i=this.__ob__;if(!i||n.isReserved(t))return void(this[t]=e);if(i.convert(t,e),i.vms)for(var r=i.vms.length;r--;){var s=i.vms[r];s._proxy(t),s._digest()}else i.notify()}}),n.define(r,"$set",function(t,e){this.$add(t,e),this[t]=e}),n.define(r,"$delete",function(t){if(this.hasOwnProperty(t)){delete this[t];var e=this.__ob__;if(e&&!n.isReserved(t))if(e.vms)for(var i=e.vms.length;i--;){var r=e.vms[i];r._unproxy(t),r._digest()}else e.notify()}})},function(t,e,i){function n(t,e,i,n,s){f.push({el:t,dir:e,cb:s,cls:n,op:i}),d||(d=!0,a.nextTick(r))}function r(){document.documentElement.offsetHeight;f.forEach(s),f=[],d=!1}function s(t){function e(t,e){n.event=t;var r=n.callback=function(o){o.target===i&&(a.off(i,t,r),n.event=n.callback=null,e&&e(),s&&s())};a.on(i,t,r)}var i=t.el,n=i.__v_trans,r=t.cls,s=t.cb,c=t.op,u=o(i,n,r);if(t.dir>0)1===u?(h(i,r),s&&e(a.transitionEndEvent)):2===u?e(a.animationEndEvent,function(){h(i,r)}):(h(i,r),s&&s());else if(u){var l=1===u?a.transitionEndEvent:a.animationEndEvent;e(l,function(){c(),h(i,r)})}else c(),h(i,r),s&&s()}function o(t,e,i){var n=e.cache&&e.cache[i];if(n)return n;var r=t.style,s=window.getComputedStyle(t),o=r[u]||s[u];if(o&&"0s"!==o)n=1;else{var a=r[l]||s[l];a&&"0s"!==a&&(n=2)}return n&&(e.cache||(e.cache={}),e.cache[i]=n),n}var a=i(11),c=a.addClass,h=a.removeClass,u=a.transitionProp+"Duration",l=a.animationProp+"Duration",f=[],d=!1;t.exports=function(t,e,i,r,s){var o=r.id||"v",u=o+"-enter",l=o+"-leave";r.callback&&(a.off(t,r.event,r.callback),h(t,u),h(t,l),r.event=r.callback=null),e>0?(c(t,u),i(),n(t,e,null,u,s)):(c(t,l),n(t,e,i,l,s))}},function(t,e,i){t.exports=function(t,e,i,n,r,s,o){s=t.__vue__||s,n.cancel&&(n.cancel(),n.cancel=null),e>0?(r.beforeEnter&&r.beforeEnter.call(s,t),i(),r.enter?n.cancel=r.enter.call(s,t,function(){n.cancel=null,o&&o()}):o&&o()):r.leave?n.cancel=r.leave.call(s,t,function(){n.cancel=null,i(),o&&o()}):(i(),o&&o())}},function(t,e,i){var n=i(11);t.exports={bind:function(){function t(){e.set(s?n.toNumber(i.value):i.value,!0)}var e=this,i=this.el,r=null!=this._checkParam("lazy"),s=null!=this._checkParam("number"),o=parseInt(this._checkParam("debounce"),10),a=!1;this.cpLock=function(){a=!0},this.cpUnlock=function(){a=!1,t()},n.on(i,"compositionstart",this.cpLock),n.on(i,"compositionend",this.cpUnlock);var c=this.filters&&this.filters.read;this.listener=c||"range"===i.type?function(){if(!a){var r;try{r=i.value.length-i.selectionStart}catch(s){}0>r||(t(),n.nextTick(function(){var t=e._watcher.value;if(e.update(t),null!=r){var s=n.toString(t).length-r;i.setSelectionRange(s,s)}}))}}:function(){a||t()},o&&(this.listener=n.debounce(this.listener,o)),this.event=r?"change":"input",this.hasjQuery="function"==typeof jQuery,this.hasjQuery?jQuery(i).on(this.event,this.listener):n.on(i,this.event,this.listener),!r&&n.isIE9&&(this.onCut=function(){n.nextTick(e.listener)},this.onDel=function(t){(46===t.keyCode||8===t.keyCode)&&e.listener()},n.on(i,"cut",this.onCut),n.on(i,"keyup",this.onDel)),(i.hasAttribute("value")||"TEXTAREA"===i.tagName&&i.value.trim())&&(this._initValue=s?n.toNumber(i.value):i.value)},update:function(t){this.el.value=n.toString(t)},unbind:function(){var t=this.el;this.hasjQuery?jQuery(t).off(this.event,this.listener):n.off(t,this.event,this.listener),n.off(t,"compositionstart",this.cpLock),n.off(t,"compositionend",this.cpUnlock),this.onCut&&(n.off(t,"cut",this.onCut),n.off(t,"keyup",this.onDel))}}},function(t,e,i){var n=i(11);t.exports={bind:function(){var t=this,e=this.el;this.listener=function(){t.set(e.value,!0)},n.on(e,"change",this.listener),e.checked&&(this._initValue=e.value)},update:function(t){this.el.checked=t==this.el.value},unbind:function(){n.off(this.el,"change",this.listener)}}},function(t,e,i){function n(t){function e(t){u.isArray(t)&&(i.el.innerHTML="",r(i.el,t),i._watcher&&i.update(i._watcher.value))}var i=this,n=f.parse(t)[0];this.optionWatcher=new l(this.vm,n.expression,e,{deep:!0,filters:u.resolveFilters(this.vm,n.filters)}),e(this.optionWatcher.value)}function r(t,e){for(var i,n,s=0,o=e.length;o>s;s++)i=e[s],i.options?(n=document.createElement("optgroup"),n.label=i.label,r(n,i.options)):(n=document.createElement("option"),"string"==typeof i?n.text=n.value=i:(n.text=i.text,n.value=i.value)),t.appendChild(n)}function s(){for(var t,e=this.el.options,i=0,n=e.length;n>i;i++)e[i].hasAttribute("selected")&&(this.multiple?(t||(t=[])).push(e[i].value):t=e[i].value);"undefined"!=typeof t&&(this._initValue=this.number?u.toNumber(t):t)}function o(t){return Array.prototype.filter.call(t.options,a).map(c)}function a(t){return t.selected}function c(t){return t.value||t.text}function h(t,e){for(var i=t.length;i--;)if(t[i]==e)return i;return-1}var u=i(11),l=i(25),f=i(21);t.exports={bind:function(){var t=this,e=this.el,i=this._checkParam("options");i&&n.call(this,i),this.number=null!=this._checkParam("number"),this.multiple=e.hasAttribute("multiple"),this.listener=function(){var i=t.multiple?o(e):e.value;i=t.number?u.isArray(i)?i.map(u.toNumber):u.toNumber(i):i,t.set(i,!0)},u.on(e,"change",this.listener),s.call(this)},update:function(t){var e=this.el;e.selectedIndex=-1;for(var i,n=this.multiple&&u.isArray(t),r=e.options,s=r.length;s--;)i=r[s],i.selected=n?h(t,i.value)>-1:t==i.value},unbind:function(){u.off(this.el,"change",this.listener),this.optionWatcher&&this.optionWatcher.teardown()}}},function(t,e,i){var n=i(11);t.exports={bind:function(){var t=this,e=this.el;this.listener=function(){t.set(e.checked,!0)},n.on(e,"change",this.listener),e.checked&&(this._initValue=e.checked)},update:function(t){this.el.checked=!!t},unbind:function(){n.off(this.el,"change",this.listener)}}}])});/**
 * App.js v3.0.6
 * Instant mobile web app creation
 * Copyright (c) 2012 Kik Interactive, http://kik.com
 * Released under the MIT license
 *
 * iScroll v4.1.6
 * Copyright (c) 2011 Matteo Spinelli, http://cubiq.org
 * Released under the MIT license
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
var Swapper=function(f,d){function e(h,i,c,b){e._swapper(h,i,c,b)}if(f&&f.fn){f.extend(f.fn,{swapper:function(g,c,b){g=f(g)[0];this.forEach(function(h){e._swapper(h,g,c,b)});return this}})}if(d&&d.fn){d.fn.swapper=function(g,c,b){g=d(g)[0];this.each(function(){e._swapper(this,g,c,b)});return this}}return e}(window.Zepto,window.jQuery);Swapper._os=function(i,k){var l,h,g;if(g=/\bCPU.*OS (\d+(_\d+)?)/i.exec(i)){l="ios";h=g[1].replace("_",".")}else{if(g=/\bAndroid (\d+(\.\d+)?)/.exec(i)){l="android";h=g[1]}}var j={name:l,version:h&&k(h)};j[l]=true;return j}(navigator.userAgent,parseFloat);Swapper._isNode=function(d,c){return function(b){if(!b){return false}try{return(b instanceof d)||(b instanceof c)}catch(e){}if(typeof b!=="object"){return false}if(typeof b.nodeType!=="number"){return false}if(typeof b.nodeName!=="string"){return false}return true}}(Node,HTMLElement);Swapper._isInDOM=function(b){return function(e,d){if(!d&&!b(e)){throw TypeError("element must be a DOM node, got "+e)}while(e=e.parentNode){if(e===document){return true}}return false}}(Swapper._isNode);Swapper._insertBefore=function(){return function(d,c){c.parentNode.insertBefore(d,c)}}();Swapper._insertAfter=function(){return function(e,f){var d=f.parentNode;if(d.lastchild===f){d.appendChild(e)}else{d.insertBefore(e,f.nextSibling)}}}();Swapper._removeNode=function(){return function(b){if(b.parentNode){b.parentNode.removeChild(b)}}}();Swapper._setTransform=function(){return function(c,d){c.style["-webkit-transform"]=d;c.style["-moz-transform"]=d;c.style["-ms-transform"]=d;c.style["-o-transform"]=d;c.style.transform=d}}();Swapper._setTransition=function(){return function(d,c){if(c){d.style["-webkit-transition"]="-webkit-"+c;d.style["-moz-transition"]="-moz-"+c;d.style["-ms-transition"]="-ms-"+c;d.style["-o-transition"]="-o-"+c;d.style.transition=c}else{d.style["-webkit-transition"]="";d.style["-moz-transition"]="";d.style["-ms-transition"]="";d.style["-o-transition"]="";d.style.transition=""}}}();Swapper._getStyles=function(b){return function(g,f){var e;if(f){e=g.style}else{e=b.defaultView.getComputedStyle(g,null)}return{"-webkit-transition":e["-webkit-transition"],"-moz-transition":e["-moz-transition"],"-ms-transition":e["-ms-transition"],"-o-transition":e["-o-transition"],transition:e.transition,display:e.display,opacity:e.opacity,top:e.top,left:e.left,height:e.height,width:e.width,position:e.position}}}(document);Swapper._easings={linear:"linear",ease:"ease","ease-in":"ease-in","ease-out":"ease-out","ease-in-out":"ease-in-out","step-start":"step-start","step-end":"step-end"};Swapper._transitions={fade:[{fade:true},{fade:true}],"fade-on":[{fade:true},{}],"fade-off":[{},{fade:true},true],"scale-in":[{transform:"scale(0.01)"},{}],"scale-out":[{},{transform:"scale(0.01)"},true],"rotate-left":[{transform:"rotateY(-180deg) perspective(360px)",fade:true},{transform:"rotateY( 180deg) perspective(360px)",fade:true}],"rotate-right":[{transform:"rotateY( 180deg) perspective(360px)",fade:true},{transform:"rotateY(-180deg) perspective(360px)",fade:true}],"cube-left":[{transform:"translate3d( 50%,0,0) rotateY(-90deg) perspective(360px)"},{transform:"translate3d(-50%,0,0) rotateY( 90deg) perspective(360px)"}],"cube-right":[{transform:"translate3d(-50%,0,0) rotateY( 90deg) perspective(360px)"},{transform:"translate3d( 50%,0,0) rotateY(-90deg) perspective(360px)"}],"swap-left":[{transform:"translate3d( 65%,0,0) rotateY( 90deg) perspective(360px)"},{transform:"translate3d(-65%,0,0) rotateY(-90deg) perspective(360px)"}],"swap-right":[{transform:"translate3d(-65%,0,0) rotateY(-90deg) perspective(360px)"},{transform:"translate3d( 65%,0,0) rotateY( 90deg) perspective(360px)"}],"explode-in":[{fade:true,transform:"scale(1.25)"},{}],"explode-out":[{},{fade:true,transform:"scale(1.25)"},true],"implode-in":[{},{fade:true,transform:"scale(0.60)"},true],"implode-out":[{fade:true,transform:"scale(0.80)"},{}],"slide-left":[{transform:"translate3d( 100%,0,0)"},{transform:"translate3d(-100%,0,0)"}],"slide-right":[{transform:"translate3d(-100%,0,0)"},{transform:"translate3d( 100%,0,0)"}],"slide-up":[{transform:"translate3d(0, 100%,0)"},{transform:"translate3d(0,-100%,0)"}],"slide-down":[{transform:"translate3d(0,-100%,0)"},{transform:"translate3d(0, 100%,0)"}],"slideon-left":[{transform:"translate3d(-100%,0,0)"},{}],"slideoff-left":[{},{transform:"translate3d(-100%,0,0)"},true],"slideon-right":[{transform:"translate3d(100%,0,0)"},{}],"slideoff-right":[{},{transform:"translate3d(100%,0,0)"},true],"slideon-up":[{transform:"translate3d(0,-100%,0)"},{}],"slideoff-up":[{},{transform:"translate3d(0,-100%,0)"},true],"slideon-down":[{transform:"translate3d(0,100%,0)"},{}],"slideoff-down":[{},{transform:"translate3d(0,100%,0)"},true],"slideon-left-ios":[{transform:"translate3d(100%,0,0)"},{transform:"translate3d(-30%,0,0)"}],"slideoff-right-ios":[{transform:"translate3d(-30%,0,0)"},{transform:"translate3d(100%,0,0)"},true],"glideon-right":[{transform:"translate3d(110%,0,0)"},{transform:"translate3d(-20%,0,0)"}],"glideoff-right":[{transform:"translate3d(-20%,0,0)"},{transform:"translate3d(110%,0,0)"},true],"glideon-left":[{transform:"translate3d(-110%,0,0)"},{transform:"translate3d(20%,0,0)"}],"glideoff-left":[{transform:"translate3d(20%,0,0)"},{transform:"translate3d(-110%,0,0)"},true],"glideon-down":[{transform:"translate3d(0,110%,0)"},{transform:"translate3d(0,-20%,0)"}],"glideoff-down":[{transform:"translate3d(0,-20%,0)"},{transform:"translate3d(0,110%,0)"},true],"glideon-up":[{transform:"translate3d(0,-110%,0)"},{transform:"translate3d(0,20%,0)"}],"glideoff-up":[{transform:"translate3d(0,20%,0)"},{transform:"translate3d(0,-110%,0)"},true],"android-l-in":[{transform:"translate3d(0,6%,0)",fade:true},{}],"android-l-out":[{},{transform:"translate3d(0,6%,0)",fade:true},true]};Swapper._validate=function(j,i,k){return{element:l,options:g,callback:h};function l(b){if(!j(b)){throw TypeError("element must be a DOM node, got "+b)}}function g(b){switch(typeof b){case"string":b={transition:b};break;case"undefined":b={};break;case"object":break;default:throw TypeError("options must be an object if defined, got "+b)}switch(typeof b.transition){case"string":if(!(b.transition in i)&&(b.transition!=="instant")){throw TypeError(b.transition+" is not a valid transition")}break;case"undefined":break;default:throw TypeError("transition must be a string if defined, got "+b.transition)}switch(typeof b.duration){case"number":if(b.duration<0){throw TypeError("duration must be a non-negative integer, got "+b.duration)}break;case"undefined":break;default:throw TypeError("duration must be a number if defined, got "+b.duration)}switch(typeof b.easing){case"string":if(!(b.easing in k)&&(b.easing.substr(0,13)!=="cubic-bezier(")){throw TypeError(b.easing+" is not a valid easing")}break;case"undefined":break;default:throw TypeError("easing must be a string if defined, got "+b.easing)}return b}function h(b){switch(typeof b){case"undefined":b=function(){};break;case"function":break;default:throw TypeError("callback must be a function if defined, got "+b)}return b}}(Swapper._isNode,Swapper._transitions,Swapper._easings);Swapper._swapper=function(Z,I,ae,af,U,H,ad,ac,aa,O,Y,S,X,N){var aj="translate3d(0,0,0) scale(1)",M="fade",F="ease-in-out";var T=(Z.ios&&(Math.floor(Z.version)===5));function Q(d,e,c,b){S.element(d);S.element(e);if(typeof c==="function"){b=c;c={}}c=S.options(c);b=S.callback(b);if(d._swapper){throw Error("elem1 is currently being swapped")}else{if(e._swapper){throw Error("elem2 is currently being swapped")}}if(!ae(d,true)){throw Error("elem1 must be in the DOM to be swapped")}d._swapper=true;e._swapper=true;H(e);V(d,e,c,function(){d._swapper=false;e._swapper=false;b()})}function V(c,d,b,e){if(b.transition==="instant"){U(d,c);H(c);e();return}var f=O[b.transition||M],g=b.easing||F,h=b.duration||300;if(g.substr(0,13)!=="cubic-bezier("){g=Y[g]}U(d,c);var i=aa(c),j=aa(d),k=aa(c,true),l=aa(d,true);P(c,d,i,j);if(f[2]){af(d,c)}d.style.opacity="0";K(c,d);setTimeout(function(){d.style.opacity=j.opacity;ai(c,d,f);setTimeout(function(){W(c,d,h,g);setTimeout(function(){G(c,d,f);R(c,d,i,j,f,h,function(){H(c);L(c,d,h,g);setTimeout(function(){J(c,d,k,l,f);ag(c,d,k,l);setTimeout(function(){ah(c,d,k,l);e()},0)},0)})},0)},50)},0)}function P(e,f,c,d){var b=e.getBoundingClientRect();if(c.display!=="none"){if(T){f.style.position="absolute"}else{f.style.position="fixed"}f.style.top=b.top+"px";f.style.left=b.left+"px"}f.style.height=d.height||c.height;f.style.width=d.width||c.width}function ag(d,e,b,c){e.style.position=c.position;e.style.top=c.top;e.style.left=c.left;e.style.height=c.height;e.style.width=c.width}function ai(c,d,b){ad(c,aj);ad(d,b[0].transform||aj);if(b[0].fade){d.style.opacity="0"}if(b[1].fade){c.style.opacity="1"}}function G(c,d,b){ad(c,b[1].transform||aj);ad(d,aj);if(b[0].fade){d.style.opacity="1"}if(b[1].fade){c.style.opacity="0"}}function J(e,f,c,d,b){ad(e,"");ad(f,"");if(b[0].fade){f.style.opacity=d.opacity}if(b[1].fade){e.style.opacity=c.opacity}}function W(e,f,d,b){var c="transform "+(d/1000)+"s "+b+",opacity "+(d/1000)+"s "+b;ac(e,c);ac(f,c)}function L(d,e,c,b){ac(d,"");ac(e,"")}function K(b,c){ac(b,"");ac(c,"")}function ah(d,e,b,c){d.style["-webkit-transition"]=b["-webkit-transition"];d.style["-moz-transition"]=b["-moz-transition"];d.style["-ms-transition"]=b["-ms-transition"];d.style["-o-transition"]=b["-o-transition"];d.style.transition=b.transition;e.style["-webkit-transition"]=c["-webkit-transition"];e.style["-moz-transition"]=c["-moz-transition"];e.style["-ms-transition"]=c["-ms-transition"];e.style["-o-transition"]=c["-o-transition"];e.style.transition=c.transition}function ab(c,b){if(c.display==="none"){return false}if(b.fade){return true}if(!b.transform){return false}else{if(b.transform===aj){return false}else{return true}}}function R(b,e,k,m,h,j,f){var l;if(ab(m,h[0])){l=e;c()}else{if(ab(k,h[1])){l=b;c()}else{setTimeout(g,j)}}function c(){l.addEventListener("webkitTransitionEnd",g,false);l.addEventListener("transitionend",g,false);l.addEventListener("oTransitionEnd",g,false);l.addEventListener("otransitionend",g,false);l.addEventListener("MSTransitionEnd",g,false);l.addEventListener("transitionend",g,false)}function d(){l.removeEventListener("webkitTransitionEnd",g);l.removeEventListener("transitionend",g);l.removeEventListener("oTransitionEnd",g);l.removeEventListener("otransitionend",g);l.removeEventListener("MSTransitionEnd",g);l.removeEventListener("transitionend",g)}var i=false;function g(n){if(i||!n||!n.target||(n.target!==l)){return}i=true;if(l){d()}f()}}return Q}(Swapper._os,Swapper._isNode,Swapper._isInDOM,Swapper._insertBefore,Swapper._insertAfter,Swapper._removeNode,Swapper._setTransform,Swapper._setTransition,Swapper._getStyles,Swapper._transitions,Swapper._easings,Swapper._validate,window,document);var Clickable=function(f,d){function e(){e._enableClicking.apply(this,arguments)}e.touchable=function(){return e._os.touchable};e.sticky=function(){e._enableStickyClick.apply(this,arguments)};if(d&&d.fn){d.fn.clickable=function(b){this.each(function(){e._enableClicking(this,b)});return this};d.fn.stickyClick=function(b){this.each(function(){e._enableStickyClick(this,b)});return this}}if(f&&f.fn){f.extend(f.fn,{clickable:function(b){this.forEach(function(c){e._enableClicking(c,b)});return this},stickyClick:function(b){this.forEach(function(c){e._enableStickyClick(c,b)});return this}})}return e}(window.Zepto,window.jQuery);Clickable._os=function(i,k){var l,h,g;if(g=/\bCPU.*OS (\d+(_\d+)?)/i.exec(i)){l="ios";h=g[1].replace("_",".")}else{if(g=/\bAndroid (\d+(\.\d+)?)/.exec(i)){l="android";h=g[1]}}var j={name:l,version:h&&k(h),touchable:!!l};j[l]=true;return j}(navigator.userAgent,parseFloat);Clickable._trimString=function(d){var c=/^\s+|\s+$/g;return function(b){return d(b).replace(c,"")}}(String);Clickable._isDOMNode=function(d,c){return function(b){if(!b){return false}try{return(b instanceof d)||(b instanceof c)}catch(e){}if(typeof b!=="object"){return false}if(typeof b.nodeType!=="number"){return false}if(typeof b.nodeName!=="string"){return false}return true}}(Node,HTMLElement);Clickable._isInDOM=function(){return function(b){while(b=b.parentNode){if(b===document){return true}}return false}}();Clickable._bindEvents=function(){return function(f,d){for(var e in d){if(f.addEventListener){f.addEventListener(e,d[e],false)}else{if(f.attachEvent){f.attachEvent("on"+e,d[e])}}}}}();Clickable._unbindEvents=function(){return function(f,d){for(var e in d){if(f.removeEventListener){f.removeEventListener(e,d[e])}}}}();Clickable._addClass=function(){return function(c,d){c.className+=" "+d}}();Clickable._removeClass=function(b){return function(e,d){e.className=b(e.className.replace(new RegExp("\\b"+d+"\\b"),""))}}(Clickable._trimString);Clickable._enableClicking=function(y,r,F,A,D,v,s){var x="active",t="data-clickable-class",z=40;var q=false,u=!!y.ios;function E(f,c){if(!r(f)){throw TypeError("element "+f+" must be a DOM element")}if(f._clickable){return}f._clickable=true;switch(typeof c){case"undefined":c=x;break;case"string":break;default:throw TypeError("active class "+c+" must be a string")}var S=false,Z=false,o,R,j,h,V;f.setAttribute(t,c);f.style["-webkit-tap-highlight-color"]="rgba(255,255,255,0)";p();return;function e(H,G){S=true;j=+new Date();o=H;R=G;h=w(f);if(h){V=h.scrollTop;h.addEventListener("scroll",aa,true)}}function l(){if(h){h.removeEventListener("scroll",aa)}h=null;V=null;o=null;R=null;S=false}function aa(){Y()}function b(){return S}function T(){v(f,c)}function X(){s(f,c)}function p(){A(f,{click:k});if(!y.touchable){A(f,{mousedown:W,mousemove:U,mouseout:U,mouseup:g});return}if(y.ios){A(f,{DOMNodeInsertedIntoDocument:d,DOMNodeRemovedFromDocument:i});if(F(f)){d()}}else{d()}}function d(){A(f,{touchstart:n,touchmove:m,touchcancel:Y,touchend:Q})}function i(){D(f,{touchstart:n,touchmove:m,touchcancel:Y,touchend:Q})}function k(G){G=G||window.event;if(!f.disabled&&Z){Z=false;setTimeout(function(){q=false},0)}else{if(G.stopImmediatePropagation){G.stopImmediatePropagation()}G.preventDefault();G.stopPropagation();G.cancelBubble=true;G.returnValue=false;return false}}function W(G){Z=false;if(f.disabled||!B(G.target,f)){G.preventDefault();l();return}e(G.clientX,G.clientY);T()}function U(G){G.preventDefault();l();Z=false;X()}function g(G){if(f.disabled){G.preventDefault();l();Z=false;return}if(!b()){G.preventDefault();Z=false}else{Z=true}l();X()}function n(H){Z=false;if(q||f.disabled||(H.touches.length!==1)||!B(H.target,f)){l();return}q=true;var G=H.changedTouches[0];e(G.clientX,G.clientY);if(h){if(h._isScrolling||(V<0)||(h.scrollHeight<V)){l();return}}var G=j;setTimeout(function(){if(b()&&(G===j)){T()}},z)}function Y(G){Z=false;l();if(G){q=false}if(f.disabled){return}X()}function m(G){var H=document.elementFromPoint(G.touches[0].pageX,G.touches[0].pageY);if(f!==H){Y(G)}}function Q(H){var L=b(),K=h,J=V,M=o,G=R;Y();if(!L||f.disabled){q=false;return}if(K){if(K._isScrolling||(K.scrollTop!==J)){return}}if(!H.stopImmediatePropagation){Z=true;return}var I=+new Date()-j;if(I>z){Z=true;C(f,M,G)}else{T();setTimeout(function(){X();Z=true;C(f,M,G)},1)}}}function B(b,c){do{if(b===c){return true}else{if(b._clickable){return false}}}while(b=b.parentNode);return false}function C(c,e,b){var d=document.createEvent("MouseEvents");d.initMouseEvent("click",true,true,window,1,e||0,b||0,e||0,b||0,false,false,false,false,0,null);c.dispatchEvent(d)}function w(b){if(!y.ios||(y.version<5)){return}while(b=b.parentNode){if(b._scrollable){if(b._iScroll){return}return b}}}return E}(Clickable._os,Clickable._isDOMNode,Clickable._isInDOM,Clickable._bindEvents,Clickable._unbindEvents,Clickable._addClass,Clickable._removeClass);Clickable._enableStickyClick=function(h,l,i){var k="data-clickable-class";function j(b,c,d){if(!l(b)){throw TypeError("button must be a DOM element, got "+b)}switch(typeof c){case"string":break;case"function":d=c;c=undefined;break;default:throw TypeError("button active class must be a string if defined, got "+c)}if(typeof d!=="function"){throw TypeError("sticky click handler must be a function, got "+d)}i(b,c);b.addEventListener("click",g(b,d),false)}function g(c,d){var b=false,e=c.getAttribute(k);return function(){if(b){return}b=true;var p=false,q;c.disabled=true;c.className+=" "+e;try{q=d.call(c,f)}catch(o){if(window.console&&window.console.error){if((typeof o==="object")&&o.stack){window.console.error(o.stack)}else{window.console.error(o+"")}}f()}if(q===false){f()}function f(){if(p){return}p=true;b=false;if(c.disabled){c.disabled=false;c.className=h(c.className.replace(new RegExp("\\b"+e+"\\b","g"),""))}}}}return j}(Clickable._trimString,Clickable._isDOMNode,Clickable._enableClicking);var iScroll=function(u,f){function C(b){if(""===v){return b}b=b.charAt(0).toUpperCase()+b.substr(1);return v+b}var t=Math,s=f.createElement("div").style,v;a:{for(var z=["t","webkitT","MozT","msT","OT"],h,j=0,x=z.length;j<x;j++){if(h=z[j]+"ransform",h in s){v=z[j].substr(0,z[j].length-1);break a}}v=!1}var y=v?"-"+v.toLowerCase()+"-":"",B=C("transform"),D=C("transitionProperty"),K=C("transitionDuration"),G=C("transformOrigin"),I=C("transitionTimingFunction"),A=C("transitionDelay"),E=/android/gi.test(navigator.appVersion),l=/iphone|ipad/gi.test(navigator.appVersion),z=/hp-tablet/gi.test(navigator.appVersion),m=C("perspective") in s,w="ontouchstart" in u&&!z,o=!!v,J=C("transition") in s,F="onorientationchange" in u?"orientationchange":"resize",M=w?"touchstart":"mousedown",n=w?"touchmove":"mousemove",p=w?"touchend":"mouseup",q=w?"touchcancel":"mouseup",N="Moz"==v?"DOMMouseScroll":"mousewheel",O;O=!1===v?!1:{"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"oTransitionEnd",ms:"MSTransitionEnd"}[v];var L=u.requestAnimationFrame||u.webkitRequestAnimationFrame||u.mozRequestAnimationFrame||u.oRequestAnimationFrame||u.msRequestAnimationFrame||function(b){return setTimeout(b,1)},r=u.cancelRequestAnimationFrame||u.webkitCancelAnimationFrame||u.webkitCancelRequestAnimationFrame||u.mozCancelRequestAnimationFrame||u.oCancelRequestAnimationFrame||u.msCancelRequestAnimationFrame||clearTimeout,H=m?" translateZ(0)":"",z=function(e,d){var b=this,c;b.wrapper="object"==typeof e?e:f.getElementById(e);b.wrapper.style.overflow="hidden";b.scroller=b.wrapper.children[0];b.options={hScroll:!0,vScroll:!0,x:0,y:0,bounce:!0,bounceLock:!1,momentum:!0,lockDirection:!0,useTransform:!0,useTransition:!1,topOffset:0,checkDOMChanges:!1,handleClick:!0,hScrollbar:!0,vScrollbar:!0,fixedScrollbar:E,hideScrollbar:l,fadeScrollbar:l&&m,scrollbarClass:"",zoom:!1,zoomMin:1,zoomMax:4,doubleTapZoom:2,wheelAction:"scroll",snap:!1,snapThreshold:1,onRefresh:null,onBeforeScrollStart:function(g){g.preventDefault()},onScrollStart:null,onBeforeScrollMove:null,onScrollMove:null,onBeforeScrollEnd:null,onScrollEnd:null,onTouchEnd:null,onDestroy:null,onZoomStart:null,onZoom:null,onZoomEnd:null};for(c in d){b.options[c]=d[c]}b.x=b.options.x;b.y=b.options.y;b.options.useTransform=o&&b.options.useTransform;b.options.hScrollbar=b.options.hScroll&&b.options.hScrollbar;b.options.vScrollbar=b.options.vScroll&&b.options.vScrollbar;b.options.zoom=b.options.useTransform&&b.options.zoom;b.options.useTransition=J&&b.options.useTransition;b.options.zoom&&E&&(H="");b.scroller.style[D]=b.options.useTransform?y+"transform":"top left";b.scroller.style[K]="0";b.scroller.style[G]="0 0";b.options.useTransition&&(b.scroller.style[I]="cubic-bezier(0.33,0.66,0.66,1)");b.options.useTransform?b.scroller.style[B]="translate("+b.x+"px,"+b.y+"px)"+H:b.scroller.style.cssText+=";position:absolute;top:"+b.y+"px;left:"+b.x+"px";b.options.useTransition&&(b.options.fixedScrollbar=!0);b.refresh();b._bind(F,u);b._bind(M);w||(b._bind("mouseout",b.wrapper),"none"!=b.options.wheelAction&&b._bind(N));b.options.checkDOMChanges&&(b.checkDOMTime=setInterval(function(){b._checkDOMChanges()},500))};z.prototype={enabled:!0,x:0,y:0,steps:[],scale:1,currPageX:0,currPageY:0,pagesX:[],pagesY:[],aniTime:null,wheelZoomCount:0,handleEvent:function(b){switch(b.type){case M:if(!w&&0!==b.button){break}this._start(b);break;case n:this._move(b);break;case p:case q:this._end(b);break;case F:this._resize();break;case N:this._wheel(b);break;case"mouseout":this._mouseout(b);break;case O:this._transitionEnd(b)}},_checkDOMChanges:function(){!this.moved&&(!this.zoomed&&!(this.animating||this.scrollerW==this.scroller.offsetWidth*this.scale&&this.scrollerH==this.scroller.offsetHeight*this.scale))&&this.refresh()},_scrollbar:function(c){var b;this[c+"Scrollbar"]?(this[c+"ScrollbarWrapper"]||(b=f.createElement("div"),this.options.scrollbarClass?b.className=this.options.scrollbarClass+c.toUpperCase():b.style.cssText="position:absolute;z-index:100;"+("h"==c?"height:7px;bottom:1px;left:2px;right:"+(this.vScrollbar?"7":"2")+"px":"width:7px;bottom:"+(this.hScrollbar?"7":"2")+"px;top:2px;right:1px"),b.style.cssText+=";pointer-events:none;"+y+"transition-property:opacity;"+y+"transition-duration:"+(this.options.fadeScrollbar?"350ms":"0")+";overflow:hidden;opacity:"+(this.options.hideScrollbar?"0":"1"),this.wrapper.appendChild(b),this[c+"ScrollbarWrapper"]=b,b=f.createElement("div"),this.options.scrollbarClass||(b.style.cssText="position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);"+y+"background-clip:padding-box;"+y+"box-sizing:border-box;"+("h"==c?"height:100%":"width:100%")+";"+y+"border-radius:3px;border-radius:3px"),b.style.cssText+=";pointer-events:none;"+y+"transition-property:"+y+"transform;"+y+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);"+y+"transition-duration:0;"+y+"transform: translate(0,0)"+H,this.options.useTransition&&(b.style.cssText+=";"+y+"transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),this[c+"ScrollbarWrapper"].appendChild(b),this[c+"ScrollbarIndicator"]=b),"h"==c?(this.hScrollbarSize=this.hScrollbarWrapper.clientWidth,this.hScrollbarIndicatorSize=t.max(t.round(this.hScrollbarSize*this.hScrollbarSize/this.scrollerW),8),this.hScrollbarIndicator.style.width=this.hScrollbarIndicatorSize+"px",this.hScrollbarMaxScroll=this.hScrollbarSize-this.hScrollbarIndicatorSize,this.hScrollbarProp=this.hScrollbarMaxScroll/this.maxScrollX):(this.vScrollbarSize=this.vScrollbarWrapper.clientHeight,this.vScrollbarIndicatorSize=t.max(t.round(this.vScrollbarSize*this.vScrollbarSize/this.scrollerH),8),this.vScrollbarIndicator.style.height=this.vScrollbarIndicatorSize+"px",this.vScrollbarMaxScroll=this.vScrollbarSize-this.vScrollbarIndicatorSize,this.vScrollbarProp=this.vScrollbarMaxScroll/this.maxScrollY),this._scrollbarPos(c,!0)):this[c+"ScrollbarWrapper"]&&(o&&(this[c+"ScrollbarIndicator"].style[B]=""),this[c+"ScrollbarWrapper"].parentNode.removeChild(this[c+"ScrollbarWrapper"]),this[c+"ScrollbarWrapper"]=null,this[c+"ScrollbarIndicator"]=null)},_resize:function(){var b=this;setTimeout(function(){b.refresh()},E?200:0)},_pos:function(c,b){this.zoomed||(c=this.hScroll?c:0,b=this.vScroll?b:0,this.options.useTransform?this.scroller.style[B]="translate("+c+"px,"+b+"px) scale("+this.scale+")"+H:(c=t.round(c),b=t.round(b),this.scroller.style.left=c+"px",this.scroller.style.top=b+"px"),this.x=c,this.y=b,this._scrollbarPos("h"),this._scrollbarPos("v"))},_scrollbarPos:function(d,c){var b="h"==d?this.x:this.y;this[d+"Scrollbar"]&&(b*=this[d+"ScrollbarProp"],0>b?(this.options.fixedScrollbar||(b=this[d+"ScrollbarIndicatorSize"]+t.round(3*b),8>b&&(b=8),this[d+"ScrollbarIndicator"].style["h"==d?"width":"height"]=b+"px"),b=0):b>this[d+"ScrollbarMaxScroll"]&&(this.options.fixedScrollbar?b=this[d+"ScrollbarMaxScroll"]:(b=this[d+"ScrollbarIndicatorSize"]-t.round(3*(b-this[d+"ScrollbarMaxScroll"])),8>b&&(b=8),this[d+"ScrollbarIndicator"].style["h"==d?"width":"height"]=b+"px",b=this[d+"ScrollbarMaxScroll"]+(this[d+"ScrollbarIndicatorSize"]-b))),this[d+"ScrollbarWrapper"].style[A]="0",this[d+"ScrollbarWrapper"].style.opacity=c&&this.options.hideScrollbar?"0":"1",this[d+"ScrollbarIndicator"].style[B]="translate("+("h"==d?b+"px,0)":"0,"+b+"px)")+H)},_start:function(e){var d=w?e.touches[0]:e,b,c;if(this.enabled){this.options.onBeforeScrollStart&&this.options.onBeforeScrollStart.call(this,e);(this.options.useTransition||this.options.zoom)&&this._transitionTime(0);this.zoomed=this.animating=this.moved=!1;this.dirY=this.dirX=this.absDistY=this.absDistX=this.distY=this.distX=0;this.options.zoom&&(w&&1<e.touches.length)&&(c=t.abs(e.touches[0].pageX-e.touches[1].pageX),b=t.abs(e.touches[0].pageY-e.touches[1].pageY),this.touchesDistStart=t.sqrt(c*c+b*b),this.originX=t.abs(e.touches[0].pageX+e.touches[1].pageX-2*this.wrapperOffsetLeft)/2-this.x,this.originY=t.abs(e.touches[0].pageY+e.touches[1].pageY-2*this.wrapperOffsetTop)/2-this.y,this.options.onZoomStart&&this.options.onZoomStart.call(this,e));if(this.options.momentum&&(this.options.useTransform?(b=getComputedStyle(this.scroller,null)[B].replace(/[^0-9\-.,]/g,"").split(","),c=1*b[4],b=1*b[5]):(c=1*getComputedStyle(this.scroller,null).left.replace(/[^0-9-]/g,""),b=1*getComputedStyle(this.scroller,null).top.replace(/[^0-9-]/g,"")),c!=this.x||b!=this.y)){this.options.useTransition?this._unbind(O):r(this.aniTime),this.steps=[],this._pos(c,b)}this.absStartX=this.x;this.absStartY=this.y;this.startX=this.x;this.startY=this.y;this.pointX=d.pageX;this.pointY=d.pageY;this.startTime=e.timeStamp||Date.now();this.options.onScrollStart&&this.options.onScrollStart.call(this,e);this._bind(n);this._bind(p);this._bind(q)}},_move:function(g){var e=w?g.touches[0]:g,i=e.pageX-this.pointX,k=e.pageY-this.pointY,b=this.x+i,c=this.y+k,d=g.timeStamp||Date.now();this.options.onBeforeScrollMove&&this.options.onBeforeScrollMove.call(this,g);if(this.options.zoom&&w&&1<g.touches.length){b=t.abs(g.touches[0].pageX-g.touches[1].pageX),c=t.abs(g.touches[0].pageY-g.touches[1].pageY),this.touchesDist=t.sqrt(b*b+c*c),this.zoomed=!0,e=1/this.touchesDistStart*this.touchesDist*this.scale,e<this.options.zoomMin?e=0.5*this.options.zoomMin*Math.pow(2,e/this.options.zoomMin):e>this.options.zoomMax&&(e=2*this.options.zoomMax*Math.pow(0.5,this.options.zoomMax/e)),this.lastScale=e/this.scale,b=this.originX-this.originX*this.lastScale+this.x,c=this.originY-this.originY*this.lastScale+this.y,this.scroller.style[B]="translate("+b+"px,"+c+"px) scale("+e+")"+H,this.options.onZoom&&this.options.onZoom.call(this,g)}else{this.pointX=e.pageX;this.pointY=e.pageY;if(0<b||b<this.maxScrollX){b=this.options.bounce?this.x+i/2:0<=b||0<=this.maxScrollX?0:this.maxScrollX}if(c>this.minScrollY||c<this.maxScrollY){c=this.options.bounce?this.y+k/2:c>=this.minScrollY||0<=this.maxScrollY?this.minScrollY:this.maxScrollY}this.distX+=i;this.distY+=k;this.absDistX=t.abs(this.distX);this.absDistY=t.abs(this.distY);6>this.absDistX&&6>this.absDistY||(this.options.lockDirection&&(this.absDistX>this.absDistY+5?(c=this.y,k=0):this.absDistY>this.absDistX+5&&(b=this.x,i=0)),this.moved=!0,this._pos(b,c),this.dirX=0<i?-1:0>i?1:0,this.dirY=0<k?-1:0>k?1:0,300<d-this.startTime&&(this.startTime=d,this.startX=this.x,this.startY=this.y),this.options.onScrollMove&&this.options.onScrollMove.call(this,g))}},_end:function(R){if(!(w&&0!==R.touches.length)){var Q=this,b=w?R.changedTouches[0]:R,c,d,e={dist:0,time:0},i={dist:0,time:0},g=(R.timeStamp||Date.now())-Q.startTime,P=Q.x,k=Q.y;Q._unbind(n);Q._unbind(p);Q._unbind(q);Q.options.onBeforeScrollEnd&&Q.options.onBeforeScrollEnd.call(Q,R);if(Q.zoomed){P=Q.scale*Q.lastScale,P=Math.max(Q.options.zoomMin,P),P=Math.min(Q.options.zoomMax,P),Q.lastScale=P/Q.scale,Q.scale=P,Q.x=Q.originX-Q.originX*Q.lastScale+Q.x,Q.y=Q.originY-Q.originY*Q.lastScale+Q.y,Q.scroller.style[K]="200ms",Q.scroller.style[B]="translate("+Q.x+"px,"+Q.y+"px) scale("+Q.scale+")"+H,Q.zoomed=!1,Q.refresh(),Q.options.onZoomEnd&&Q.options.onZoomEnd.call(Q,R)}else{if(Q.moved){if(300>g&&Q.options.momentum){e=P?Q._momentum(P-Q.startX,g,-Q.x,Q.scrollerW-Q.wrapperW+Q.x,Q.options.bounce?Q.wrapperW:0):e;i=k?Q._momentum(k-Q.startY,g,-Q.y,0>Q.maxScrollY?Q.scrollerH-Q.wrapperH+Q.y-Q.minScrollY:0,Q.options.bounce?Q.wrapperH:0):i;P=Q.x+e.dist;k=Q.y+i.dist;if(0<Q.x&&0<P||Q.x<Q.maxScrollX&&P<Q.maxScrollX){e={dist:0,time:0}}if(Q.y>Q.minScrollY&&k>Q.minScrollY||Q.y<Q.maxScrollY&&k<Q.maxScrollY){i={dist:0,time:0}}}e.dist||i.dist?(e=t.max(t.max(e.time,i.time),10),Q.options.snap&&(i=P-Q.absStartX,g=k-Q.absStartY,t.abs(i)<Q.options.snapThreshold&&t.abs(g)<Q.options.snapThreshold?Q.scrollTo(Q.absStartX,Q.absStartY,200):(i=Q._snap(P,k),P=i.x,k=i.y,e=t.max(i.time,e))),Q.scrollTo(t.round(P),t.round(k),e)):Q.options.snap?(i=P-Q.absStartX,g=k-Q.absStartY,t.abs(i)<Q.options.snapThreshold&&t.abs(g)<Q.options.snapThreshold?Q.scrollTo(Q.absStartX,Q.absStartY,200):(i=Q._snap(Q.x,Q.y),(i.x!=Q.x||i.y!=Q.y)&&Q.scrollTo(i.x,i.y,i.time))):Q._resetPos(200)}else{w&&(Q.doubleTapTimer&&Q.options.zoom?(clearTimeout(Q.doubleTapTimer),Q.doubleTapTimer=null,Q.options.onZoomStart&&Q.options.onZoomStart.call(Q,R),Q.zoom(Q.pointX,Q.pointY,1==Q.scale?Q.options.doubleTapZoom:1),Q.options.onZoomEnd&&setTimeout(function(){Q.options.onZoomEnd.call(Q,R)},200)):this.options.handleClick&&(Q.doubleTapTimer=setTimeout(function(){Q.doubleTapTimer=null;for(c=b.target;1!=c.nodeType;){c=c.parentNode}"SELECT"!=c.tagName&&("INPUT"!=c.tagName&&"TEXTAREA"!=c.tagName)&&(d=f.createEvent("MouseEvents"),d.initMouseEvent("click",!0,!0,R.view,1,b.screenX,b.screenY,b.clientX,b.clientY,R.ctrlKey,R.altKey,R.shiftKey,R.metaKey,0,null),d._fake=!0,c.dispatchEvent(d))},Q.options.zoom?250:0))),Q._resetPos(200)}Q.options.onTouchEnd&&Q.options.onTouchEnd.call(Q,R)}}},_resetPos:function(d){var c=0<=this.x?0:this.x<this.maxScrollX?this.maxScrollX:this.x,b=this.y>=this.minScrollY||0<this.maxScrollY?this.minScrollY:this.y<this.maxScrollY?this.maxScrollY:this.y;if(c==this.x&&b==this.y){if(this.moved&&(this.moved=!1,this.options.onScrollEnd&&this.options.onScrollEnd.call(this)),this.hScrollbar&&this.options.hideScrollbar&&("webkit"==v&&(this.hScrollbarWrapper.style[A]="300ms"),this.hScrollbarWrapper.style.opacity="0"),this.vScrollbar&&this.options.hideScrollbar){"webkit"==v&&(this.vScrollbarWrapper.style[A]="300ms"),this.vScrollbarWrapper.style.opacity="0"}}else{this.scrollTo(c,b,d||0)}},_wheel:function(e){var d=this,b,c;if("wheelDeltaX" in e){b=e.wheelDeltaX/12,c=e.wheelDeltaY/12}else{if("wheelDelta" in e){b=c=e.wheelDelta/12}else{if("detail" in e){b=c=3*-e.detail}else{return}}}if("zoom"==d.options.wheelAction){if(c=d.scale*Math.pow(2,1/3*(c?c/Math.abs(c):0)),c<d.options.zoomMin&&(c=d.options.zoomMin),c>d.options.zoomMax&&(c=d.options.zoomMax),c!=d.scale){!d.wheelZoomCount&&d.options.onZoomStart&&d.options.onZoomStart.call(d,e),d.wheelZoomCount++,d.zoom(e.pageX,e.pageY,c,400),setTimeout(function(){d.wheelZoomCount--;!d.wheelZoomCount&&d.options.onZoomEnd&&d.options.onZoomEnd.call(d,e)},400)}}else{b=d.x+b,c=d.y+c,0<b?b=0:b<d.maxScrollX&&(b=d.maxScrollX),c>d.minScrollY?c=d.minScrollY:c<d.maxScrollY&&(c=d.maxScrollY),0>d.maxScrollY&&d.scrollTo(b,c,0)}},_mouseout:function(c){var b=c.relatedTarget;if(b){for(;b=b.parentNode;){if(b==this.wrapper){return}}}this._end(c)},_transitionEnd:function(b){b.target==this.scroller&&(this._unbind(O),this._startAni())},_startAni:function(){var g=this,e=g.x,i=g.y,k=Date.now(),b,c,d;g.animating||(g.steps.length?(b=g.steps.shift(),b.x==e&&b.y==i&&(b.time=0),g.animating=!0,g.moved=!0,g.options.useTransition)?(g._transitionTime(b.time),g._pos(b.x,b.y),g.animating=!1,b.time?g._bind(O):g._resetPos(0)):(d=function(){var P=Date.now(),Q;if(P>=k+b.time){g._pos(b.x,b.y);g.animating=false;g.options.onAnimationEnd&&g.options.onAnimationEnd.call(g);g._startAni()}else{P=(P-k)/b.time-1;c=t.sqrt(1-P*P);P=(b.x-e)*c+e;Q=(b.y-i)*c+i;g._pos(P,Q);if(g.animating){g.aniTime=L(d)}}},d()):g._resetPos(400))},_transitionTime:function(b){b+="ms";this.scroller.style[K]=b;this.hScrollbar&&(this.hScrollbarIndicator.style[K]=b);this.vScrollbar&&(this.vScrollbarIndicator.style[K]=b)},_momentum:function(g,e,i,b,c){var e=t.abs(g)/e,d=e*e/0.0012;0<g&&d>i?(i+=c/(6/(0.0006*(d/e))),e=e*i/d,d=i):0>g&&d>b&&(b+=c/(6/(0.0006*(d/e))),e=e*b/d,d=b);return{dist:d*(0>g?-1:1),time:t.round(e/0.0006)}},_offset:function(d){for(var c=-d.offsetLeft,b=-d.offsetTop;d=d.offsetParent;){c-=d.offsetLeft,b-=d.offsetTop}d!=this.wrapper&&(c*=this.scale,b*=this.scale);return{left:c,top:b}},_snap:function(g,e){var b,c,d;d=this.pagesX.length-1;b=0;for(c=this.pagesX.length;b<c;b++){if(g>=this.pagesX[b]){d=b;break}}d==this.currPageX&&(0<d&&0>this.dirX)&&d--;g=this.pagesX[d];c=(c=t.abs(g-this.pagesX[this.currPageX]))?500*(t.abs(this.x-g)/c):0;this.currPageX=d;d=this.pagesY.length-1;for(b=0;b<d;b++){if(e>=this.pagesY[b]){d=b;break}}d==this.currPageY&&(0<d&&0>this.dirY)&&d--;e=this.pagesY[d];b=(b=t.abs(e-this.pagesY[this.currPageY]))?500*(t.abs(this.y-e)/b):0;this.currPageY=d;d=t.round(t.max(c,b))||200;return{x:g,y:e,time:d}},_bind:function(d,c,b){(c||this.scroller).addEventListener(d,this,!!b)},_unbind:function(d,c,b){(c||this.scroller).removeEventListener(d,this,!!b)},destroy:function(){this.scroller.style[B]="";this.vScrollbar=this.hScrollbar=!1;this._scrollbar("h");this._scrollbar("v");this._unbind(F,u);this._unbind(M);this._unbind(n);this._unbind(p);this._unbind(q);this.options.hasTouch||(this._unbind("mouseout",this.wrapper),this._unbind(N));this.options.useTransition&&this._unbind(O);this.options.checkDOMChanges&&clearInterval(this.checkDOMTime);this.options.onDestroy&&this.options.onDestroy.call(this)},refresh:function(){var e,d,b,c=0;d=0;this.scale<this.options.zoomMin&&(this.scale=this.options.zoomMin);this.wrapperW=this.wrapper.clientWidth||1;this.wrapperH=this.wrapper.clientHeight||1;this.minScrollY=-this.options.topOffset||0;this.scrollerW=t.round(this.scroller.offsetWidth*this.scale);this.scrollerH=t.round((this.scroller.offsetHeight+this.minScrollY)*this.scale);this.maxScrollX=this.wrapperW-this.scrollerW;this.maxScrollY=this.wrapperH-this.scrollerH+this.minScrollY;this.dirY=this.dirX=0;this.options.onRefresh&&this.options.onRefresh.call(this);this.hScroll=this.options.hScroll&&0>this.maxScrollX;this.vScroll=this.options.vScroll&&(!this.options.bounceLock&&!this.hScroll||this.scrollerH>this.wrapperH);this.hScrollbar=this.hScroll&&this.options.hScrollbar;this.vScrollbar=this.vScroll&&this.options.vScrollbar&&this.scrollerH>this.wrapperH;e=this._offset(this.wrapper);this.wrapperOffsetLeft=-e.left;this.wrapperOffsetTop=-e.top;if("string"==typeof this.options.snap){this.pagesX=[];this.pagesY=[];b=this.scroller.querySelectorAll(this.options.snap);e=0;for(d=b.length;e<d;e++){c=this._offset(b[e]),c.left+=this.wrapperOffsetLeft,c.top+=this.wrapperOffsetTop,this.pagesX[e]=c.left<this.maxScrollX?this.maxScrollX:c.left*this.scale,this.pagesY[e]=c.top<this.maxScrollY?this.maxScrollY:c.top*this.scale}}else{if(this.options.snap){for(this.pagesX=[];c>=this.maxScrollX;){this.pagesX[d]=c,c-=this.wrapperW,d++}this.maxScrollX%this.wrapperW&&(this.pagesX[this.pagesX.length]=this.maxScrollX-this.pagesX[this.pagesX.length-1]+this.pagesX[this.pagesX.length-1]);d=c=0;for(this.pagesY=[];c>=this.maxScrollY;){this.pagesY[d]=c,c-=this.wrapperH,d++}this.maxScrollY%this.wrapperH&&(this.pagesY[this.pagesY.length]=this.maxScrollY-this.pagesY[this.pagesY.length-1]+this.pagesY[this.pagesY.length-1])}}this._scrollbar("h");this._scrollbar("v");this.zoomed||(this.scroller.style[K]="0",this._resetPos(200))},scrollTo:function(g,e,b,c){var d=g;this.stop();d.length||(d=[{x:g,y:e,time:b,relative:c}]);g=0;for(e=d.length;g<e;g++){d[g].relative&&(d[g].x=this.x-d[g].x,d[g].y=this.y-d[g].y),this.steps.push({x:d[g].x,y:d[g].y,time:d[g].time||0})}this._startAni()},scrollToElement:function(d,c){var b;if(d=d.nodeType?d:this.scroller.querySelector(d)){b=this._offset(d),b.left+=this.wrapperOffsetLeft,b.top+=this.wrapperOffsetTop,b.left=0<b.left?0:b.left<this.maxScrollX?this.maxScrollX:b.left,b.top=b.top>this.minScrollY?this.minScrollY:b.top<this.maxScrollY?this.maxScrollY:b.top,c=void 0===c?t.max(2*t.abs(b.left),2*t.abs(b.top)):c,this.scrollTo(b.left,b.top,c)}},scrollToPage:function(d,c,b){b=void 0===b?400:b;this.options.onScrollStart&&this.options.onScrollStart.call(this);if(this.options.snap){d="next"==d?this.currPageX+1:"prev"==d?this.currPageX-1:d,c="next"==c?this.currPageY+1:"prev"==c?this.currPageY-1:c,d=0>d?0:d>this.pagesX.length-1?this.pagesX.length-1:d,c=0>c?0:c>this.pagesY.length-1?this.pagesY.length-1:c,this.currPageX=d,this.currPageY=c,d=this.pagesX[d],c=this.pagesY[c]}else{if(d*=-this.wrapperW,c*=-this.wrapperH,d<this.maxScrollX&&(d=this.maxScrollX),c<this.maxScrollY){c=this.maxScrollY}}this.scrollTo(d,c,b)},disable:function(){this.stop();this._resetPos(0);this.enabled=!1;this._unbind(n);this._unbind(p);this._unbind(q)},enable:function(){this.enabled=!0},stop:function(){this.options.useTransition?this._unbind(O):r(this.aniTime);this.steps=[];this.animating=this.moved=!1},zoom:function(g,e,b,c){var d=b/this.scale;this.options.useTransform&&(this.zoomed=!0,c=void 0===c?200:c,g=g-this.wrapperOffsetLeft-this.x,e=e-this.wrapperOffsetTop-this.y,this.x=g-g*d+this.x,this.y=e-e*d+this.y,this.scale=b,this.refresh(),this.x=0<this.x?0:this.x<this.maxScrollX?this.maxScrollX:this.x,this.y=this.y>this.minScrollY?this.minScrollY:this.y<this.maxScrollY?this.maxScrollY:this.y,this.scroller.style[K]=c+"ms",this.scroller.style[B]="translate("+this.x+"px,"+this.y+"px) scale("+b+")"+H,this.zoomed=!1)},isReady:function(){return !this.moved&&!this.zoomed&&!this.animating}};s=null;return z}(window,document);var Scrollable=function(j,k){function i(){i._enableScrolling.apply(this,arguments)}i.node=function(){return i._getScrollableNode.apply(this,arguments)};i.infinite=function(){return i._enableInfiniteScrolling.apply(this,arguments)};if(j&&j.fn){j.extend(j.fn,{scrollable:function(b){this.forEach(function(c){i._enableScrolling(c,b)});return this},scrollableNode:function(){return j(this.map(function(){return i._getScrollableNode(this)}))},scrollableInfinite:function(c,b){var d;this.forEach(function(e){var f=i._enableInfiniteScrolling(e,c,b);if(!d){d=f}});return d}});var n=j.fn.scrollTop,l=j.fn.scrollLeft;j.fn.scrollTop=function(b){if(typeof b==="undefined"){var d=this[0],c=i._isDOMNode(d);if(c&&d._scrollTop){return d._scrollTop()}else{if(n){return n.apply(this,arguments)}else{if(c){return d.scrollTop}else{return null}}}}this.forEach(function(f){var e=i._isDOMNode(f);if(e&&f._scrollTop){f._scrollTop(b)}else{if(n){n.call(j(f),b)}else{if(e){f.scrollTop=b}}}});return this};j.fn.scrollLeft=function(b){if(typeof b==="undefined"){var d=this[0],c=i._isDOMNode(d);if(c&&d._scrollLeft){return d._scrollLeft()}else{if(n){return l.apply(this,arguments)}else{if(c){return d.scrollLeft}else{return null}}}}this.forEach(function(f){var e=i._isDOMNode(f);if(e&&f._scrollLeft){f._scrollLeft(b)}else{if(l){l.call(j(f),b)}else{if(e){f.scrollLeft=b}}}});return this}}if(k&&k.fn){k.fn.scrollable=function(b){this.each(function(){i._enableScrolling(this,b)});return this};k.fn.scrollableNode=function(){return k(this.map(function(){return i._getScrollableNode(this)}))};k.fn.scrollableInfinite=function(c,b){var d;this.each(function(){var e=i._enableInfiniteScrolling(this,c,b);if(!d){d=e}});return d};var o=k.fn.scrollTop,m=k.fn.scrollLeft;k.fn.scrollTop=function(b){if(typeof b==="undefined"){var c=this[0];if(i._isDOMNode(c)&&c._scrollTop){return c._scrollTop()}else{return o.apply(this,arguments)}}this.each(function(){if(i._isDOMNode(this)&&this._scrollTop){this._scrollTop(b)}else{o.call(k(this),b)}});return this};k.fn.scrollLeft=function(b){if(typeof b==="undefined"){var c=this[0];if(i._isDOMNode(c)&&c._scrollLeft){return c._scrollLeft()}else{return m.apply(this,arguments)}}this.each(function(){if(i._isDOMNode(this)&&this._scrollLeft){this._scrollLeft(b)}else{m.call(k(this),b)}});return this}}return i}(window.Zepto,window.jQuery);Scrollable._os=function(i,k){var l,h,m;if(m=/\bCPU.*OS (\d+(_\d+)?)/i.exec(i)){l="ios";h=m[1].replace("_",".")}else{if(m=/\bAndroid (\d+(\.\d+)?)/.exec(i)){l="android";h=m[1]}}var j={name:l,version:h&&k(h),mobile:!!l};j[l]=true;return j}(navigator.userAgent,parseFloat);Scrollable._isArray=function(c){return function(b){if(c){return c(b)}else{return Object.prototype.toString.call(b)!=="[object Array]"}}}(Array.isArray);Scrollable._isDOMNode=function(d,e){return function(b){if(!b){return false}try{return(b instanceof d)||(b instanceof e)}catch(c){}if(typeof b!=="object"){return false}if(typeof b.nodeType!=="number"){return false}if(typeof b.nodeName!=="string"){return false}return true}}(Node,HTMLElement);Scrollable._isjQueryElem=function(c){if(typeof c!=="object"||c===null){return false}else{return(c.val&&c.addClass&&c.css&&c.html&&c.show)}};Scrollable._findInArray=function(c){return function(j,h,b){if(c){return c.call(j,h,b)}for(var i=b||0,k=j.length;i<k;i++){if((i in j)&&(j[i]===h)){return i}}return -1}}(Array.prototype.indexOf);Scrollable._forEachInArray=function(c){return function(j,b,i){if(c){return c.call(j,b,i)}for(var h=0,k=j.length;h<k;h++){if(h in j){b.call(i,j[h],h,j)}}}}(Array.prototype.forEach);Scrollable._onReady=function(q,p,k){var l=[],m=false;o(n);return function(b){if(m){b()}else{l.push(b)}};function n(){if(m){return}m=true;k(l,function(b){setTimeout(b,0)})}function j(b){try{q.documentElement.doScroll("left")}catch(c){setTimeout(function(){j(b)},1);return}b()}function o(b){if(q.readyState==="complete"){setTimeout(b,0);return}if(q.addEventListener){q.addEventListener("DOMContentLoaded",b,false);p.addEventListener("load",b,false)}else{if(q.attachEvent){q.attachEvent("onreadystatechange",b);p.attachEvent("onload",b);var d=false;try{d=(p.frameElement===null)}catch(c){}if(q.documentElement.doScroll&&d){setTimeout(function(){j(b)},0)}}}}}(document,window,Scrollable._forEachInArray);Scrollable._scrollWatcher=function(d){return e;function e(t){var s=false,x=false,q=t.scrollTop;t.addEventListener("touchstart",u);t.addEventListener("touchmove",y);t.addEventListener("touchcancel",v);t.addEventListener("touchend",b);t.addEventListener("scroll",r);c();t._resetScrolling=w;return;function c(){t._isScrolling=(x||s)}function w(){x=false;s=false;c()}function p(f,g,h){if((f.touches.length<=g)&&((typeof h==="undefined")||(f.changedTouches.length<=h))){return false}f.preventDefault();w();return true}function u(f){if(p(f,1)){return}w()}function y(f){if(p(f,1)){return}s=true;q=t.scrollTop;c()}function v(f){if(p(f,0,1)){return}w()}function b(g){if(p(g,0,1)){return}var f;if(s){f=Math.abs(t.scrollTop-q);if(f>5){x=true}s=false;c()}}function r(){if(!s&&x){w()}}}}(Scrollable._os);Scrollable._enableScrolling=function(C,t,x,D,E,s,v,u){var y=z();return r;function z(){if((C.ios&&(C.version>=5))||(C.android&&(C.version>=4))){return true}else{return false}}function r(b,c){if(!t(b)){throw b+" is not a DOM element"}if(b._scrollable){return}b._scrollable=true;var d;b._scrollTop=function(f,e){if(typeof f==="undefined"){return d?Math.max(parseInt(-d.y),0):b.scrollTop}if(!d&&(!C.mobile||y)){b.scrollTop=f;e&&e();return}x(function(){d.scrollTo(d.x,Math.min(-f,0),1);e&&e()})};b._scrollLeft=function(e){if(typeof e==="undefined"){return d?Math.max(parseInt(-d.x),0):b.scrollLeft}if(!d&&(!C.mobile||y)){b.scrollLeft=e;return}x(function(){d.scrollTo(Math.min(-e,0),d.y,1)})};b.style.overflow="scroll";if(!c){if(!C.mobile){return}if(y){b.style["-webkit-overflow-scrolling"]="touch";if(C.ios){E(b)}return}}F(b,function(e){d=e})}function F(c,b){c._iScroll=true;w(c);var d=B(c);x(function(){var e=new s(c,{checkDOMChanges:true,useTransform:true,useTransition:true,hScrollbar:false,vScrollbar:false,bounce:!!C.ios,onScrollMove:d,onBeforeScrollEnd:d,onScrollEnd:function(){c._iScrolling=false;d()},onBeforeScrollStart:A,onScrollStart:function(){c._iScrolling=true}});c._iScroll=e;b(e)})}function w(c){var b=u.createElement("div"),d=Array.prototype.slice.call(c.childNodes||[]);D(d,function(e){var f=c.removeChild(e);b.appendChild(f)});c.appendChild(b);c.style.position="relative";b.style["min-height"]="100%";b.style["min-width"]="100%"}function B(c){var d,b;return function(){var e=c._scrollTop(),f=c._scrollLeft();if((e===d)&&(f===b)){return}d=e;b=f;G(c)}}function G(b){if(b.dispatchEvent){var c=u.createEvent("MouseEvents");c.initMouseEvent("scroll",false,false,v,0,0,0,0,0,false,false,false,false,0,null);b.dispatchEvent(c)}}function A(b){var c=b.target;while(c.nodeType!==1){c=c.parentNode}if((c.tagName!=="SELECT")&&(c.tagName!=="INPUT")&&(c.tagName!=="TEXTAREA")){b.preventDefault()}}}(Scrollable._os,Scrollable._isDOMNode,Scrollable._onReady,Scrollable._forEachInArray,Scrollable._scrollWatcher,iScroll,window,document);Scrollable._getScrollableNode=function(c){return function(b){if(c(b)&&b._iScroll){return b.childNodes[0]}else{return b}}}(Scrollable._isDOMNode);Scrollable._enableInfiniteScrolling=function(v,q,w,u,t,p,y,o){var x=320;return s;function s(f,V,g){if(w(f)){if(f.length){var O=f.length-1;for(var N=0;N<O;N++){s(f[N],V,g)}return s(f[O],V,g)}else{return}}if(!q(f)){throw f+" is not a DOM element"}if(!g&&typeof V==="function"){g=V;V={}}if(g){if(V.downGenerator){throw Error("Two downGenerator functions specified")}V.downGenerator=g}if((typeof V!=="object")||(V===null)){throw TypeError("options must be an object if defined, got "+V)}if(!V.downGenerator&&!V.upGenerator){throw Error("No generators specified. What are you even scrolling?")}if(typeof V.autoStart==="undefined"){V.autoStart=true}if(V.downGenerator&&typeof V.downGenerator!=="function"){throw"downGenerator "+downGenerator+" is not a function"}if(V.upGenerator&&typeof V.upGenerator!=="function"){throw"upGenerator "+upGenerator+" is not a function"}if(V.scroller&&!q(V.scroller)){throw TypeError("options.scroller must be a DOM node, got "+V.scroller)}var h=V.scroller||A(f),P=V.loading,R=V.triggerRadius,i=false,e=!V.upGenerator,m=!V.downGenerator,U=false,c=false,T,d,k;if(w(h)){h=h[0]}if(w(P)){P=P[0]}if(P===null){P=undefined}if(typeof P!=="undefined"){if(V.downGenerator){T=z([P])[0];if(V.downGenerator){d=T.cloneNode(true)}}else{d=z([P])[0]}}if(R===null){R=undefined}switch(typeof R){case"undefined":R=x;case"number":break;default:throw TypeError("trigger radius must be a number if defined, got "+R)}if(!h){p(f);h=f}if(T){y(f).appendChild(T)}Q();if(V.autoStart){X()}var j={layout:X,forceLayout:l,isEnabled:b,enable:Q,disable:n,destroy:W};if(!h._infinites){h._infinites=[]}h._infinites.push(j);return j;function b(){return i}function Q(){if(i){return}if(U){throw Error("cannot enable infinite scroller that has been destroyed")}i=true;h.addEventListener("scroll",X,false)}function n(){if(!i){return}i=false;h.removeEventListener("scroll",X)}function X(){if(!i||c||U){return}var B=Y(h,R);if(!B){return}var C=(B==="up");if(C&&(f._isScrolling||f._iScrolling)){if(k){clearTimeout(k)}k=setTimeout(function(){X()},100);return}c=true;S(C,function(D){c=false;if(D){X()}else{W(C)}})}function l(B){if(!i||U||c){return}c=true;if(typeof B==="undefined"){B=!V.downGenerator}S(B,function(C){c=false;if(C){X()}else{W(B)}})}function S(D,B){var C=D?V.upGenerator:V.downGenerator;var G=C(F);if(typeof G!=="undefined"){F(G)}function F(J,ab){if(U||(e&&D)||(m&&!D)){return}var M=D?d:T;var K=J&&J.length&&!ab;if(J){if(!u(J)&&!w(J)){J=[J]}J=z(J);var aa=y(f);var H=h.scrollHeight;t(J,function(Z){E(aa,Z)});if(M){E(aa,M)}var I=h.scrollHeight;if(D){var L=I-H;h._scrollTop(h._scrollTop()+L,function(){if(!!v.ios&&!h._iScroll){r(J)}B(K)})}else{B(K)}}else{B(K)}}function E(H,I){if(D){H.insertBefore(I,H.firstChild)}else{H.appendChild(I)}}}function W(B){if(U){return}if(B){e=true;if(d&&d.parentNode){d.parentNode.removeChild(d)}}else{m=true;if(T&&T.parentNode){T.parentNode.removeChild(T)}}U=(m||!V.downGenerator)&&(e||!V.upGenerator);if(U){n()}}function Y(F,G){var C=F;while(C!==document.documentElement){if(C.parentNode){C=C.parentNode}else{return false}}var E=F.clientHeight,B=(F._scrollTop?F._scrollTop():F.scrollTop),D=F.scrollHeight;if(!m&&D-B-E<=G){return"down"}else{if(!e&&B<G){return"up"}else{return false}}}}function A(b){do{if(b._scrollable){return b}b=b.parentNode}while(b)}function z(c){var b=[];t(c,function(e){switch(typeof e){case"undefined":return;case"string":var d=document.createElement("div");d.innerHTML=e;if(d.childNodes){t(z(d.childNodes),function(f){b.push(f)})}return;case"object":if(e===null){return}else{if(q(e)){b.push(e);return}else{if(w(e)){t(e,function(f){b.push(f)});return}}}default:throw TypeError("expected an element, got "+e)}});return b}function r(b){t(b,function(c){var d=c.style.webkitTransform;c.style.webkitTransform="translate3d(0,0,0)";setTimeout(function(){c.style.webkitTransform=d},0)})}}(Scrollable._os,Scrollable._isDOMNode,Scrollable._isjQueryElem,Scrollable._isArray,Scrollable._forEachInArray,Scrollable._enableScrolling,Scrollable._getScrollableNode,window.jQuery);window.App=function(c){var d={noConflict:b};return d;function b(){if(window.App===d){window.App=c}return d}}(window.App);App._Utils=function(m,o,d){var n=function(x){var v=/([^&=]+)=([^&]+)/g,t=/\+/g;var s={},r,u,w;if(x){x=x.replace(t,"%20");while((r=v.exec(x))){u=decodeURIComponent(r[1]);w=decodeURIComponent(r[2]);s[u]=w}}return s}(m.location.href.split("?")[1]);var f=function(w){var u=false,t,r,s;if(n._app_platform==="android"){u=true;t="android";r="5.0"}else{if(n._app_platform==="ios"){u=true;t="ios";r="8.1"}else{if(s=/\bCPU.*OS (\d+(_\d+)?)/i.exec(w)){t="ios";r=s[1].replace("_",".")}else{if(s=/\bAndroid (\d+(\.\d+)?)/.exec(w)){t="android";r=s[1]}}}}var v={faked:u,name:t,versionString:r,version:r&&parseFloat(r)};v[t]=true;if(v.ios){o.body.className+=" app-ios app-ios-"+parseInt(r)}else{if(v.android){o.body.className+=" app-android app-android-"+parseInt(r)}}if(v.faked||!v.ios){o.body.className+=" app-no-scrollbar"}return v}(navigator.userAgent);var l=function(r){if(r){return function(s,u,t){return r.call(s,u,t)}}else{return function(t,w,u){for(var v=0,s=t.length;v<s;v++){if(v in t){w.call(u,t[v],v,t)}}}}}(Array.prototype.forEach);function j(r){if(Array.isArray){return Array.isArray(r)}else{return Object.prototype.toString.call(r)!=="[object Array]"}}function p(s){if(!s){return false}try{return(s instanceof Node)||(s instanceof HTMLElement)}catch(r){}if(typeof s!=="object"){return false}if(typeof s.nodeType!=="number"){return false}if(typeof s.nodeName!=="string"){return false}return true}function c(r){if(typeof r!=="object"||r===null){return false}else{return(r.val&&r.addClass&&r.css&&r.html&&r.show)}}function k(s){if(o.readyState==="complete"){setTimeout(function(){s()},0);return}m.addEventListener("load",r,false);function r(){m.removeEventListener("load",r);setTimeout(function(){s()},0)}}var q=function(){var t;return s;function s(v){if(t){t.push(v)}else{t=[v];r()}}function r(){if(typeof kik==="object"&&typeof kik.browser==="object"&&kik.browser.background&&typeof kik.browser.once==="function"){kik.browser.once("foreground",u)}else{u()}}function u(){var v=t.shift();if(v){k(function(){var w=false;function x(){if(w){return}w=true;setTimeout(r,0)}v(x)})}else{t=null}}}();function h(s,r){s.style["-webkit-transform"]=r;s.style["-moz-transform"]=r;s.style["-ms-transform"]=r;s.style["-o-transform"]=r;s.style.transform=r}function e(r,s){if(s){r.style["-webkit-transition"]="-webkit-"+s;r.style["-moz-transition"]="-moz-"+s;r.style["-ms-transition"]="-ms-"+s;r.style["-o-transition"]="-o-"+s;r.style.transition=s}else{r.style["-webkit-transition"]="";r.style["-moz-transition"]="";r.style["-ms-transition"]="";r.style["-o-transition"]="";r.style.transition=""}}function i(s,t){var r;if(t){r=s.style}else{r=o.defaultView.getComputedStyle(s,null)}return{display:r.display,opacity:r.opacity,paddingRight:r.paddingRight,paddingLeft:r.paddingLeft,marginRight:r.marginRight,marginLeft:r.marginLeft,borderRightWidth:r.borderRightWidth,borderLeftWidth:r.borderLeftWidth,top:r.top,left:r.left,height:r.height,width:r.width,position:r.position}}function g(s){var r=i(s);return(r.display!=="none"&&r.opacity!=="0")}function b(v,u,y,x){if(typeof v.length!=="number"){v=[v]}var t=v.map(function(z){return z.elem.style.opacity});r(function(){w(function(){s(function(){x()})})});function r(z){l(v,function(A){if(typeof A.transitionStart!=="undefined"){h(A.elem,A.transitionStart)}if(typeof A.opacityStart!=="undefined"){A.elem.style.opacity=A.opacityStart+""}});setTimeout(function(){l(v,function(C){var A=C.easing||y,B="transform "+(u/1000)+"s "+A+", opacity "+(u/1000)+"s "+A;e(C.elem,B)});setTimeout(z,0)},0)}function w(C){l(v,function(D){if(typeof D.transitionEnd!=="undefined"){h(D.elem,D.transitionEnd)}if(typeof D.opacityEnd!=="undefined"){D.elem.style.opacity=D.opacityEnd+""}});var B=v[v.length-1];B.elem.addEventListener("webkitTransitionEnd",A,false);B.elem.addEventListener("transitionend",A,false);B.elem.addEventListener("onTransitionEnd",A,false);B.elem.addEventListener("ontransitionend",A,false);B.elem.addEventListener("MSTransitionEnd",A,false);B.elem.addEventListener("transitionend",A,false);var z=false;function A(D){if(z||(D.target!==B.elem)){return}z=true;l(v,function(E){B.elem.removeEventListener("webkitTransitionEnd",A);B.elem.removeEventListener("transitionend",A);B.elem.removeEventListener("onTransitionEnd",A);B.elem.removeEventListener("ontransitionend",A);B.elem.removeEventListener("MSTransitionEnd",A);B.elem.removeEventListener("transitionend",A)});C()}}function s(z){l(v,function(A){e(A.elem,"")});setTimeout(function(){l(v,function(B,A){h(B.elem,"");B.elem.style.opacity=t[A]});z()},0)}}d.platform=f.name;d.platformVersion=f.version;d.queue=q;return{query:n,os:f,ready:k,forEach:l,isArray:j,isNode:p,isjQueryElem:c,setTransform:h,setTransition:e,animate:b,getStyles:i,isVisible:g}}(window,document,App);App._Events=function(g){var b="__appjsCustomEventing";var e=c();return{init:f,fire:d};function c(){try{var j=document.createElement("div"),h=document.createEvent("CustomEvent");h.initEvent("fooBarFace",false,true);j.dispatchEvent(h);return true}catch(i){return false}}function f(k,l){if(e){return}if(k[b]){g.forEach(l,k[b].addEventType);return}k[b]={fire:h,addEventType:i,addEventListener:k.addEventListener,removeEventListener:k.removeEventListener};var j={};g.forEach(l,function(m){j[m]=[]});function i(m){if(l.indexOf(m)!==-1){return}l.push(m);j[m]=[]}function h(n){if(l.indexOf(n)===-1){return false}var o=false,m={preventDefault:function(){o=true}};g.forEach(j[n],function(p){setTimeout(function(){if(p.call(k,m)===false){o=true}},0)});return !o}k.addEventListener=function(m,n){if(l.indexOf(m)===-1){k[b].addEventListener.apply(this,arguments);return}var o=j[m];if(o.indexOf(n)===-1){o.push(n)}};k.removeEventListener=function(n,o){if(l.indexOf(n)===-1){k[b].removeEventListener.apply(this,arguments);return}var p=j[n],m=p.indexOf(o);if(m!==-1){p.splice(m,1)}}}function d(j,i){if(j[b]){return j[b].fire(i)}else{var h=document.createEvent("CustomEvent");h.initEvent(i,false,true);return j.dispatchEvent(h)}}}(App._Utils);App._Metrics=function(f,e){var b=false;e.enableGoogleAnalytics=function(){g()};return{watchPage:c};function g(){b=true}function d(h,i){if(!b){return}var j="/"+h;if(typeof i!=="undefined"){j+="/"+i}if(typeof f.ga==="function"){f.ga("send","pageview",j);return}if(!f._gaq){f._gaq=[]}if(typeof f._gaq.push==="function"){f._gaq.push(["_trackPageview",j])}}function c(k,i,h){var j;if((typeof h==="object")&&(typeof h.id!=="undefined")){j=h.id+""}k.addEventListener("appShow",function(){d(i,j)},false)}}(window,App);App._Dialog=function(f,j,m,d,e){var g="app-dialog-visible";var i,l;d.dialog=function(o,q){if((typeof o!=="object")||(o===null)){throw TypeError("dialog options must be an object, got "+o)}switch(typeof o.text){case"undefined":case"string":break;default:if(!e.isNode(o.text)){throw TypeError("dialog text must be a string if defined, got "+o.text)}}for(var p in o){if((p==="theme")||(p==="title")||(p.substr(p.length-6)==="Button")){switch(typeof o[p]){case"undefined":case"string":break;default:throw TypeError("dialog button ("+p+") must be a string if defined, got "+o[p])}}}switch(typeof q){case"undefined":q=function(){};case"function":break;default:throw TypeError("callback must be a function if defined, got "+q)}return k(o,q)};d.dialog.close=function(o){return c(o||false)};d.dialog.status=function(){return h()};return d.dialog;function n(p,v){var o=j.createElement("div");o.className+=" app-dialog-container";if(!e.os.android||(e.os.version>=4)){o.addEventListener("touchstart",function(w){if(w.target===o){w.preventDefault()}},false)}var r=j.createElement("div");r.className="app-dialog";if(p.theme){r.className+=" "+p.theme}o.appendChild(r);if(p.title){var u=j.createElement("div");u.className="title";u.textContent=p.title;r.appendChild(u)}if(p.text||p.rawText){var t=j.createElement("div");t.className="text";if(e.isNode(p.text)){t.appendChild(p.text)}else{if(p.rawText){t.innerHTML=p.rawText}else{t.textContent=p.text}}r.appendChild(t)}if(p.rawHTML){r.appendChild(p.rawHTML)}if(p.okButton){var q=j.createElement("div");q.className="button ok last";if(!p.cancelButton){q.className+=" first"}q.setAttribute("data-button","ok");q.textContent=p.okButton;m(q);q.addEventListener("click",s,false);r.appendChild(q)}if(p.cancelButton){var q=j.createElement("div");q.className="button cancel first";if(!p.okButton){q.className+=" last"}q.setAttribute("data-button","cancel");q.textContent=p.cancelButton;m(q);q.addEventListener("click",s,false);r.appendChild(q)}function s(){var w=this.getAttribute("data-button");if(w==="cancel"){w=false}v(w)}return o}function k(q,u,s){if(l&&!s){l.push([q,u]);return}l=l||[];var t=false,r=n(q,p),o=r.firstChild;i=p;e.ready(function(){j.body.appendChild(r);setTimeout(function(){r.className+=" enabled";j.body.className+=" "+g},50)});function p(v){if(t){return}t=true;i=null;r.className=r.className.replace(/\benabled\b/g,"")+" closing";if(v){r.className+=" closing-success"}else{r.className+=" closing-fail"}j.body.className=j.body.className.replace(new RegExp("\\b"+g+"\\b","g"),"");setTimeout(function(){b();u(v)},0);setTimeout(function(){try{r.parentNode.removeChild(r)}catch(w){}},600);return true}}function c(o){if(i){return i(o||false)}}function h(){return !!i}function b(){if(!l){return}if(!l.length){l=null;return}var o=l.shift();o.push(true);k.apply(f,o)}}(window,document,Clickable,App,App._Utils);App._Form=function(e,b,d,f){d.form=function(g,h){if(f.isjQueryElem(g)){g.each(function(){d.form(this,h)});return}if(!f.isNode(g)){throw TypeError("form must be a DOM node, got "+g)}if(typeof h!=="function"){throw TypeError("callback must be a function, got "+h)}c(g,h)};return{};function c(j,m){var l=(j.nodeName==="FORM"),h=false,i;if(l){var k=b.createElement("input");k.style.display="none";k.type="submit";j.appendChild(k);j.addEventListener("submit",function(n){n.preventDefault();g()},false);i=j.querySelectorAll(".app-submit")}else{i=[j]}f.forEach(i,function(n){if(n.nodeName==="TEXTAREA"){isText=true}else{if(n.nodeName!=="INPUT"){isText=false}else{switch((n.type||"").toLowerCase()){case"button":case"submit":case"reset":case"hidden":isText=false;break;default:isText=true;break}}}if(isText){n.addEventListener("keydown",function(o){if(o.which===13){o.preventDefault();g()}},false)}else{n.addEventListener("click",function(o){o.preventDefault();g()},false)}});function g(){if(h){return}h=true;j.disabled=true;var p={},o=l?j.querySelectorAll("[name]"):[j],n=false;if(l){f.forEach(j.querySelectorAll("[name]"),function(q){p[q.name]=q.value})}else{p.value=j.value;if(j.name){p[j.name]=j.value}}f.forEach(o,function(q){q.disabled=true;if(q.blur){q.blur()}});if(l&&j.blur){j.blur()}m.call(this,p,function(){if(n){return}n=true;f.forEach(o,function(q){q.disabled=false});h=false;j.disabled=false})}}}(window,document,App,App._Utils);App._Scroll=function(d,c,m){var p={APP_CONTENT:"app-content",APP_SCROLLABLE:"app-scrollable",APP_SCROLLHACK:"app-scrollhack",NO_SCROLL:"data-no-scroll",SCROLLABLE:"data-scrollable",LAST_SCROLL:"data-last-scroll",SCROLL_STYLE:"data-scroll-style",TOUCH_SCROLL:"-webkit-overflow-scrolling"},h="__appjsPageManager";c.infiniteScroll=function(v,t,w){if(m.isjQueryElem(v)){if(v.length){var s=v.length-1;for(var u=0;u<s;u++){c.infiniteScroll(v[u],t,w)}return c.infiniteScroll(v[s],t,w)}else{return}}if(!m.isNode(v)){throw TypeError("infinite scroll container must be a DOM node, got "+v)}return i(v,t,w)};return{setup:l,disable:o,saveScrollPosition:f,saveScrollStyle:j,restoreScrollPosition:g,restoreScrollStyle:b};function l(s){m.forEach(s.querySelectorAll("."+p.APP_CONTENT),function(t){if(t.getAttribute(p.NO_SCROLL)===null){q(t)}});m.forEach(s.querySelectorAll("["+p.SCROLLABLE+"]"),function(t){q(t)})}function q(t){var s=!!window.APP_FORCE_ISCROLL;d(t,s);t.className+=" "+p.APP_SCROLLABLE;if(!s&&m.os.ios&&m.os.version<6){t.className+=" "+p.APP_SCROLLHACK}}function o(s){m.forEach(s.querySelectorAll("*"),function(t){t.style[p.TOUCH_SCROLL]=""})}function n(t){var s=[];if(t){m.forEach(t.querySelectorAll("."+p.APP_SCROLLABLE),function(u){if(u._scrollable){s.push(u)}})}return s}function f(s){m.forEach(n(s),function(t){if(t._iScroll){return}var u=t._scrollTop();t.setAttribute(p.LAST_SCROLL,u+"")})}function j(s){m.forEach(n(s),function(u){if(u._iScroll){return}var t=u.style[p.TOUCH_SCROLL]||"";u.style[p.TOUCH_SCROLL]="";u.setAttribute(p.SCROLL_STYLE,t)})}function g(s,t){m.forEach(n(s),function(u){if(u._iScroll){return}var v=parseInt(u.getAttribute(p.LAST_SCROLL));if(v){if(!t){setTimeout(function(){u._scrollTop(v)},0)}else{u._scrollTop(v)}}})}function b(s){m.forEach(n(s),function(u){if(u._iScroll){return}var t=u.getAttribute(p.SCROLL_STYLE)||"";if(t){u.style[p.TOUCH_SCROLL]=t}});g(s,true)}function i(v,u,x){var w=u.page||e(v),t=r(w);if(!w||!t){throw Error("could not find parent app-page")}if(!u){u={}}if(typeof u.scroller==="undefined"){u.scroller=k(v)}u.autoStart=false;var s=d.infinite(v,u,x);s.forceLayout();s.disable();t.ready(function(){scrollReady=true;try{s.enable()}catch(y){return}s.layout();w.addEventListener("appShow",function(){s.layout()});w.addEventListener("appDestroy",function(){s.destroy()})});return s}function e(t){var s=t;do{if(/\bapp\-page\b/.test(s.className)){return s}}while(s=s.parentNode)}function k(t){var s=t;do{if(s._scrollable||/\bapp\-content\b/.test(s.className)){return s}}while(s=s.parentNode)}function r(s){if(s){return s[h]}}}(Scrollable,App,App._Utils);(function(k,d,i){var g={};if(d.platform==="ios"&&d.platformVersion>=5&&!i.os.faked&&(typeof kik!=="object"||kik===null||!kik.enabled)){h()}return;function h(){k.addEventListener("touchstart",function(m){var l=c(m);if(l&&!l._iScroll){if((l.scrollHeight-l.clientHeight>1)&&((l.scrollTop<=0)||(l.scrollTop+l.clientHeight>=l.scrollHeight))){e(m)}}});k.addEventListener("touchmove",function(m){var l=c(m);if(!l){m.preventDefault()}else{if(l._iScroll){m.preventDefault()}else{if(m.changedTouches){if(m.changedTouches.length===1){b(m)}j(m)}}}});k.addEventListener("touchcancel",function(l){f(l)});k.addEventListener("touchend",function(l){f(l)})}function c(m){var l=m.target;if(l){do{if(l._scrollable){break}}while(l=l.parentNode)}return l}function b(o){var n=c(o),p=o.changedTouches[0],m=g[p.identifier],l=p.pageY;if(n&&typeof m!=="undefined"){if(n.scrollTop<=0){if(m>l){delete g[p.identifier]}else{o.preventDefault()}}else{if(n.scrollTop+n.clientHeight>=n.scrollHeight){if(m<l){delete g[p.identifier]}else{o.preventDefault()}}else{delete g[p.identifier]}}}}function e(o){if(o.changedTouches){for(var n=0,m=o.changedTouches.length;n<m;n++){g[o.changedTouches[n].identifier]=o.changedTouches[n].pageY}}}function j(o){if(o.changedTouches){for(var n=0,m=o.changedTouches.length;n<m;n++){if(o.changedTouches[n].identifier in g){g[o.changedTouches[n].identifier]=o.changedTouches[n].pageY}}}}function f(p){if(p.changedTouches){for(var n=0,m=p.changedTouches.length;n<m;n++){delete g[p.changedTouches[n].identifier]}}if(p.touches){var o=[];for(var n=0,m=p.touches.length;n<m;n++){o.push(p.touches[n].identifier+"")}for(var q in g){if(o.indexOf(q)===-1){delete g[q]}}}}})(document,App,App._Utils);App._Pages=function(N,e,p,U,K,L,V,H,r){var B="data-page",t="app-page",n="app-loaded",A="app-ios-statusbar",T="app-android-statusbar",k="__appjsFlushReadyQueue",J="__appjsPageManager",b={SHOW:"show",HIDE:"hide",BACK:"back",FORWARD:"forward",BEFORE_BACK:"beforeBack",READY:"ready",DESTROY:"destroy",LAYOUT:"layout",ONLINE:"online",OFFLINE:"offline"};var y=false,G=!!N.APP_FORCE_ISCROLL,c={},x={},u={},R=false;i();if(N.APP_ENABLE_STATUSBAR||N.APP_ENABLE_IOS_STATUSBAR){j()}K.add=function(X,Y){if(typeof X!=="string"){Y=X;X=undefined}if(!L.isNode(Y)){throw TypeError("page template node must be a DOM node, got "+Y)}s(Y,X)};K.controller=function(X,Y,Z){if(typeof X!=="string"){throw TypeError("page name must be a string, got "+X)}if(typeof Y!=="function"){throw TypeError("page controller must be a function, got "+Y)}switch(typeof Z){case"undefined":Z=function(){};break;case"function":break;default:throw TypeError("page cleanup handler must be a function, got "+Z)}if(Y){M(X,Y)}if(Z){z(X,Z)}};K.populator=K.controller;K.generate=function(X,Y){if(typeof X!=="string"){throw TypeError("page name must be a string, got "+X)}switch(typeof Y){case"undefined":Y={};break;case"object":break;default:throw TypeError("page arguments must be an object if defined, got "+Y)}return P(X,Y)};K.destroy=function(X){if(!L.isNode(X)){throw TypeError("page node must be a DOM node, got "+X)}return h(X)};K._layout=D;K._enableStatusBar=j;K._enableIOSStatusBar=j;return{EVENTS:b,has:Q,createManager:C,startGeneration:d,finishGeneration:o,fire:F,startDestruction:E,finishDestruction:m,fixContent:g,populateBackButton:q};function w(){var Y=e.getElementsByClassName(t);for(var X=Y.length;X--;){if(f(Y[X])){continue}s(Y[X])}if(!y){e.body.className+=" "+n}y=true}function f(Y,X){if(!X){X=Y.getAttribute(B)}if(!X){throw TypeError("isPageLoaded page name was not specified")}return(X in c)}function s(Y,X){if(!X){X=Y.getAttribute(B)}if(!X){throw TypeError("page name was not specified")}Y.setAttribute(B,X);if(Y.parentNode){Y.parentNode.removeChild(Y)}c[X]=Y.cloneNode(true)}function Q(X){w();return(X in c)}function W(X){if(!Q(X)){throw TypeError(X+" is not a known page")}return c[X].cloneNode(true)}function M(X,Y){x[X]=Y}function z(X,Y){u[X]=Y}function O(X,aa,ab,Z){var Y=x[X];if(!Y){return}for(var ac in Y){aa[ac]=Y[ac]}for(var ac in Y.prototype){aa[ac]=Y.prototype[ac]}aa.page=ab;aa.args=Z;Y.call(aa,ab,Z)}function l(X,Z,ab,Y){var aa=u[X];if(aa){aa.call(Z,ab,Y)}F(Z,ab,b.DESTROY)}function C(Z){var X={restored:Z,showing:false,online:navigator.onLine};var Y=[];X.ready=function(aa){if(typeof aa!=="function"){throw TypeError("ready must be called with a function, got "+aa)}if(Y){Y.push(aa)}else{aa.call(X)}};X[k]=function(){L.ready(function(){if(!Y){return}var aa=Y.slice();Y=null;if(L.isNode(X.page)){F(X,X.page,b.READY)}L.forEach(aa,function(ab){ab.call(X)})})};return X}function P(X,Z){var Y={},aa=d(X,Y,Z);o(X,Y,aa,Z);return aa}function h(Y){var X=Y.getAttribute(B);E(X,{},Y,{});m(X,{},Y,{})}function d(X,aa,Z){var ab=W(X);var ac=[];for(var Y in b){ac.push(I(b[Y]))}V.init(ab,ac);H.watchPage(ab,X,Z);ab[J]=aa;g(ab);L.forEach(ab.querySelectorAll(".app-button"),v);ab.addEventListener("DOMNodeInserted",function(ae){var ad=ae.srcElement;if(ad.classList&&ad.classList.contains("app-button")){v(ad)}});O(X,aa,ab,Z);ab.addEventListener(I(b.SHOW),function(){setTimeout(function(){if(typeof aa[k]==="function"){aa[k]()}},0)},false);return ab}function v(X){if(X.getAttribute("data-no-click")!==null||X._clickable){return}p(X);X.addEventListener("click",function(){var af=X.getAttribute("data-target"),ab=X.getAttribute("data-target-args"),Y=(X.getAttribute("data-back")!==null),ae=(X.getAttribute("data-manual-back")!==null),Z;try{Z=JSON.parse(ab)}catch(ad){}if((typeof Z!=="object")||(Z===null)){Z={}}if(!Y&&!af){return}if(Y&&ae){return}var ac=X.getAttribute("data-clickable-class");if(ac){X.disabled=true;X.classList.add(ac)}if(Y){K.back(aa)}else{if(af){K.load(af,Z,{},aa)}}function aa(){if(ac){X.disabled=false;X.classList.remove(ac)}}},false)}function F(Y,aa,Z){var X=I(Z),ab=S(Z),ac=true;if(!V.fire(aa,X)){ac=false}if(typeof Y[ab]==="function"){if(Y[ab]()===false){ac=false}}return ac}function I(X){return"app"+X[0].toUpperCase()+X.slice(1)}function S(X){return"on"+X[0].toUpperCase()+X.slice(1)}function o(X,Z,aa,Y){r.setup(aa)}function E(X,Z,aa,Y){if(!L.os.ios||L.os.version<6){r.disable(aa)}if(typeof Z.reply==="function"){Z._appNoBack=true;Z.reply()}}function m(X,Z,aa,Y){l(X,Z,aa,Y)}function i(){N.addEventListener("orientationchange",D);N.addEventListener("resize",D);N.addEventListener("load",D);setTimeout(D,0);N.addEventListener("online",function(){if(K._Stack){L.forEach(K._Stack.get(),function(X){X[2].online=true;F(X[2],X[3],b.ONLINE)})}},false);N.addEventListener("offline",function(){if(K._Stack){L.forEach(K._Stack.get(),function(X){X[2].online=false;F(X[2],X[3],b.OFFLINE)})}},false)}function D(){g();var X;if(K._Stack){X=K._Stack.getCurrent()}if(X){F(X[2],X[3],b.LAYOUT)}setTimeout(g,0);setTimeout(g,10);setTimeout(g,100)}function g(ab){if(!ab){if(K._Navigation){ab=K._Navigation.getCurrentNode()}if(!ab){return}}var X=ab.querySelector(".app-topbar"),Y=ab.querySelector(".app-content"),ae=N.innerHeight;var aa=ab.querySelector(".app-bottombar");if(!Y){return}if(!X){Y.style.height=ae+"px";return}if(!aa){var ac=e.defaultView.getComputedStyle(X,null),Z=L.os.android?56:44;if(R){Z+=L.os.android?24:20}if(ac.height){Z=(parseInt(ac.height)||0);if((ac.boxSizing||ac.webkitBoxSizing)!=="border-box"){Z+=(parseInt(ac.paddingBottom)||0)+(parseInt(ac.paddingTop)||0);Z+=(parseInt(ac.borderBottomWidth)||0)+(parseInt(ac.borderTopWidth)||0)}}Y.style.height=(ae-Z)+"px"}else{var ac=e.defaultView.getComputedStyle(X,null),Z=L.os.android?56:44;if(R){Z+=L.os.android?24:20}if(ac.height){Z=(parseInt(ac.height)||0);if((ac.boxSizing||ac.webkitBoxSizing)!=="border-box"){Z+=(parseInt(ac.paddingBottom)||0)+(parseInt(ac.paddingTop)||0);Z+=(parseInt(ac.borderBottomWidth)||0)+(parseInt(ac.borderTopWidth)||0)}}var af=e.defaultView.getComputedStyle(aa,null),ad=L.os.android?56:44;if(af.height){ad=(parseInt(af.height)||0);if((af.boxSizing||af.webkitBoxSizing)!=="border-box"){ad+=(parseInt(af.paddingBottom)||0)+(parseInt(af.paddingTop)||0);ad+=(parseInt(af.borderBottomWidth)||0)+(parseInt(af.borderTopWidth)||0)}}Y.style.height=(ae-(Z+ad+10))+"px"}}function q(ab,ac){if(!ac){return}var Z=ab.querySelector(".app-topbar .left.app-button"),Y=ac.querySelector(".app-topbar .app-title");if(!Z||!Y||(Z.getAttribute("data-autotitle")===null)){return}var X=Y.textContent,aa=Z.textContent;if(!X||aa){return}if(X.length>13){X=X.substr(0,12)+".."}Z.textContent=X}function j(){if(R){return}R=true;if(L.os.android){e.body.className+=" "+T}else{e.body.className+=" "+A}L.ready(function(){setTimeout(D,6)})}}(window,document,Clickable,Scrollable,App,App._Utils,App._Events,App._Metrics,App._Scroll);App._Stack=function(k,o,q,c,x,r){var e="__APP_JS_STACK__"+k.location.pathname,i="__APP_JS_TIME__"+k.location.pathname;var j=[];q.getStack=function(){return b()};q.getPage=function(y){var z=j.length-1;switch(typeof y){case"undefined":y=z;break;case"number":if(Math.abs(y)>z){throw TypeError("absolute index cannot be greater than stack size, got "+y)}if(y<0){y=z+y}break;default:throw TypeError("page index must be a number if defined, got "+y)}return g(y)};q.removeFromStack=function(A,z){var y=j.length-1;switch(typeof A){case"undefined":A=0;break;case"number":if(Math.abs(A)>y){throw TypeError("absolute start index cannot be greater than stack size, got "+A)}if(A<0){A=y+A}break;default:throw TypeError("start index must be a number if defined, got "+A)}switch(typeof z){case"undefined":z=y;break;case"number":if(Math.abs(z)>y){throw TypeError("absolute end index cannot be greater than stack size, got "+z)}if(z<0){z=y+z}break;default:throw TypeError("end index must be a number if defined, got "+z)}if(A>z){throw TypeError("start index cannot be greater than end index")}l(A,z)};q.addToStack=function(z,y){var A=j.length-1;switch(typeof z){case"undefined":z=0;break;case"number":if(Math.abs(z)>A){throw TypeError("absolute index cannot be greater than stack size, got "+z)}if(z<0){z=A+z}break;default:throw TypeError("index must be a number if defined, got "+z)}if(!c.isArray(y)){throw TypeError("added pages must be an array, got "+y)}y=y.slice();c.forEach(y,function(C,B){if(typeof C==="string"){C=[C,{}]}else{if(c.isArray(C)){C=C.slice()}else{throw TypeError("page description must be an array (page name, arguments), got "+C)}}if(typeof C[0]!=="string"){throw TypeError("page name must be a string, got "+C[0])}switch(typeof C[1]){case"undefined":C[1]={};case"object":break;default:throw TypeError("page arguments must be an object if defined, got "+C[1])}switch(typeof C[2]){case"undefined":C[2]={};case"object":break;default:throw TypeError("page options must be an object if defined, got "+C[2])}y[B]=C});w(z,y)};q.saveStack=function(){n()};q.destroyStack=function(){s()};q.restore=m();return{get:b,getCurrent:t,getPage:g,pop:v,push:h,size:d,save:n,destroy:s};function n(){try{var z=[];for(var A=0,y=j.length;A<y;A++){if(j[A][4].restorable===false){break}z.push([j[A][0],j[A][3],j[A][2]])}localStorage[e]=JSON.stringify(z);localStorage[i]=+new Date()+""}catch(B){}}function s(){delete localStorage[e];delete localStorage[i]}function b(){return j.slice().map(f)}function d(){return j.length}function t(){var y=j[j.length-1];if(y){return f(y)}}function v(){var y=j.pop();if(y){return f(y)}}function h(y){j.push([y[0],y[3],y[4],y[1],y[2]])}function g(y){var z=j[y];if(z){return z[1]}}function f(A){var y={};for(var z in A[3]){y[z]=A[3][z]}return[A[0],y,A[4],A[1],A[2]]}function u(z,y){var A=j.splice(z,y-z);c.forEach(A,function(B){r.startDestruction(B[0],B[4],B[1],B[3]);r.finishDestruction(B[0],B[4],B[1],B[3])})}function l(z,y){q._Navigation.enqueue(function(A){u(z,y);A()})}function p(z,y,A){var C=[],B;c.forEach(y,function(E){var D=r.createManager(true),F=r.startGeneration(E[0],D,E[1]);if(!E[2].transition&&D.transition){E[2].transition=D.transition}r.populateBackButton(F,B);r.finishGeneration(E[0],D,F,E[1]);x.saveScrollPosition(F);x.saveScrollStyle(F);C.push([E[0],F,E[2],E[1],D]);B=F});C.unshift(0);C.unshift(z);Array.prototype.splice.apply(j,C)}function w(z,y){q._Navigation.enqueue(function(A){p(z,y);A()})}function m(z){var y,B;try{y=JSON.parse(localStorage[e]);storedTime=parseInt(localStorage[i]);B=y.pop()}catch(A){return}if(!B){return}return function(C,E){switch(typeof C){case"function":E=C;case"undefined":C={};case"object":if(C!==null){break}default:throw TypeError("restore options must be an object if defined, got "+C)}switch(typeof E){case"undefined":E=function(){};case"function":break;default:throw TypeError("restore callback must be a function if defined, got "+E)}if(+new Date()-storedTime>=C.maxAge){throw TypeError("restore content is too old")}if(!r.has(B[0])){throw TypeError(B[0]+" is not a known page")}c.forEach(y,function(F){if(!r.has(F[0])){throw TypeError(F[0]+" is not a known page")}});try{p(0,y,true)}catch(D){u(0,j.length);throw Error("failed to restore stack")}n();try{q.load(B[0],B[1],B[2],E)}catch(D){u(0,j.length);throw Error("failed to restore stack")}}}}(window,document,App,App._Utils,App._Scroll,App._Pages);App._Transitions=function(n,w,A,x,e,D,y,t){var c="app-transition",h="slide-left",z="android-l-in",f="fade-on",u="instant",v={instant:"instant",fade:"fade","fade-on":"fade-off","fade-off":"fade-on","scale-in":"scale-out","scale-out":"scale-in","rotate-left":"rotate-right","rotate-right":"rotate-left","cube-left":"cube-right","cube-right":"cube-left","swap-left":"swap-right","swap-right":"swap-left","explode-in":"explode-out","explode-out":"explode-in","implode-in":"implode-out","implode-out":"implode-in","slide-left":"slide-right","slide-right":"slide-left","slide-up":"slide-down","slide-down":"slide-up","slideon-left":"slideoff-left","slideon-right":"slideoff-right","slideon-up":"slideoff-up","slideon-down":"slideoff-down","slideoff-left":"slideon-left","slideoff-right":"slideon-right","slideoff-up":"slideon-up","slideoff-down":"slideon-down","slideon-left-ios":"slideoff-right-ios","glideon-right":"glideoff-right","glideoff-right":"slideon-right","glideon-left":"glideoff-left","glideoff-left":"slideon-left","glideon-down":"glideoff-down","glideoff-down":"slideon-down","glideon-up":"glideoff-up","glideoff-up":"slideon-up","android-l-in":"android-l-out","android-l-out":"android-l-in"},b=10;var o=false,m,q,d;if(e.os.ios){k(h)}else{if(e.os.android){if(e.os.version>=4){k(z)}else{if((e.os.version<2.3)||/LT15a/i.test(navigator.userAgent)){k(u)}else{k(f)}}}}r();x.setDefaultTransition=function(F){if(typeof F==="object"){switch(e.os.name){case"android":if((e.os.version<4)&&F.androidFallback){F=F.androidFallback}else{F=F.android}break;case"ios":if((e.os.version<5)&&F.iosFallback){F=F.iosFallback}else{F=F.ios}break;default:F=F.fallback;break}if(!F){return}}if(typeof F!=="string"){throw TypeError("transition must be a string if defined, got "+F)}if(!(F in v)){throw TypeError("invalid transition type, got "+F)}k(F)};x.getDefaultTransition=function(){return m};x.getReverseTransition=function(){return q};x.enableDragTransition=function(){j()};return{REVERSE_TRANSITION:v,run:i,enableDrag:p,disableDrag:l};function k(F){m=F;q=v[m]}function g(F){if(!e.os.ios){return false}else{if(F==="slide-left"){return true}else{if(F==="slide-right"){return true}else{return false}}}}function i(K,J,H,L,G){if(!H.transition){H.transition=(G?q:m)}var F=(e.os.ios&&(e.os.version>=7)&&{"slideon-down":1,"slideoff-down":1}[H.transition]);if(!H.duration){if(!e.os.ios){H.duration=180}else{if(e.os.version<7){H.duration=325}else{if(F){H.duration=475}else{H.duration=425}}}}if(!H.easing){if(e.os.ios){if(F){H.easing="cubic-bezier(0.4,0.6,0.05,1)"}else{if(H.transition==="slideon-left-ios"||H.transition==="slideoff-right-ios"){if(e.os.version<7){H.easing="ease-in-out"}else{H.easing="cubic-bezier(0.4,0.6,0.2,1)"}}}}else{if(e.os.android){if(H.transition==="android-l-in"){H.easing="ease-out"}else{if(H.transition==="android-l-out"){H.easing="ease-in"}}}}}w.body.className+=" "+c;if(H.transition==="instant"){A(K,J,H,function(){setTimeout(I,0)})}else{if(g(H.transition)){s(K,J,H,I)}else{A(K,J,H,I)}}function I(){w.body.className=w.body.className.replace(new RegExp("\\b"+c+"\\b"),"");L()}}function s(I,H,O,N){var K=(O.transition==="slide-left"),F=K?H:I,L=B(H,I,K);if(!L){A(I,H,O,N);return}var M=F.style.position,J=F.style.zIndex,G=F.style.background;F.style.position="fixed";F.style.zIndex="4000";F.style.background="none";if(K){I.parentNode.insertBefore(H,I)}else{if(I.nextSibling){I.parentNode.insertBefore(H,I.nextSibling)}else{I.parentNode.appendChild(H)}}if(x._Pages){x._Pages.fixContent(I);x._Pages.fixContent(H)}if(e.os.version<7){O.easing="ease-in-out"}else{O.easing="cubic-bezier(0.4,0.6,0.2,1)"}e.animate(L,O.duration,O.easing,function(){I.parentNode.removeChild(I);F.style.position=M;F.style.zIndex=J;F.style.background=G;N()})}function B(J,L,O){var H=L.querySelector(".app-topbar"),P=L.querySelector(".app-topbar .app-title"),G=L.querySelector(".app-topbar .left.app-button"),M=L.querySelector(".app-content"),I=J.querySelector(".app-topbar"),F=J.querySelector(".app-topbar .app-title"),Q=J.querySelector(".app-topbar .left.app-button"),K=J.querySelector(".app-content"),N=[];if(!H||!I||!M||!K||!e.isVisible(H)||!e.isVisible(I)){return}if(G&&(G.getAttribute("data-noslide")!==null)){G=undefined}if(Q&&(Q.getAttribute("data-noslide")!==null)){Q=undefined}if(O){N.push({opacityStart:0,opacityEnd:1,elem:I})}else{N.push({opacityStart:1,opacityEnd:0,elem:H})}if(P){N.push({transitionStart:"translate3d(0,0,0)",transitionEnd:"translate3d("+C(Q,O)+"px,0,0)",elem:P})}if(F){N.push({transitionStart:"translate3d("+C(G,!O)+"px,0,0)",transitionEnd:"translate3d(0,0,0)",elem:F})}if(e.os.version>=5){if(G){N.push({transitionStart:"translate3d(0,0,0)",transitionEnd:"translate3d("+E(G,Q,!O)+"px,0,0)",elem:G})}if(Q){N.push({transitionStart:"translate3d("+E(Q,G,O)+"px,0,0)",transitionEnd:"translate3d(0,0,0)",elem:Q})}}if(e.os.version<7){N.push({transitionStart:"translate3d(0,0,0)",transitionEnd:"translate3d("+(O?-100:100)+"%,0,0)",elem:M},{transitionStart:"translate3d("+(O?100:-100)+"%,0,0)",transitionEnd:"translate3d(0,0,0)",elem:K})}else{N.push({transitionStart:"translate3d(0,0,0)",transitionEnd:"translate3d("+(O?-30:100)+"%,0,0)",elem:M},{transitionStart:"translate3d("+(O?100:-30)+"%,0,0)",transitionEnd:"translate3d(0,0,0)",elem:K})}return N}function E(I,H,G){var J=I.textContent.length*(e.os.version<7?10:12),F=H?(H.textContent.length*15):0;if(!G){return(F-n.innerWidth)/2}else{return(n.innerWidth-J)/2}}function C(F,G){var H=0;if(F&&(e.os.version>=5)){H=F.textContent.length*(e.os.version<7?10:12)}if(!G){return(n.innerWidth/2)}else{return(H-n.innerWidth)/2}}function j(){o=true}function r(){var H=w.querySelectorAll("meta");for(var G=0,F=H.length;G<F;G++){if((H[G].name==="app-drag-transition")&&(H[G].content==="true")){j();return}}}function p(){if(!o||!e.os.ios||(e.os.version<7)){return}var R=t.get().slice(-2),J=R[0],aa=R[1],L,ac,N,U,af;if(!J||!aa){return}var I=aa[3],Q=aa[3].querySelector(".app-topbar"),Z=aa[3].querySelector(".app-topbar .app-title"),H=aa[3].querySelector(".app-topbar .left.app-button"),ab=aa[3].querySelector(".app-content"),W=J[3],M=J[3].querySelector(".app-topbar"),ae=J[3].querySelector(".app-topbar .app-title"),V=J[3].querySelector(".app-topbar .left.app-button"),T=J[3].querySelector(".app-content");if(!I||!Q||!ab||!W||!M||!T){return}var ah=["slide-left","slideon-left-ios"];if((ah.indexOf(aa[4].transition)===-1)&&(aa[4].transition||ah.indexOf(m)===-1)){return}else{if((aa[4].transition==="slide-left")||(!aa[4].transition&&"slide-left"===m)){af=true}}var S=aa[3].style.position,O=aa[3].style.zIndex,Y=aa[3].style.background;aa[3].style.position="fixed";aa[3].style.zIndex="4000";aa[3].style.background="none";if(aa[3].nextSibling){aa[3].parentNode.insertBefore(J[3],aa[3].nextSibling)}else{aa[3].parentNode.appendChild(J[3])}y.fixContent(W);D.restoreScrollPosition(W);n.addEventListener("touchstart",F,false);n.addEventListener("touchmove",ad,false);n.addEventListener("touchcancel",X,false);n.addEventListener("touchend",X,false);var ag=false;d=function(){K();G()};function K(){n.removeEventListener("touchstart",F);n.removeEventListener("touchmove",ad);n.removeEventListener("touchcancel",X);n.removeEventListener("touchend",X)}function G(){aa[3].style.position=S;aa[3].style.zIndex=O;aa[3].style.background=Y;if(J[3].parentNode){J[3].parentNode.removeChild(J[3])}}function F(ai){if(L||N||U){return}var aj=(ai.touches&&ai.touches[0]);if(!aj||(aj.pageX>b)){return}if(!y.fire(aa[2],aa[3],y.EVENTS.BEFORE_BACK)){return}ai.preventDefault();x._Navigation.enqueue(function(ak){N=ak},true);w.body.className+=" "+c;L=ac={x:aj.pageX,y:aj.pageY};Q.style.webkitTransition="all 0s linear";if(Z){Z.style.webkitTransition="all 0s linear"}if(H){H.style.webkitTransition="all 0s linear"}ab.style.webkitTransition="all 0s linear";M.style.webkitTransition="all 0s linear";if(ae){ae.style.webkitTransition="all 0s linear"}if(V){V.style.webkitTransition="all 0s linear"}T.style.webkitTransition="all 0s linear"}function ad(aj){if(L&&aj.touches&&aj.touches[0]&&!U){if(ac){ag=(ac.x<aj.touches[0].pageX)}ac={x:aj.touches[0].pageX,y:aj.touches[0].pageY};var ai=Math.min(Math.max(0,(ac.x-L.x)/n.innerWidth),1);P(ai)}}function X(al){if(!L||!N||U){return}K();ac=(al.touches&&al.touches[0])||ac;var ak=0;if(ac){progress=(ac.x-L.x)/n.innerWidth}var ai=((progress<0.1&&!ag)||(0.9<progress&&ag));if(!ai){Q.style.webkitTransitionDuration="0.15s";if(Z){Z.style.webkitTransitionDuration="0.15s"}if(H){H.style.webkitTransitionDuration="0.15s"}ab.style.webkitTransitionDuration="0.15s";M.style.webkitTransitionDuration="0.15s";if(ae){ae.style.webkitTransitionDuration="0.15s"}if(V){V.style.webkitTransitionDuration="0.15s"}T.style.webkitTransitionDuration="0.15s"}if(ag){y.fire(aa[2],aa[3],y.EVENTS.BACK);P(1)}else{P(0)}L=ac=null;if(!ai){aa[3].addEventListener("webkitTransitionEnd",aj,false)}else{aj()}function aj(){aa[3].removeEventListener("webkitTransitionEnd",aj);if(ag){if(aa[3].parentNode){aa[3].parentNode.removeChild(aa[3])}}else{if(J[3].parentNode){J[3].parentNode.removeChild(J[3])}}aa[3].style.position=S;aa[3].style.zIndex=O;aa[3].style.background=Y;Q.style.webkitTransition="";Q.style.webkitTransform="";if(Z){Z.style.webkitTransition="";Z.style.webkitTransform=""}if(H){H.style.webkitTransition="";H.style.webkitTransform=""}ab.style.webkitTransition="";ab.style.webkitTransform="";M.style.webkitTransition="";M.style.webkitTransform="";if(ae){ae.style.webkitTransition="";ae.style.webkitTransform=""}if(V){V.style.webkitTransition="";V.style.webkitTransform=""}T.style.webkitTransition="";T.style.webkitTransform="";w.body.className=w.body.className.replace(new RegExp("\\b"+c+"\\b"),"");if(ag){y.startDestruction(aa[0],aa[2],aa[3],aa[1]);y.fixContent(W);D.restoreScrollStyle(W);aa[2].showing=false;y.fire(aa[2],aa[3],y.EVENTS.HIDE);J[2].showing=true;y.fire(J[2],W,y.EVENTS.SHOW);y.finishDestruction(aa[0],aa[2],aa[3],aa[1]);t.pop();x._Navigation.update()}d=null;N()}}function P(ai){if(af){Q.style.opacity=1-ai;if(Z){Z.style.webkitTransform="translate3d("+(ai*n.innerWidth/2)+"px,0,0)"}if(H){H.style.webkitTransform="translate3d("+(ai*(n.innerWidth-H.textContent.length*12)/2)+"px,0,0)"}if(ae){ae.style.webkitTransform="translate3d("+((1-ai)*(n.innerWidth-H.textContent.length*12)/-2)+"px,0,0)"}if(V){V.style.webkitTransform="translate3d("+((1-ai)*-150)+"%,0,0)"}}else{Q.style.webkitTransform="translate3d("+(ai*100)+"%,0,0)";M.style.webkitTransform="translate3d("+((1-ai)*-30)+"%,0,0)"}ab.style.webkitTransform="translate3d("+(ai*100)+"%,0,0)";T.style.webkitTransform="translate3d("+((1-ai)*-30)+"%,0,0)"}}function l(){if(d){d();d=null}}}(window,document,Swapper,App,App._Utils,App._Scroll,App._Pages,App._Stack);App._Navigation=function(i,l,o,g,u,p,k,d){var n=[],f=false,m,e;o.current=function(){return m};o.load=function(v,x,w,y){if(typeof v!=="string"){throw TypeError("page name must be a string, got "+v)}switch(typeof x){case"function":w=x;x={};case"string":y=w;w=x;case"undefined":x={};case"object":break;default:throw TypeError("page arguments must be an object if defined, got "+x)}switch(typeof w){case"function":y=w;case"undefined":w={};case"object":break;case"string":w={transition:w};break;default:throw TypeError("options must be an object if defined, got "+w)}switch(typeof y){case"undefined":y=function(){};case"function":break;default:throw TypeError("callback must be a function if defined, got "+y)}return h(v,x,w,y)};o.back=function(v,w){switch(typeof v){case"function":w=v;case"undefined":v=undefined;case"string":break;default:throw TypeError("pageName must be a string if defined, got "+v)}switch(typeof w){case"undefined":w=function(){};case"function":break;default:throw TypeError("callback must be a function if defined, got "+w)}return c(v,w)};o.pick=function(v,y,x,w,z){if(typeof v!=="string"){throw TypeError("page name must be a string, got "+v)}switch(typeof y){case"function":x=y;y={};case"string":z=w;w=x;x=y;case"undefined":y={};case"object":break;default:throw TypeError("page arguments must be an object if defined, got "+y)}switch(typeof x){case"function":z=w;w=x;case"undefined":x={};case"object":break;case"string":x={transition:x};break;default:throw TypeError("options must be an object if defined, got "+x)}if(typeof w!=="function"){throw TypeError("callback must be a function, got "+w)}switch(typeof z){case"undefined":z=w;w=function(){};case"function":break;default:throw TypeError("callback must be a function, got "+z)}return q(v,y,x,w,z)};return{getCurrentNode:s,update:t,enqueue:r};function r(w,v){if(f){n.push(w);return false}f=true;if(!v){d.disableDrag()}w(function(){k.save();f=false;if(!b()){d.enableDrag()}});return true}function b(){if(n.length){r(n.shift());return true}else{return false}}function s(){return e}function t(){var v=k.getCurrent();m=v[0];e=v[3]}function h(v,x,w,z,y){r(function(B){var E=e,I=p.createManager(false);if(y){y(I)}var F=p.startGeneration(v,I,x),K=k.getCurrent(),G=K&&K[3],C=K&&K[2];if(!w.transition&&I.transition){w.transition=I.transition}p.populateBackButton(F,E||G);if(!m){o.restore=null;l.body.appendChild(F);p.fire(I,F,p.EVENTS.LAYOUT);D();H()}else{u.saveScrollPosition(e);var A={};for(var J in w){A[J]=w[J]}j(function(L){d.run(e,F,A,function(){p.fixContent(F);L();H()});p.fire(I,F,p.EVENTS.LAYOUT)});D()}function D(){m=v;e=F;k.push([v,x,I,F,w]);if(E&&C){p.fire(C,E,p.EVENTS.FORWARD)}}function H(){u.saveScrollStyle(E);p.finishGeneration(v,I,F,x);B();z();if(E&&C){C.showing=false;p.fire(C,E,p.EVENTS.HIDE)}I.showing=true;p.fire(I,F,p.EVENTS.SHOW)}});if(!p.has(v)){return false}}function c(C,B){if(g.status()&&g.close()&&!C){B();return}var w=k.get().map(function(D){return D[0]});if(!w.length){throw Error(C+" is not currently in the stack, cannot go back to it")}if(C){var x=-1;for(var y=w.length-1;y>=0;y--){if(w[y]===C){x=y;break}}if(x===-1){throw Error(C+" is not currently in the stack, cannot go back to it")}if(x!==w.length-2){o.removeFromStack(x+1)}}var A=w.length,z=false;var v=r(function(K){if(k.size()<2){K();B();return}var J=k.getCurrent();if(!p.fire(J[2],J[3],p.EVENTS.BEFORE_BACK)){z=true;K();B();return}else{k.pop()}var H=k.getCurrent(),D=H[0],G=H[3],E=J[4];p.fire(J[2],J[3],p.EVENTS.BACK);p.fixContent(G);p.startDestruction(J[0],J[2],J[3],J[1]);u.restoreScrollPosition(G);var I={};for(var F in E){if(F==="transition"){I[F]=d.REVERSE_TRANSITION[E[F]]||E[F]}else{I[F]=E[F]}}j(function(L){d.run(e,G,I,function(){p.fixContent(G);u.restoreScrollStyle(G);L();J[2].showing=false;p.fire(J[2],J[3],p.EVENTS.HIDE);H[2].showing=true;p.fire(H[2],G,p.EVENTS.SHOW);setTimeout(function(){p.finishDestruction(J[0],J[2],J[3],J[1]);K();B()},0)},true);p.fixContent(G);p.fire(H[2],G,p.EVENTS.LAYOUT)});m=D;e=G});if(z||(v&&(A<2))){return false}}function q(v,y,x,w,A){var z=false;h(v,y,x,w,function(B){B.restorable=false;B.reply=function(){if(!z){z=true;if(!B._appNoBack){c(undefined,function(){})}A.apply(o,arguments)}}})}function j(v){var x=false;var w=l.createElement("div");w.className="app-clickblocker";l.body.appendChild(w);w.addEventListener("touchstart",function(y){y.preventDefault()},false);v(function(){if(x){return}x=true;l.body.removeChild(w)})}}(window,document,App,App._Dialog,App._Scroll,App._Pages,App._Stack,App._Transitions);(function(b,c,d){if(c.platform!=="android"||c.platformVersion<5){return}d.ready(function(){setTimeout(function(){var e=[].slice.call(b.body.childNodes);e.forEach(function(f){b.body.removeChild(f)});e.forEach(function(f){b.body.appendChild(f)})},200)})})(document,App,App._Utils);/*!
 * =====================================================
 * Ratchet v2.0.2 (http://goratchet.com)
 * Copyright 2014 Connor Sears
 * Licensed under MIT (https://github.com/twbs/ratchet/blob/master/LICENSE)
 *
 * v2.0.2 designed by @connors.
 * =====================================================
 */
/* ========================================================================
 * Ratchet: modals.js v2.0.2
 * http://goratchet.com/components#modals
 * ========================================================================
 * Copyright 2014 Connor Sears
 * Licensed under MIT (https://github.com/twbs/ratchet/blob/master/LICENSE)
 * ======================================================================== */

!(function () {
  'use strict';

  var findModals = function (target) {
    var i;
    var modals = document.querySelectorAll('a');

    for (; target && target !== document; target = target.parentNode) {
      for (i = modals.length; i--;) {
        if (modals[i] === target) {
          return target;
        }
      }
    }
  };

  var getModal = function (event) {
    var modalToggle = findModals(event.target);
    if (modalToggle && modalToggle.hash) {
      return document.querySelector(modalToggle.hash);
    }
  };

  window.addEventListener('touchend', function (event) {
    var modal = getModal(event);
    if (modal) {
      if (modal && modal.classList.contains('modal')) {
        modal.classList.toggle('active');
      }
      event.preventDefault(); // prevents rewriting url (apps can still use hash values in url)
    }
  });
}());

/* ========================================================================
 * Ratchet: popovers.js v2.0.2
 * http://goratchet.com/components#popovers
 * ========================================================================
 * Copyright 2014 Connor Sears
 * Licensed under MIT (https://github.com/twbs/ratchet/blob/master/LICENSE)
 * ======================================================================== */

!(function () {
  'use strict';

  var popover;

  var findPopovers = function (target) {
    var i;
    var popovers = document.querySelectorAll('a');

    for (; target && target !== document; target = target.parentNode) {
      for (i = popovers.length; i--;) {
        if (popovers[i] === target) {
          return target;
        }
      }
    }
  };

  var onPopoverHidden = function () {
    popover.style.display = 'none';
    popover.removeEventListener('webkitTransitionEnd', onPopoverHidden);
  };

  var backdrop = (function () {
    var element = document.createElement('div');

    element.classList.add('backdrop');

    element.addEventListener('touchend', function () {
      popover.addEventListener('webkitTransitionEnd', onPopoverHidden);
      popover.classList.remove('visible');
      popover.parentNode.removeChild(backdrop);
    });

    return element;
  }());

  var getPopover = function (e) {
    var anchor = findPopovers(e.target);

    if (!anchor || !anchor.hash || (anchor.hash.indexOf('/') > 0)) {
      return;
    }

    try {
      popover = document.querySelector(anchor.hash);
    }
    catch (error) {
      popover = null;
    }

    if (popover === null) {
      return;
    }

    if (!popover || !popover.classList.contains('popover')) {
      return;
    }

    return popover;
  };

  var showHidePopover = function (e) {
    var popover = getPopover(e);

    if (!popover) {
      return;
    }

    popover.style.display = 'block';
    popover.offsetHeight;
    popover.classList.add('visible');

    popover.parentNode.appendChild(backdrop);
  };

  window.addEventListener('touchend', showHidePopover);

}());

/* ========================================================================
 * Ratchet: push.js v2.0.2
 * http://goratchet.com/components#push
 * ========================================================================
 * inspired by @defunkt's jquery.pjax.js
 * Copyright 2014 Connor Sears
 * Licensed under MIT (https://github.com/twbs/ratchet/blob/master/LICENSE)
 * ======================================================================== */

/* global _gaq: true */

!(function () {
  'use strict';

  var noop = function () {};


  // Pushstate caching
  // ==================

  var isScrolling;
  var maxCacheLength = 20;
  var cacheMapping   = sessionStorage;
  var domCache       = {};
  var transitionMap  = {
    slideIn  : 'slide-out',
    slideOut : 'slide-in',
    fade     : 'fade'
  };

  var bars = {
    bartab             : '.bar-tab',
    barnav             : '.bar-nav',
    barfooter          : '.bar-footer',
    barheadersecondary : '.bar-header-secondary'
  };

  var cacheReplace = function (data, updates) {
    PUSH.id = data.id;
    if (updates) {
      data = getCached(data.id);
    }
    cacheMapping[data.id] = JSON.stringify(data);
    window.history.replaceState(data.id, data.title, data.url);
    domCache[data.id] = document.body.cloneNode(true);
  };

  var cachePush = function () {
    var id = PUSH.id;

    var cacheForwardStack = JSON.parse(cacheMapping.cacheForwardStack || '[]');
    var cacheBackStack    = JSON.parse(cacheMapping.cacheBackStack    || '[]');

    cacheBackStack.push(id);

    while (cacheForwardStack.length) {
      delete cacheMapping[cacheForwardStack.shift()];
    }
    while (cacheBackStack.length > maxCacheLength) {
      delete cacheMapping[cacheBackStack.shift()];
    }

    window.history.pushState(null, '', cacheMapping[PUSH.id].url);

    cacheMapping.cacheForwardStack = JSON.stringify(cacheForwardStack);
    cacheMapping.cacheBackStack    = JSON.stringify(cacheBackStack);
  };

  var cachePop = function (id, direction) {
    var forward           = direction === 'forward';
    var cacheForwardStack = JSON.parse(cacheMapping.cacheForwardStack || '[]');
    var cacheBackStack    = JSON.parse(cacheMapping.cacheBackStack    || '[]');
    var pushStack         = forward ? cacheBackStack    : cacheForwardStack;
    var popStack          = forward ? cacheForwardStack : cacheBackStack;

    if (PUSH.id) {
      pushStack.push(PUSH.id);
    }
    popStack.pop();

    cacheMapping.cacheForwardStack = JSON.stringify(cacheForwardStack);
    cacheMapping.cacheBackStack    = JSON.stringify(cacheBackStack);
  };

  var getCached = function (id) {
    return JSON.parse(cacheMapping[id] || null) || {};
  };

  var getTarget = function (e) {
    var target = findTarget(e.target);

    if (!target ||
        e.which > 1 ||
        e.metaKey ||
        e.ctrlKey ||
        isScrolling ||
        location.protocol !== target.protocol ||
        location.host     !== target.host ||
        !target.hash && /#/.test(target.href) ||
        target.hash && target.href.replace(target.hash, '') === location.href.replace(location.hash, '') ||
        target.getAttribute('data-ignore') === 'push') { return; }

    return target;
  };


  // Main event handlers (touchend, popstate)
  // ==========================================

  var touchend = function (e) {
    var target = getTarget(e);

    if (!target) {
      return;
    }

    e.preventDefault();

    PUSH({
      url        : target.href,
      hash       : target.hash,
      timeout    : target.getAttribute('data-timeout'),
      transition : target.getAttribute('data-transition')
    });
  };

  var popstate = function (e) {
    var key;
    var barElement;
    var activeObj;
    var activeDom;
    var direction;
    var transition;
    var transitionFrom;
    var transitionFromObj;
    var id = e.state;

    if (!id || !cacheMapping[id]) {
      return;
    }

    direction = PUSH.id < id ? 'forward' : 'back';

    cachePop(id, direction);

    activeObj = getCached(id);
    activeDom = domCache[id];

    if (activeObj.title) {
      document.title = activeObj.title;
    }

    if (direction === 'back') {
      transitionFrom    = JSON.parse(direction === 'back' ? cacheMapping.cacheForwardStack : cacheMapping.cacheBackStack);
      transitionFromObj = getCached(transitionFrom[transitionFrom.length - 1]);
    } else {
      transitionFromObj = activeObj;
    }

    if (direction === 'back' && !transitionFromObj.id) {
      return (PUSH.id = id);
    }

    transition = direction === 'back' ? transitionMap[transitionFromObj.transition] : transitionFromObj.transition;

    if (!activeDom) {
      return PUSH({
        id         : activeObj.id,
        url        : activeObj.url,
        title      : activeObj.title,
        timeout    : activeObj.timeout,
        transition : transition,
        ignorePush : true
      });
    }

    if (transitionFromObj.transition) {
      activeObj = extendWithDom(activeObj, '.content', activeDom.cloneNode(true));
      for (key in bars) {
        if (bars.hasOwnProperty(key)) {
          barElement = document.querySelector(bars[key]);
          if (activeObj[key]) {
            swapContent(activeObj[key], barElement);
          } else if (barElement) {
            barElement.parentNode.removeChild(barElement);
          }
        }
      }
    }

    swapContent(
      (activeObj.contents || activeDom).cloneNode(true),
      document.querySelector('.content'),
      transition
    );

    PUSH.id = id;

    document.body.offsetHeight; // force reflow to prevent scroll
  };


  // Core PUSH functionality
  // =======================

  var PUSH = function (options) {
    var key;
    var xhr = PUSH.xhr;

    options.container = options.container || options.transition ? document.querySelector('.content') : document.body;

    for (key in bars) {
      if (bars.hasOwnProperty(key)) {
        options[key] = options[key] || document.querySelector(bars[key]);
      }
    }

    if (xhr && xhr.readyState < 4) {
      xhr.onreadystatechange = noop;
      xhr.abort();
    }

    xhr = new XMLHttpRequest();
    xhr.open('GET', options.url, true);
    xhr.setRequestHeader('X-PUSH', 'true');

    xhr.onreadystatechange = function () {
      if (options._timeout) {
        clearTimeout(options._timeout);
      }
      if (xhr.readyState === 4) {
        xhr.status === 200 ? success(xhr, options) : failure(options.url);
      }
    };

    if (!PUSH.id) {
      cacheReplace({
        id         : +new Date(),
        url        : window.location.href,
        title      : document.title,
        timeout    : options.timeout,
        transition : null
      });
    }

    if (options.timeout) {
      options._timeout = setTimeout(function () {  xhr.abort('timeout'); }, options.timeout);
    }

    xhr.send();

    if (xhr.readyState && !options.ignorePush) {
      cachePush();
    }
  };


  // Main XHR handlers
  // =================

  var success = function (xhr, options) {
    var key;
    var barElement;
    var data = parseXHR(xhr, options);

    if (!data.contents) {
      return locationReplace(options.url);
    }

    if (data.title) {
      document.title = data.title;
    }

    if (options.transition) {
      for (key in bars) {
        if (bars.hasOwnProperty(key)) {
          barElement = document.querySelector(bars[key]);
          if (data[key]) {
            swapContent(data[key], barElement);
          } else if (barElement) {
            barElement.parentNode.removeChild(barElement);
          }
        }
      }
    }

    swapContent(data.contents, options.container, options.transition, function () {
      cacheReplace({
        id         : options.id || +new Date(),
        url        : data.url,
        title      : data.title,
        timeout    : options.timeout,
        transition : options.transition
      }, options.id);
      triggerStateChange();
    });

    if (!options.ignorePush && window._gaq) {
      _gaq.push(['_trackPageview']); // google analytics
    }
    if (!options.hash) {
      return;
    }
  };

  var failure = function (url) {
    throw new Error('Could not get: ' + url);
  };


  // PUSH helpers
  // ============

  var swapContent = function (swap, container, transition, complete) {
    var enter;
    var containerDirection;
    var swapDirection;

    if (!transition) {
      if (container) {
        container.innerHTML = swap.innerHTML;
      } else if (swap.classList.contains('content')) {
        document.body.appendChild(swap);
      } else {
        document.body.insertBefore(swap, document.querySelector('.content'));
      }
    } else {
      enter  = /in$/.test(transition);

      if (transition === 'fade') {
        container.classList.add('in');
        container.classList.add('fade');
        swap.classList.add('fade');
      }

      if (/slide/.test(transition)) {
        swap.classList.add('sliding-in', enter ? 'right' : 'left');
        swap.classList.add('sliding');
        container.classList.add('sliding');
      }

      container.parentNode.insertBefore(swap, container);
    }

    if (!transition) {
      complete && complete();
    }

    if (transition === 'fade') {
      container.offsetWidth; // force reflow
      container.classList.remove('in');
      var fadeContainerEnd = function () {
        container.removeEventListener('webkitTransitionEnd', fadeContainerEnd);
        swap.classList.add('in');
        swap.addEventListener('webkitTransitionEnd', fadeSwapEnd);
      };
      var fadeSwapEnd = function () {
        swap.removeEventListener('webkitTransitionEnd', fadeSwapEnd);
        container.parentNode.removeChild(container);
        swap.classList.remove('fade');
        swap.classList.remove('in');
        complete && complete();
      };
      container.addEventListener('webkitTransitionEnd', fadeContainerEnd);

    }

    if (/slide/.test(transition)) {
      var slideEnd = function () {
        swap.removeEventListener('webkitTransitionEnd', slideEnd);
        swap.classList.remove('sliding', 'sliding-in');
        swap.classList.remove(swapDirection);
        container.parentNode.removeChild(container);
        complete && complete();
      };

      container.offsetWidth; // force reflow
      swapDirection      = enter ? 'right' : 'left';
      containerDirection = enter ? 'left' : 'right';
      container.classList.add(containerDirection);
      swap.classList.remove(swapDirection);
      swap.addEventListener('webkitTransitionEnd', slideEnd);
    }
  };

  var triggerStateChange = function () {
    var e = new CustomEvent('push', {
      detail: { state: getCached(PUSH.id) },
      bubbles: true,
      cancelable: true
    });

    window.dispatchEvent(e);
  };

  var findTarget = function (target) {
    var i;
    var toggles = document.querySelectorAll('a');

    for (; target && target !== document; target = target.parentNode) {
      for (i = toggles.length; i--;) {
        if (toggles[i] === target) {
          return target;
        }
      }
    }
  };

  var locationReplace = function (url) {
    window.history.replaceState(null, '', '#');
    window.location.replace(url);
  };

  var extendWithDom = function (obj, fragment, dom) {
    var i;
    var result = {};

    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        result[i] = obj[i];
      }
    }

    Object.keys(bars).forEach(function (key) {
      var el = dom.querySelector(bars[key]);
      if (el) {
        el.parentNode.removeChild(el);
      }
      result[key] = el;
    });

    result.contents = dom.querySelector(fragment);

    return result;
  };

  var parseXHR = function (xhr, options) {
    var head;
    var body;
    var data = {};
    var responseText = xhr.responseText;

    data.url = options.url;

    if (!responseText) {
      return data;
    }

    if (/<html/i.test(responseText)) {
      head           = document.createElement('div');
      body           = document.createElement('div');
      head.innerHTML = responseText.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0];
      body.innerHTML = responseText.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0];
    } else {
      head           = body = document.createElement('div');
      head.innerHTML = responseText;
    }

    data.title = head.querySelector('title');
    var text = 'innerText' in data.title ? 'innerText' : 'textContent';
    data.title = data.title && data.title[text].trim();

    if (options.transition) {
      data = extendWithDom(data, '.content', body);
    } else {
      data.contents = body;
    }

    return data;
  };


  // Attach PUSH event handlers
  // ==========================

  window.addEventListener('touchstart', function () { isScrolling = false; });
  window.addEventListener('touchmove', function () { isScrolling = true; });
  window.addEventListener('touchend', touchend);
  window.addEventListener('click', function (e) { if (getTarget(e)) {e.preventDefault();} });
  window.addEventListener('popstate', popstate);
  window.PUSH = PUSH;

}());

/* ========================================================================
 * Ratchet: segmented-controllers.js v2.0.2
 * http://goratchet.com/components#segmentedControls
 * ========================================================================
 * Copyright 2014 Connor Sears
 * Licensed under MIT (https://github.com/twbs/ratchet/blob/master/LICENSE)
 * ======================================================================== */

!(function () {
  'use strict';

  var getTarget = function (target) {
    var i;
    var segmentedControls = document.querySelectorAll('.segmented-control .control-item');

    for (; target && target !== document; target = target.parentNode) {
      for (i = segmentedControls.length; i--;) {
        if (segmentedControls[i] === target) {
          return target;
        }
      }
    }
  };

  window.addEventListener('touchend', function (e) {
    var activeTab;
    var activeBodies;
    var targetBody;
    var targetTab     = getTarget(e.target);
    var className     = 'active';
    var classSelector = '.' + className;

    if (!targetTab) {
      return;
    }

    activeTab = targetTab.parentNode.querySelector(classSelector);

    if (activeTab) {
      activeTab.classList.remove(className);
    }

    targetTab.classList.add(className);

    if (!targetTab.hash) {
      return;
    }

    targetBody = document.querySelector(targetTab.hash);

    if (!targetBody) {
      return;
    }

    activeBodies = targetBody.parentNode.querySelectorAll(classSelector);

    for (var i = 0; i < activeBodies.length; i++) {
      activeBodies[i].classList.remove(className);
    }

    targetBody.classList.add(className);
  });

  window.addEventListener('click', function (e) { if (getTarget(e.target)) {e.preventDefault();} });
}());

/* ========================================================================
 * Ratchet: sliders.js v2.0.2
 * http://goratchet.com/components#sliders
 * ========================================================================
   Adapted from Brad Birdsall's swipe
 * Copyright 2014 Connor Sears
 * Licensed under MIT (https://github.com/twbs/ratchet/blob/master/LICENSE)
 * ======================================================================== */

!(function () {
  'use strict';

  var pageX;
  var pageY;
  var slider;
  var deltaX;
  var deltaY;
  var offsetX;
  var lastSlide;
  var startTime;
  var resistance;
  var sliderWidth;
  var slideNumber;
  var isScrolling;
  var scrollableArea;

  var getSlider = function (target) {
    var i;
    var sliders = document.querySelectorAll('.slider > .slide-group');

    for (; target && target !== document; target = target.parentNode) {
      for (i = sliders.length; i--;) {
        if (sliders[i] === target) {
          return target;
        }
      }
    }
  };

  var getScroll = function () {
    if ('webkitTransform' in slider.style) {
      var translate3d = slider.style.webkitTransform.match(/translate3d\(([^,]*)/);
      var ret = translate3d ? translate3d[1] : 0;
      return parseInt(ret, 10);
    }
  };

  var setSlideNumber = function (offset) {
    var round = offset ? (deltaX < 0 ? 'ceil' : 'floor') : 'round';
    slideNumber = Math[round](getScroll() / (scrollableArea / slider.children.length));
    slideNumber += offset;
    slideNumber = Math.min(slideNumber, 0);
    slideNumber = Math.max(-(slider.children.length - 1), slideNumber);
  };

  var onTouchStart = function (e) {
    slider = getSlider(e.target);

    if (!slider) {
      return;
    }

    var firstItem  = slider.querySelector('.slide');

    scrollableArea = firstItem.offsetWidth * slider.children.length;
    isScrolling    = undefined;
    sliderWidth    = slider.offsetWidth;
    resistance     = 1;
    lastSlide      = -(slider.children.length - 1);
    startTime      = +new Date();
    pageX          = e.touches[0].pageX;
    pageY          = e.touches[0].pageY;
    deltaX         = 0;
    deltaY         = 0;

    setSlideNumber(0);

    slider.style['-webkit-transition-duration'] = 0;
  };

  var onTouchMove = function (e) {
    if (e.touches.length > 1 || !slider) {
      return; // Exit if a pinch || no slider
    }

    deltaX = e.touches[0].pageX - pageX;
    deltaY = e.touches[0].pageY - pageY;
    pageX  = e.touches[0].pageX;
    pageY  = e.touches[0].pageY;

    if (typeof isScrolling === 'undefined') {
      isScrolling = Math.abs(deltaY) > Math.abs(deltaX);
    }

    if (isScrolling) {
      return;
    }

    offsetX = (deltaX / resistance) + getScroll();

    e.preventDefault();

    resistance = slideNumber === 0         && deltaX > 0 ? (pageX / sliderWidth) + 1.25 :
                 slideNumber === lastSlide && deltaX < 0 ? (Math.abs(pageX) / sliderWidth) + 1.25 : 1;

    slider.style.webkitTransform = 'translate3d(' + offsetX + 'px,0,0)';
  };

  var onTouchEnd = function (e) {
    if (!slider || isScrolling) {
      return;
    }

    setSlideNumber(
      (+new Date()) - startTime < 1000 && Math.abs(deltaX) > 15 ? (deltaX < 0 ? -1 : 1) : 0
    );

    offsetX = slideNumber * sliderWidth;

    slider.style['-webkit-transition-duration'] = '.2s';
    slider.style.webkitTransform = 'translate3d(' + offsetX + 'px,0,0)';

    e = new CustomEvent('slide', {
      detail: { slideNumber: Math.abs(slideNumber) },
      bubbles: true,
      cancelable: true
    });

    slider.parentNode.dispatchEvent(e);
  };

  window.addEventListener('touchstart', onTouchStart);
  window.addEventListener('touchmove', onTouchMove);
  window.addEventListener('touchend', onTouchEnd);

}());

/* ========================================================================
 * Ratchet: toggles.js v2.0.2
 * http://goratchet.com/components#toggles
 * ========================================================================
   Adapted from Brad Birdsall's swipe
 * Copyright 2014 Connor Sears
 * Licensed under MIT (https://github.com/twbs/ratchet/blob/master/LICENSE)
 * ======================================================================== */

!(function () {
  'use strict';

  var start     = {};
  var touchMove = false;
  var distanceX = false;
  var toggle    = false;

  var findToggle = function (target) {
    var i;
    var toggles = document.querySelectorAll('.toggle');

    for (; target && target !== document; target = target.parentNode) {
      for (i = toggles.length; i--;) {
        if (toggles[i] === target) {
          return target;
        }
      }
    }
  };

  window.addEventListener('touchstart', function (e) {
    e = e.originalEvent || e;

    toggle = findToggle(e.target);

    if (!toggle) {
      return;
    }

    var handle      = toggle.querySelector('.toggle-handle');
    var toggleWidth = toggle.clientWidth;
    var handleWidth = handle.clientWidth;
    var offset      = toggle.classList.contains('active') ? (toggleWidth - handleWidth) : 0;

    start     = { pageX : e.touches[0].pageX - offset, pageY : e.touches[0].pageY };
    touchMove = false;
  });

  window.addEventListener('touchmove', function (e) {
    e = e.originalEvent || e;

    if (e.touches.length > 1) {
      return; // Exit if a pinch
    }

    if (!toggle) {
      return;
    }

    var handle      = toggle.querySelector('.toggle-handle');
    var current     = e.touches[0];
    var toggleWidth = toggle.clientWidth;
    var handleWidth = handle.clientWidth;
    var offset      = toggleWidth - handleWidth;

    touchMove = true;
    distanceX = current.pageX - start.pageX;

    if (Math.abs(distanceX) < Math.abs(current.pageY - start.pageY)) {
      return;
    }

    e.preventDefault();

    if (distanceX < 0) {
      return (handle.style.webkitTransform = 'translate3d(0,0,0)');
    }
    if (distanceX > offset) {
      return (handle.style.webkitTransform = 'translate3d(' + offset + 'px,0,0)');
    }

    handle.style.webkitTransform = 'translate3d(' + distanceX + 'px,0,0)';

    toggle.classList[(distanceX > (toggleWidth / 2 - handleWidth / 2)) ? 'add' : 'remove']('active');
  });

  window.addEventListener('touchend', function (e) {
    if (!toggle) {
      return;
    }

    var handle      = toggle.querySelector('.toggle-handle');
    var toggleWidth = toggle.clientWidth;
    var handleWidth = handle.clientWidth;
    var offset      = (toggleWidth - handleWidth);
    var slideOn     = (!touchMove && !toggle.classList.contains('active')) || (touchMove && (distanceX > (toggleWidth / 2 - handleWidth / 2)));

    if (slideOn) {
      handle.style.webkitTransform = 'translate3d(' + offset + 'px,0,0)';
    } else {
      handle.style.webkitTransform = 'translate3d(0,0,0)';
    }

    toggle.classList[slideOn ? 'add' : 'remove']('active');

    e = new CustomEvent('toggle', {
      detail: { isActive: slideOn },
      bubbles: true,
      cancelable: true
    });

    toggle.dispatchEvent(e);

    touchMove = false;
    toggle    = false;
  });

}());
/*
 * Snap.js
 *
 * Copyright 2013, Jacob Kelley - http://jakiestfu.com/
 * Released under the MIT Licence
 * http://opensource.org/licenses/MIT
 *
 * Github:  http://github.com/jakiestfu/Snap.js/
 * Version: 1.9.3
 */
/*jslint browser: true*/
/*global define, module, ender*/
(function(win, doc) {
    'use strict';
    var Snap = Snap || function(userOpts) {
        var settings = {
            element: null,
            dragger: null,
            disable: 'none',
            addBodyClasses: true,
            hyperextensible: true,
            resistance: 0.5,
            flickThreshold: 50,
            transitionSpeed: 0.3,
            easing: 'ease',
            maxPosition: 266,
            minPosition: -266,
            tapToClose: true,
            touchToDrag: true,
            slideIntent: 40, // degrees
            minDragDistance: 5
        },
        cache = {
            simpleStates: {
                opening: null,
                towards: null,
                hyperExtending: null,
                halfway: null,
                flick: null,
                translation: {
                    absolute: 0,
                    relative: 0,
                    sinceDirectionChange: 0,
                    percentage: 0
                }
            }
        },
        eventList = {},
        utils = {
            hasTouch: ('ontouchstart' in doc.documentElement || win.navigator.msPointerEnabled),
            eventType: function(action) {
                var eventTypes = {
                        down: (utils.hasTouch ? 'touchstart' : 'mousedown'),
                        move: (utils.hasTouch ? 'touchmove' : 'mousemove'),
                        up: (utils.hasTouch ? 'touchend' : 'mouseup'),
                        out: (utils.hasTouch ? 'touchcancel' : 'mouseout')
                    };
                return eventTypes[action];
            },
            page: function(t, e){
                return (utils.hasTouch && e.touches.length && e.touches[0]) ? e.touches[0]['page'+t] : e['page'+t];
            },
            klass: {
                has: function(el, name){
                    return (el.className).indexOf(name) !== -1;
                },
                add: function(el, name){
                    if(!utils.klass.has(el, name) && settings.addBodyClasses){
                        el.className += " "+name;
                    }
                },
                remove: function(el, name){
                    if(settings.addBodyClasses){
                        el.className = (el.className).replace(name, "").replace(/^\s+|\s+$/g, '');
                    }
                }
            },
            dispatchEvent: function(type) {
                if (typeof eventList[type] === 'function') {
                    return eventList[type].call();
                }
            },
            vendor: function(){
                var tmp = doc.createElement("div"),
                    prefixes = 'webkit Moz O ms'.split(' '),
                    i;
                for (i in prefixes) {
                    if (typeof tmp.style[prefixes[i] + 'Transition'] !== 'undefined') {
                        return prefixes[i];
                    }
                }
            },
            transitionCallback: function(){
                return (cache.vendor==='Moz' || cache.vendor==='ms') ? 'transitionend' : cache.vendor+'TransitionEnd';
            },
            canTransform: function(){
                return typeof settings.element.style[cache.vendor+'Transform'] !== 'undefined';
            },
            deepExtend: function(destination, source) {
                var property;
                for (property in source) {
                    if (source[property] && source[property].constructor && source[property].constructor === Object) {
                        destination[property] = destination[property] || {};
                        utils.deepExtend(destination[property], source[property]);
                    } else {
                        destination[property] = source[property];
                    }
                }
                return destination;
            },
            angleOfDrag: function(x, y) {
                var degrees, theta;
                // Calc Theta
                theta = Math.atan2(-(cache.startDragY - y), (cache.startDragX - x));
                if (theta < 0) {
                    theta += 2 * Math.PI;
                }
                // Calc Degrees
                degrees = Math.floor(theta * (180 / Math.PI) - 180);
                if (degrees < 0 && degrees > -180) {
                    degrees = 360 - Math.abs(degrees);
                }
                return Math.abs(degrees);
            },
            events: {
                addEvent: function addEvent(element, eventName, func) {
                    if (element.addEventListener) {
                        return element.addEventListener(eventName, func, false);
                    } else if (element.attachEvent) {
                        return element.attachEvent("on" + eventName, func);
                    }
                },
                removeEvent: function addEvent(element, eventName, func) {
                    if (element.addEventListener) {
                        return element.removeEventListener(eventName, func, false);
                    } else if (element.attachEvent) {
                        return element.detachEvent("on" + eventName, func);
                    }
                },
                prevent: function(e) {
                    if (e.preventDefault) {
                        e.preventDefault();
                    } else {
                        e.returnValue = false;
                    }
                }
            },
            parentUntil: function(el, attr) {
                var isStr = typeof attr === 'string';
                while (el.parentNode) {
                    if (isStr && el.getAttribute && el.getAttribute(attr)){
                        return el;
                    } else if(!isStr && el === attr){
                        return el;
                    }
                    el = el.parentNode;
                }
                return null;
            }
        },
        action = {
            translate: {
                get: {
                    matrix: function(index) {

                        if( !utils.canTransform() ){
                            return parseInt(settings.element.style.left, 10);
                        } else {
                            var matrix = win.getComputedStyle(settings.element)[cache.vendor+'Transform'].match(/\((.*)\)/),
                                ieOffset = 8;
                            if (matrix) {
                                matrix = matrix[1].split(',');
                                if(matrix.length===16){
                                    index+=ieOffset;
                                }
                                return parseInt(matrix[index], 10);
                            }
                            return 0;
                        }
                    }
                },
                easeCallback: function(){
                    settings.element.style[cache.vendor+'Transition'] = '';
                    cache.translation = action.translate.get.matrix(4);
                    cache.easing = false;
                    clearInterval(cache.animatingInterval);

                    if(cache.easingTo===0){
                        utils.klass.remove(doc.body, 'snapjs-right');
                        utils.klass.remove(doc.body, 'snapjs-left');
                    }

                    utils.dispatchEvent('animated');
                    utils.events.removeEvent(settings.element, utils.transitionCallback(), action.translate.easeCallback);
                },
                easeTo: function(n) {

                    if( !utils.canTransform() ){
                        cache.translation = n;
                        action.translate.x(n);
                    } else {
                        cache.easing = true;
                        cache.easingTo = n;

                        settings.element.style[cache.vendor+'Transition'] = 'all ' + settings.transitionSpeed + 's ' + settings.easing;

                        cache.animatingInterval = setInterval(function() {
                            utils.dispatchEvent('animating');
                        }, 1);
                        
                        utils.events.addEvent(settings.element, utils.transitionCallback(), action.translate.easeCallback);
                        action.translate.x(n);
                    }
                    if(n===0){
                           settings.element.style[cache.vendor+'Transform'] = '';
                       }
                },
                x: function(n) {
                    if( (settings.disable==='left' && n>0) ||
                        (settings.disable==='right' && n<0)
                    ){ return; }
                    
                    if( !settings.hyperextensible ){
                        if( n===settings.maxPosition || n>settings.maxPosition ){
                            n=settings.maxPosition;
                        } else if( n===settings.minPosition || n<settings.minPosition ){
                            n=settings.minPosition;
                        }
                    }
                    
                    n = parseInt(n, 10);
                    if(isNaN(n)){
                        n = 0;
                    }

                    if( utils.canTransform() ){
                        var theTranslate = 'translate3d(' + n + 'px, 0,0)';
                        settings.element.style[cache.vendor+'Transform'] = theTranslate;
                    } else {
                        settings.element.style.width = (win.innerWidth || doc.documentElement.clientWidth)+'px';

                        settings.element.style.left = n+'px';
                        settings.element.style.right = '';
                    }
                }
            },
            drag: {
                listen: function() {
                    cache.translation = 0;
                    cache.easing = false;
                    utils.events.addEvent(settings.element, utils.eventType('down'), action.drag.startDrag);
                    utils.events.addEvent(settings.element, utils.eventType('move'), action.drag.dragging);
                    utils.events.addEvent(settings.element, utils.eventType('up'), action.drag.endDrag);
                },
                stopListening: function() {
                    utils.events.removeEvent(settings.element, utils.eventType('down'), action.drag.startDrag);
                    utils.events.removeEvent(settings.element, utils.eventType('move'), action.drag.dragging);
                    utils.events.removeEvent(settings.element, utils.eventType('up'), action.drag.endDrag);
                },
                startDrag: function(e) {
                    // No drag on ignored elements
                    var target = e.target ? e.target : e.srcElement,
                        ignoreParent = utils.parentUntil(target, 'data-snap-ignore');
                    
                    if (ignoreParent) {
                        utils.dispatchEvent('ignore');
                        return;
                    }
                    
                    
                    if(settings.dragger){
                        var dragParent = utils.parentUntil(target, settings.dragger);
                        
                        // Only use dragger if we're in a closed state
                        if( !dragParent && 
                            (cache.translation !== settings.minPosition && 
                            cache.translation !== settings.maxPosition
                        )){
                            return;
                        }
                    }
                    
                    utils.dispatchEvent('start');
                    settings.element.style[cache.vendor+'Transition'] = '';
                    cache.isDragging = true;
                    cache.hasIntent = null;
                    cache.intentChecked = false;
                    cache.startDragX = utils.page('X', e);
                    cache.startDragY = utils.page('Y', e);
                    cache.dragWatchers = {
                        current: 0,
                        last: 0,
                        hold: 0,
                        state: ''
                    };
                    cache.simpleStates = {
                        opening: null,
                        towards: null,
                        hyperExtending: null,
                        halfway: null,
                        flick: null,
                        translation: {
                            absolute: 0,
                            relative: 0,
                            sinceDirectionChange: 0,
                            percentage: 0
                        }
                    };
                },
                dragging: function(e) {
                    if (cache.isDragging && settings.touchToDrag) {

                        var thePageX = utils.page('X', e),
                            thePageY = utils.page('Y', e),
                            translated = cache.translation,
                            absoluteTranslation = action.translate.get.matrix(4),
                            whileDragX = thePageX - cache.startDragX,
                            openingLeft = absoluteTranslation > 0,
                            translateTo = whileDragX,
                            diff;

                        // Shown no intent already
                        if((cache.intentChecked && !cache.hasIntent)){
                            return;
                        }

                        if(settings.addBodyClasses){
                            if((absoluteTranslation)>0){
                                utils.klass.add(doc.body, 'snapjs-left');
                                utils.klass.remove(doc.body, 'snapjs-right');
                            } else if((absoluteTranslation)<0){
                                utils.klass.add(doc.body, 'snapjs-right');
                                utils.klass.remove(doc.body, 'snapjs-left');
                            }
                        }

                        if (cache.hasIntent === false || cache.hasIntent === null) {
                            var deg = utils.angleOfDrag(thePageX, thePageY),
                                inRightRange = (deg >= 0 && deg <= settings.slideIntent) || (deg <= 360 && deg > (360 - settings.slideIntent)),
                                inLeftRange = (deg >= 180 && deg <= (180 + settings.slideIntent)) || (deg <= 180 && deg >= (180 - settings.slideIntent));
                            if (!inLeftRange && !inRightRange) {
                                cache.hasIntent = false;
                            } else {
                                cache.hasIntent = true;
                            }
                            cache.intentChecked = true;
                        }

                        if (
                            (settings.minDragDistance>=Math.abs(thePageX-cache.startDragX)) || // Has user met minimum drag distance?
                            (cache.hasIntent === false)
                        ) {
                            return;
                        }

                        utils.events.prevent(e);
                        utils.dispatchEvent('drag');

                        cache.dragWatchers.current = thePageX;
                        // Determine which direction we are going
                        if (cache.dragWatchers.last > thePageX) {
                            if (cache.dragWatchers.state !== 'left') {
                                cache.dragWatchers.state = 'left';
                                cache.dragWatchers.hold = thePageX;
                            }
                            cache.dragWatchers.last = thePageX;
                        } else if (cache.dragWatchers.last < thePageX) {
                            if (cache.dragWatchers.state !== 'right') {
                                cache.dragWatchers.state = 'right';
                                cache.dragWatchers.hold = thePageX;
                            }
                            cache.dragWatchers.last = thePageX;
                        }
                        if (openingLeft) {
                            // Pulling too far to the right
                            if (settings.maxPosition < absoluteTranslation) {
                                diff = (absoluteTranslation - settings.maxPosition) * settings.resistance;
                                translateTo = whileDragX - diff;
                            }
                            cache.simpleStates = {
                                opening: 'left',
                                towards: cache.dragWatchers.state,
                                hyperExtending: settings.maxPosition < absoluteTranslation,
                                halfway: absoluteTranslation > (settings.maxPosition / 2),
                                flick: Math.abs(cache.dragWatchers.current - cache.dragWatchers.hold) > settings.flickThreshold,
                                translation: {
                                    absolute: absoluteTranslation,
                                    relative: whileDragX,
                                    sinceDirectionChange: (cache.dragWatchers.current - cache.dragWatchers.hold),
                                    percentage: (absoluteTranslation/settings.maxPosition)*100
                                }
                            };
                        } else {
                            // Pulling too far to the left
                            if (settings.minPosition > absoluteTranslation) {
                                diff = (absoluteTranslation - settings.minPosition) * settings.resistance;
                                translateTo = whileDragX - diff;
                            }
                            cache.simpleStates = {
                                opening: 'right',
                                towards: cache.dragWatchers.state,
                                hyperExtending: settings.minPosition > absoluteTranslation,
                                halfway: absoluteTranslation < (settings.minPosition / 2),
                                flick: Math.abs(cache.dragWatchers.current - cache.dragWatchers.hold) > settings.flickThreshold,
                                translation: {
                                    absolute: absoluteTranslation,
                                    relative: whileDragX,
                                    sinceDirectionChange: (cache.dragWatchers.current - cache.dragWatchers.hold),
                                    percentage: (absoluteTranslation/settings.minPosition)*100
                                }
                            };
                        }
                        action.translate.x(translateTo + translated);
                    }
                },
                endDrag: function(e) {
                    if (cache.isDragging) {
                        utils.dispatchEvent('end');
                        var translated = action.translate.get.matrix(4);

                        // Tap Close
                        if (cache.dragWatchers.current === 0 && translated !== 0 && settings.tapToClose) {
                            utils.dispatchEvent('close');
                            utils.events.prevent(e);
                            action.translate.easeTo(0);
                            cache.isDragging = false;
                            cache.startDragX = 0;
                            return;
                        }

                        // Revealing Left
                        if (cache.simpleStates.opening === 'left') {
                            // Halfway, Flicking, or Too Far Out
                            if ((cache.simpleStates.halfway || cache.simpleStates.hyperExtending || cache.simpleStates.flick)) {
                                if (cache.simpleStates.flick && cache.simpleStates.towards === 'left') { // Flicking Closed
                                    action.translate.easeTo(0);
                                } else if (
                                    (cache.simpleStates.flick && cache.simpleStates.towards === 'right') || // Flicking Open OR
                                    (cache.simpleStates.halfway || cache.simpleStates.hyperExtending) // At least halfway open OR hyperextending
                                ) {
                                    action.translate.easeTo(settings.maxPosition); // Open Left
                                }
                            } else {
                                action.translate.easeTo(0); // Close Left
                            }
                            // Revealing Right
                        } else if (cache.simpleStates.opening === 'right') {
                            // Halfway, Flicking, or Too Far Out
                            if ((cache.simpleStates.halfway || cache.simpleStates.hyperExtending || cache.simpleStates.flick)) {
                                if (cache.simpleStates.flick && cache.simpleStates.towards === 'right') { // Flicking Closed
                                    action.translate.easeTo(0);
                                } else if (
                                    (cache.simpleStates.flick && cache.simpleStates.towards === 'left') || // Flicking Open OR
                                    (cache.simpleStates.halfway || cache.simpleStates.hyperExtending) // At least halfway open OR hyperextending
                                ) {
                                    action.translate.easeTo(settings.minPosition); // Open Right
                                }
                            } else {
                                action.translate.easeTo(0); // Close Right
                            }
                        }
                        cache.isDragging = false;
                        cache.startDragX = utils.page('X', e);
                    }
                }
            }
        },
        init = function(opts) {
            if (opts.element) {
                utils.deepExtend(settings, opts);
                cache.vendor = utils.vendor();
                action.drag.listen();
            }
        };
        /*
         * Public
         */
        this.open = function(side) {
            utils.dispatchEvent('open');
            utils.klass.remove(doc.body, 'snapjs-expand-left');
            utils.klass.remove(doc.body, 'snapjs-expand-right');

            if (side === 'left') {
                cache.simpleStates.opening = 'left';
                cache.simpleStates.towards = 'right';
                utils.klass.add(doc.body, 'snapjs-left');
                utils.klass.remove(doc.body, 'snapjs-right');
                action.translate.easeTo(settings.maxPosition);
            } else if (side === 'right') {
                cache.simpleStates.opening = 'right';
                cache.simpleStates.towards = 'left';
                utils.klass.remove(doc.body, 'snapjs-left');
                utils.klass.add(doc.body, 'snapjs-right');
                action.translate.easeTo(settings.minPosition);
            }
        };
        this.close = function() {
            utils.dispatchEvent('close');
            action.translate.easeTo(0);
        };
        this.expand = function(side){
            var to = win.innerWidth || doc.documentElement.clientWidth;

            if(side==='left'){
                utils.dispatchEvent('expandLeft');
                utils.klass.add(doc.body, 'snapjs-expand-left');
                utils.klass.remove(doc.body, 'snapjs-expand-right');
            } else {
                utils.dispatchEvent('expandRight');
                utils.klass.add(doc.body, 'snapjs-expand-right');
                utils.klass.remove(doc.body, 'snapjs-expand-left');
                to *= -1;
            }
            action.translate.easeTo(to);
        };

        this.on = function(evt, fn) {
            eventList[evt] = fn;
            return this;
        };
        this.off = function(evt) {
            if (eventList[evt]) {
                eventList[evt] = false;
            }
        };

        this.enable = function() {
            utils.dispatchEvent('enable');
            action.drag.listen();
        };
        this.disable = function() {
            utils.dispatchEvent('disable');
            action.drag.stopListening();
        };

        this.settings = function(opts){
            utils.deepExtend(settings, opts);
        };

        this.state = function() {
            var state,
                fromLeft = action.translate.get.matrix(4);
            if (fromLeft === settings.maxPosition) {
                state = 'left';
            } else if (fromLeft === settings.minPosition) {
                state = 'right';
            } else {
                state = 'closed';
            }
            return {
                state: state,
                info: cache.simpleStates
            };
        };
        init(userOpts);
    };
    if ((typeof module !== 'undefined') && module.exports) {
        module.exports = Snap;
    }
    if (typeof ender === 'undefined') {
        this.Snap = Snap;
    }
    if ((typeof define === "function") && define.amd) {
        define("snap", [], function() {
            return Snap;
        });
    }
}).call(this, window, document);
/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function( window, undefined ) {

// Use the correct document accordingly with window argument (sandbox)
var document = window.document,
	navigator = window.navigator,
	location = window.location;
var jQuery = (function() {

// Define a local copy of jQuery
var jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context, rootjQuery );
	},

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$,

	// A central reference to the root jQuery(document)
	rootjQuery,

	// A simple way to check for HTML strings or ID strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	quickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,

	// Check if a string has a non-whitespace character in it
	rnotwhite = /\S/,

	// Used for trimming whitespace
	trimLeft = /^\s+/,
	trimRight = /\s+$/,

	// Match a standalone tag
	rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,

	// JSON RegExp
	rvalidchars = /^[\],:{}\s]*$/,
	rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
	rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
	rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,

	// Useragent RegExp
	rwebkit = /(webkit)[ \/]([\w.]+)/,
	ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/,
	rmsie = /(msie) ([\w.]+)/,
	rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/,

	// Matches dashed string for camelizing
	rdashAlpha = /-([a-z]|[0-9])/ig,
	rmsPrefix = /^-ms-/,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return ( letter + "" ).toUpperCase();
	},

	// Keep a UserAgent string for use with jQuery.browser
	userAgent = navigator.userAgent,

	// For matching the engine and version of the browser
	browserMatch,

	// The deferred used on DOM ready
	readyList,

	// The ready event handler
	DOMContentLoaded,

	// Save a reference to some core methods
	toString = Object.prototype.toString,
	hasOwn = Object.prototype.hasOwnProperty,
	push = Array.prototype.push,
	slice = Array.prototype.slice,
	trim = String.prototype.trim,
	indexOf = Array.prototype.indexOf,

	// [[Class]] -> type pairs
	class2type = {};

jQuery.fn = jQuery.prototype = {
	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem, ret, doc;

		// Handle $(""), $(null), or $(undefined)
		if ( !selector ) {
			return this;
		}

		// Handle $(DOMElement)
		if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;
		}

		// The body element only exists once, optimize finding it
		if ( selector === "body" && !context && document.body ) {
			this.context = document;
			this[0] = document.body;
			this.selector = selector;
			this.length = 1;
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			// Are we dealing with HTML string or an ID?
			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = quickExpr.exec( selector );
			}

			// Verify a match, and that no context was specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;
					doc = ( context ? context.ownerDocument || context : document );

					// If a single string is passed in and it's a single tag
					// just do a createElement and skip the rest
					ret = rsingleTag.exec( selector );

					if ( ret ) {
						if ( jQuery.isPlainObject( context ) ) {
							selector = [ document.createElement( ret[1] ) ];
							jQuery.fn.attr.call( selector, context, true );

						} else {
							selector = [ doc.createElement( ret[1] ) ];
						}

					} else {
						ret = jQuery.buildFragment( [ match[1] ], [ doc ] );
						selector = ( ret.cacheable ? jQuery.clone(ret.fragment) : ret.fragment ).childNodes;
					}

					return jQuery.merge( this, selector );

				// HANDLE: $("#id")
				} else {
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[2] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return rootjQuery.ready( selector );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	},

	// Start with an empty selector
	selector: "",

	// The current version of jQuery being used
	jquery: "1.7.1",

	// The default length of a jQuery object is 0
	length: 0,

	// The number of elements contained in the matched element set
	size: function() {
		return this.length;
	},

	toArray: function() {
		return slice.call( this, 0 );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num == null ?

			// Return a 'clean' array
			this.toArray() :

			// Return just the object
			( num < 0 ? this[ this.length + num ] : this[ num ] );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems, name, selector ) {
		// Build a new jQuery matched element set
		var ret = this.constructor();

		if ( jQuery.isArray( elems ) ) {
			push.apply( ret, elems );

		} else {
			jQuery.merge( ret, elems );
		}

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		ret.context = this.context;

		if ( name === "find" ) {
			ret.selector = this.selector + ( this.selector ? " " : "" ) + selector;
		} else if ( name ) {
			ret.selector = this.selector + "." + name + "(" + selector + ")";
		}

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	ready: function( fn ) {
		// Attach the listeners
		jQuery.bindReady();

		// Add the callback
		readyList.add( fn );

		return this;
	},

	eq: function( i ) {
		i = +i;
		return i === -1 ?
			this.slice( i ) :
			this.slice( i, i + 1 );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ),
			"slice", slice.call(arguments).join(",") );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: [].sort,
	splice: [].splice
};

// Give the init function the jQuery prototype for later instantiation
jQuery.fn.init.prototype = jQuery.fn;

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( length === i ) {
		target = this;
		--i;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	noConflict: function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	},

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {
		// Either a released hold or an DOMready/load event and not yet ready
		if ( (wait === true && !--jQuery.readyWait) || (wait !== true && !jQuery.isReady) ) {
			// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
			if ( !document.body ) {
				return setTimeout( jQuery.ready, 1 );
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.fireWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.trigger ) {
				jQuery( document ).trigger( "ready" ).off( "ready" );
			}
		}
	},

	bindReady: function() {
		if ( readyList ) {
			return;
		}

		readyList = jQuery.Callbacks( "once memory" );

		// Catch cases where $(document).ready() is called after the
		// browser event has already occurred.
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			return setTimeout( jQuery.ready, 1 );
		}

		// Mozilla, Opera and webkit nightlies currently support this event
		if ( document.addEventListener ) {
			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", DOMContentLoaded, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", jQuery.ready, false );

		// If IE event model is used
		} else if ( document.attachEvent ) {
			// ensure firing before onload,
			// maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", DOMContentLoaded );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", jQuery.ready );

			// If IE and not a frame
			// continually check to see if the document is ready
			var toplevel = false;

			try {
				toplevel = window.frameElement == null;
			} catch(e) {}

			if ( document.documentElement.doScroll && toplevel ) {
				doScrollCheck();
			}
		}
	},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type(obj) === "array";
	},

	// A crude way of determining if an object is a window
	isWindow: function( obj ) {
		return obj && typeof obj === "object" && "setInterval" in obj;
	},

	isNumeric: function( obj ) {
		return !isNaN( parseFloat(obj) ) && isFinite( obj );
	},

	type: function( obj ) {
		return obj == null ?
			String( obj ) :
			class2type[ toString.call(obj) ] || "object";
	},

	isPlainObject: function( obj ) {
		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {
			// Not own constructor property must be Object
			if ( obj.constructor &&
				!hasOwn.call(obj, "constructor") &&
				!hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
				return false;
			}
		} catch ( e ) {
			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.

		var key;
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	isEmptyObject: function( obj ) {
		for ( var name in obj ) {
			return false;
		}
		return true;
	},

	error: function( msg ) {
		throw new Error( msg );
	},

	parseJSON: function( data ) {
		if ( typeof data !== "string" || !data ) {
			return null;
		}

		// Make sure leading/trailing whitespace is removed (IE can't handle it)
		data = jQuery.trim( data );

		// Attempt to parse using the native JSON parser first
		if ( window.JSON && window.JSON.parse ) {
			return window.JSON.parse( data );
		}

		// Make sure the incoming data is actual JSON
		// Logic borrowed from http://json.org/json2.js
		if ( rvalidchars.test( data.replace( rvalidescape, "@" )
			.replace( rvalidtokens, "]" )
			.replace( rvalidbraces, "")) ) {

			return ( new Function( "return " + data ) )();

		}
		jQuery.error( "Invalid JSON: " + data );
	},

	// Cross-browser xml parsing
	parseXML: function( data ) {
		var xml, tmp;
		try {
			if ( window.DOMParser ) { // Standard
				tmp = new DOMParser();
				xml = tmp.parseFromString( data , "text/xml" );
			} else { // IE
				xml = new ActiveXObject( "Microsoft.XMLDOM" );
				xml.async = "false";
				xml.loadXML( data );
			}
		} catch( e ) {
			xml = undefined;
		}
		if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	},

	noop: function() {},

	// Evaluates a script in a global context
	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && rnotwhite.test( data ) ) {
			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data );
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toUpperCase() === name.toUpperCase();
	},

	// args is for internal usage only
	each: function( object, callback, args ) {
		var name, i = 0,
			length = object.length,
			isObj = length === undefined || jQuery.isFunction( object );

		if ( args ) {
			if ( isObj ) {
				for ( name in object ) {
					if ( callback.apply( object[ name ], args ) === false ) {
						break;
					}
				}
			} else {
				for ( ; i < length; ) {
					if ( callback.apply( object[ i++ ], args ) === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isObj ) {
				for ( name in object ) {
					if ( callback.call( object[ name ], name, object[ name ] ) === false ) {
						break;
					}
				}
			} else {
				for ( ; i < length; ) {
					if ( callback.call( object[ i ], i, object[ i++ ] ) === false ) {
						break;
					}
				}
			}
		}

		return object;
	},

	// Use native String.trim function wherever possible
	trim: trim ?
		function( text ) {
			return text == null ?
				"" :
				trim.call( text );
		} :

		// Otherwise use our own trimming functionality
		function( text ) {
			return text == null ?
				"" :
				text.toString().replace( trimLeft, "" ).replace( trimRight, "" );
		},

	// results is for internal usage only
	makeArray: function( array, results ) {
		var ret = results || [];

		if ( array != null ) {
			// The window, strings (and functions) also have 'length'
			// Tweaked logic slightly to handle Blackberry 4.7 RegExp issues #6930
			var type = jQuery.type( array );

			if ( array.length == null || type === "string" || type === "function" || type === "regexp" || jQuery.isWindow( array ) ) {
				push.call( ret, array );
			} else {
				jQuery.merge( ret, array );
			}
		}

		return ret;
	},

	inArray: function( elem, array, i ) {
		var len;

		if ( array ) {
			if ( indexOf ) {
				return indexOf.call( array, elem, i );
			}

			len = array.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {
				// Skip accessing in sparse arrays
				if ( i in array && array[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var i = first.length,
			j = 0;

		if ( typeof second.length === "number" ) {
			for ( var l = second.length; j < l; j++ ) {
				first[ i++ ] = second[ j ];
			}

		} else {
			while ( second[j] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, inv ) {
		var ret = [], retVal;
		inv = !!inv;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( var i = 0, length = elems.length; i < length; i++ ) {
			retVal = !!callback( elems[ i ], i );
			if ( inv !== retVal ) {
				ret.push( elems[ i ] );
			}
		}

		return ret;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value, key, ret = [],
			i = 0,
			length = elems.length,
			// jquery objects are treated as arrays
			isArray = elems instanceof jQuery || length !== undefined && typeof length === "number" && ( ( length > 0 && elems[ 0 ] && elems[ length -1 ] ) || length === 0 || jQuery.isArray( elems ) ) ;

		// Go through the array, translating each of the items to their
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}

		// Go through every key on the object
		} else {
			for ( key in elems ) {
				value = callback( elems[ key ], key, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}
		}

		// Flatten any nested arrays
		return ret.concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		if ( typeof context === "string" ) {
			var tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		var args = slice.call( arguments, 2 ),
			proxy = function() {
				return fn.apply( context, args.concat( slice.call( arguments ) ) );
			};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || proxy.guid || jQuery.guid++;

		return proxy;
	},

	// Mutifunctional method to get and set values to a collection
	// The value/s can optionally be executed if it's a function
	access: function( elems, key, value, exec, fn, pass ) {
		var length = elems.length;

		// Setting many attributes
		if ( typeof key === "object" ) {
			for ( var k in key ) {
				jQuery.access( elems, k, key[k], exec, fn, value );
			}
			return elems;
		}

		// Setting one attribute
		if ( value !== undefined ) {
			// Optionally, function values get executed if exec is true
			exec = !pass && exec && jQuery.isFunction(value);

			for ( var i = 0; i < length; i++ ) {
				fn( elems[i], key, exec ? value.call( elems[i], i, fn( elems[i], key ) ) : value, pass );
			}

			return elems;
		}

		// Getting an attribute
		return length ? fn( elems[0], key ) : undefined;
	},

	now: function() {
		return ( new Date() ).getTime();
	},

	// Use of jQuery.browser is frowned upon.
	// More details: http://docs.jquery.com/Utilities/jQuery.browser
	uaMatch: function( ua ) {
		ua = ua.toLowerCase();

		var match = rwebkit.exec( ua ) ||
			ropera.exec( ua ) ||
			rmsie.exec( ua ) ||
			ua.indexOf("compatible") < 0 && rmozilla.exec( ua ) ||
			[];

		return { browser: match[1] || "", version: match[2] || "0" };
	},

	sub: function() {
		function jQuerySub( selector, context ) {
			return new jQuerySub.fn.init( selector, context );
		}
		jQuery.extend( true, jQuerySub, this );
		jQuerySub.superclass = this;
		jQuerySub.fn = jQuerySub.prototype = this();
		jQuerySub.fn.constructor = jQuerySub;
		jQuerySub.sub = this.sub;
		jQuerySub.fn.init = function init( selector, context ) {
			if ( context && context instanceof jQuery && !(context instanceof jQuerySub) ) {
				context = jQuerySub( context );
			}

			return jQuery.fn.init.call( this, selector, context, rootjQuerySub );
		};
		jQuerySub.fn.init.prototype = jQuerySub.fn;
		var rootjQuerySub = jQuerySub(document);
		return jQuerySub;
	},

	browser: {}
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

browserMatch = jQuery.uaMatch( userAgent );
if ( browserMatch.browser ) {
	jQuery.browser[ browserMatch.browser ] = true;
	jQuery.browser.version = browserMatch.version;
}

// Deprecated, use jQuery.browser.webkit instead
if ( jQuery.browser.webkit ) {
	jQuery.browser.safari = true;
}

// IE doesn't match non-breaking spaces with \s
if ( rnotwhite.test( "\xA0" ) ) {
	trimLeft = /^[\s\xA0]+/;
	trimRight = /[\s\xA0]+$/;
}

// All jQuery objects should point back to these
rootjQuery = jQuery(document);

// Cleanup functions for the document ready method
if ( document.addEventListener ) {
	DOMContentLoaded = function() {
		document.removeEventListener( "DOMContentLoaded", DOMContentLoaded, false );
		jQuery.ready();
	};

} else if ( document.attachEvent ) {
	DOMContentLoaded = function() {
		// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
		if ( document.readyState === "complete" ) {
			document.detachEvent( "onreadystatechange", DOMContentLoaded );
			jQuery.ready();
		}
	};
}

// The DOM ready check for Internet Explorer
function doScrollCheck() {
	if ( jQuery.isReady ) {
		return;
	}

	try {
		// If IE is used, use the trick by Diego Perini
		// http://javascript.nwbox.com/IEContentLoaded/
		document.documentElement.doScroll("left");
	} catch(e) {
		setTimeout( doScrollCheck, 1 );
		return;
	}

	// and execute any waiting functions
	jQuery.ready();
}

return jQuery;

})();


// String to Object flags format cache
var flagsCache = {};

// Convert String-formatted flags into Object-formatted ones and store in cache
function createFlags( flags ) {
	var object = flagsCache[ flags ] = {},
		i, length;
	flags = flags.split( /\s+/ );
	for ( i = 0, length = flags.length; i < length; i++ ) {
		object[ flags[i] ] = true;
	}
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	flags:	an optional list of space-separated flags that will change how
 *			the callback list behaves
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible flags:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( flags ) {

	// Convert flags from String-formatted to Object-formatted
	// (we check in cache first)
	flags = flags ? ( flagsCache[ flags ] || createFlags( flags ) ) : {};

	var // Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = [],
		// Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Add one or several callbacks to the list
		add = function( args ) {
			var i,
				length,
				elem,
				type,
				actual;
			for ( i = 0, length = args.length; i < length; i++ ) {
				elem = args[ i ];
				type = jQuery.type( elem );
				if ( type === "array" ) {
					// Inspect recursively
					add( elem );
				} else if ( type === "function" ) {
					// Add if not in unique mode and callback is not in
					if ( !flags.unique || !self.has( elem ) ) {
						list.push( elem );
					}
				}
			}
		},
		// Fire callbacks
		fire = function( context, args ) {
			args = args || [];
			memory = !flags.memory || [ context, args ];
			firing = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( context, args ) === false && flags.stopOnFalse ) {
					memory = true; // Mark as halted
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( !flags.once ) {
					if ( stack && stack.length ) {
						memory = stack.shift();
						self.fireWith( memory[ 0 ], memory[ 1 ] );
					}
				} else if ( memory === true ) {
					self.disable();
				} else {
					list = [];
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					var length = list.length;
					add( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away, unless previous
					// firing was halted (stopOnFalse)
					} else if ( memory && memory !== true ) {
						firingStart = length;
						fire( memory[ 0 ], memory[ 1 ] );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					var args = arguments,
						argIndex = 0,
						argLength = args.length;
					for ( ; argIndex < argLength ; argIndex++ ) {
						for ( var i = 0; i < list.length; i++ ) {
							if ( args[ argIndex ] === list[ i ] ) {
								// Handle firingIndex and firingLength
								if ( firing ) {
									if ( i <= firingLength ) {
										firingLength--;
										if ( i <= firingIndex ) {
											firingIndex--;
										}
									}
								}
								// Remove the element
								list.splice( i--, 1 );
								// If we have some unicity property then
								// we only need to do this once
								if ( flags.unique ) {
									break;
								}
							}
						}
					}
				}
				return this;
			},
			// Control if a given callback is in the list
			has: function( fn ) {
				if ( list ) {
					var i = 0,
						length = list.length;
					for ( ; i < length; i++ ) {
						if ( fn === list[ i ] ) {
							return true;
						}
					}
				}
				return false;
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory || memory === true ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( stack ) {
					if ( firing ) {
						if ( !flags.once ) {
							stack.push( [ context, args ] );
						}
					} else if ( !( flags.once && memory ) ) {
						fire( context, args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!memory;
			}
		};

	return self;
};




var // Static reference to slice
	sliceDeferred = [].slice;

jQuery.extend({

	Deferred: function( func ) {
		var doneList = jQuery.Callbacks( "once memory" ),
			failList = jQuery.Callbacks( "once memory" ),
			progressList = jQuery.Callbacks( "memory" ),
			state = "pending",
			lists = {
				resolve: doneList,
				reject: failList,
				notify: progressList
			},
			promise = {
				done: doneList.add,
				fail: failList.add,
				progress: progressList.add,

				state: function() {
					return state;
				},

				// Deprecated
				isResolved: doneList.fired,
				isRejected: failList.fired,

				then: function( doneCallbacks, failCallbacks, progressCallbacks ) {
					deferred.done( doneCallbacks ).fail( failCallbacks ).progress( progressCallbacks );
					return this;
				},
				always: function() {
					deferred.done.apply( deferred, arguments ).fail.apply( deferred, arguments );
					return this;
				},
				pipe: function( fnDone, fnFail, fnProgress ) {
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( {
							done: [ fnDone, "resolve" ],
							fail: [ fnFail, "reject" ],
							progress: [ fnProgress, "notify" ]
						}, function( handler, data ) {
							var fn = data[ 0 ],
								action = data[ 1 ],
								returned;
							if ( jQuery.isFunction( fn ) ) {
								deferred[ handler ](function() {
									returned = fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise().then( newDefer.resolve, newDefer.reject, newDefer.notify );
									} else {
										newDefer[ action + "With" ]( this === deferred ? newDefer : this, [ returned ] );
									}
								});
							} else {
								deferred[ handler ]( newDefer[ action ] );
							}
						});
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					if ( obj == null ) {
						obj = promise;
					} else {
						for ( var key in promise ) {
							obj[ key ] = promise[ key ];
						}
					}
					return obj;
				}
			},
			deferred = promise.promise({}),
			key;

		for ( key in lists ) {
			deferred[ key ] = lists[ key ].fire;
			deferred[ key + "With" ] = lists[ key ].fireWith;
		}

		// Handle state
		deferred.done( function() {
			state = "resolved";
		}, failList.disable, progressList.lock ).fail( function() {
			state = "rejected";
		}, doneList.disable, progressList.lock );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( firstParam ) {
		var args = sliceDeferred.call( arguments, 0 ),
			i = 0,
			length = args.length,
			pValues = new Array( length ),
			count = length,
			pCount = length,
			deferred = length <= 1 && firstParam && jQuery.isFunction( firstParam.promise ) ?
				firstParam :
				jQuery.Deferred(),
			promise = deferred.promise();
		function resolveFunc( i ) {
			return function( value ) {
				args[ i ] = arguments.length > 1 ? sliceDeferred.call( arguments, 0 ) : value;
				if ( !( --count ) ) {
					deferred.resolveWith( deferred, args );
				}
			};
		}
		function progressFunc( i ) {
			return function( value ) {
				pValues[ i ] = arguments.length > 1 ? sliceDeferred.call( arguments, 0 ) : value;
				deferred.notifyWith( promise, pValues );
			};
		}
		if ( length > 1 ) {
			for ( ; i < length; i++ ) {
				if ( args[ i ] && args[ i ].promise && jQuery.isFunction( args[ i ].promise ) ) {
					args[ i ].promise().then( resolveFunc(i), deferred.reject, progressFunc(i) );
				} else {
					--count;
				}
			}
			if ( !count ) {
				deferred.resolveWith( deferred, args );
			}
		} else if ( deferred !== firstParam ) {
			deferred.resolveWith( deferred, length ? [ firstParam ] : [] );
		}
		return promise;
	}
});




jQuery.support = (function() {

	var support,
		all,
		a,
		select,
		opt,
		input,
		marginDiv,
		fragment,
		tds,
		events,
		eventName,
		i,
		isSupported,
		div = document.createElement( "div" ),
		documentElement = document.documentElement;

	// Preliminary tests
	div.setAttribute("className", "t");
	div.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";

	all = div.getElementsByTagName( "*" );
	a = div.getElementsByTagName( "a" )[ 0 ];

	// Can't get basic test support
	if ( !all || !all.length || !a ) {
		return {};
	}

	// First batch of supports tests
	select = document.createElement( "select" );
	opt = select.appendChild( document.createElement("option") );
	input = div.getElementsByTagName( "input" )[ 0 ];

	support = {
		// IE strips leading whitespace when .innerHTML is used
		leadingWhitespace: ( div.firstChild.nodeType === 3 ),

		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		tbody: !div.getElementsByTagName("tbody").length,

		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		htmlSerialize: !!div.getElementsByTagName("link").length,

		// Get the style information from getAttribute
		// (IE uses .cssText instead)
		style: /top/.test( a.getAttribute("style") ),

		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		hrefNormalized: ( a.getAttribute("href") === "/a" ),

		// Make sure that element opacity exists
		// (IE uses filter instead)
		// Use a regex to work around a WebKit issue. See #5145
		opacity: /^0.55/.test( a.style.opacity ),

		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		cssFloat: !!a.style.cssFloat,

		// Make sure that if no value is specified for a checkbox
		// that it defaults to "on".
		// (WebKit defaults to "" instead)
		checkOn: ( input.value === "on" ),

		// Make sure that a selected-by-default option has a working selected property.
		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
		optSelected: opt.selected,

		// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
		getSetAttribute: div.className !== "t",

		// Tests for enctype support on a form(#6743)
		enctype: !!document.createElement("form").enctype,

		// Makes sure cloning an html5 element does not cause problems
		// Where outerHTML is undefined, this still works
		html5Clone: document.createElement("nav").cloneNode( true ).outerHTML !== "<:nav></:nav>",

		// Will be defined later
		submitBubbles: true,
		changeBubbles: true,
		focusinBubbles: false,
		deleteExpando: true,
		noCloneEvent: true,
		inlineBlockNeedsLayout: false,
		shrinkWrapBlocks: false,
		reliableMarginRight: true
	};

	// Make sure checked status is properly cloned
	input.checked = true;
	support.noCloneChecked = input.cloneNode( true ).checked;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Test to see if it's possible to delete an expando from an element
	// Fails in Internet Explorer
	try {
		delete div.test;
	} catch( e ) {
		support.deleteExpando = false;
	}

	if ( !div.addEventListener && div.attachEvent && div.fireEvent ) {
		div.attachEvent( "onclick", function() {
			// Cloning a node shouldn't copy over any
			// bound event handlers (IE does this)
			support.noCloneEvent = false;
		});
		div.cloneNode( true ).fireEvent( "onclick" );
	}

	// Check if a radio maintains its value
	// after being appended to the DOM
	input = document.createElement("input");
	input.value = "t";
	input.setAttribute("type", "radio");
	support.radioValue = input.value === "t";

	input.setAttribute("checked", "checked");
	div.appendChild( input );
	fragment = document.createDocumentFragment();
	fragment.appendChild( div.lastChild );

	// WebKit doesn't clone checked state correctly in fragments
	support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	support.appendChecked = input.checked;

	fragment.removeChild( input );
	fragment.appendChild( div );

	div.innerHTML = "";

	// Check if div with explicit width and no margin-right incorrectly
	// gets computed margin-right based on width of container. For more
	// info see bug #3333
	// Fails in WebKit before Feb 2011 nightlies
	// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
	if ( window.getComputedStyle ) {
		marginDiv = document.createElement( "div" );
		marginDiv.style.width = "0";
		marginDiv.style.marginRight = "0";
		div.style.width = "2px";
		div.appendChild( marginDiv );
		support.reliableMarginRight =
			( parseInt( ( window.getComputedStyle( marginDiv, null ) || { marginRight: 0 } ).marginRight, 10 ) || 0 ) === 0;
	}

	// Technique from Juriy Zaytsev
	// http://perfectionkills.com/detecting-event-support-without-browser-sniffing/
	// We only care about the case where non-standard event systems
	// are used, namely in IE. Short-circuiting here helps us to
	// avoid an eval call (in setAttribute) which can cause CSP
	// to go haywire. See: https://developer.mozilla.org/en/Security/CSP
	if ( div.attachEvent ) {
		for( i in {
			submit: 1,
			change: 1,
			focusin: 1
		}) {
			eventName = "on" + i;
			isSupported = ( eventName in div );
			if ( !isSupported ) {
				div.setAttribute( eventName, "return;" );
				isSupported = ( typeof div[ eventName ] === "function" );
			}
			support[ i + "Bubbles" ] = isSupported;
		}
	}

	fragment.removeChild( div );

	// Null elements to avoid leaks in IE
	fragment = select = opt = marginDiv = div = input = null;

	// Run tests that need a body at doc ready
	jQuery(function() {
		var container, outer, inner, table, td, offsetSupport,
			conMarginTop, ptlm, vb, style, html,
			body = document.getElementsByTagName("body")[0];

		if ( !body ) {
			// Return for frameset docs that don't have a body
			return;
		}

		conMarginTop = 1;
		ptlm = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;";
		vb = "visibility:hidden;border:0;";
		style = "style='" + ptlm + "border:5px solid #000;padding:0;'";
		html = "<div " + style + "><div></div></div>" +
			"<table " + style + " cellpadding='0' cellspacing='0'>" +
			"<tr><td></td></tr></table>";

		container = document.createElement("div");
		container.style.cssText = vb + "width:0;height:0;position:static;top:0;margin-top:" + conMarginTop + "px";
		body.insertBefore( container, body.firstChild );

		// Construct the test element
		div = document.createElement("div");
		container.appendChild( div );

		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		// (only IE 8 fails this test)
		div.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";
		tds = div.getElementsByTagName( "td" );
		isSupported = ( tds[ 0 ].offsetHeight === 0 );

		tds[ 0 ].style.display = "";
		tds[ 1 ].style.display = "none";

		// Check if empty table cells still have offsetWidth/Height
		// (IE <= 8 fail this test)
		support.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );

		// Figure out if the W3C box model works as expected
		div.innerHTML = "";
		div.style.width = div.style.paddingLeft = "1px";
		jQuery.boxModel = support.boxModel = div.offsetWidth === 2;

		if ( typeof div.style.zoom !== "undefined" ) {
			// Check if natively block-level elements act like inline-block
			// elements when setting their display to 'inline' and giving
			// them layout
			// (IE < 8 does this)
			div.style.display = "inline";
			div.style.zoom = 1;
			support.inlineBlockNeedsLayout = ( div.offsetWidth === 2 );

			// Check if elements with layout shrink-wrap their children
			// (IE 6 does this)
			div.style.display = "";
			div.innerHTML = "<div style='width:4px;'></div>";
			support.shrinkWrapBlocks = ( div.offsetWidth !== 2 );
		}

		div.style.cssText = ptlm + vb;
		div.innerHTML = html;

		outer = div.firstChild;
		inner = outer.firstChild;
		td = outer.nextSibling.firstChild.firstChild;

		offsetSupport = {
			doesNotAddBorder: ( inner.offsetTop !== 5 ),
			doesAddBorderForTableAndCells: ( td.offsetTop === 5 )
		};

		inner.style.position = "fixed";
		inner.style.top = "20px";

		// safari subtracts parent border width here which is 5px
		offsetSupport.fixedPosition = ( inner.offsetTop === 20 || inner.offsetTop === 15 );
		inner.style.position = inner.style.top = "";

		outer.style.overflow = "hidden";
		outer.style.position = "relative";

		offsetSupport.subtractsBorderForOverflowNotVisible = ( inner.offsetTop === -5 );
		offsetSupport.doesNotIncludeMarginInBodyOffset = ( body.offsetTop !== conMarginTop );

		body.removeChild( container );
		div  = container = null;

		jQuery.extend( support, offsetSupport );
	});

	return support;
})();




var rbrace = /^(?:\{.*\}|\[.*\])$/,
	rmultiDash = /([A-Z])/g;

jQuery.extend({
	cache: {},

	// Please use with caution
	uuid: 0,

	// Unique for each copy of jQuery on the page
	// Non-digits removed to match rinlinejQuery
	expando: "jQuery" + ( jQuery.fn.jquery + Math.random() ).replace( /\D/g, "" ),

	// The following elements throw uncatchable exceptions if you
	// attempt to add expando properties to them.
	noData: {
		"embed": true,
		// Ban all objects except for Flash (which handle expandos)
		"object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
		"applet": true
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data, pvt /* Internal Use Only */ ) {
		if ( !jQuery.acceptData( elem ) ) {
			return;
		}

		var privateCache, thisCache, ret,
			internalKey = jQuery.expando,
			getByName = typeof name === "string",

			// We have to handle DOM nodes and JS objects differently because IE6-7
			// can't GC object references properly across the DOM-JS boundary
			isNode = elem.nodeType,

			// Only DOM nodes need the global jQuery cache; JS object data is
			// attached directly to the object so GC can occur automatically
			cache = isNode ? jQuery.cache : elem,

			// Only defining an ID for JS objects if its cache already exists allows
			// the code to shortcut on the same path as a DOM node with no cache
			id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey,
			isEvents = name === "events";

		// Avoid doing any more work than we need to when trying to get data on an
		// object that has no data at all
		if ( (!id || !cache[id] || (!isEvents && !pvt && !cache[id].data)) && getByName && data === undefined ) {
			return;
		}

		if ( !id ) {
			// Only DOM nodes need a new unique ID for each element since their data
			// ends up in the global cache
			if ( isNode ) {
				elem[ internalKey ] = id = ++jQuery.uuid;
			} else {
				id = internalKey;
			}
		}

		if ( !cache[ id ] ) {
			cache[ id ] = {};

			// Avoids exposing jQuery metadata on plain JS objects when the object
			// is serialized using JSON.stringify
			if ( !isNode ) {
				cache[ id ].toJSON = jQuery.noop;
			}
		}

		// An object can be passed to jQuery.data instead of a key/value pair; this gets
		// shallow copied over onto the existing cache
		if ( typeof name === "object" || typeof name === "function" ) {
			if ( pvt ) {
				cache[ id ] = jQuery.extend( cache[ id ], name );
			} else {
				cache[ id ].data = jQuery.extend( cache[ id ].data, name );
			}
		}

		privateCache = thisCache = cache[ id ];

		// jQuery data() is stored in a separate object inside the object's internal data
		// cache in order to avoid key collisions between internal data and user-defined
		// data.
		if ( !pvt ) {
			if ( !thisCache.data ) {
				thisCache.data = {};
			}

			thisCache = thisCache.data;
		}

		if ( data !== undefined ) {
			thisCache[ jQuery.camelCase( name ) ] = data;
		}

		// Users should not attempt to inspect the internal events object using jQuery.data,
		// it is undocumented and subject to change. But does anyone listen? No.
		if ( isEvents && !thisCache[ name ] ) {
			return privateCache.events;
		}

		// Check for both converted-to-camel and non-converted data property names
		// If a data property was specified
		if ( getByName ) {

			// First Try to find as-is property data
			ret = thisCache[ name ];

			// Test for null|undefined property data
			if ( ret == null ) {

				// Try to find the camelCased property
				ret = thisCache[ jQuery.camelCase( name ) ];
			}
		} else {
			ret = thisCache;
		}

		return ret;
	},

	removeData: function( elem, name, pvt /* Internal Use Only */ ) {
		if ( !jQuery.acceptData( elem ) ) {
			return;
		}

		var thisCache, i, l,

			// Reference to internal data cache key
			internalKey = jQuery.expando,

			isNode = elem.nodeType,

			// See jQuery.data for more information
			cache = isNode ? jQuery.cache : elem,

			// See jQuery.data for more information
			id = isNode ? elem[ internalKey ] : internalKey;

		// If there is already no cache entry for this object, there is no
		// purpose in continuing
		if ( !cache[ id ] ) {
			return;
		}

		if ( name ) {

			thisCache = pvt ? cache[ id ] : cache[ id ].data;

			if ( thisCache ) {

				// Support array or space separated string names for data keys
				if ( !jQuery.isArray( name ) ) {

					// try the string as a key before any manipulation
					if ( name in thisCache ) {
						name = [ name ];
					} else {

						// split the camel cased version by spaces unless a key with the spaces exists
						name = jQuery.camelCase( name );
						if ( name in thisCache ) {
							name = [ name ];
						} else {
							name = name.split( " " );
						}
					}
				}

				for ( i = 0, l = name.length; i < l; i++ ) {
					delete thisCache[ name[i] ];
				}

				// If there is no data left in the cache, we want to continue
				// and let the cache object itself get destroyed
				if ( !( pvt ? isEmptyDataObject : jQuery.isEmptyObject )( thisCache ) ) {
					return;
				}
			}
		}

		// See jQuery.data for more information
		if ( !pvt ) {
			delete cache[ id ].data;

			// Don't destroy the parent cache unless the internal data object
			// had been the only thing left in it
			if ( !isEmptyDataObject(cache[ id ]) ) {
				return;
			}
		}

		// Browsers that fail expando deletion also refuse to delete expandos on
		// the window, but it will allow it on all other JS objects; other browsers
		// don't care
		// Ensure that `cache` is not a window object #10080
		if ( jQuery.support.deleteExpando || !cache.setInterval ) {
			delete cache[ id ];
		} else {
			cache[ id ] = null;
		}

		// We destroyed the cache and need to eliminate the expando on the node to avoid
		// false lookups in the cache for entries that no longer exist
		if ( isNode ) {
			// IE does not allow us to delete expando properties from nodes,
			// nor does it have a removeAttribute function on Document nodes;
			// we must handle all of these cases
			if ( jQuery.support.deleteExpando ) {
				delete elem[ internalKey ];
			} else if ( elem.removeAttribute ) {
				elem.removeAttribute( internalKey );
			} else {
				elem[ internalKey ] = null;
			}
		}
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return jQuery.data( elem, name, data, true );
	},

	// A method for determining if a DOM node can handle the data expando
	acceptData: function( elem ) {
		if ( elem.nodeName ) {
			var match = jQuery.noData[ elem.nodeName.toLowerCase() ];

			if ( match ) {
				return !(match === true || elem.getAttribute("classid") !== match);
			}
		}

		return true;
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var parts, attr, name,
			data = null;

		if ( typeof key === "undefined" ) {
			if ( this.length ) {
				data = jQuery.data( this[0] );

				if ( this[0].nodeType === 1 && !jQuery._data( this[0], "parsedAttrs" ) ) {
					attr = this[0].attributes;
					for ( var i = 0, l = attr.length; i < l; i++ ) {
						name = attr[i].name;

						if ( name.indexOf( "data-" ) === 0 ) {
							name = jQuery.camelCase( name.substring(5) );

							dataAttr( this[0], name, data[ name ] );
						}
					}
					jQuery._data( this[0], "parsedAttrs", true );
				}
			}

			return data;

		} else if ( typeof key === "object" ) {
			return this.each(function() {
				jQuery.data( this, key );
			});
		}

		parts = key.split(".");
		parts[1] = parts[1] ? "." + parts[1] : "";

		if ( value === undefined ) {
			data = this.triggerHandler("getData" + parts[1] + "!", [parts[0]]);

			// Try to fetch any internally stored data first
			if ( data === undefined && this.length ) {
				data = jQuery.data( this[0], key );
				data = dataAttr( this[0], key, data );
			}

			return data === undefined && parts[1] ?
				this.data( parts[0] ) :
				data;

		} else {
			return this.each(function() {
				var self = jQuery( this ),
					args = [ parts[0], value ];

				self.triggerHandler( "setData" + parts[1] + "!", args );
				jQuery.data( this, key, value );
				self.triggerHandler( "changeData" + parts[1] + "!", args );
			});
		}
	},

	removeData: function( key ) {
		return this.each(function() {
			jQuery.removeData( this, key );
		});
	}
});

function dataAttr( elem, key, data ) {
	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
				data === "false" ? false :
				data === "null" ? null :
				jQuery.isNumeric( data ) ? parseFloat( data ) :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	for ( var name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}




function handleQueueMarkDefer( elem, type, src ) {
	var deferDataKey = type + "defer",
		queueDataKey = type + "queue",
		markDataKey = type + "mark",
		defer = jQuery._data( elem, deferDataKey );
	if ( defer &&
		( src === "queue" || !jQuery._data(elem, queueDataKey) ) &&
		( src === "mark" || !jQuery._data(elem, markDataKey) ) ) {
		// Give room for hard-coded callbacks to fire first
		// and eventually mark/queue something else on the element
		setTimeout( function() {
			if ( !jQuery._data( elem, queueDataKey ) &&
				!jQuery._data( elem, markDataKey ) ) {
				jQuery.removeData( elem, deferDataKey, true );
				defer.fire();
			}
		}, 0 );
	}
}

jQuery.extend({

	_mark: function( elem, type ) {
		if ( elem ) {
			type = ( type || "fx" ) + "mark";
			jQuery._data( elem, type, (jQuery._data( elem, type ) || 0) + 1 );
		}
	},

	_unmark: function( force, elem, type ) {
		if ( force !== true ) {
			type = elem;
			elem = force;
			force = false;
		}
		if ( elem ) {
			type = type || "fx";
			var key = type + "mark",
				count = force ? 0 : ( (jQuery._data( elem, key ) || 1) - 1 );
			if ( count ) {
				jQuery._data( elem, key, count );
			} else {
				jQuery.removeData( elem, key, true );
				handleQueueMarkDefer( elem, type, "mark" );
			}
		}
	},

	queue: function( elem, type, data ) {
		var q;
		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			q = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !q || jQuery.isArray(data) ) {
					q = jQuery._data( elem, type, jQuery.makeArray(data) );
				} else {
					q.push( data );
				}
			}
			return q || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			fn = queue.shift(),
			hooks = {};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
		}

		if ( fn ) {
			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			jQuery._data( elem, type + ".run", hooks );
			fn.call( elem, function() {
				jQuery.dequeue( elem, type );
			}, hooks );
		}

		if ( !queue.length ) {
			jQuery.removeData( elem, type + "queue " + type + ".run", true );
			handleQueueMarkDefer( elem, type, "queue" );
		}
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
		}

		if ( data === undefined ) {
			return jQuery.queue( this[0], type );
		}
		return this.each(function() {
			var queue = jQuery.queue( this, type, data );

			if ( type === "fx" && queue[0] !== "inprogress" ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	delay: function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, object ) {
		if ( typeof type !== "string" ) {
			object = type;
			type = undefined;
		}
		type = type || "fx";
		var defer = jQuery.Deferred(),
			elements = this,
			i = elements.length,
			count = 1,
			deferDataKey = type + "defer",
			queueDataKey = type + "queue",
			markDataKey = type + "mark",
			tmp;
		function resolve() {
			if ( !( --count ) ) {
				defer.resolveWith( elements, [ elements ] );
			}
		}
		while( i-- ) {
			if (( tmp = jQuery.data( elements[ i ], deferDataKey, undefined, true ) ||
					( jQuery.data( elements[ i ], queueDataKey, undefined, true ) ||
						jQuery.data( elements[ i ], markDataKey, undefined, true ) ) &&
					jQuery.data( elements[ i ], deferDataKey, jQuery.Callbacks( "once memory" ), true ) )) {
				count++;
				tmp.add( resolve );
			}
		}
		resolve();
		return defer.promise();
	}
});




var rclass = /[\n\t\r]/g,
	rspace = /\s+/,
	rreturn = /\r/g,
	rtype = /^(?:button|input)$/i,
	rfocusable = /^(?:button|input|object|select|textarea)$/i,
	rclickable = /^a(?:rea)?$/i,
	rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
	getSetAttribute = jQuery.support.getSetAttribute,
	nodeHook, boolHook, fixSpecified;

jQuery.fn.extend({
	attr: function( name, value ) {
		return jQuery.access( this, name, value, true, jQuery.attr );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	},

	prop: function( name, value ) {
		return jQuery.access( this, name, value, true, jQuery.prop );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each(function() {
			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch( e ) {}
		});
	},

	addClass: function( value ) {
		var classNames, i, l, elem,
			setClass, c, cl;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call(this, j, this.className) );
			});
		}

		if ( value && typeof value === "string" ) {
			classNames = value.split( rspace );

			for ( i = 0, l = this.length; i < l; i++ ) {
				elem = this[ i ];

				if ( elem.nodeType === 1 ) {
					if ( !elem.className && classNames.length === 1 ) {
						elem.className = value;

					} else {
						setClass = " " + elem.className + " ";

						for ( c = 0, cl = classNames.length; c < cl; c++ ) {
							if ( !~setClass.indexOf( " " + classNames[ c ] + " " ) ) {
								setClass += classNames[ c ] + " ";
							}
						}
						elem.className = jQuery.trim( setClass );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classNames, i, l, elem, className, c, cl;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call(this, j, this.className) );
			});
		}

		if ( (value && typeof value === "string") || value === undefined ) {
			classNames = ( value || "" ).split( rspace );

			for ( i = 0, l = this.length; i < l; i++ ) {
				elem = this[ i ];

				if ( elem.nodeType === 1 && elem.className ) {
					if ( value ) {
						className = (" " + elem.className + " ").replace( rclass, " " );
						for ( c = 0, cl = classNames.length; c < cl; c++ ) {
							className = className.replace(" " + classNames[ c ] + " ", " ");
						}
						elem.className = jQuery.trim( className );

					} else {
						elem.className = "";
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isBool = typeof stateVal === "boolean";

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					state = stateVal,
					classNames = value.split( rspace );

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space seperated list
					state = isBool ? state : !self.hasClass( className );
					self[ state ? "addClass" : "removeClass" ]( className );
				}

			} else if ( type === "undefined" || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					jQuery._data( this, "__className__", this.className );
				}

				// toggle whole className
				this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	},

	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.nodeName.toLowerCase() ] || jQuery.valHooks[ elem.type ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var self = jQuery(this), val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, self.val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map(val, function ( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.nodeName.toLowerCase() ] || jQuery.valHooks[ this.type ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				// attributes.value is undefined in Blackberry 4.7 but
				// uses .value. See #6932
				var val = elem.attributes.value;
				return !val || val.specified ? elem.value : elem.text;
			}
		},
		select: {
			get: function( elem ) {
				var value, i, max, option,
					index = elem.selectedIndex,
					values = [],
					options = elem.options,
					one = elem.type === "select-one";

				// Nothing was selected
				if ( index < 0 ) {
					return null;
				}

				// Loop through all the selected options
				i = one ? index : 0;
				max = one ? index + 1 : options.length;
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Don't return options that are disabled or in a disabled optgroup
					if ( option.selected && (jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) &&
							(!option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" )) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				// Fixes Bug #2551 -- select.val() broken in IE after form.reset()
				if ( one && !values.length && options.length ) {
					return jQuery( options[ index ] ).val();
				}

				return values;
			},

			set: function( elem, value ) {
				var values = jQuery.makeArray( value );

				jQuery(elem).find("option").each(function() {
					this.selected = jQuery.inArray( jQuery(this).val(), values ) >= 0;
				});

				if ( !values.length ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	},

	attrFn: {
		val: true,
		css: true,
		html: true,
		text: true,
		data: true,
		width: true,
		height: true,
		offset: true
	},

	attr: function( elem, name, value, pass ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( pass && name in jQuery.attrFn ) {
			return jQuery( elem )[ name ]( value );
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( notxml ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] || ( rboolean.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;

			} else if ( hooks && "set" in hooks && notxml && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, "" + value );
				return value;
			}

		} else if ( hooks && "get" in hooks && notxml && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {

			ret = elem.getAttribute( name );

			// Non-existent attributes return null, we normalize to undefined
			return ret === null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var propName, attrNames, name, l,
			i = 0;

		if ( value && elem.nodeType === 1 ) {
			attrNames = value.toLowerCase().split( rspace );
			l = attrNames.length;

			for ( ; i < l; i++ ) {
				name = attrNames[ i ];

				if ( name ) {
					propName = jQuery.propFix[ name ] || name;

					// See #9699 for explanation of this approach (setting first, then removal)
					jQuery.attr( elem, name, "" );
					elem.removeAttribute( getSetAttribute ? name : propName );

					// Set corresponding property to false for boolean attributes
					if ( rboolean.test( name ) && propName in elem ) {
						elem[ propName ] = false;
					}
				}
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				// We can't allow the type property to be changed (since it causes problems in IE)
				if ( rtype.test( elem.nodeName ) && elem.parentNode ) {
					jQuery.error( "type property can't be changed" );
				} else if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to it's default in case type is set after value
					// This is for element creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		},
		// Use the value property for back compat
		// Use the nodeHook for button elements in IE6/7 (#1954)
		value: {
			get: function( elem, name ) {
				if ( nodeHook && jQuery.nodeName( elem, "button" ) ) {
					return nodeHook.get( elem, name );
				}
				return name in elem ?
					elem.value :
					null;
			},
			set: function( elem, value, name ) {
				if ( nodeHook && jQuery.nodeName( elem, "button" ) ) {
					return nodeHook.set( elem, value, name );
				}
				// Does not return so that setAttribute is also used
				elem.value = value;
			}
		}
	},

	propFix: {
		tabindex: "tabIndex",
		readonly: "readOnly",
		"for": "htmlFor",
		"class": "className",
		maxlength: "maxLength",
		cellspacing: "cellSpacing",
		cellpadding: "cellPadding",
		rowspan: "rowSpan",
		colspan: "colSpan",
		usemap: "useMap",
		frameborder: "frameBorder",
		contenteditable: "contentEditable"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				return ( elem[ name ] = value );
			}

		} else {
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;

			} else {
				return elem[ name ];
			}
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				var attributeNode = elem.getAttributeNode("tabindex");

				return attributeNode && attributeNode.specified ?
					parseInt( attributeNode.value, 10 ) :
					rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
						0 :
						undefined;
			}
		}
	}
});

// Add the tabIndex propHook to attrHooks for back-compat (different case is intentional)
jQuery.attrHooks.tabindex = jQuery.propHooks.tabIndex;

// Hook for boolean attributes
boolHook = {
	get: function( elem, name ) {
		// Align boolean attributes with corresponding properties
		// Fall back to attribute presence where some booleans are not supported
		var attrNode,
			property = jQuery.prop( elem, name );
		return property === true || typeof property !== "boolean" && ( attrNode = elem.getAttributeNode(name) ) && attrNode.nodeValue !== false ?
			name.toLowerCase() :
			undefined;
	},
	set: function( elem, value, name ) {
		var propName;
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			// value is true since we know at this point it's type boolean and not false
			// Set boolean attributes to the same name and set the DOM property
			propName = jQuery.propFix[ name ] || name;
			if ( propName in elem ) {
				// Only set the IDL specifically if it already exists on the element
				elem[ propName ] = true;
			}

			elem.setAttribute( name, name.toLowerCase() );
		}
		return name;
	}
};

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	fixSpecified = {
		name: true,
		id: true
	};

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret;
			ret = elem.getAttributeNode( name );
			return ret && ( fixSpecified[ name ] ? ret.nodeValue !== "" : ret.specified ) ?
				ret.nodeValue :
				undefined;
		},
		set: function( elem, value, name ) {
			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				ret = document.createAttribute( name );
				elem.setAttributeNode( ret );
			}
			return ( ret.nodeValue = value + "" );
		}
	};

	// Apply the nodeHook to tabindex
	jQuery.attrHooks.tabindex.set = nodeHook.set;

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each([ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		});
	});

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		get: nodeHook.get,
		set: function( elem, value, name ) {
			if ( value === "" ) {
				value = "false";
			}
			nodeHook.set( elem, value, name );
		}
	};
}


// Some attributes require a special call on IE
if ( !jQuery.support.hrefNormalized ) {
	jQuery.each([ "href", "src", "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
			get: function( elem ) {
				var ret = elem.getAttribute( name, 2 );
				return ret === null ? undefined : ret;
			}
		});
	});
}

if ( !jQuery.support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {
			// Return undefined in the case of empty string
			// Normalize to lowercase since IE uppercases css property names
			return elem.style.cssText.toLowerCase() || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = "" + value );
		}
	};
}

// Safari mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
if ( !jQuery.support.optSelected ) {
	jQuery.propHooks.selected = jQuery.extend( jQuery.propHooks.selected, {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		}
	});
}

// IE6/7 call enctype encoding
if ( !jQuery.support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}

// Radios and checkboxes getter/setter
if ( !jQuery.support.checkOn ) {
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			get: function( elem ) {
				// Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
				return elem.getAttribute("value") === null ? "on" : elem.value;
			}
		};
	});
}
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = jQuery.extend( jQuery.valHooks[ this ], {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	});
});




var rformElems = /^(?:textarea|input|select)$/i,
	rtypenamespace = /^([^\.]*)?(?:\.(.+))?$/,
	rhoverHack = /\bhover(\.\S+)?\b/,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rquickIs = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
	quickParse = function( selector ) {
		var quick = rquickIs.exec( selector );
		if ( quick ) {
			//   0  1    2   3
			// [ _, tag, id, class ]
			quick[1] = ( quick[1] || "" ).toLowerCase();
			quick[3] = quick[3] && new RegExp( "(?:^|\\s)" + quick[3] + "(?:\\s|$)" );
		}
		return quick;
	},
	quickIs = function( elem, m ) {
		var attrs = elem.attributes || {};
		return (
			(!m[1] || elem.nodeName.toLowerCase() === m[1]) &&
			(!m[2] || (attrs.id || {}).value === m[2]) &&
			(!m[3] || m[3].test( (attrs[ "class" ] || {}).value ))
		);
	},
	hoverHack = function( events ) {
		return jQuery.event.special.hover ? events : events.replace( rhoverHack, "mouseenter$1 mouseleave$1" );
	};

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	add: function( elem, types, handler, data, selector ) {

		var elemData, eventHandle, events,
			t, tns, type, namespaces, handleObj,
			handleObjIn, quick, handlers, special;

		// Don't attach events to noData or text/comment nodes (allow plain objects tho)
		if ( elem.nodeType === 3 || elem.nodeType === 8 || !types || !handler || !(elemData = jQuery._data( elem )) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		events = elemData.events;
		if ( !events ) {
			elemData.events = events = {};
		}
		eventHandle = elemData.handle;
		if ( !eventHandle ) {
			elemData.handle = eventHandle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && (!e || jQuery.event.triggered !== e.type) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};
			// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		// jQuery(...).bind("mouseover mouseout", fn);
		types = jQuery.trim( hoverHack(types) ).split( " " );
		for ( t = 0; t < types.length; t++ ) {

			tns = rtypenamespace.exec( types[t] ) || [];
			type = tns[1];
			namespaces = ( tns[2] || "" ).split( "." ).sort();

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: tns[1],
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				quick: quickParse( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			handlers = events[ type ];
			if ( !handlers ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	global: {},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var elemData = jQuery.hasData( elem ) && jQuery._data( elem ),
			t, tns, type, origType, namespaces, origCount,
			j, events, special, handle, eventType, handleObj;

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = jQuery.trim( hoverHack( types || "" ) ).split(" ");
		for ( t = 0; t < types.length; t++ ) {
			tns = rtypenamespace.exec( types[t] ) || [];
			type = origType = tns[1];
			namespaces = tns[2];

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector? special.delegateType : special.bindType ) || type;
			eventType = events[ type ] || [];
			origCount = eventType.length;
			namespaces = namespaces ? new RegExp("(^|\\.)" + namespaces.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;

			// Remove matching events
			for ( j = 0; j < eventType.length; j++ ) {
				handleObj = eventType[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					 ( !handler || handler.guid === handleObj.guid ) &&
					 ( !namespaces || namespaces.test( handleObj.namespace ) ) &&
					 ( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					eventType.splice( j--, 1 );

					if ( handleObj.selector ) {
						eventType.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( eventType.length === 0 && origCount !== eventType.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			handle = elemData.handle;
			if ( handle ) {
				handle.elem = null;
			}

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery.removeData( elem, [ "events", "handle" ], true );
		}
	},

	// Events that are safe to short-circuit if no handlers are attached.
	// Native DOM events should not be added, they may have inline handlers.
	customEvent: {
		"getData": true,
		"setData": true,
		"changeData": true
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		// Don't do events on text and comment nodes
		if ( elem && (elem.nodeType === 3 || elem.nodeType === 8) ) {
			return;
		}

		// Event object or event type
		var type = event.type || event,
			namespaces = [],
			cache, exclusive, i, cur, old, ontype, special, handle, eventPath, bubbleType;

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "!" ) >= 0 ) {
			// Exclusive events trigger only for the exact event (no namespaces)
			type = type.slice(0, -1);
			exclusive = true;
		}

		if ( type.indexOf( "." ) >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}

		if ( (!elem || jQuery.event.customEvent[ type ]) && !jQuery.event.global[ type ] ) {
			// No jQuery handlers for this event type, and it can't have inline handlers
			return;
		}

		// Caller can pass in an Event, Object, or just an event type string
		event = typeof event === "object" ?
			// jQuery.Event object
			event[ jQuery.expando ] ? event :
			// Object literal
			new jQuery.Event( type, event ) :
			// Just the event type (string)
			new jQuery.Event( type );

		event.type = type;
		event.isTrigger = true;
		event.exclusive = exclusive;
		event.namespace = namespaces.join( "." );
		event.namespace_re = event.namespace? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
		ontype = type.indexOf( ":" ) < 0 ? "on" + type : "";

		// Handle a global trigger
		if ( !elem ) {

			// TODO: Stop taunting the data cache; remove global events and always attach to document
			cache = jQuery.cache;
			for ( i in cache ) {
				if ( cache[ i ].events && cache[ i ].events[ type ] ) {
					jQuery.event.trigger( event, data, cache[ i ].handle.elem, true );
				}
			}
			return;
		}

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data != null ? jQuery.makeArray( data ) : [];
		data.unshift( event );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		eventPath = [[ elem, special.bindType || type ]];
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			cur = rfocusMorph.test( bubbleType + type ) ? elem : elem.parentNode;
			old = null;
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push([ cur, bubbleType ]);
				old = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( old && old === elem.ownerDocument ) {
				eventPath.push([ old.defaultView || old.parentWindow || window, bubbleType ]);
			}
		}

		// Fire handlers on the event path
		for ( i = 0; i < eventPath.length && !event.isPropagationStopped(); i++ ) {

			cur = eventPath[i][0];
			event.type = eventPath[i][1];

			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}
			// Note that this is a bare JS function and not a jQuery handler
			handle = ontype && cur[ ontype ];
			if ( handle && jQuery.acceptData( cur ) && handle.apply( cur, data ) === false ) {
				event.preventDefault();
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( elem.ownerDocument, data ) === false) &&
				!(type === "click" && jQuery.nodeName( elem, "a" )) && jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				// IE<9 dies on focus/blur to hidden element (#1486)
				if ( ontype && elem[ type ] && ((type !== "focus" && type !== "blur") || event.target.offsetWidth !== 0) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					old = elem[ ontype ];

					if ( old ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( old ) {
						elem[ ontype ] = old;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event || window.event );

		var handlers = ( (jQuery._data( this, "events" ) || {} )[ event.type ] || []),
			delegateCount = handlers.delegateCount,
			args = [].slice.call( arguments, 0 ),
			run_all = !event.exclusive && !event.namespace,
			handlerQueue = [],
			i, j, cur, jqcur, ret, selMatch, matched, matches, handleObj, sel, related;

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Determine handlers that should run if there are delegated events
		// Avoid disabled elements in IE (#6911) and non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && !event.target.disabled && !(event.button && event.type === "click") ) {

			// Pregenerate a single jQuery object for reuse with .is()
			jqcur = jQuery(this);
			jqcur.context = this.ownerDocument || this;

			for ( cur = event.target; cur != this; cur = cur.parentNode || this ) {
				selMatch = {};
				matches = [];
				jqcur[0] = cur;
				for ( i = 0; i < delegateCount; i++ ) {
					handleObj = handlers[ i ];
					sel = handleObj.selector;

					if ( selMatch[ sel ] === undefined ) {
						selMatch[ sel ] = (
							handleObj.quick ? quickIs( cur, handleObj.quick ) : jqcur.is( sel )
						);
					}
					if ( selMatch[ sel ] ) {
						matches.push( handleObj );
					}
				}
				if ( matches.length ) {
					handlerQueue.push({ elem: cur, matches: matches });
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( handlers.length > delegateCount ) {
			handlerQueue.push({ elem: this, matches: handlers.slice( delegateCount ) });
		}

		// Run delegates first; they may want to stop propagation beneath us
		for ( i = 0; i < handlerQueue.length && !event.isPropagationStopped(); i++ ) {
			matched = handlerQueue[ i ];
			event.currentTarget = matched.elem;

			for ( j = 0; j < matched.matches.length && !event.isImmediatePropagationStopped(); j++ ) {
				handleObj = matched.matches[ j ];

				// Triggered event must either 1) be non-exclusive and have no namespace, or
				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
				if ( run_all || (!event.namespace && !handleObj.namespace) || event.namespace_re && event.namespace_re.test( handleObj.namespace ) ) {

					event.data = handleObj.data;
					event.handleObj = handleObj;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						event.result = ret;
						if ( ret === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		return event.result;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	// *** attrChange attrName relatedNode srcElement  are not normalized, non-W3C, deprecated, will be removed in 1.8 ***
	props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop,
			originalEvent = event,
			fixHook = jQuery.event.fixHooks[ event.type ] || {},
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = jQuery.Event( originalEvent );

		for ( i = copy.length; i; ) {
			prop = copy[ --i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Fix target property, if necessary (#1925, IE 6/7/8 & Safari2)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Target should not be a text node (#504, Safari)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// For mouse/key events; add metaKey if it's not there (#3368, IE6/7/8)
		if ( event.metaKey === undefined ) {
			event.metaKey = event.ctrlKey;
		}

		return fixHook.filter? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		ready: {
			// Make sure the ready event is setup
			setup: jQuery.bindReady
		},

		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},

		focus: {
			delegateType: "focusin"
		},
		blur: {
			delegateType: "focusout"
		},

		beforeunload: {
			setup: function( data, namespaces, eventHandle ) {
				// We only want to do this special case on windows
				if ( jQuery.isWindow( this ) ) {
					this.onbeforeunload = eventHandle;
				}
			},

			teardown: function( namespaces, eventHandle ) {
				if ( this.onbeforeunload === eventHandle ) {
					this.onbeforeunload = null;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{ type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

// Some plugins are using, but it's undocumented/deprecated and will be removed.
// The 1.7 special event interface should provide all the hooks needed now.
jQuery.event.handle = jQuery.event.dispatch;

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	} :
	function( elem, type, handle ) {
		if ( elem.detachEvent ) {
			elem.detachEvent( "on" + type, handle );
		}
	};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = ( src.defaultPrevented || src.returnValue === false ||
			src.getPreventDefault && src.getPreventDefault() ) ? returnTrue : returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

function returnFalse() {
	return false;
}
function returnTrue() {
	return true;
}

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	preventDefault: function() {
		this.isDefaultPrevented = returnTrue;

		var e = this.originalEvent;
		if ( !e ) {
			return;
		}

		// if preventDefault exists run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// otherwise set the returnValue property of the original event to false (IE)
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		this.isPropagationStopped = returnTrue;

		var e = this.originalEvent;
		if ( !e ) {
			return;
		}
		// if stopPropagation exists run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}
		// otherwise set the cancelBubble property of the original event to true (IE)
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		this.isImmediatePropagationStopped = returnTrue;
		this.stopPropagation();
	},
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse
};

// Create mouseenter/leave events using mouseover/out and event-time checks
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj,
				selector = handleObj.selector,
				ret;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// IE submit delegation
if ( !jQuery.support.submitBubbles ) {

	jQuery.event.special.submit = {
		setup: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
				if ( form && !form._submit_attached ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						// If form was submitted by the user, bubble the event up the tree
						if ( this.parentNode && !event.isTrigger ) {
							jQuery.event.simulate( "submit", this.parentNode, event, true );
						}
					});
					form._submit_attached = true;
				}
			});
			// return undefined since we don't need an event listener
		},

		teardown: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !jQuery.support.changeBubbles ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {
				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._just_changed = true;
						}
					});
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._just_changed && !event.isTrigger ) {
							this._just_changed = false;
							jQuery.event.simulate( "change", this, event, true );
						}
					});
				}
				return false;
			}
			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !elem._change_attached ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event, true );
						}
					});
					elem._change_attached = true;
				}
			});
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return rformElems.test( this.nodeName );
		}
	};
}

// Create "bubbling" focus and blur events
if ( !jQuery.support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler while someone wants focusin/focusout
		var attaches = 0,
			handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				if ( attaches++ === 0 ) {
					document.addEventListener( orig, handler, true );
				}
			},
			teardown: function() {
				if ( --attaches === 0 ) {
					document.removeEventListener( orig, handler, true );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on.call( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			var handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace? handleObj.type + "." + handleObj.namespace : handleObj.type,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( var type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	live: function( types, data, fn ) {
		jQuery( this.context ).on( types, this.selector, data, fn );
		return this;
	},
	die: function( types, fn ) {
		jQuery( this.context ).off( types, this.selector || "**", fn );
		return this;
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length == 1? this.off( selector, "**" ) : this.off( types, selector, fn );
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		if ( this[0] ) {
			return jQuery.event.trigger( type, data, this[0], true );
		}
	},

	toggle: function( fn ) {
		// Save reference to arguments for access in closure
		var args = arguments,
			guid = fn.guid || jQuery.guid++,
			i = 0,
			toggler = function( event ) {
				// Figure out which function to execute
				var lastToggle = ( jQuery._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
				jQuery._data( this, "lastToggle" + fn.guid, lastToggle + 1 );

				// Make sure that clicks stop
				event.preventDefault();

				// and execute the function
				return args[ lastToggle ].apply( this, arguments ) || false;
			};

		// link all the functions, so any of them can unbind this click handler
		toggler.guid = guid;
		while ( i < args.length ) {
			args[ i++ ].guid = guid;
		}

		return this.click( toggler );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
});

jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		if ( fn == null ) {
			fn = data;
			data = null;
		}

		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};

	if ( jQuery.attrFn ) {
		jQuery.attrFn[ name ] = true;
	}

	if ( rkeyEvent.test( name ) ) {
		jQuery.event.fixHooks[ name ] = jQuery.event.keyHooks;
	}

	if ( rmouseEvent.test( name ) ) {
		jQuery.event.fixHooks[ name ] = jQuery.event.mouseHooks;
	}
});



/*!
 * Sizzle CSS Selector Engine
 *  Copyright 2012, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){

var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
	expando = "sizcache" + (Math.random() + '').replace('.', ''),
	done = 0,
	toString = Object.prototype.toString,
	hasDuplicate = false,
	baseHasDuplicate = true,
	rBackslash = /\\/g,
	rReturn = /\r\n/g,
	rNonWord = /\W/;

// Here we check if the JavaScript engine is using some sort of
// optimization where it does not always call our comparision
// function. If that is the case, discard the hasDuplicate value.
//   Thus far that includes Google Chrome.
[0, 0].sort(function() {
	baseHasDuplicate = false;
	return 0;
});

var Sizzle = function( selector, context, results, seed ) {
	results = results || [];
	context = context || document;

	var origContext = context;

	if ( context.nodeType !== 1 && context.nodeType !== 9 ) {
		return [];
	}

	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	var m, set, checkSet, extra, ret, cur, pop, i,
		prune = true,
		contextXML = Sizzle.isXML( context ),
		parts = [],
		soFar = selector;

	// Reset the position of the chunker regexp (start from head)
	do {
		chunker.exec( "" );
		m = chunker.exec( soFar );

		if ( m ) {
			soFar = m[3];

			parts.push( m[1] );

			if ( m[2] ) {
				extra = m[3];
				break;
			}
		}
	} while ( m );

	if ( parts.length > 1 && origPOS.exec( selector ) ) {

		if ( parts.length === 2 && Expr.relative[ parts[0] ] ) {
			set = posProcess( parts[0] + parts[1], context, seed );

		} else {
			set = Expr.relative[ parts[0] ] ?
				[ context ] :
				Sizzle( parts.shift(), context );

			while ( parts.length ) {
				selector = parts.shift();

				if ( Expr.relative[ selector ] ) {
					selector += parts.shift();
				}

				set = posProcess( selector, set, seed );
			}
		}

	} else {
		// Take a shortcut and set the context if the root selector is an ID
		// (but not if it'll be faster if the inner selector is an ID)
		if ( !seed && parts.length > 1 && context.nodeType === 9 && !contextXML &&
				Expr.match.ID.test(parts[0]) && !Expr.match.ID.test(parts[parts.length - 1]) ) {

			ret = Sizzle.find( parts.shift(), context, contextXML );
			context = ret.expr ?
				Sizzle.filter( ret.expr, ret.set )[0] :
				ret.set[0];
		}

		if ( context ) {
			ret = seed ?
				{ expr: parts.pop(), set: makeArray(seed) } :
				Sizzle.find( parts.pop(), parts.length === 1 && (parts[0] === "~" || parts[0] === "+") && context.parentNode ? context.parentNode : context, contextXML );

			set = ret.expr ?
				Sizzle.filter( ret.expr, ret.set ) :
				ret.set;

			if ( parts.length > 0 ) {
				checkSet = makeArray( set );

			} else {
				prune = false;
			}

			while ( parts.length ) {
				cur = parts.pop();
				pop = cur;

				if ( !Expr.relative[ cur ] ) {
					cur = "";
				} else {
					pop = parts.pop();
				}

				if ( pop == null ) {
					pop = context;
				}

				Expr.relative[ cur ]( checkSet, pop, contextXML );
			}

		} else {
			checkSet = parts = [];
		}
	}

	if ( !checkSet ) {
		checkSet = set;
	}

	if ( !checkSet ) {
		Sizzle.error( cur || selector );
	}

	if ( toString.call(checkSet) === "[object Array]" ) {
		if ( !prune ) {
			results.push.apply( results, checkSet );

		} else if ( context && context.nodeType === 1 ) {
			for ( i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && (checkSet[i] === true || checkSet[i].nodeType === 1 && Sizzle.contains(context, checkSet[i])) ) {
					results.push( set[i] );
				}
			}

		} else {
			for ( i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && checkSet[i].nodeType === 1 ) {
					results.push( set[i] );
				}
			}
		}

	} else {
		makeArray( checkSet, results );
	}

	if ( extra ) {
		Sizzle( extra, origContext, results, seed );
		Sizzle.uniqueSort( results );
	}

	return results;
};

Sizzle.uniqueSort = function( results ) {
	if ( sortOrder ) {
		hasDuplicate = baseHasDuplicate;
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			for ( var i = 1; i < results.length; i++ ) {
				if ( results[i] === results[ i - 1 ] ) {
					results.splice( i--, 1 );
				}
			}
		}
	}

	return results;
};

Sizzle.matches = function( expr, set ) {
	return Sizzle( expr, null, null, set );
};

Sizzle.matchesSelector = function( node, expr ) {
	return Sizzle( expr, null, null, [node] ).length > 0;
};

Sizzle.find = function( expr, context, isXML ) {
	var set, i, len, match, type, left;

	if ( !expr ) {
		return [];
	}

	for ( i = 0, len = Expr.order.length; i < len; i++ ) {
		type = Expr.order[i];

		if ( (match = Expr.leftMatch[ type ].exec( expr )) ) {
			left = match[1];
			match.splice( 1, 1 );

			if ( left.substr( left.length - 1 ) !== "\\" ) {
				match[1] = (match[1] || "").replace( rBackslash, "" );
				set = Expr.find[ type ]( match, context, isXML );

				if ( set != null ) {
					expr = expr.replace( Expr.match[ type ], "" );
					break;
				}
			}
		}
	}

	if ( !set ) {
		set = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( "*" ) :
			[];
	}

	return { set: set, expr: expr };
};

Sizzle.filter = function( expr, set, inplace, not ) {
	var match, anyFound,
		type, found, item, filter, left,
		i, pass,
		old = expr,
		result = [],
		curLoop = set,
		isXMLFilter = set && set[0] && Sizzle.isXML( set[0] );

	while ( expr && set.length ) {
		for ( type in Expr.filter ) {
			if ( (match = Expr.leftMatch[ type ].exec( expr )) != null && match[2] ) {
				filter = Expr.filter[ type ];
				left = match[1];

				anyFound = false;

				match.splice(1,1);

				if ( left.substr( left.length - 1 ) === "\\" ) {
					continue;
				}

				if ( curLoop === result ) {
					result = [];
				}

				if ( Expr.preFilter[ type ] ) {
					match = Expr.preFilter[ type ]( match, curLoop, inplace, result, not, isXMLFilter );

					if ( !match ) {
						anyFound = found = true;

					} else if ( match === true ) {
						continue;
					}
				}

				if ( match ) {
					for ( i = 0; (item = curLoop[i]) != null; i++ ) {
						if ( item ) {
							found = filter( item, match, i, curLoop );
							pass = not ^ found;

							if ( inplace && found != null ) {
								if ( pass ) {
									anyFound = true;

								} else {
									curLoop[i] = false;
								}

							} else if ( pass ) {
								result.push( item );
								anyFound = true;
							}
						}
					}
				}

				if ( found !== undefined ) {
					if ( !inplace ) {
						curLoop = result;
					}

					expr = expr.replace( Expr.match[ type ], "" );

					if ( !anyFound ) {
						return [];
					}

					break;
				}
			}
		}

		// Improper expression
		if ( expr === old ) {
			if ( anyFound == null ) {
				Sizzle.error( expr );

			} else {
				break;
			}
		}

		old = expr;
	}

	return curLoop;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Utility function for retreiving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
var getText = Sizzle.getText = function( elem ) {
    var i, node,
		nodeType = elem.nodeType,
		ret = "";

	if ( nodeType ) {
		if ( nodeType === 1 || nodeType === 9 ) {
			// Use textContent || innerText for elements
			if ( typeof elem.textContent === 'string' ) {
				return elem.textContent;
			} else if ( typeof elem.innerText === 'string' ) {
				// Replace IE's carriage returns
				return elem.innerText.replace( rReturn, '' );
			} else {
				// Traverse it's children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
	} else {

		// If no nodeType, this is expected to be an array
		for ( i = 0; (node = elem[i]); i++ ) {
			// Do not traverse comment nodes
			if ( node.nodeType !== 8 ) {
				ret += getText( node );
			}
		}
	}
	return ret;
};

var Expr = Sizzle.selectors = {
	order: [ "ID", "NAME", "TAG" ],

	match: {
		ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
		CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
		NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
		ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
		TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
		CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
		POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
		PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
	},

	leftMatch: {},

	attrMap: {
		"class": "className",
		"for": "htmlFor"
	},

	attrHandle: {
		href: function( elem ) {
			return elem.getAttribute( "href" );
		},
		type: function( elem ) {
			return elem.getAttribute( "type" );
		}
	},

	relative: {
		"+": function(checkSet, part){
			var isPartStr = typeof part === "string",
				isTag = isPartStr && !rNonWord.test( part ),
				isPartStrNotTag = isPartStr && !isTag;

			if ( isTag ) {
				part = part.toLowerCase();
			}

			for ( var i = 0, l = checkSet.length, elem; i < l; i++ ) {
				if ( (elem = checkSet[i]) ) {
					while ( (elem = elem.previousSibling) && elem.nodeType !== 1 ) {}

					checkSet[i] = isPartStrNotTag || elem && elem.nodeName.toLowerCase() === part ?
						elem || false :
						elem === part;
				}
			}

			if ( isPartStrNotTag ) {
				Sizzle.filter( part, checkSet, true );
			}
		},

		">": function( checkSet, part ) {
			var elem,
				isPartStr = typeof part === "string",
				i = 0,
				l = checkSet.length;

			if ( isPartStr && !rNonWord.test( part ) ) {
				part = part.toLowerCase();

				for ( ; i < l; i++ ) {
					elem = checkSet[i];

					if ( elem ) {
						var parent = elem.parentNode;
						checkSet[i] = parent.nodeName.toLowerCase() === part ? parent : false;
					}
				}

			} else {
				for ( ; i < l; i++ ) {
					elem = checkSet[i];

					if ( elem ) {
						checkSet[i] = isPartStr ?
							elem.parentNode :
							elem.parentNode === part;
					}
				}

				if ( isPartStr ) {
					Sizzle.filter( part, checkSet, true );
				}
			}
		},

		"": function(checkSet, part, isXML){
			var nodeCheck,
				doneName = done++,
				checkFn = dirCheck;

			if ( typeof part === "string" && !rNonWord.test( part ) ) {
				part = part.toLowerCase();
				nodeCheck = part;
				checkFn = dirNodeCheck;
			}

			checkFn( "parentNode", part, doneName, checkSet, nodeCheck, isXML );
		},

		"~": function( checkSet, part, isXML ) {
			var nodeCheck,
				doneName = done++,
				checkFn = dirCheck;

			if ( typeof part === "string" && !rNonWord.test( part ) ) {
				part = part.toLowerCase();
				nodeCheck = part;
				checkFn = dirNodeCheck;
			}

			checkFn( "previousSibling", part, doneName, checkSet, nodeCheck, isXML );
		}
	},

	find: {
		ID: function( match, context, isXML ) {
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [m] : [];
			}
		},

		NAME: function( match, context ) {
			if ( typeof context.getElementsByName !== "undefined" ) {
				var ret = [],
					results = context.getElementsByName( match[1] );

				for ( var i = 0, l = results.length; i < l; i++ ) {
					if ( results[i].getAttribute("name") === match[1] ) {
						ret.push( results[i] );
					}
				}

				return ret.length === 0 ? null : ret;
			}
		},

		TAG: function( match, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( match[1] );
			}
		}
	},
	preFilter: {
		CLASS: function( match, curLoop, inplace, result, not, isXML ) {
			match = " " + match[1].replace( rBackslash, "" ) + " ";

			if ( isXML ) {
				return match;
			}

			for ( var i = 0, elem; (elem = curLoop[i]) != null; i++ ) {
				if ( elem ) {
					if ( not ^ (elem.className && (" " + elem.className + " ").replace(/[\t\n\r]/g, " ").indexOf(match) >= 0) ) {
						if ( !inplace ) {
							result.push( elem );
						}

					} else if ( inplace ) {
						curLoop[i] = false;
					}
				}
			}

			return false;
		},

		ID: function( match ) {
			return match[1].replace( rBackslash, "" );
		},

		TAG: function( match, curLoop ) {
			return match[1].replace( rBackslash, "" ).toLowerCase();
		},

		CHILD: function( match ) {
			if ( match[1] === "nth" ) {
				if ( !match[2] ) {
					Sizzle.error( match[0] );
				}

				match[2] = match[2].replace(/^\+|\s*/g, '');

				// parse equations like 'even', 'odd', '5', '2n', '3n+2', '4n-1', '-n+6'
				var test = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(
					match[2] === "even" && "2n" || match[2] === "odd" && "2n+1" ||
					!/\D/.test( match[2] ) && "0n+" + match[2] || match[2]);

				// calculate the numbers (first)n+(last) including if they are negative
				match[2] = (test[1] + (test[2] || 1)) - 0;
				match[3] = test[3] - 0;
			}
			else if ( match[2] ) {
				Sizzle.error( match[0] );
			}

			// TODO: Move to normal caching system
			match[0] = done++;

			return match;
		},

		ATTR: function( match, curLoop, inplace, result, not, isXML ) {
			var name = match[1] = match[1].replace( rBackslash, "" );

			if ( !isXML && Expr.attrMap[name] ) {
				match[1] = Expr.attrMap[name];
			}

			// Handle if an un-quoted value was used
			match[4] = ( match[4] || match[5] || "" ).replace( rBackslash, "" );

			if ( match[2] === "~=" ) {
				match[4] = " " + match[4] + " ";
			}

			return match;
		},

		PSEUDO: function( match, curLoop, inplace, result, not ) {
			if ( match[1] === "not" ) {
				// If we're dealing with a complex expression, or a simple one
				if ( ( chunker.exec(match[3]) || "" ).length > 1 || /^\w/.test(match[3]) ) {
					match[3] = Sizzle(match[3], null, null, curLoop);

				} else {
					var ret = Sizzle.filter(match[3], curLoop, inplace, true ^ not);

					if ( !inplace ) {
						result.push.apply( result, ret );
					}

					return false;
				}

			} else if ( Expr.match.POS.test( match[0] ) || Expr.match.CHILD.test( match[0] ) ) {
				return true;
			}

			return match;
		},

		POS: function( match ) {
			match.unshift( true );

			return match;
		}
	},

	filters: {
		enabled: function( elem ) {
			return elem.disabled === false && elem.type !== "hidden";
		},

		disabled: function( elem ) {
			return elem.disabled === true;
		},

		checked: function( elem ) {
			return elem.checked === true;
		},

		selected: function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		parent: function( elem ) {
			return !!elem.firstChild;
		},

		empty: function( elem ) {
			return !elem.firstChild;
		},

		has: function( elem, i, match ) {
			return !!Sizzle( match[3], elem ).length;
		},

		header: function( elem ) {
			return (/h\d/i).test( elem.nodeName );
		},

		text: function( elem ) {
			var attr = elem.getAttribute( "type" ), type = elem.type;
			// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
			// use getAttribute instead to test this case
			return elem.nodeName.toLowerCase() === "input" && "text" === type && ( attr === type || attr === null );
		},

		radio: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "radio" === elem.type;
		},

		checkbox: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "checkbox" === elem.type;
		},

		file: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "file" === elem.type;
		},

		password: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "password" === elem.type;
		},

		submit: function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && "submit" === elem.type;
		},

		image: function( elem ) {
			return elem.nodeName.toLowerCase() === "input" && "image" === elem.type;
		},

		reset: function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && "reset" === elem.type;
		},

		button: function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && "button" === elem.type || name === "button";
		},

		input: function( elem ) {
			return (/input|select|textarea|button/i).test( elem.nodeName );
		},

		focus: function( elem ) {
			return elem === elem.ownerDocument.activeElement;
		}
	},
	setFilters: {
		first: function( elem, i ) {
			return i === 0;
		},

		last: function( elem, i, match, array ) {
			return i === array.length - 1;
		},

		even: function( elem, i ) {
			return i % 2 === 0;
		},

		odd: function( elem, i ) {
			return i % 2 === 1;
		},

		lt: function( elem, i, match ) {
			return i < match[3] - 0;
		},

		gt: function( elem, i, match ) {
			return i > match[3] - 0;
		},

		nth: function( elem, i, match ) {
			return match[3] - 0 === i;
		},

		eq: function( elem, i, match ) {
			return match[3] - 0 === i;
		}
	},
	filter: {
		PSEUDO: function( elem, match, i, array ) {
			var name = match[1],
				filter = Expr.filters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );

			} else if ( name === "contains" ) {
				return (elem.textContent || elem.innerText || getText([ elem ]) || "").indexOf(match[3]) >= 0;

			} else if ( name === "not" ) {
				var not = match[3];

				for ( var j = 0, l = not.length; j < l; j++ ) {
					if ( not[j] === elem ) {
						return false;
					}
				}

				return true;

			} else {
				Sizzle.error( name );
			}
		},

		CHILD: function( elem, match ) {
			var first, last,
				doneName, parent, cache,
				count, diff,
				type = match[1],
				node = elem;

			switch ( type ) {
				case "only":
				case "first":
					while ( (node = node.previousSibling) )	 {
						if ( node.nodeType === 1 ) {
							return false;
						}
					}

					if ( type === "first" ) {
						return true;
					}

					node = elem;

				case "last":
					while ( (node = node.nextSibling) )	 {
						if ( node.nodeType === 1 ) {
							return false;
						}
					}

					return true;

				case "nth":
					first = match[2];
					last = match[3];

					if ( first === 1 && last === 0 ) {
						return true;
					}

					doneName = match[0];
					parent = elem.parentNode;

					if ( parent && (parent[ expando ] !== doneName || !elem.nodeIndex) ) {
						count = 0;

						for ( node = parent.firstChild; node; node = node.nextSibling ) {
							if ( node.nodeType === 1 ) {
								node.nodeIndex = ++count;
							}
						}

						parent[ expando ] = doneName;
					}

					diff = elem.nodeIndex - last;

					if ( first === 0 ) {
						return diff === 0;

					} else {
						return ( diff % first === 0 && diff / first >= 0 );
					}
			}
		},

		ID: function( elem, match ) {
			return elem.nodeType === 1 && elem.getAttribute("id") === match;
		},

		TAG: function( elem, match ) {
			return (match === "*" && elem.nodeType === 1) || !!elem.nodeName && elem.nodeName.toLowerCase() === match;
		},

		CLASS: function( elem, match ) {
			return (" " + (elem.className || elem.getAttribute("class")) + " ")
				.indexOf( match ) > -1;
		},

		ATTR: function( elem, match ) {
			var name = match[1],
				result = Sizzle.attr ?
					Sizzle.attr( elem, name ) :
					Expr.attrHandle[ name ] ?
					Expr.attrHandle[ name ]( elem ) :
					elem[ name ] != null ?
						elem[ name ] :
						elem.getAttribute( name ),
				value = result + "",
				type = match[2],
				check = match[4];

			return result == null ?
				type === "!=" :
				!type && Sizzle.attr ?
				result != null :
				type === "=" ?
				value === check :
				type === "*=" ?
				value.indexOf(check) >= 0 :
				type === "~=" ?
				(" " + value + " ").indexOf(check) >= 0 :
				!check ?
				value && result !== false :
				type === "!=" ?
				value !== check :
				type === "^=" ?
				value.indexOf(check) === 0 :
				type === "$=" ?
				value.substr(value.length - check.length) === check :
				type === "|=" ?
				value === check || value.substr(0, check.length + 1) === check + "-" :
				false;
		},

		POS: function( elem, match, i, array ) {
			var name = match[2],
				filter = Expr.setFilters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );
			}
		}
	}
};

var origPOS = Expr.match.POS,
	fescape = function(all, num){
		return "\\" + (num - 0 + 1);
	};

for ( var type in Expr.match ) {
	Expr.match[ type ] = new RegExp( Expr.match[ type ].source + (/(?![^\[]*\])(?![^\(]*\))/.source) );
	Expr.leftMatch[ type ] = new RegExp( /(^(?:.|\r|\n)*?)/.source + Expr.match[ type ].source.replace(/\\(\d+)/g, fescape) );
}

var makeArray = function( array, results ) {
	array = Array.prototype.slice.call( array, 0 );

	if ( results ) {
		results.push.apply( results, array );
		return results;
	}

	return array;
};

// Perform a simple check to determine if the browser is capable of
// converting a NodeList to an array using builtin methods.
// Also verifies that the returned array holds DOM nodes
// (which is not the case in the Blackberry browser)
try {
	Array.prototype.slice.call( document.documentElement.childNodes, 0 )[0].nodeType;

// Provide a fallback method if it does not work
} catch( e ) {
	makeArray = function( array, results ) {
		var i = 0,
			ret = results || [];

		if ( toString.call(array) === "[object Array]" ) {
			Array.prototype.push.apply( ret, array );

		} else {
			if ( typeof array.length === "number" ) {
				for ( var l = array.length; i < l; i++ ) {
					ret.push( array[i] );
				}

			} else {
				for ( ; array[i]; i++ ) {
					ret.push( array[i] );
				}
			}
		}

		return ret;
	};
}

var sortOrder, siblingCheck;

if ( document.documentElement.compareDocumentPosition ) {
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		if ( !a.compareDocumentPosition || !b.compareDocumentPosition ) {
			return a.compareDocumentPosition ? -1 : 1;
		}

		return a.compareDocumentPosition(b) & 4 ? -1 : 1;
	};

} else {
	sortOrder = function( a, b ) {
		// The nodes are identical, we can exit early
		if ( a === b ) {
			hasDuplicate = true;
			return 0;

		// Fallback to using sourceIndex (in IE) if it's available on both nodes
		} else if ( a.sourceIndex && b.sourceIndex ) {
			return a.sourceIndex - b.sourceIndex;
		}

		var al, bl,
			ap = [],
			bp = [],
			aup = a.parentNode,
			bup = b.parentNode,
			cur = aup;

		// If the nodes are siblings (or identical) we can do a quick check
		if ( aup === bup ) {
			return siblingCheck( a, b );

		// If no parents were found then the nodes are disconnected
		} else if ( !aup ) {
			return -1;

		} else if ( !bup ) {
			return 1;
		}

		// Otherwise they're somewhere else in the tree so we need
		// to build up a full list of the parentNodes for comparison
		while ( cur ) {
			ap.unshift( cur );
			cur = cur.parentNode;
		}

		cur = bup;

		while ( cur ) {
			bp.unshift( cur );
			cur = cur.parentNode;
		}

		al = ap.length;
		bl = bp.length;

		// Start walking down the tree looking for a discrepancy
		for ( var i = 0; i < al && i < bl; i++ ) {
			if ( ap[i] !== bp[i] ) {
				return siblingCheck( ap[i], bp[i] );
			}
		}

		// We ended someplace up the tree so do a sibling check
		return i === al ?
			siblingCheck( a, bp[i], -1 ) :
			siblingCheck( ap[i], b, 1 );
	};

	siblingCheck = function( a, b, ret ) {
		if ( a === b ) {
			return ret;

		var cur = a.nextSibling;
		}

		while ( cur ) {
			if ( cur === b ) {
				return -1;
			}

			cur = cur.nextSibling;
		}

		return 1;
	};
}

// Check to see if the browser returns elements by name when
// querying by getElementById (and provide a workaround)
(function(){
	// We're going to inject a fake input element with a specified name
	var form = document.createElement("div"),
		id = "script" + (new Date()).getTime(),
		root = document.documentElement;

	form.innerHTML = "<a name='" + id + "'/>";

	// Inject it into the root element, check its status, and remove it quickly
	root.insertBefore( form, root.firstChild );

	// The workaround has to do additional checks after a getElementById
	// Which slows things down for other browsers (hence the branching)
	if ( document.getElementById( id ) ) {
		Expr.find.ID = function( match, context, isXML ) {
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);

				return m ?
					m.id === match[1] || typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id").nodeValue === match[1] ?
						[m] :
						undefined :
					[];
			}
		};

		Expr.filter.ID = function( elem, match ) {
			var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");

			return elem.nodeType === 1 && node && node.nodeValue === match;
		};
	}

	root.removeChild( form );

	// release memory in IE
	root = form = null;
})();

(function(){
	// Check to see if the browser returns only elements
	// when doing getElementsByTagName("*")

	// Create a fake element
	var div = document.createElement("div");
	div.appendChild( document.createComment("") );

	// Make sure no comments are found
	if ( div.getElementsByTagName("*").length > 0 ) {
		Expr.find.TAG = function( match, context ) {
			var results = context.getElementsByTagName( match[1] );

			// Filter out possible comments
			if ( match[1] === "*" ) {
				var tmp = [];

				for ( var i = 0; results[i]; i++ ) {
					if ( results[i].nodeType === 1 ) {
						tmp.push( results[i] );
					}
				}

				results = tmp;
			}

			return results;
		};
	}

	// Check to see if an attribute returns normalized href attributes
	div.innerHTML = "<a href='#'></a>";

	if ( div.firstChild && typeof div.firstChild.getAttribute !== "undefined" &&
			div.firstChild.getAttribute("href") !== "#" ) {

		Expr.attrHandle.href = function( elem ) {
			return elem.getAttribute( "href", 2 );
		};
	}

	// release memory in IE
	div = null;
})();

if ( document.querySelectorAll ) {
	(function(){
		var oldSizzle = Sizzle,
			div = document.createElement("div"),
			id = "__sizzle__";

		div.innerHTML = "<p class='TEST'></p>";

		// Safari can't handle uppercase or unicode characters when
		// in quirks mode.
		if ( div.querySelectorAll && div.querySelectorAll(".TEST").length === 0 ) {
			return;
		}

		Sizzle = function( query, context, extra, seed ) {
			context = context || document;

			// Only use querySelectorAll on non-XML documents
			// (ID selectors don't work in non-HTML documents)
			if ( !seed && !Sizzle.isXML(context) ) {
				// See if we find a selector to speed up
				var match = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec( query );

				if ( match && (context.nodeType === 1 || context.nodeType === 9) ) {
					// Speed-up: Sizzle("TAG")
					if ( match[1] ) {
						return makeArray( context.getElementsByTagName( query ), extra );

					// Speed-up: Sizzle(".CLASS")
					} else if ( match[2] && Expr.find.CLASS && context.getElementsByClassName ) {
						return makeArray( context.getElementsByClassName( match[2] ), extra );
					}
				}

				if ( context.nodeType === 9 ) {
					// Speed-up: Sizzle("body")
					// The body element only exists once, optimize finding it
					if ( query === "body" && context.body ) {
						return makeArray( [ context.body ], extra );

					// Speed-up: Sizzle("#ID")
					} else if ( match && match[3] ) {
						var elem = context.getElementById( match[3] );

						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if ( elem && elem.parentNode ) {
							// Handle the case where IE and Opera return items
							// by name instead of ID
							if ( elem.id === match[3] ) {
								return makeArray( [ elem ], extra );
							}

						} else {
							return makeArray( [], extra );
						}
					}

					try {
						return makeArray( context.querySelectorAll(query), extra );
					} catch(qsaError) {}

				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				} else if ( context.nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					var oldContext = context,
						old = context.getAttribute( "id" ),
						nid = old || id,
						hasParent = context.parentNode,
						relativeHierarchySelector = /^\s*[+~]/.test( query );

					if ( !old ) {
						context.setAttribute( "id", nid );
					} else {
						nid = nid.replace( /'/g, "\\$&" );
					}
					if ( relativeHierarchySelector && hasParent ) {
						context = context.parentNode;
					}

					try {
						if ( !relativeHierarchySelector || hasParent ) {
							return makeArray( context.querySelectorAll( "[id='" + nid + "'] " + query ), extra );
						}

					} catch(pseudoError) {
					} finally {
						if ( !old ) {
							oldContext.removeAttribute( "id" );
						}
					}
				}
			}

			return oldSizzle(query, context, extra, seed);
		};

		for ( var prop in oldSizzle ) {
			Sizzle[ prop ] = oldSizzle[ prop ];
		}

		// release memory in IE
		div = null;
	})();
}

(function(){
	var html = document.documentElement,
		matches = html.matchesSelector || html.mozMatchesSelector || html.webkitMatchesSelector || html.msMatchesSelector;

	if ( matches ) {
		// Check to see if it's possible to do matchesSelector
		// on a disconnected node (IE 9 fails this)
		var disconnectedMatch = !matches.call( document.createElement( "div" ), "div" ),
			pseudoWorks = false;

		try {
			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( document.documentElement, "[test!='']:sizzle" );

		} catch( pseudoError ) {
			pseudoWorks = true;
		}

		Sizzle.matchesSelector = function( node, expr ) {
			// Make sure that attribute selectors are quoted
			expr = expr.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");

			if ( !Sizzle.isXML( node ) ) {
				try {
					if ( pseudoWorks || !Expr.match.PSEUDO.test( expr ) && !/!=/.test( expr ) ) {
						var ret = matches.call( node, expr );

						// IE 9's matchesSelector returns false on disconnected nodes
						if ( ret || !disconnectedMatch ||
								// As well, disconnected nodes are said to be in a document
								// fragment in IE 9, so check for that
								node.document && node.document.nodeType !== 11 ) {
							return ret;
						}
					}
				} catch(e) {}
			}

			return Sizzle(expr, null, null, [node]).length > 0;
		};
	}
})();

(function(){
	var div = document.createElement("div");

	div.innerHTML = "<div class='test e'></div><div class='test'></div>";

	// Opera can't find a second classname (in 9.6)
	// Also, make sure that getElementsByClassName actually exists
	if ( !div.getElementsByClassName || div.getElementsByClassName("e").length === 0 ) {
		return;
	}

	// Safari caches class attributes, doesn't catch changes (in 3.2)
	div.lastChild.className = "e";

	if ( div.getElementsByClassName("e").length === 1 ) {
		return;
	}

	Expr.order.splice(1, 0, "CLASS");
	Expr.find.CLASS = function( match, context, isXML ) {
		if ( typeof context.getElementsByClassName !== "undefined" && !isXML ) {
			return context.getElementsByClassName(match[1]);
		}
	};

	// release memory in IE
	div = null;
})();

function dirNodeCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];

		if ( elem ) {
			var match = false;

			elem = elem[dir];

			while ( elem ) {
				if ( elem[ expando ] === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 && !isXML ){
					elem[ expando ] = doneName;
					elem.sizset = i;
				}

				if ( elem.nodeName.toLowerCase() === cur ) {
					match = elem;
					break;
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

function dirCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];

		if ( elem ) {
			var match = false;

			elem = elem[dir];

			while ( elem ) {
				if ( elem[ expando ] === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 ) {
					if ( !isXML ) {
						elem[ expando ] = doneName;
						elem.sizset = i;
					}

					if ( typeof cur !== "string" ) {
						if ( elem === cur ) {
							match = true;
							break;
						}

					} else if ( Sizzle.filter( cur, [elem] ).length > 0 ) {
						match = elem;
						break;
					}
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

if ( document.documentElement.contains ) {
	Sizzle.contains = function( a, b ) {
		return a !== b && (a.contains ? a.contains(b) : true);
	};

} else if ( document.documentElement.compareDocumentPosition ) {
	Sizzle.contains = function( a, b ) {
		return !!(a.compareDocumentPosition(b) & 16);
	};

} else {
	Sizzle.contains = function() {
		return false;
	};
}

Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = (elem ? elem.ownerDocument || elem : 0).documentElement;

	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

var posProcess = function( selector, context, seed ) {
	var match,
		tmpSet = [],
		later = "",
		root = context.nodeType ? [context] : context;

	// Position selectors must be done after the filter
	// And so must :not(positional) so we move all PSEUDOs to the end
	while ( (match = Expr.match.PSEUDO.exec( selector )) ) {
		later += match[0];
		selector = selector.replace( Expr.match.PSEUDO, "" );
	}

	selector = Expr.relative[selector] ? selector + "*" : selector;

	for ( var i = 0, l = root.length; i < l; i++ ) {
		Sizzle( selector, root[i], tmpSet, seed );
	}

	return Sizzle.filter( later, tmpSet );
};

// EXPOSE
// Override sizzle attribute retrieval
Sizzle.attr = jQuery.attr;
Sizzle.selectors.attrMap = {};
jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.filters;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;


})();


var runtil = /Until$/,
	rparentsprev = /^(?:parents|prevUntil|prevAll)/,
	// Note: This RegExp should be improved, or likely pulled from Sizzle
	rmultiselector = /,/,
	isSimple = /^.[^:#\[\.,]*$/,
	slice = Array.prototype.slice,
	POS = jQuery.expr.match.POS,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend({
	find: function( selector ) {
		var self = this,
			i, l;

		if ( typeof selector !== "string" ) {
			return jQuery( selector ).filter(function() {
				for ( i = 0, l = self.length; i < l; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			});
		}

		var ret = this.pushStack( "", "find", selector ),
			length, n, r;

		for ( i = 0, l = this.length; i < l; i++ ) {
			length = ret.length;
			jQuery.find( selector, this[i], ret );

			if ( i > 0 ) {
				// Make sure that the results are unique
				for ( n = length; n < ret.length; n++ ) {
					for ( r = 0; r < length; r++ ) {
						if ( ret[r] === ret[n] ) {
							ret.splice(n--, 1);
							break;
						}
					}
				}
			}
		}

		return ret;
	},

	has: function( target ) {
		var targets = jQuery( target );
		return this.filter(function() {
			for ( var i = 0, l = targets.length; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	not: function( selector ) {
		return this.pushStack( winnow(this, selector, false), "not", selector);
	},

	filter: function( selector ) {
		return this.pushStack( winnow(this, selector, true), "filter", selector );
	},

	is: function( selector ) {
		return !!selector && (
			typeof selector === "string" ?
				// If this is a positional selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				POS.test( selector ) ?
					jQuery( selector, this.context ).index( this[0] ) >= 0 :
					jQuery.filter( selector, this ).length > 0 :
				this.filter( selector ).length > 0 );
	},

	closest: function( selectors, context ) {
		var ret = [], i, l, cur = this[0];

		// Array (deprecated as of jQuery 1.7)
		if ( jQuery.isArray( selectors ) ) {
			var level = 1;

			while ( cur && cur.ownerDocument && cur !== context ) {
				for ( i = 0; i < selectors.length; i++ ) {

					if ( jQuery( cur ).is( selectors[ i ] ) ) {
						ret.push({ selector: selectors[ i ], elem: cur, level: level });
					}
				}

				cur = cur.parentNode;
				level++;
			}

			return ret;
		}

		// String
		var pos = POS.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( i = 0, l = this.length; i < l; i++ ) {
			cur = this[i];

			while ( cur ) {
				if ( pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors) ) {
					ret.push( cur );
					break;

				} else {
					cur = cur.parentNode;
					if ( !cur || !cur.ownerDocument || cur === context || cur.nodeType === 11 ) {
						break;
					}
				}
			}
		}

		ret = ret.length > 1 ? jQuery.unique( ret ) : ret;

		return this.pushStack( ret, "closest", selectors );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[0] && this[0].parentNode ) ? this.prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[0], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(
			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem, this );
	},

	add: function( selector, context ) {
		var set = typeof selector === "string" ?
				jQuery( selector, context ) :
				jQuery.makeArray( selector && selector.nodeType ? [ selector ] : selector ),
			all = jQuery.merge( this.get(), set );

		return this.pushStack( isDisconnected( set[0] ) || isDisconnected( all[0] ) ?
			all :
			jQuery.unique( all ) );
	},

	andSelf: function() {
		return this.add( this.prevObject );
	}
});

// A painfully simple check to see if an element is disconnected
// from a document (should be improved, where feasible).
function isDisconnected( node ) {
	return !node || !node.parentNode || node.parentNode.nodeType === 11;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return jQuery.nth( elem, 2, "nextSibling" );
	},
	prev: function( elem ) {
		return jQuery.nth( elem, 2, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( elem.parentNode.firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.makeArray( elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( !runtil.test( name ) ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		ret = this.length > 1 && !guaranteedUnique[ name ] ? jQuery.unique( ret ) : ret;

		if ( (this.length > 1 || rmultiselector.test( selector )) && rparentsprev.test( name ) ) {
			ret = ret.reverse();
		}

		return this.pushStack( ret, name, slice.call( arguments ).join(",") );
	};
});

jQuery.extend({
	filter: function( expr, elems, not ) {
		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 ?
			jQuery.find.matchesSelector(elems[0], expr) ? [ elems[0] ] : [] :
			jQuery.find.matches(expr, elems);
	},

	dir: function( elem, dir, until ) {
		var matched = [],
			cur = elem[ dir ];

		while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
			if ( cur.nodeType === 1 ) {
				matched.push( cur );
			}
			cur = cur[dir];
		}
		return matched;
	},

	nth: function( cur, result, dir, elem ) {
		result = result || 1;
		var num = 0;

		for ( ; cur; cur = cur[dir] ) {
			if ( cur.nodeType === 1 && ++num === result ) {
				break;
			}
		}

		return cur;
	},

	sibling: function( n, elem ) {
		var r = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				r.push( n );
			}
		}

		return r;
	}
});

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, keep ) {

	// Can't pass null or undefined to indexOf in Firefox 4
	// Set to 0 to skip string check
	qualifier = qualifier || 0;

	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep(elements, function( elem, i ) {
			var retVal = !!qualifier.call( elem, i, elem );
			return retVal === keep;
		});

	} else if ( qualifier.nodeType ) {
		return jQuery.grep(elements, function( elem, i ) {
			return ( elem === qualifier ) === keep;
		});

	} else if ( typeof qualifier === "string" ) {
		var filtered = jQuery.grep(elements, function( elem ) {
			return elem.nodeType === 1;
		});

		if ( isSimple.test( qualifier ) ) {
			return jQuery.filter(qualifier, filtered, !keep);
		} else {
			qualifier = jQuery.filter( qualifier, filtered );
		}
	}

	return jQuery.grep(elements, function( elem, i ) {
		return ( jQuery.inArray( elem, qualifier ) >= 0 ) === keep;
	});
}




function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
	safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}

var nodeNames = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|" +
		"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	rinlinejQuery = / jQuery\d+="(?:\d+|null)"/g,
	rleadingWhitespace = /^\s+/,
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
	rtagName = /<([\w:]+)/,
	rtbody = /<tbody/i,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style)/i,
	rnocache = /<(?:script|object|embed|option|style)/i,
	rnoshimcache = new RegExp("<(?:" + nodeNames + ")", "i"),
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /\/(java|ecma)script/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|\-\-)/,
	wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		area: [ 1, "<map>", "</map>" ],
		_default: [ 0, "", "" ]
	},
	safeFragment = createSafeFragment( document );

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// IE can't serialize <link> and <script> tags normally
if ( !jQuery.support.htmlSerialize ) {
	wrapMap._default = [ 1, "div<div>", "</div>" ];
}

jQuery.fn.extend({
	text: function( text ) {
		if ( jQuery.isFunction(text) ) {
			return this.each(function(i) {
				var self = jQuery( this );

				self.text( text.call(this, i, self.text()) );
			});
		}

		if ( typeof text !== "object" && text !== undefined ) {
			return this.empty().append( (this[0] && this[0].ownerDocument || document).createTextNode( text ) );
		}

		return jQuery.text( this );
	},

	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapAll( html.call(this, i) );
			});
		}

		if ( this[0] ) {
			// The elements to wrap the target around
			var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

			if ( this[0].parentNode ) {
				wrap.insertBefore( this[0] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function(i) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	},

	append: function() {
		return this.domManip(arguments, true, function( elem ) {
			if ( this.nodeType === 1 ) {
				this.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip(arguments, true, function( elem ) {
			if ( this.nodeType === 1 ) {
				this.insertBefore( elem, this.firstChild );
			}
		});
	},

	before: function() {
		if ( this[0] && this[0].parentNode ) {
			return this.domManip(arguments, false, function( elem ) {
				this.parentNode.insertBefore( elem, this );
			});
		} else if ( arguments.length ) {
			var set = jQuery.clean( arguments );
			set.push.apply( set, this.toArray() );
			return this.pushStack( set, "before", arguments );
		}
	},

	after: function() {
		if ( this[0] && this[0].parentNode ) {
			return this.domManip(arguments, false, function( elem ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			});
		} else if ( arguments.length ) {
			var set = this.pushStack( this, "after", arguments );
			set.push.apply( set, jQuery.clean(arguments) );
			return set;
		}
	},

	// keepData is for internal use only--do not document
	remove: function( selector, keepData ) {
		for ( var i = 0, elem; (elem = this[i]) != null; i++ ) {
			if ( !selector || jQuery.filter( selector, [ elem ] ).length ) {
				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( elem.getElementsByTagName("*") );
					jQuery.cleanData( [ elem ] );
				}

				if ( elem.parentNode ) {
					elem.parentNode.removeChild( elem );
				}
			}
		}

		return this;
	},

	empty: function() {
		for ( var i = 0, elem; (elem = this[i]) != null; i++ ) {
			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( elem.getElementsByTagName("*") );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function () {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		if ( value === undefined ) {
			return this[0] && this[0].nodeType === 1 ?
				this[0].innerHTML.replace(rinlinejQuery, "") :
				null;

		// See if we can take a shortcut and just use innerHTML
		} else if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
			(jQuery.support.leadingWhitespace || !rleadingWhitespace.test( value )) &&
			!wrapMap[ (rtagName.exec( value ) || ["", ""])[1].toLowerCase() ] ) {

			value = value.replace(rxhtmlTag, "<$1></$2>");

			try {
				for ( var i = 0, l = this.length; i < l; i++ ) {
					// Remove element nodes and prevent memory leaks
					if ( this[i].nodeType === 1 ) {
						jQuery.cleanData( this[i].getElementsByTagName("*") );
						this[i].innerHTML = value;
					}
				}

			// If using innerHTML throws an exception, use the fallback method
			} catch(e) {
				this.empty().append( value );
			}

		} else if ( jQuery.isFunction( value ) ) {
			this.each(function(i){
				var self = jQuery( this );

				self.html( value.call(this, i, self.html()) );
			});

		} else {
			this.empty().append( value );
		}

		return this;
	},

	replaceWith: function( value ) {
		if ( this[0] && this[0].parentNode ) {
			// Make sure that the elements are removed from the DOM before they are inserted
			// this can help fix replacing a parent with child elements
			if ( jQuery.isFunction( value ) ) {
				return this.each(function(i) {
					var self = jQuery(this), old = self.html();
					self.replaceWith( value.call( this, i, old ) );
				});
			}

			if ( typeof value !== "string" ) {
				value = jQuery( value ).detach();
			}

			return this.each(function() {
				var next = this.nextSibling,
					parent = this.parentNode;

				jQuery( this ).remove();

				if ( next ) {
					jQuery(next).before( value );
				} else {
					jQuery(parent).append( value );
				}
			});
		} else {
			return this.length ?
				this.pushStack( jQuery(jQuery.isFunction(value) ? value() : value), "replaceWith", value ) :
				this;
		}
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, table, callback ) {
		var results, first, fragment, parent,
			value = args[0],
			scripts = [];

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( !jQuery.support.checkClone && arguments.length === 3 && typeof value === "string" && rchecked.test( value ) ) {
			return this.each(function() {
				jQuery(this).domManip( args, table, callback, true );
			});
		}

		if ( jQuery.isFunction(value) ) {
			return this.each(function(i) {
				var self = jQuery(this);
				args[0] = value.call(this, i, table ? self.html() : undefined);
				self.domManip( args, table, callback );
			});
		}

		if ( this[0] ) {
			parent = value && value.parentNode;

			// If we're in a fragment, just use that instead of building a new one
			if ( jQuery.support.parentNode && parent && parent.nodeType === 11 && parent.childNodes.length === this.length ) {
				results = { fragment: parent };

			} else {
				results = jQuery.buildFragment( args, this, scripts );
			}

			fragment = results.fragment;

			if ( fragment.childNodes.length === 1 ) {
				first = fragment = fragment.firstChild;
			} else {
				first = fragment.firstChild;
			}

			if ( first ) {
				table = table && jQuery.nodeName( first, "tr" );

				for ( var i = 0, l = this.length, lastIndex = l - 1; i < l; i++ ) {
					callback.call(
						table ?
							root(this[i], first) :
							this[i],
						// Make sure that we do not leak memory by inadvertently discarding
						// the original fragment (which might have attached data) instead of
						// using it; in addition, use the original fragment object for the last
						// item instead of first because it can end up being emptied incorrectly
						// in certain situations (Bug #8070).
						// Fragments from the fragment cache must always be cloned and never used
						// in place.
						results.cacheable || ( l > 1 && i < lastIndex ) ?
							jQuery.clone( fragment, true, true ) :
							fragment
					);
				}
			}

			if ( scripts.length ) {
				jQuery.each( scripts, evalScript );
			}
		}

		return this;
	}
});

function root( elem, cur ) {
	return jQuery.nodeName(elem, "table") ?
		(elem.getElementsByTagName("tbody")[0] ||
		elem.appendChild(elem.ownerDocument.createElement("tbody"))) :
		elem;
}

function cloneCopyEvent( src, dest ) {

	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type + ( events[ type ][ i ].namespace ? "." : "" ) + events[ type ][ i ].namespace, events[ type ][ i ], events[ type ][ i ].data );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function cloneFixAttributes( src, dest ) {
	var nodeName;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	// clearAttributes removes the attributes, which we don't want,
	// but also removes the attachEvent events, which we *do* want
	if ( dest.clearAttributes ) {
		dest.clearAttributes();
	}

	// mergeAttributes, in contrast, only merges back on the
	// original attributes, not the events
	if ( dest.mergeAttributes ) {
		dest.mergeAttributes( src );
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 fail to clone children inside object elements that use
	// the proprietary classid attribute value (rather than the type
	// attribute) to identify the type of content to display
	if ( nodeName === "object" ) {
		dest.outerHTML = src.outerHTML;

	} else if ( nodeName === "input" && (src.type === "checkbox" || src.type === "radio") ) {
		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set
		if ( src.checked ) {
			dest.defaultChecked = dest.checked = src.checked;
		}

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}

	// Event data gets referenced instead of copied if the expando
	// gets copied too
	dest.removeAttribute( jQuery.expando );
}

jQuery.buildFragment = function( args, nodes, scripts ) {
	var fragment, cacheable, cacheresults, doc,
	first = args[ 0 ];

	// nodes may contain either an explicit document object,
	// a jQuery collection or context object.
	// If nodes[0] contains a valid object to assign to doc
	if ( nodes && nodes[0] ) {
		doc = nodes[0].ownerDocument || nodes[0];
	}

	// Ensure that an attr object doesn't incorrectly stand in as a document object
	// Chrome and Firefox seem to allow this to occur and will throw exception
	// Fixes #8950
	if ( !doc.createDocumentFragment ) {
		doc = document;
	}

	// Only cache "small" (1/2 KB) HTML strings that are associated with the main document
	// Cloning options loses the selected state, so don't cache them
	// IE 6 doesn't like it when you put <object> or <embed> elements in a fragment
	// Also, WebKit does not clone 'checked' attributes on cloneNode, so don't cache
	// Lastly, IE6,7,8 will not correctly reuse cached fragments that were created from unknown elems #10501
	if ( args.length === 1 && typeof first === "string" && first.length < 512 && doc === document &&
		first.charAt(0) === "<" && !rnocache.test( first ) &&
		(jQuery.support.checkClone || !rchecked.test( first )) &&
		(jQuery.support.html5Clone || !rnoshimcache.test( first )) ) {

		cacheable = true;

		cacheresults = jQuery.fragments[ first ];
		if ( cacheresults && cacheresults !== 1 ) {
			fragment = cacheresults;
		}
	}

	if ( !fragment ) {
		fragment = doc.createDocumentFragment();
		jQuery.clean( args, doc, fragment, scripts );
	}

	if ( cacheable ) {
		jQuery.fragments[ first ] = cacheresults ? fragment : 1;
	}

	return { fragment: fragment, cacheable: cacheable };
};

jQuery.fragments = {};

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var ret = [],
			insert = jQuery( selector ),
			parent = this.length === 1 && this[0].parentNode;

		if ( parent && parent.nodeType === 11 && parent.childNodes.length === 1 && insert.length === 1 ) {
			insert[ original ]( this[0] );
			return this;

		} else {
			for ( var i = 0, l = insert.length; i < l; i++ ) {
				var elems = ( i > 0 ? this.clone(true) : this ).get();
				jQuery( insert[i] )[ original ]( elems );
				ret = ret.concat( elems );
			}

			return this.pushStack( ret, name, insert.selector );
		}
	};
});

function getAll( elem ) {
	if ( typeof elem.getElementsByTagName !== "undefined" ) {
		return elem.getElementsByTagName( "*" );

	} else if ( typeof elem.querySelectorAll !== "undefined" ) {
		return elem.querySelectorAll( "*" );

	} else {
		return [];
	}
}

// Used in clean, fixes the defaultChecked property
function fixDefaultChecked( elem ) {
	if ( elem.type === "checkbox" || elem.type === "radio" ) {
		elem.defaultChecked = elem.checked;
	}
}
// Finds all inputs and passes them to fixDefaultChecked
function findInputs( elem ) {
	var nodeName = ( elem.nodeName || "" ).toLowerCase();
	if ( nodeName === "input" ) {
		fixDefaultChecked( elem );
	// Skip scripts, get other children
	} else if ( nodeName !== "script" && typeof elem.getElementsByTagName !== "undefined" ) {
		jQuery.grep( elem.getElementsByTagName("input"), fixDefaultChecked );
	}
}

// Derived From: http://www.iecss.com/shimprove/javascript/shimprove.1-0-1.js
function shimCloneNode( elem ) {
	var div = document.createElement( "div" );
	safeFragment.appendChild( div );

	div.innerHTML = elem.outerHTML;
	return div.firstChild;
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var srcElements,
			destElements,
			i,
			// IE<=8 does not properly clone detached, unknown element nodes
			clone = jQuery.support.html5Clone || !rnoshimcache.test( "<" + elem.nodeName ) ?
				elem.cloneNode( true ) :
				shimCloneNode( elem );

		if ( (!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) &&
				(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {
			// IE copies events bound via attachEvent when using cloneNode.
			// Calling detachEvent on the clone will also remove the events
			// from the original. In order to get around this, we use some
			// proprietary methods to clear the events. Thanks to MooTools
			// guys for this hotness.

			cloneFixAttributes( elem, clone );

			// Using Sizzle here is crazy slow, so we use getElementsByTagName instead
			srcElements = getAll( elem );
			destElements = getAll( clone );

			// Weird iteration because IE will replace the length property
			// with an element if you are cloning the body and one of the
			// elements on the page has a name or id of "length"
			for ( i = 0; srcElements[i]; ++i ) {
				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[i] ) {
					cloneFixAttributes( srcElements[i], destElements[i] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			cloneCopyEvent( elem, clone );

			if ( deepDataAndEvents ) {
				srcElements = getAll( elem );
				destElements = getAll( clone );

				for ( i = 0; srcElements[i]; ++i ) {
					cloneCopyEvent( srcElements[i], destElements[i] );
				}
			}
		}

		srcElements = destElements = null;

		// Return the cloned set
		return clone;
	},

	clean: function( elems, context, fragment, scripts ) {
		var checkScriptType;

		context = context || document;

		// !context.createElement fails in IE with an error but returns typeof 'object'
		if ( typeof context.createElement === "undefined" ) {
			context = context.ownerDocument || context[0] && context[0].ownerDocument || document;
		}

		var ret = [], j;

		for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
			if ( typeof elem === "number" ) {
				elem += "";
			}

			if ( !elem ) {
				continue;
			}

			// Convert html string into DOM nodes
			if ( typeof elem === "string" ) {
				if ( !rhtml.test( elem ) ) {
					elem = context.createTextNode( elem );
				} else {
					// Fix "XHTML"-style tags in all browsers
					elem = elem.replace(rxhtmlTag, "<$1></$2>");

					// Trim whitespace, otherwise indexOf won't work as expected
					var tag = ( rtagName.exec( elem ) || ["", ""] )[1].toLowerCase(),
						wrap = wrapMap[ tag ] || wrapMap._default,
						depth = wrap[0],
						div = context.createElement("div");

					// Append wrapper element to unknown element safe doc fragment
					if ( context === document ) {
						// Use the fragment we've already created for this document
						safeFragment.appendChild( div );
					} else {
						// Use a fragment created with the owner document
						createSafeFragment( context ).appendChild( div );
					}

					// Go to html and back, then peel off extra wrappers
					div.innerHTML = wrap[1] + elem + wrap[2];

					// Move to the right depth
					while ( depth-- ) {
						div = div.lastChild;
					}

					// Remove IE's autoinserted <tbody> from table fragments
					if ( !jQuery.support.tbody ) {

						// String was a <table>, *may* have spurious <tbody>
						var hasBody = rtbody.test(elem),
							tbody = tag === "table" && !hasBody ?
								div.firstChild && div.firstChild.childNodes :

								// String was a bare <thead> or <tfoot>
								wrap[1] === "<table>" && !hasBody ?
									div.childNodes :
									[];

						for ( j = tbody.length - 1; j >= 0 ; --j ) {
							if ( jQuery.nodeName( tbody[ j ], "tbody" ) && !tbody[ j ].childNodes.length ) {
								tbody[ j ].parentNode.removeChild( tbody[ j ] );
							}
						}
					}

					// IE completely kills leading whitespace when innerHTML is used
					if ( !jQuery.support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
						div.insertBefore( context.createTextNode( rleadingWhitespace.exec(elem)[0] ), div.firstChild );
					}

					elem = div.childNodes;
				}
			}

			// Resets defaultChecked for any radios and checkboxes
			// about to be appended to the DOM in IE 6/7 (#8060)
			var len;
			if ( !jQuery.support.appendChecked ) {
				if ( elem[0] && typeof (len = elem.length) === "number" ) {
					for ( j = 0; j < len; j++ ) {
						findInputs( elem[j] );
					}
				} else {
					findInputs( elem );
				}
			}

			if ( elem.nodeType ) {
				ret.push( elem );
			} else {
				ret = jQuery.merge( ret, elem );
			}
		}

		if ( fragment ) {
			checkScriptType = function( elem ) {
				return !elem.type || rscriptType.test( elem.type );
			};
			for ( i = 0; ret[i]; i++ ) {
				if ( scripts && jQuery.nodeName( ret[i], "script" ) && (!ret[i].type || ret[i].type.toLowerCase() === "text/javascript") ) {
					scripts.push( ret[i].parentNode ? ret[i].parentNode.removeChild( ret[i] ) : ret[i] );

				} else {
					if ( ret[i].nodeType === 1 ) {
						var jsTags = jQuery.grep( ret[i].getElementsByTagName( "script" ), checkScriptType );

						ret.splice.apply( ret, [i + 1, 0].concat( jsTags ) );
					}
					fragment.appendChild( ret[i] );
				}
			}
		}

		return ret;
	},

	cleanData: function( elems ) {
		var data, id,
			cache = jQuery.cache,
			special = jQuery.event.special,
			deleteExpando = jQuery.support.deleteExpando;

		for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
			if ( elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()] ) {
				continue;
			}

			id = elem[ jQuery.expando ];

			if ( id ) {
				data = cache[ id ];

				if ( data && data.events ) {
					for ( var type in data.events ) {
						if ( special[ type ] ) {
							jQuery.event.remove( elem, type );

						// This is a shortcut to avoid jQuery.event.remove's overhead
						} else {
							jQuery.removeEvent( elem, type, data.handle );
						}
					}

					// Null the DOM reference to avoid IE6/7/8 leak (#7054)
					if ( data.handle ) {
						data.handle.elem = null;
					}
				}

				if ( deleteExpando ) {
					delete elem[ jQuery.expando ];

				} else if ( elem.removeAttribute ) {
					elem.removeAttribute( jQuery.expando );
				}

				delete cache[ id ];
			}
		}
	}
});

function evalScript( i, elem ) {
	if ( elem.src ) {
		jQuery.ajax({
			url: elem.src,
			async: false,
			dataType: "script"
		});
	} else {
		jQuery.globalEval( ( elem.text || elem.textContent || elem.innerHTML || "" ).replace( rcleanScript, "/*$0*/" ) );
	}

	if ( elem.parentNode ) {
		elem.parentNode.removeChild( elem );
	}
}




var ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity=([^)]*)/,
	// fixed for IE9, see #8346
	rupper = /([A-Z]|^ms)/g,
	rnumpx = /^-?\d+(?:px)?$/i,
	rnum = /^-?\d/,
	rrelNum = /^([\-+])=([\-+.\de]+)/,

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssWidth = [ "Left", "Right" ],
	cssHeight = [ "Top", "Bottom" ],
	curCSS,

	getComputedStyle,
	currentStyle;

jQuery.fn.css = function( name, value ) {
	// Setting 'undefined' is a no-op
	if ( arguments.length === 2 && value === undefined ) {
		return this;
	}

	return jQuery.access( this, name, value, true, function( elem, name, value ) {
		return value !== undefined ?
			jQuery.style( elem, name, value ) :
			jQuery.css( elem, name );
	});
};

jQuery.extend({
	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {
					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity", "opacity" );
					return ret === "" ? "1" : ret;

				} else {
					return elem.style.opacity;
				}
			}
		}
	},

	// Exclude the following css properties to add px
	cssNumber: {
		"fillOpacity": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		// normalize float css property
		"float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {
		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, origName = jQuery.camelCase( name ),
			style = elem.style, hooks = jQuery.cssHooks[ origName ];

		name = jQuery.cssProps[ origName ] || origName;

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// convert relative number strings (+= or -=) to relative numbers. #7345
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( +( ret[1] + 1) * +ret[2] ) + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that NaN and null values aren't set. See: #7116
			if ( value == null || type === "number" && isNaN( value ) ) {
				return;
			}

			// If a number was passed in, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value )) !== undefined ) {
				// Wrapped to prevent IE from throwing errors when 'invalid' values are provided
				// Fixes bug #5509
				try {
					style[ name ] = value;
				} catch(e) {}
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra ) {
		var ret, hooks;

		// Make sure that we're working with the right name
		name = jQuery.camelCase( name );
		hooks = jQuery.cssHooks[ name ];
		name = jQuery.cssProps[ name ] || name;

		// cssFloat needs a special treatment
		if ( name === "cssFloat" ) {
			name = "float";
		}

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks && (ret = hooks.get( elem, true, extra )) !== undefined ) {
			return ret;

		// Otherwise, if a way to get the computed value exists, use that
		} else if ( curCSS ) {
			return curCSS( elem, name );
		}
	},

	// A method for quickly swapping in/out CSS properties to get correct calculations
	swap: function( elem, options, callback ) {
		var old = {};

		// Remember the old values, and insert the new ones
		for ( var name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		callback.call( elem );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	}
});

// DEPRECATED, Use jQuery.css() instead
jQuery.curCSS = jQuery.css;

jQuery.each(["height", "width"], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			var val;

			if ( computed ) {
				if ( elem.offsetWidth !== 0 ) {
					return getWH( elem, name, extra );
				} else {
					jQuery.swap( elem, cssShow, function() {
						val = getWH( elem, name, extra );
					});
				}

				return val;
			}
		},

		set: function( elem, value ) {
			if ( rnumpx.test( value ) ) {
				// ignore negative width and height values #1599
				value = parseFloat( value );

				if ( value >= 0 ) {
					return value + "px";
				}

			} else {
				return value;
			}
		}
	};
});

if ( !jQuery.support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {
			// IE uses filters for opacity
			return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
				( parseFloat( RegExp.$1 ) / 100 ) + "" :
				computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
			if ( value >= 1 && jQuery.trim( filter.replace( ralpha, "" ) ) === "" ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there there is no filter style applied in a css rule, we are done
				if ( currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

jQuery(function() {
	// This hook cannot be added until DOM ready because the support test
	// for it is not run until after DOM ready
	if ( !jQuery.support.reliableMarginRight ) {
		jQuery.cssHooks.marginRight = {
			get: function( elem, computed ) {
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// Work around by temporarily setting element display to inline-block
				var ret;
				jQuery.swap( elem, { "display": "inline-block" }, function() {
					if ( computed ) {
						ret = curCSS( elem, "margin-right", "marginRight" );
					} else {
						ret = elem.style.marginRight;
					}
				});
				return ret;
			}
		};
	}
});

if ( document.defaultView && document.defaultView.getComputedStyle ) {
	getComputedStyle = function( elem, name ) {
		var ret, defaultView, computedStyle;

		name = name.replace( rupper, "-$1" ).toLowerCase();

		if ( (defaultView = elem.ownerDocument.defaultView) &&
				(computedStyle = defaultView.getComputedStyle( elem, null )) ) {
			ret = computedStyle.getPropertyValue( name );
			if ( ret === "" && !jQuery.contains( elem.ownerDocument.documentElement, elem ) ) {
				ret = jQuery.style( elem, name );
			}
		}

		return ret;
	};
}

if ( document.documentElement.currentStyle ) {
	currentStyle = function( elem, name ) {
		var left, rsLeft, uncomputed,
			ret = elem.currentStyle && elem.currentStyle[ name ],
			style = elem.style;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret === null && style && (uncomputed = style[ name ]) ) {
			ret = uncomputed;
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		if ( !rnumpx.test( ret ) && rnum.test( ret ) ) {

			// Remember the original values
			left = style.left;
			rsLeft = elem.runtimeStyle && elem.runtimeStyle.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				elem.runtimeStyle.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ( ret || 0 );
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				elem.runtimeStyle.left = rsLeft;
			}
		}

		return ret === "" ? "auto" : ret;
	};
}

curCSS = getComputedStyle || currentStyle;

function getWH( elem, name, extra ) {

	// Start with offset property
	var val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		which = name === "width" ? cssWidth : cssHeight,
		i = 0,
		len = which.length;

	if ( val > 0 ) {
		if ( extra !== "border" ) {
			for ( ; i < len; i++ ) {
				if ( !extra ) {
					val -= parseFloat( jQuery.css( elem, "padding" + which[ i ] ) ) || 0;
				}
				if ( extra === "margin" ) {
					val += parseFloat( jQuery.css( elem, extra + which[ i ] ) ) || 0;
				} else {
					val -= parseFloat( jQuery.css( elem, "border" + which[ i ] + "Width" ) ) || 0;
				}
			}
		}

		return val + "px";
	}

	// Fall back to computed then uncomputed css if necessary
	val = curCSS( elem, name, name );
	if ( val < 0 || val == null ) {
		val = elem.style[ name ] || 0;
	}
	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Add padding, border, margin
	if ( extra ) {
		for ( ; i < len; i++ ) {
			val += parseFloat( jQuery.css( elem, "padding" + which[ i ] ) ) || 0;
			if ( extra !== "padding" ) {
				val += parseFloat( jQuery.css( elem, "border" + which[ i ] + "Width" ) ) || 0;
			}
			if ( extra === "margin" ) {
				val += parseFloat( jQuery.css( elem, extra + which[ i ] ) ) || 0;
			}
		}
	}

	return val + "px";
}

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.hidden = function( elem ) {
		var width = elem.offsetWidth,
			height = elem.offsetHeight;

		return ( width === 0 && height === 0 ) || (!jQuery.support.reliableHiddenOffsets && ((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
	};

	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};
}




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rhash = /#.*$/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
	rinput = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rquery = /\?/,
	rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
	rselectTextarea = /^(?:select|textarea)/i,
	rspacesAjax = /\s+/,
	rts = /([?&])_=[^&]*/,
	rurl = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,

	// Keep a copy of the old load method
	_load = jQuery.fn.load,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Document location
	ajaxLocation,

	// Document location segments
	ajaxLocParts,

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = ["*/"] + ["*"];

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		if ( jQuery.isFunction( func ) ) {
			var dataTypes = dataTypeExpression.toLowerCase().split( rspacesAjax ),
				i = 0,
				length = dataTypes.length,
				dataType,
				list,
				placeBefore;

			// For each dataType in the dataTypeExpression
			for ( ; i < length; i++ ) {
				dataType = dataTypes[ i ];
				// We control if we're asked to add before
				// any existing element
				placeBefore = /^\+/.test( dataType );
				if ( placeBefore ) {
					dataType = dataType.substr( 1 ) || "*";
				}
				list = structure[ dataType ] = structure[ dataType ] || [];
				// then we add to the structure accordingly
				list[ placeBefore ? "unshift" : "push" ]( func );
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR,
		dataType /* internal */, inspected /* internal */ ) {

	dataType = dataType || options.dataTypes[ 0 ];
	inspected = inspected || {};

	inspected[ dataType ] = true;

	var list = structure[ dataType ],
		i = 0,
		length = list ? list.length : 0,
		executeOnly = ( structure === prefilters ),
		selection;

	for ( ; i < length && ( executeOnly || !selection ); i++ ) {
		selection = list[ i ]( options, originalOptions, jqXHR );
		// If we got redirected to another dataType
		// we try there if executing only and not done already
		if ( typeof selection === "string" ) {
			if ( !executeOnly || inspected[ selection ] ) {
				selection = undefined;
			} else {
				options.dataTypes.unshift( selection );
				selection = inspectPrefiltersOrTransports(
						structure, options, originalOptions, jqXHR, selection, inspected );
			}
		}
	}
	// If we're only executing or nothing was selected
	// we try the catchall dataType if not done already
	if ( ( executeOnly || !selection ) && !inspected[ "*" ] ) {
		selection = inspectPrefiltersOrTransports(
				structure, options, originalOptions, jqXHR, "*", inspected );
	}
	// unnecessary when only executing (prefilters)
	// but it'll be ignored by the caller in that case
	return selection;
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};
	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}
}

jQuery.fn.extend({
	load: function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );

		// Don't do a request if no elements are being requested
		} else if ( !this.length ) {
			return this;
		}

		var off = url.indexOf( " " );
		if ( off >= 0 ) {
			var selector = url.slice( off, url.length );
			url = url.slice( 0, off );
		}

		// Default to a GET request
		var type = "GET";

		// If the second parameter was provided
		if ( params ) {
			// If it's a function
			if ( jQuery.isFunction( params ) ) {
				// We assume that it's the callback
				callback = params;
				params = undefined;

			// Otherwise, build a param string
			} else if ( typeof params === "object" ) {
				params = jQuery.param( params, jQuery.ajaxSettings.traditional );
				type = "POST";
			}
		}

		var self = this;

		// Request the remote document
		jQuery.ajax({
			url: url,
			type: type,
			dataType: "html",
			data: params,
			// Complete callback (responseText is used internally)
			complete: function( jqXHR, status, responseText ) {
				// Store the response as specified by the jqXHR object
				responseText = jqXHR.responseText;
				// If successful, inject the HTML into all the matched elements
				if ( jqXHR.isResolved() ) {
					// #4825: Get the actual response in case
					// a dataFilter is present in ajaxSettings
					jqXHR.done(function( r ) {
						responseText = r;
					});
					// See if a selector was specified
					self.html( selector ?
						// Create a dummy div to hold the results
						jQuery("<div>")
							// inject the contents of the document in, removing the scripts
							// to avoid any 'Permission Denied' errors in IE
							.append(responseText.replace(rscript, ""))

							// Locate the specified elements
							.find(selector) :

						// If not, just inject the full result
						responseText );
				}

				if ( callback ) {
					self.each( callback, [ responseText, status, jqXHR ] );
				}
			}
		});

		return this;
	},

	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},

	serializeArray: function() {
		return this.map(function(){
			return this.elements ? jQuery.makeArray( this.elements ) : this;
		})
		.filter(function(){
			return this.name && !this.disabled &&
				( this.checked || rselectTextarea.test( this.nodeName ) ||
					rinput.test( this.type ) );
		})
		.map(function( i, elem ){
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val, i ){
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});

// Attach a bunch of functions for handling common AJAX events
jQuery.each( "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split( " " ), function( i, o ){
	jQuery.fn[ o ] = function( f ){
		return this.on( o, f );
	};
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			type: method,
			url: url,
			data: data,
			success: callback,
			dataType: type
		});
	};
});

jQuery.extend({

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		if ( settings ) {
			// Building a settings object
			ajaxExtend( target, jQuery.ajaxSettings );
		} else {
			// Extending ajaxSettings
			settings = target;
			target = jQuery.ajaxSettings;
		}
		ajaxExtend( target, settings );
		return target;
	},

	ajaxSettings: {
		url: ajaxLocation,
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		type: "GET",
		contentType: "application/x-www-form-urlencoded",
		processData: true,
		async: true,
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		traditional: false,
		headers: {},
		*/

		accepts: {
			xml: "application/xml, text/xml",
			html: "text/html",
			text: "text/plain",
			json: "application/json, text/javascript",
			"*": allTypes
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText"
		},

		// List of data converters
		// 1) key format is "source_type destination_type" (a single space in-between)
		// 2) the catchall symbol "*" can be used for source_type
		converters: {

			// Convert anything to text
			"* text": window.String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			context: true,
			url: true
		}
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var // Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events
			// It's the callbackContext if one was provided in the options
			// and if it's a DOM node or a jQuery collection
			globalEventContext = callbackContext !== s &&
				( callbackContext.nodeType || callbackContext instanceof jQuery ) ?
						jQuery( callbackContext ) : jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// ifModified key
			ifModifiedKey,
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// Response headers
			responseHeadersString,
			responseHeaders,
			// transport
			transport,
			// timeout handle
			timeoutTimer,
			// Cross-domain detection vars
			parts,
			// The jqXHR state
			state = 0,
			// To know if global events are to be dispatched
			fireGlobals,
			// Loop variable
			i,
			// Fake xhr
			jqXHR = {

				readyState: 0,

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( !state ) {
						var lname = name.toLowerCase();
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match === undefined ? null : match;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					statusText = statusText || "abort";
					if ( transport ) {
						transport.abort( statusText );
					}
					done( 0, statusText );
					return this;
				}
			};

		// Callback for when everything is done
		// It is defined here because jslint complains if it is declared
		// at the end of the function (which would be more logical and readable)
		function done( status, nativeStatusText, responses, headers ) {

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			var isSuccess,
				success,
				error,
				statusText = nativeStatusText,
				response = responses ? ajaxHandleResponses( s, jqXHR, responses ) : undefined,
				lastModified,
				etag;

			// If successful, handle type chaining
			if ( status >= 200 && status < 300 || status === 304 ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {

					if ( ( lastModified = jqXHR.getResponseHeader( "Last-Modified" ) ) ) {
						jQuery.lastModified[ ifModifiedKey ] = lastModified;
					}
					if ( ( etag = jqXHR.getResponseHeader( "Etag" ) ) ) {
						jQuery.etag[ ifModifiedKey ] = etag;
					}
				}

				// If not modified
				if ( status === 304 ) {

					statusText = "notmodified";
					isSuccess = true;

				// If we have data
				} else {

					try {
						success = ajaxConvert( s, response );
						statusText = "success";
						isSuccess = true;
					} catch(e) {
						// We have a parsererror
						statusText = "parsererror";
						error = e;
					}
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( !statusText || status ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = "" + ( nativeStatusText || statusText );

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajax" + ( isSuccess ? "Success" : "Error" ),
						[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		// Attach deferreds
		deferred.promise( jqXHR );
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;
		jqXHR.complete = completeDeferred.add;

		// Status-dependent callbacks
		jqXHR.statusCode = function( map ) {
			if ( map ) {
				var tmp;
				if ( state < 2 ) {
					for ( tmp in map ) {
						statusCode[ tmp ] = [ statusCode[tmp], map[tmp] ];
					}
				} else {
					tmp = map[ jqXHR.status ];
					jqXHR.then( tmp, tmp );
				}
			}
			return this;
		};

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// We also use the url parameter if available
		s.url = ( ( url || s.url ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().split( rspacesAjax );

		// Determine if a cross-domain request is in order
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] != ajaxLocParts[ 1 ] || parts[ 2 ] != ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? 80 : 443 ) ) !=
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? 80 : 443 ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefiler, stop there
		if ( state === 2 ) {
			return false;
		}

		// We can fire global events as of now if asked to
		fireGlobals = s.global;

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.data;
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Get ifModifiedKey before adding the anti-cache parameter
			ifModifiedKey = s.url;

			// Add anti-cache in url if needed
			if ( s.cache === false ) {

				var ts = jQuery.now(),
					// try replacing _= if it is there
					ret = s.url.replace( rts, "$1_=" + ts );

				// if nothing was replaced, add timestamp to the end
				s.url = ret + ( ( ret === s.url ) ? ( rquery.test( s.url ) ? "&" : "?" ) + "_=" + ts : "" );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			ifModifiedKey = ifModifiedKey || s.url;
			if ( jQuery.lastModified[ ifModifiedKey ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ ifModifiedKey ] );
			}
			if ( jQuery.etag[ ifModifiedKey ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ ifModifiedKey ] );
			}
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
				// Abort if not done already
				jqXHR.abort();
				return false;

		}

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;
			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout( function(){
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch (e) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		return jqXHR;
	},

	// Serialize an array of form elements or a set of
	// key/values into a query string
	param: function( a, traditional ) {
		var s = [],
			add = function( key, value ) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : value;
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			});

		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( var prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	}
});

function buildParams( prefix, obj, traditional, add ) {
	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// If array item is non-scalar (array or object), encode its
				// numeric index to resolve deserialization ambiguity issues.
				// Note that rack (as of 1.0.0) can't currently deserialize
				// nested arrays properly, and attempting to do so may cause
				// a server error. Possible fixes are to modify rack's
				// deserialization algorithm or to provide an option or flag
				// to force array serialization to be shallow.
				buildParams( prefix + "[" + ( typeof v === "object" || jQuery.isArray(v) ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && obj != null && typeof obj === "object" ) {
		// Serialize object item.
		for ( var name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// This is still on the jQuery object... for now
// Want to move this to jQuery.ajax some day
jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {}

});

/* Handles responses to an ajax request:
 * - sets all responseXXX fields accordingly
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var contents = s.contents,
		dataTypes = s.dataTypes,
		responseFields = s.responseFields,
		ct,
		type,
		finalDataType,
		firstDataType;

	// Fill responseXXX fields
	for ( type in responseFields ) {
		if ( type in responses ) {
			jqXHR[ responseFields[type] ] = responses[ type ];
		}
	}

	// Remove auto dataType and get content-type in the process
	while( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "content-type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

// Chain conversions given the request and the original response
function ajaxConvert( s, response ) {

	// Apply the dataFilter if provided
	if ( s.dataFilter ) {
		response = s.dataFilter( response, s.dataType );
	}

	var dataTypes = s.dataTypes,
		converters = {},
		i,
		key,
		length = dataTypes.length,
		tmp,
		// Current and previous dataTypes
		current = dataTypes[ 0 ],
		prev,
		// Conversion expression
		conversion,
		// Conversion function
		conv,
		// Conversion functions (transitive conversion)
		conv1,
		conv2;

	// For each dataType in the chain
	for ( i = 1; i < length; i++ ) {

		// Create converters map
		// with lowercased keys
		if ( i === 1 ) {
			for ( key in s.converters ) {
				if ( typeof key === "string" ) {
					converters[ key.toLowerCase() ] = s.converters[ key ];
				}
			}
		}

		// Get the dataTypes
		prev = current;
		current = dataTypes[ i ];

		// If current is auto dataType, update it to prev
		if ( current === "*" ) {
			current = prev;
		// If no auto and dataTypes are actually different
		} else if ( prev !== "*" && prev !== current ) {

			// Get the converter
			conversion = prev + " " + current;
			conv = converters[ conversion ] || converters[ "* " + current ];

			// If there is no direct converter, search transitively
			if ( !conv ) {
				conv2 = undefined;
				for ( conv1 in converters ) {
					tmp = conv1.split( " " );
					if ( tmp[ 0 ] === prev || tmp[ 0 ] === "*" ) {
						conv2 = converters[ tmp[1] + " " + current ];
						if ( conv2 ) {
							conv1 = converters[ conv1 ];
							if ( conv1 === true ) {
								conv = conv2;
							} else if ( conv2 === true ) {
								conv = conv1;
							}
							break;
						}
					}
				}
			}
			// If we found no converter, dispatch an error
			if ( !( conv || conv2 ) ) {
				jQuery.error( "No conversion from " + conversion.replace(" "," to ") );
			}
			// If found converter is not an equivalence
			if ( conv !== true ) {
				// Convert with 1 or 2 converters accordingly
				response = conv ? conv( response ) : conv2( conv1(response) );
			}
		}
	}
	return response;
}




var jsc = jQuery.now(),
	jsre = /(\=)\?(&|$)|\?\?/i;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		return jQuery.expando + "_" + ( jsc++ );
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var inspectData = s.contentType === "application/x-www-form-urlencoded" &&
		( typeof s.data === "string" );

	if ( s.dataTypes[ 0 ] === "jsonp" ||
		s.jsonp !== false && ( jsre.test( s.url ) ||
				inspectData && jsre.test( s.data ) ) ) {

		var responseContainer,
			jsonpCallback = s.jsonpCallback =
				jQuery.isFunction( s.jsonpCallback ) ? s.jsonpCallback() : s.jsonpCallback,
			previous = window[ jsonpCallback ],
			url = s.url,
			data = s.data,
			replace = "$1" + jsonpCallback + "$2";

		if ( s.jsonp !== false ) {
			url = url.replace( jsre, replace );
			if ( s.url === url ) {
				if ( inspectData ) {
					data = data.replace( jsre, replace );
				}
				if ( s.data === data ) {
					// Add callback manually
					url += (/\?/.test( url ) ? "&" : "?") + s.jsonp + "=" + jsonpCallback;
				}
			}
		}

		s.url = url;
		s.data = data;

		// Install callback
		window[ jsonpCallback ] = function( response ) {
			responseContainer = [ response ];
		};

		// Clean-up function
		jqXHR.always(function() {
			// Set callback back to previous value
			window[ jsonpCallback ] = previous;
			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( previous ) ) {
				window[ jsonpCallback ]( responseContainer[ 0 ] );
			}
		});

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( jsonpCallback + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Delegate to script
		return "script";
	}
});




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /javascript|ecmascript/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function(s) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || document.getElementsByTagName( "head" )[0] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement( "script" );

				script.async = "async";

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( head && script.parentNode ) {
							head.removeChild( script );
						}

						// Dereference the script
						script = undefined;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};
				// Use insertBefore instead of appendChild  to circumvent an IE6 bug.
				// This arises when a base node is used (#2709 and #4378).
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( 0, 1 );
				}
			}
		};
	}
});




var // #5280: Internet Explorer will keep connections alive if we don't abort on unload
	xhrOnUnloadAbort = window.ActiveXObject ? function() {
		// Abort all pending requests
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]( 0, 1 );
		}
	} : false,
	xhrId = 0,
	xhrCallbacks;

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject( "Microsoft.XMLHTTP" );
	} catch( e ) {}
}

// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject ?
	/* Microsoft failed to properly
	 * implement the XMLHttpRequest in IE7 (can't request local files),
	 * so we use the ActiveXObject when it is available
	 * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
	 * we need a fallback.
	 */
	function() {
		return !this.isLocal && createStandardXHR() || createActiveXHR();
	} :
	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

// Determine support properties
(function( xhr ) {
	jQuery.extend( jQuery.support, {
		ajax: !!xhr,
		cors: !!xhr && ( "withCredentials" in xhr )
	});
})( jQuery.ajaxSettings.xhr() );

// Create transport if the browser can provide an xhr
if ( jQuery.support.ajax ) {

	jQuery.ajaxTransport(function( s ) {
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !s.crossDomain || jQuery.support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {

					// Get a new xhr
					var xhr = s.xhr(),
						handle,
						i;

					// Open the socket
					// Passing null username, generates a login popup on Opera (#2865)
					if ( s.username ) {
						xhr.open( s.type, s.url, s.async, s.username, s.password );
					} else {
						xhr.open( s.type, s.url, s.async );
					}

					// Apply custom fields if provided
					if ( s.xhrFields ) {
						for ( i in s.xhrFields ) {
							xhr[ i ] = s.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( s.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( s.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !s.crossDomain && !headers["X-Requested-With"] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Need an extra try/catch for cross domain requests in Firefox 3
					try {
						for ( i in headers ) {
							xhr.setRequestHeader( i, headers[ i ] );
						}
					} catch( _ ) {}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( s.hasContent && s.data ) || null );

					// Listener
					callback = function( _, isAbort ) {

						var status,
							statusText,
							responseHeaders,
							responses,
							xml;

						// Firefox throws exceptions when accessing properties
						// of an xhr when a network error occured
						// http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
						try {

							// Was never called and is aborted or complete
							if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

								// Only called once
								callback = undefined;

								// Do not keep as active anymore
								if ( handle ) {
									xhr.onreadystatechange = jQuery.noop;
									if ( xhrOnUnloadAbort ) {
										delete xhrCallbacks[ handle ];
									}
								}

								// If it's an abort
								if ( isAbort ) {
									// Abort it manually if needed
									if ( xhr.readyState !== 4 ) {
										xhr.abort();
									}
								} else {
									status = xhr.status;
									responseHeaders = xhr.getAllResponseHeaders();
									responses = {};
									xml = xhr.responseXML;

									// Construct response list
									if ( xml && xml.documentElement /* #4958 */ ) {
										responses.xml = xml;
									}
									responses.text = xhr.responseText;

									// Firefox throws an exception when accessing
									// statusText for faulty cross-domain requests
									try {
										statusText = xhr.statusText;
									} catch( e ) {
										// We normalize with Webkit giving an empty statusText
										statusText = "";
									}

									// Filter status for non standard behaviors

									// If the request is local and we have data: assume a success
									// (success with no data won't get notified, that's the best we
									// can do given current implementations)
									if ( !status && s.isLocal && !s.crossDomain ) {
										status = responses.text ? 200 : 404;
									// IE - #1450: sometimes returns 1223 when it should be 204
									} else if ( status === 1223 ) {
										status = 204;
									}
								}
							}
						} catch( firefoxAccessException ) {
							if ( !isAbort ) {
								complete( -1, firefoxAccessException );
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, responseHeaders );
						}
					};

					// if we're in sync mode or it's in cache
					// and has been retrieved directly (IE6 & IE7)
					// we need to manually fire the callback
					if ( !s.async || xhr.readyState === 4 ) {
						callback();
					} else {
						handle = ++xhrId;
						if ( xhrOnUnloadAbort ) {
							// Create the active xhrs callbacks list if needed
							// and attach the unload handler
							if ( !xhrCallbacks ) {
								xhrCallbacks = {};
								jQuery( window ).unload( xhrOnUnloadAbort );
							}
							// Add to list of active xhrs callbacks
							xhrCallbacks[ handle ] = callback;
						}
						xhr.onreadystatechange = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback(0,1);
					}
				}
			};
		}
	});
}




var elemdisplay = {},
	iframe, iframeDoc,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
	timerId,
	fxAttrs = [
		// height animations
		[ "height", "marginTop", "marginBottom", "paddingTop", "paddingBottom" ],
		// width animations
		[ "width", "marginLeft", "marginRight", "paddingLeft", "paddingRight" ],
		// opacity animations
		[ "opacity" ]
	],
	fxNow;

jQuery.fn.extend({
	show: function( speed, easing, callback ) {
		var elem, display;

		if ( speed || speed === 0 ) {
			return this.animate( genFx("show", 3), speed, easing, callback );

		} else {
			for ( var i = 0, j = this.length; i < j; i++ ) {
				elem = this[ i ];

				if ( elem.style ) {
					display = elem.style.display;

					// Reset the inline display of this element to learn if it is
					// being hidden by cascaded rules or not
					if ( !jQuery._data(elem, "olddisplay") && display === "none" ) {
						display = elem.style.display = "";
					}

					// Set elements which have been overridden with display: none
					// in a stylesheet to whatever the default browser style is
					// for such an element
					if ( display === "" && jQuery.css(elem, "display") === "none" ) {
						jQuery._data( elem, "olddisplay", defaultDisplay(elem.nodeName) );
					}
				}
			}

			// Set the display of most of the elements in a second loop
			// to avoid the constant reflow
			for ( i = 0; i < j; i++ ) {
				elem = this[ i ];

				if ( elem.style ) {
					display = elem.style.display;

					if ( display === "" || display === "none" ) {
						elem.style.display = jQuery._data( elem, "olddisplay" ) || "";
					}
				}
			}

			return this;
		}
	},

	hide: function( speed, easing, callback ) {
		if ( speed || speed === 0 ) {
			return this.animate( genFx("hide", 3), speed, easing, callback);

		} else {
			var elem, display,
				i = 0,
				j = this.length;

			for ( ; i < j; i++ ) {
				elem = this[i];
				if ( elem.style ) {
					display = jQuery.css( elem, "display" );

					if ( display !== "none" && !jQuery._data( elem, "olddisplay" ) ) {
						jQuery._data( elem, "olddisplay", display );
					}
				}
			}

			// Set the display of the elements in a second loop
			// to avoid the constant reflow
			for ( i = 0; i < j; i++ ) {
				if ( this[i].style ) {
					this[i].style.display = "none";
				}
			}

			return this;
		}
	},

	// Save the old toggle function
	_toggle: jQuery.fn.toggle,

	toggle: function( fn, fn2, callback ) {
		var bool = typeof fn === "boolean";

		if ( jQuery.isFunction(fn) && jQuery.isFunction(fn2) ) {
			this._toggle.apply( this, arguments );

		} else if ( fn == null || bool ) {
			this.each(function() {
				var state = bool ? fn : jQuery(this).is(":hidden");
				jQuery(this)[ state ? "show" : "hide" ]();
			});

		} else {
			this.animate(genFx("toggle", 3), fn, fn2, callback);
		}

		return this;
	},

	fadeTo: function( speed, to, easing, callback ) {
		return this.filter(":hidden").css("opacity", 0).show().end()
					.animate({opacity: to}, speed, easing, callback);
	},

	animate: function( prop, speed, easing, callback ) {
		var optall = jQuery.speed( speed, easing, callback );

		if ( jQuery.isEmptyObject( prop ) ) {
			return this.each( optall.complete, [ false ] );
		}

		// Do not change referenced properties as per-property easing will be lost
		prop = jQuery.extend( {}, prop );

		function doAnimation() {
			// XXX 'this' does not always have a nodeName when running the
			// test suite

			if ( optall.queue === false ) {
				jQuery._mark( this );
			}

			var opt = jQuery.extend( {}, optall ),
				isElement = this.nodeType === 1,
				hidden = isElement && jQuery(this).is(":hidden"),
				name, val, p, e,
				parts, start, end, unit,
				method;

			// will store per property easing and be used to determine when an animation is complete
			opt.animatedProperties = {};

			for ( p in prop ) {

				// property name normalization
				name = jQuery.camelCase( p );
				if ( p !== name ) {
					prop[ name ] = prop[ p ];
					delete prop[ p ];
				}

				val = prop[ name ];

				// easing resolution: per property > opt.specialEasing > opt.easing > 'swing' (default)
				if ( jQuery.isArray( val ) ) {
					opt.animatedProperties[ name ] = val[ 1 ];
					val = prop[ name ] = val[ 0 ];
				} else {
					opt.animatedProperties[ name ] = opt.specialEasing && opt.specialEasing[ name ] || opt.easing || 'swing';
				}

				if ( val === "hide" && hidden || val === "show" && !hidden ) {
					return opt.complete.call( this );
				}

				if ( isElement && ( name === "height" || name === "width" ) ) {
					// Make sure that nothing sneaks out
					// Record all 3 overflow attributes because IE does not
					// change the overflow attribute when overflowX and
					// overflowY are set to the same value
					opt.overflow = [ this.style.overflow, this.style.overflowX, this.style.overflowY ];

					// Set display property to inline-block for height/width
					// animations on inline elements that are having width/height animated
					if ( jQuery.css( this, "display" ) === "inline" &&
							jQuery.css( this, "float" ) === "none" ) {

						// inline-level elements accept inline-block;
						// block-level elements need to be inline with layout
						if ( !jQuery.support.inlineBlockNeedsLayout || defaultDisplay( this.nodeName ) === "inline" ) {
							this.style.display = "inline-block";

						} else {
							this.style.zoom = 1;
						}
					}
				}
			}

			if ( opt.overflow != null ) {
				this.style.overflow = "hidden";
			}

			for ( p in prop ) {
				e = new jQuery.fx( this, opt, p );
				val = prop[ p ];

				if ( rfxtypes.test( val ) ) {

					// Tracks whether to show or hide based on private
					// data attached to the element
					method = jQuery._data( this, "toggle" + p ) || ( val === "toggle" ? hidden ? "show" : "hide" : 0 );
					if ( method ) {
						jQuery._data( this, "toggle" + p, method === "show" ? "hide" : "show" );
						e[ method ]();
					} else {
						e[ val ]();
					}

				} else {
					parts = rfxnum.exec( val );
					start = e.cur();

					if ( parts ) {
						end = parseFloat( parts[2] );
						unit = parts[3] || ( jQuery.cssNumber[ p ] ? "" : "px" );

						// We need to compute starting value
						if ( unit !== "px" ) {
							jQuery.style( this, p, (end || 1) + unit);
							start = ( (end || 1) / e.cur() ) * start;
							jQuery.style( this, p, start + unit);
						}

						// If a +=/-= token was provided, we're doing a relative animation
						if ( parts[1] ) {
							end = ( (parts[ 1 ] === "-=" ? -1 : 1) * end ) + start;
						}

						e.custom( start, end, unit );

					} else {
						e.custom( start, val, "" );
					}
				}
			}

			// For JS strict compliance
			return true;
		}

		return optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},

	stop: function( type, clearQueue, gotoEnd ) {
		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var index,
				hadTimers = false,
				timers = jQuery.timers,
				data = jQuery._data( this );

			// clear marker counters if we know they won't be
			if ( !gotoEnd ) {
				jQuery._unmark( true, this );
			}

			function stopQueue( elem, data, index ) {
				var hooks = data[ index ];
				jQuery.removeData( elem, index, true );
				hooks.stop( gotoEnd );
			}

			if ( type == null ) {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && index.indexOf(".run") === index.length - 4 ) {
						stopQueue( this, data, index );
					}
				}
			} else if ( data[ index = type + ".run" ] && data[ index ].stop ){
				stopQueue( this, data, index );
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					if ( gotoEnd ) {

						// force the next step to be the last
						timers[ index ]( true );
					} else {
						timers[ index ].saveState();
					}
					hadTimers = true;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( !( gotoEnd && hadTimers ) ) {
				jQuery.dequeue( this, type );
			}
		});
	}

});

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout( clearFxNow, 0 );
	return ( fxNow = jQuery.now() );
}

function clearFxNow() {
	fxNow = undefined;
}

// Generate parameters to create a standard animation
function genFx( type, num ) {
	var obj = {};

	jQuery.each( fxAttrs.concat.apply([], fxAttrs.slice( 0, num )), function() {
		obj[ this ] = type;
	});

	return obj;
}

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx( "show", 1 ),
	slideUp: genFx( "hide", 1 ),
	slideToggle: genFx( "toggle", 1 ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.extend({
	speed: function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function( noUnmark ) {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			} else if ( noUnmark !== false ) {
				jQuery._unmark( this );
			}
		};

		return opt;
	},

	easing: {
		linear: function( p, n, firstNum, diff ) {
			return firstNum + diff * p;
		},
		swing: function( p, n, firstNum, diff ) {
			return ( ( -Math.cos( p*Math.PI ) / 2 ) + 0.5 ) * diff + firstNum;
		}
	},

	timers: [],

	fx: function( elem, options, prop ) {
		this.options = options;
		this.elem = elem;
		this.prop = prop;

		options.orig = options.orig || {};
	}

});

jQuery.fx.prototype = {
	// Simple function for setting a style value
	update: function() {
		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		( jQuery.fx.step[ this.prop ] || jQuery.fx.step._default )( this );
	},

	// Get the current size
	cur: function() {
		if ( this.elem[ this.prop ] != null && (!this.elem.style || this.elem.style[ this.prop ] == null) ) {
			return this.elem[ this.prop ];
		}

		var parsed,
			r = jQuery.css( this.elem, this.prop );
		// Empty strings, null, undefined and "auto" are converted to 0,
		// complex values such as "rotate(1rad)" are returned as is,
		// simple values such as "10px" are parsed to Float.
		return isNaN( parsed = parseFloat( r ) ) ? !r || r === "auto" ? 0 : r : parsed;
	},

	// Start an animation from one number to another
	custom: function( from, to, unit ) {
		var self = this,
			fx = jQuery.fx;

		this.startTime = fxNow || createFxNow();
		this.end = to;
		this.now = this.start = from;
		this.pos = this.state = 0;
		this.unit = unit || this.unit || ( jQuery.cssNumber[ this.prop ] ? "" : "px" );

		function t( gotoEnd ) {
			return self.step( gotoEnd );
		}

		t.queue = this.options.queue;
		t.elem = this.elem;
		t.saveState = function() {
			if ( self.options.hide && jQuery._data( self.elem, "fxshow" + self.prop ) === undefined ) {
				jQuery._data( self.elem, "fxshow" + self.prop, self.start );
			}
		};

		if ( t() && jQuery.timers.push(t) && !timerId ) {
			timerId = setInterval( fx.tick, fx.interval );
		}
	},

	// Simple 'show' function
	show: function() {
		var dataShow = jQuery._data( this.elem, "fxshow" + this.prop );

		// Remember where we started, so that we can go back to it later
		this.options.orig[ this.prop ] = dataShow || jQuery.style( this.elem, this.prop );
		this.options.show = true;

		// Begin the animation
		// Make sure that we start at a small width/height to avoid any flash of content
		if ( dataShow !== undefined ) {
			// This show is picking up where a previous hide or show left off
			this.custom( this.cur(), dataShow );
		} else {
			this.custom( this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur() );
		}

		// Start by showing the element
		jQuery( this.elem ).show();
	},

	// Simple 'hide' function
	hide: function() {
		// Remember where we started, so that we can go back to it later
		this.options.orig[ this.prop ] = jQuery._data( this.elem, "fxshow" + this.prop ) || jQuery.style( this.elem, this.prop );
		this.options.hide = true;

		// Begin the animation
		this.custom( this.cur(), 0 );
	},

	// Each step of an animation
	step: function( gotoEnd ) {
		var p, n, complete,
			t = fxNow || createFxNow(),
			done = true,
			elem = this.elem,
			options = this.options;

		if ( gotoEnd || t >= options.duration + this.startTime ) {
			this.now = this.end;
			this.pos = this.state = 1;
			this.update();

			options.animatedProperties[ this.prop ] = true;

			for ( p in options.animatedProperties ) {
				if ( options.animatedProperties[ p ] !== true ) {
					done = false;
				}
			}

			if ( done ) {
				// Reset the overflow
				if ( options.overflow != null && !jQuery.support.shrinkWrapBlocks ) {

					jQuery.each( [ "", "X", "Y" ], function( index, value ) {
						elem.style[ "overflow" + value ] = options.overflow[ index ];
					});
				}

				// Hide the element if the "hide" operation was done
				if ( options.hide ) {
					jQuery( elem ).hide();
				}

				// Reset the properties, if the item has been hidden or shown
				if ( options.hide || options.show ) {
					for ( p in options.animatedProperties ) {
						jQuery.style( elem, p, options.orig[ p ] );
						jQuery.removeData( elem, "fxshow" + p, true );
						// Toggle data is no longer needed
						jQuery.removeData( elem, "toggle" + p, true );
					}
				}

				// Execute the complete function
				// in the event that the complete function throws an exception
				// we must ensure it won't be called twice. #5684

				complete = options.complete;
				if ( complete ) {

					options.complete = false;
					complete.call( elem );
				}
			}

			return false;

		} else {
			// classical easing cannot be used with an Infinity duration
			if ( options.duration == Infinity ) {
				this.now = t;
			} else {
				n = t - this.startTime;
				this.state = n / options.duration;

				// Perform the easing function, defaults to swing
				this.pos = jQuery.easing[ options.animatedProperties[this.prop] ]( this.state, n, 0, 1, options.duration );
				this.now = this.start + ( (this.end - this.start) * this.pos );
			}
			// Perform the next step of the animation
			this.update();
		}

		return true;
	}
};

jQuery.extend( jQuery.fx, {
	tick: function() {
		var timer,
			timers = jQuery.timers,
			i = 0;

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
	},

	interval: 13,

	stop: function() {
		clearInterval( timerId );
		timerId = null;
	},

	speeds: {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	},

	step: {
		opacity: function( fx ) {
			jQuery.style( fx.elem, "opacity", fx.now );
		},

		_default: function( fx ) {
			if ( fx.elem.style && fx.elem.style[ fx.prop ] != null ) {
				fx.elem.style[ fx.prop ] = fx.now + fx.unit;
			} else {
				fx.elem[ fx.prop ] = fx.now;
			}
		}
	}
});

// Adds width/height step functions
// Do not set anything below 0
jQuery.each([ "width", "height" ], function( i, prop ) {
	jQuery.fx.step[ prop ] = function( fx ) {
		jQuery.style( fx.elem, prop, Math.max(0, fx.now) + fx.unit );
	};
});

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};
}

// Try to restore the default display value of an element
function defaultDisplay( nodeName ) {

	if ( !elemdisplay[ nodeName ] ) {

		var body = document.body,
			elem = jQuery( "<" + nodeName + ">" ).appendTo( body ),
			display = elem.css( "display" );
		elem.remove();

		// If the simple way fails,
		// get element's real default display by attaching it to a temp iframe
		if ( display === "none" || display === "" ) {
			// No iframe to use yet, so create it
			if ( !iframe ) {
				iframe = document.createElement( "iframe" );
				iframe.frameBorder = iframe.width = iframe.height = 0;
			}

			body.appendChild( iframe );

			// Create a cacheable copy of the iframe document on first call.
			// IE and Opera will allow us to reuse the iframeDoc without re-writing the fake HTML
			// document to it; WebKit & Firefox won't allow reusing the iframe document.
			if ( !iframeDoc || !iframe.createElement ) {
				iframeDoc = ( iframe.contentWindow || iframe.contentDocument ).document;
				iframeDoc.write( ( document.compatMode === "CSS1Compat" ? "<!doctype html>" : "" ) + "<html><body>" );
				iframeDoc.close();
			}

			elem = iframeDoc.createElement( nodeName );

			iframeDoc.body.appendChild( elem );

			display = jQuery.css( elem, "display" );
			body.removeChild( iframe );
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return elemdisplay[ nodeName ];
}




var rtable = /^t(?:able|d|h)$/i,
	rroot = /^(?:body|html)$/i;

if ( "getBoundingClientRect" in document.documentElement ) {
	jQuery.fn.offset = function( options ) {
		var elem = this[0], box;

		if ( options ) {
			return this.each(function( i ) {
				jQuery.offset.setOffset( this, options, i );
			});
		}

		if ( !elem || !elem.ownerDocument ) {
			return null;
		}

		if ( elem === elem.ownerDocument.body ) {
			return jQuery.offset.bodyOffset( elem );
		}

		try {
			box = elem.getBoundingClientRect();
		} catch(e) {}

		var doc = elem.ownerDocument,
			docElem = doc.documentElement;

		// Make sure we're not dealing with a disconnected DOM node
		if ( !box || !jQuery.contains( docElem, elem ) ) {
			return box ? { top: box.top, left: box.left } : { top: 0, left: 0 };
		}

		var body = doc.body,
			win = getWindow(doc),
			clientTop  = docElem.clientTop  || body.clientTop  || 0,
			clientLeft = docElem.clientLeft || body.clientLeft || 0,
			scrollTop  = win.pageYOffset || jQuery.support.boxModel && docElem.scrollTop  || body.scrollTop,
			scrollLeft = win.pageXOffset || jQuery.support.boxModel && docElem.scrollLeft || body.scrollLeft,
			top  = box.top  + scrollTop  - clientTop,
			left = box.left + scrollLeft - clientLeft;

		return { top: top, left: left };
	};

} else {
	jQuery.fn.offset = function( options ) {
		var elem = this[0];

		if ( options ) {
			return this.each(function( i ) {
				jQuery.offset.setOffset( this, options, i );
			});
		}

		if ( !elem || !elem.ownerDocument ) {
			return null;
		}

		if ( elem === elem.ownerDocument.body ) {
			return jQuery.offset.bodyOffset( elem );
		}

		var computedStyle,
			offsetParent = elem.offsetParent,
			prevOffsetParent = elem,
			doc = elem.ownerDocument,
			docElem = doc.documentElement,
			body = doc.body,
			defaultView = doc.defaultView,
			prevComputedStyle = defaultView ? defaultView.getComputedStyle( elem, null ) : elem.currentStyle,
			top = elem.offsetTop,
			left = elem.offsetLeft;

		while ( (elem = elem.parentNode) && elem !== body && elem !== docElem ) {
			if ( jQuery.support.fixedPosition && prevComputedStyle.position === "fixed" ) {
				break;
			}

			computedStyle = defaultView ? defaultView.getComputedStyle(elem, null) : elem.currentStyle;
			top  -= elem.scrollTop;
			left -= elem.scrollLeft;

			if ( elem === offsetParent ) {
				top  += elem.offsetTop;
				left += elem.offsetLeft;

				if ( jQuery.support.doesNotAddBorder && !(jQuery.support.doesAddBorderForTableAndCells && rtable.test(elem.nodeName)) ) {
					top  += parseFloat( computedStyle.borderTopWidth  ) || 0;
					left += parseFloat( computedStyle.borderLeftWidth ) || 0;
				}

				prevOffsetParent = offsetParent;
				offsetParent = elem.offsetParent;
			}

			if ( jQuery.support.subtractsBorderForOverflowNotVisible && computedStyle.overflow !== "visible" ) {
				top  += parseFloat( computedStyle.borderTopWidth  ) || 0;
				left += parseFloat( computedStyle.borderLeftWidth ) || 0;
			}

			prevComputedStyle = computedStyle;
		}

		if ( prevComputedStyle.position === "relative" || prevComputedStyle.position === "static" ) {
			top  += body.offsetTop;
			left += body.offsetLeft;
		}

		if ( jQuery.support.fixedPosition && prevComputedStyle.position === "fixed" ) {
			top  += Math.max( docElem.scrollTop, body.scrollTop );
			left += Math.max( docElem.scrollLeft, body.scrollLeft );
		}

		return { top: top, left: left };
	};
}

jQuery.offset = {

	bodyOffset: function( body ) {
		var top = body.offsetTop,
			left = body.offsetLeft;

		if ( jQuery.support.doesNotIncludeMarginInBodyOffset ) {
			top  += parseFloat( jQuery.css(body, "marginTop") ) || 0;
			left += parseFloat( jQuery.css(body, "marginLeft") ) || 0;
		}

		return { top: top, left: left };
	},

	setOffset: function( elem, options, i ) {
		var position = jQuery.css( elem, "position" );

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		var curElem = jQuery( elem ),
			curOffset = curElem.offset(),
			curCSSTop = jQuery.css( elem, "top" ),
			curCSSLeft = jQuery.css( elem, "left" ),
			calculatePosition = ( position === "absolute" || position === "fixed" ) && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
			props = {}, curPosition = {}, curTop, curLeft;

		// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};


jQuery.fn.extend({

	position: function() {
		if ( !this[0] ) {
			return null;
		}

		var elem = this[0],

		// Get *real* offsetParent
		offsetParent = this.offsetParent(),

		// Get correct offsets
		offset       = this.offset(),
		parentOffset = rroot.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset();

		// Subtract element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		offset.top  -= parseFloat( jQuery.css(elem, "marginTop") ) || 0;
		offset.left -= parseFloat( jQuery.css(elem, "marginLeft") ) || 0;

		// Add offsetParent borders
		parentOffset.top  += parseFloat( jQuery.css(offsetParent[0], "borderTopWidth") ) || 0;
		parentOffset.left += parseFloat( jQuery.css(offsetParent[0], "borderLeftWidth") ) || 0;

		// Subtract the two offsets
		return {
			top:  offset.top  - parentOffset.top,
			left: offset.left - parentOffset.left
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || document.body;
			while ( offsetParent && (!rroot.test(offsetParent.nodeName) && jQuery.css(offsetParent, "position") === "static") ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent;
		});
	}
});


// Create scrollLeft and scrollTop methods
jQuery.each( ["Left", "Top"], function( i, name ) {
	var method = "scroll" + name;

	jQuery.fn[ method ] = function( val ) {
		var elem, win;

		if ( val === undefined ) {
			elem = this[ 0 ];

			if ( !elem ) {
				return null;
			}

			win = getWindow( elem );

			// Return the scroll offset
			return win ? ("pageXOffset" in win) ? win[ i ? "pageYOffset" : "pageXOffset" ] :
				jQuery.support.boxModel && win.document.documentElement[ method ] ||
					win.document.body[ method ] :
				elem[ method ];
		}

		// Set the scroll offset
		return this.each(function() {
			win = getWindow( this );

			if ( win ) {
				win.scrollTo(
					!i ? val : jQuery( win ).scrollLeft(),
					 i ? val : jQuery( win ).scrollTop()
				);

			} else {
				this[ method ] = val;
			}
		});
	};
});

function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}




// Create width, height, innerHeight, innerWidth, outerHeight and outerWidth methods
jQuery.each([ "Height", "Width" ], function( i, name ) {

	var type = name.toLowerCase();

	// innerHeight and innerWidth
	jQuery.fn[ "inner" + name ] = function() {
		var elem = this[0];
		return elem ?
			elem.style ?
			parseFloat( jQuery.css( elem, type, "padding" ) ) :
			this[ type ]() :
			null;
	};

	// outerHeight and outerWidth
	jQuery.fn[ "outer" + name ] = function( margin ) {
		var elem = this[0];
		return elem ?
			elem.style ?
			parseFloat( jQuery.css( elem, type, margin ? "margin" : "border" ) ) :
			this[ type ]() :
			null;
	};

	jQuery.fn[ type ] = function( size ) {
		// Get window width or height
		var elem = this[0];
		if ( !elem ) {
			return size == null ? null : this;
		}

		if ( jQuery.isFunction( size ) ) {
			return this.each(function( i ) {
				var self = jQuery( this );
				self[ type ]( size.call( this, i, self[ type ]() ) );
			});
		}

		if ( jQuery.isWindow( elem ) ) {
			// Everyone else use document.documentElement or document.body depending on Quirks vs Standards mode
			// 3rd condition allows Nokia support, as it supports the docElem prop but not CSS1Compat
			var docElemProp = elem.document.documentElement[ "client" + name ],
				body = elem.document.body;
			return elem.document.compatMode === "CSS1Compat" && docElemProp ||
				body && body[ "client" + name ] || docElemProp;

		// Get document width or height
		} else if ( elem.nodeType === 9 ) {
			// Either scroll[Width/Height] or offset[Width/Height], whichever is greater
			return Math.max(
				elem.documentElement["client" + name],
				elem.body["scroll" + name], elem.documentElement["scroll" + name],
				elem.body["offset" + name], elem.documentElement["offset" + name]
			);

		// Get or set width or height on the element
		} else if ( size === undefined ) {
			var orig = jQuery.css( elem, type ),
				ret = parseFloat( orig );

			return jQuery.isNumeric( ret ) ? ret : orig;

		// Set the width or height on the element (default to pixels if value is unitless)
		} else {
			return this.css( type, typeof size === "string" ? size : size + "px" );
		}
	};

});




// Expose jQuery to the global object
window.jQuery = window.$ = jQuery;

// Expose jQuery as an AMD module, but only for AMD loaders that
// understand the issues with loading multiple versions of jQuery
// in a page that all might call define(). The loader will indicate
// they have special allowances for multiple jQuery versions by
// specifying define.amd.jQuery = true. Register as a named module,
// since jQuery can be concatenated with other files that may use define,
// but not use a proper concatenation script that understands anonymous
// AMD modules. A named AMD is safest and most robust way to register.
// Lowercase jquery is used because AMD module names are derived from
// file names, and jQuery is normally delivered in a lowercase file name.
// Do this after creating the global so that if an AMD module wants to call
// noConflict to hide this version of jQuery, it will work.
if ( typeof define === "function" && define.amd && define.amd.jQuery ) {
	define( "jquery", [], function () { return jQuery; } );
}



})( window );
/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

window.classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

})( window );/*
 *  webui popover plugin  - v1.1.3
 *  A lightWeight popover plugin with jquery ,enchance the  popover plugin of bootstrap with some awesome new features. It works well with bootstrap ,but bootstrap is not necessary!
 *  https://github.com/sandywalker/webui-popover
 *
 *  Made by Sandy Duan
 *  Under MIT License
 */
;(function ( $, window, document, undefined ) {

		// Create the defaults once
		var pluginName = 'webuiPopover';
		var pluginClass = 'webui-popover';
		var pluginType = 'webui.popover';
		var	defaults = {
					placement:'auto',
					width:'auto',
					height:'auto',
					trigger:'click',
					style:'',
					delay: {
                        show: null,
                        hide: null
                    },
                    async: {
                        before: null, //function(that, xhr){}
                        success: null //function(that, xhr){}
                    },
					cache:true,
					multi:false,
					arrow:true,
					title:'',
					content:'',
					closeable:false,
					padding:true,
					url:'',
					type:'html',
					constrains:null,
					animation:null,
					template:'<div class="webui-popover">'+
								'<div class="arrow"></div>'+
								'<div class="webui-popover-inner">'+
									'<a href="#" class="close">x</a>'+
									'<h3 class="webui-popover-title"></h3>'+
									'<div class="webui-popover-content"><i class="icon-refresh"></i> <p>&nbsp;</p></div>'+
								'</div>'+
							'</div>'
		};

		var _globalIdSeed = 0;


		// The actual plugin constructor
		function WebuiPopover ( element, options ) {
				this.$element = $(element);
                if($.type(options.delay) === 'string' || $.type(options.delay) === 'number') {
                    options.delay = {show:options.delay,hide:options.delay}; // bc break fix
                }
				this.options = $.extend( {}, defaults, options );
				this._defaults = defaults;
				this._name = pluginName;
				this._targetclick = false;
				this.init();
		}

		WebuiPopover.prototype = {
				//init webui popover
				init: function () {
					//init the event handlers
					if (this.getTrigger()==='click'){
						this.$element.off('click').on('click',$.proxy(this.toggle,this));
					}else{
						this.$element.off('mouseenter mouseleave click')
										.on('mouseenter',$.proxy(this.mouseenterHandler,this))
										.on('mouseleave',$.proxy(this.mouseleaveHandler,this))
										.on('click',function(e){e.stopPropagation();});
					}
					this._poped = false;
					this._inited = true;
					this._idSeed = _globalIdSeed;
					_globalIdSeed++;
				},
				/* api methods and actions */
				destroy:function(){
					this.hide();
					this.$element.data('plugin_'+pluginName,null);
					if (this.getTrigger()==='click'){
						this.$element.off('click');
					}else{
						this.$element.off('mouseenter mouseleave');
					}
					if (this.$target){
						this.$target.remove();
					}
				},
				hide:function(event){
					if (event){
						event.preventDefault();
						event.stopPropagation();
					}
					if (this.xhr){
						this.xhr.abort();
						this.xhr = null;
					}

					var e = $.Event('hide.' + pluginType);
					this.$element.trigger(e);
					if (this.$target){this.$target.removeClass('in').hide();}
					this.$element.trigger('hidden.'+pluginType);
				},
				toggle:function(e){
					if (e) {
						e.preventDefault();
						e.stopPropagation();
					}
					this[this.getTarget().hasClass('in') ? 'hide' : 'show']();
				},
				hideAll:function(){
					$('div.webui-popover').not('.webui-popover-fixed').removeClass('in').hide();
				},
				/*core method ,show popover */
				show:function(){
					var
						$target = this.getTarget().removeClass().addClass(pluginClass);
					if (!this.options.multi){
						this.hideAll();
					}
					// use cache by default, if not cache setted  , reInit the contents 
					if (!this.getCache()||!this._poped){
						this.content = '';
						this.setTitle(this.getTitle());
						if (!this.options.closeable){
							$target.find('.close').off('click').remove();
						}
						if (!this.isAsync()){
							this.setContent(this.getContent());
						}else{
							this.setContentASync(this.options.content);
							this.displayContent();
							return;
						}
						$target.show();
					}
					this.displayContent();
					this.bindBodyEvents();
				},
				displayContent:function(){
					var
						//element postion
						elementPos = this.getElementPosition(),
						//target postion
						$target = this.getTarget().removeClass().addClass(pluginClass),
						//target content
						$targetContent = this.getContentElement(),
						//target Width
					    targetWidth = $target[0].offsetWidth,
					    //target Height
						targetHeight = $target[0].offsetHeight,
						//placement
						placement = 'bottom',
						e = $.Event('show.' + pluginType);
					//if (this.hasContent()){
					this.$element.trigger(e);
					//}
					if (this.options.width!=='auto') {$target.width(this.options.width);}
					if (this.options.height!=='auto'){$targetContent.height(this.options.height);}

					//init the popover and insert into the document body
					if (!this.options.arrow){
						$target.find('.arrow').remove();
					}
					$target.remove().css({ top: -2000, left: -2000, display: 'block' });
					if (this.getAnimation()){
						$target.addClass(this.getAnimation());
					}
					$target.appendTo(document.body);
					targetWidth = $target[0].offsetWidth;
					targetHeight = $target[0].offsetHeight;
					placement = this.getPlacement(elementPos);
					this.initTargetEvents();
				    var postionInfo = this.getTargetPositin(elementPos,placement,targetWidth,targetHeight);
					this.$target.css(postionInfo.position).addClass(placement).addClass('in');

					if (this.options.type==='iframe'){
						var $iframe = $target.find('iframe');
						$iframe.width($target.width()).height($iframe.parent().height());
					}

					if (this.options.style){
						this.$target.addClass(pluginClass+'-'+this.options.style);
					}

					if (!this.options.padding){
						$targetContent.css('height',$targetContent.outerHeight());
						this.$target.addClass('webui-no-padding');
					}
					if (!this.options.arrow){
						this.$target.css({'margin':0});
					}
					if (this.options.arrow){
						var $arrow = this.$target.find('.arrow');
						$arrow.removeAttr('style');
						if (postionInfo.arrowOffset){
							$arrow.css(postionInfo.arrowOffset);
						}
					}
					this._poped = true;
					this.$element.trigger('shown.'+pluginType);

				},

				isTargetLoaded:function(){
					return  this.getTarget().find('i.glyphicon-refresh').length===0;
				},

				/*getter setters */
				getTriggerElement:function(){
					return this.$element;
				},
				getTarget:function(){
					if (!this.$target){
						var id = pluginName+this._idSeed;
						this.$target = $(this.options.template)
							.attr('id',id)
							.data('trigger-element',this.getTriggerElement());
						this.getTriggerElement().attr('data-target',id);
					}
					return this.$target;
				},
				getTitleElement:function(){
					return this.getTarget().find('.'+pluginClass+'-title');
				},
				getContentElement:function(){
					return this.getTarget().find('.'+pluginClass+'-content');
				},
				getTitle:function(){
					return this.$element.attr('data-title')||this.options.title||this.$element.attr('title');
				},
				getUrl:function(){
					return this.$element.attr('data-url')||this.options.url;
				},
                getCache:function(){
                    var dataAttr = this.$element.attr('data-cache');
                    if (typeof(dataAttr) !== 'undefined') {
                        switch(dataAttr.toLowerCase()){
                            case 'true': case 'yes': case '1': return true;
                            case 'false': case 'no': case '0': return false;
                        }
                    }
					return this.options.cache;
				},
                getTrigger:function(){
                    return this.$element.attr('data-trigger')||this.options.trigger;
                },
                getDelayShow:function(){
                    var dataAttr = this.$element.attr('data-delay-show');
                    if (typeof(dataAttr) !== 'undefined') {
                        return dataAttr;
                    }
					return this.options.delay.show===0?0:this.options.delay.show||100;
				},
                getHideDelay:function(){
                    var dataAttr = this.$element.attr('data-delay-hide');
                    if (typeof(dataAttr) !== 'undefined') {
                        return dataAttr;
                    }
					return this.options.delay.hide===0?0:this.options.delay.hide||100;
				},
				getConstrains:function(){
                    var dataAttr = this.$element.attr('data-contrains');
                    if (typeof(dataAttr) !== 'undefined') {
                        return dataAttr;
                    }
					return this.options.constrains;
				},
				getAnimation:function(){
					var dataAttr = this.$element.attr('data-animation');
					return dataAttr||this.options.animation;
				},
				setTitle:function(title){
					var $titleEl = this.getTitleElement();
					if (title){
						$titleEl.html(title);
					}else{
						$titleEl.remove();
					}
				},
				hasContent:function () {
					return this.getContent();
				},
				getContent:function(){
					if (this.getUrl()){
						if (this.options.type==='iframe'){
							this.content = $('<iframe frameborder="0"></iframe>').attr('src',this.getUrl());
						}
					}else if (!this.content){
						var content='';
						if ($.isFunction(this.options.content)){
							content = this.options.content.apply(this.$element[0],arguments);
						}else{
							content = this.options.content;
						}
						this.content = this.$element.attr('data-content')||content;
					}
					return this.content;
				},
				setContent:function(content){
					var $target = this.getTarget();
					this.getContentElement().html(content);
					this.$target = $target;
				},
				isAsync:function(){
					return this.options.type==='async';
				},
				setContentASync:function(content){
					var that = this;
					this.xhr = $.ajax({
						url:this.getUrl(),
						type:'GET',
						cache:this.getCache(),
                        beforeSend:function(xhr) {
							if (that.options.async.before){
								that.options.async.before(that, xhr);
							}
                        },
						success:function(data){
							that.bindBodyEvents();
							if (content&&$.isFunction(content)){
								that.content = content.apply(that.$element[0],[data]);
							}else{
								that.content = data;
							}
							that.setContent(that.content);
							var $targetContent = that.getContentElement();
							$targetContent.removeAttr('style');
							that.displayContent();
							if (that.options.async.success){
								that.options.async.success(that, data);
							}
							this.xhr = null;
						}
					});
				},

				bindBodyEvents:function(){
					$('body').off('keyup.webui-popover').on('keyup.webui-popover',$.proxy(this.escapeHandler,this));
					$('body').off('click.webui-popover').on('click.webui-popover',$.proxy(this.bodyClickHandler,this));
				},

				/* event handlers */
				mouseenterHandler:function(){
					var self = this;
					if (self._timeout){clearTimeout(self._timeout);}
                    self._enterTimeout = setTimeout(function(){
					    if (!self.getTarget().is(':visible')){self.show();}
                    },this.getDelayShow());
				},
				mouseleaveHandler:function(){
					var self = this;
                    clearTimeout(self._enterTimeout);
					//key point, set the _timeout  then use clearTimeout when mouse leave
					self._timeout = setTimeout(function(){
						self.hide();
					},this.getHideDelay());
				},
				escapeHandler:function(e){
					if (e.keyCode===27){
						this.hideAll();
					}
				},
				bodyClickHandler:function(){
					if (this._targetclick){
						this._targetclick = false;
					}else{
						this.hideAll();
					}
				},

				targetClickHandler:function(){
					this._targetclick = true;
				},

				//reset and init the target events;
				initTargetEvents:function(){
					if (this.getTrigger()!=='click'){
						this.$target.off('mouseenter mouseleave')
									.on('mouseenter',$.proxy(this.mouseenterHandler,this))
									.on('mouseleave',$.proxy(this.mouseleaveHandler,this));
					}
					this.$target.find('.close').off('click').on('click', $.proxy(this.hide,this));
					this.$target.off('click.webui-popover').on('click.webui-popover',$.proxy(this.targetClickHandler,this));
				},
				/* utils methods */
				//caculate placement of the popover
				getPlacement:function(pos){
					var
						placement,
						de = document.documentElement,
						db = document.body,
						clientWidth = de.clientWidth,
						clientHeight = de.clientHeight,
						scrollTop = Math.max(db.scrollTop,de.scrollTop),
						scrollLeft = Math.max(db.scrollLeft,de.scrollLeft),
						pageX = Math.max(0,pos.left - scrollLeft),
						pageY = Math.max(0,pos.top - scrollTop);
						//arrowSize = 20;

					//if placement equals auto，caculate the placement by element information;
					if (typeof(this.options.placement)==='function'){
						placement = this.options.placement.call(this, this.getTarget()[0], this.$element[0]);
					}else{
						placement = this.$element.data('placement')||this.options.placement;
					}


					if (placement==='auto'){
						var constrainsH = this.getConstrains() === 'horizontal',
							constrainsV = this.getConstrains() === 'vertical';
						if (pageX<clientWidth/3){
							if (pageY<clientHeight/3){
								placement = constrainsH?'right-bottom':'bottom-right';
							}else if (pageY<clientHeight*2/3){
								if (constrainsV){
									placement = pageY<=clientHeight/2?'bottom-right':'top-right';
								}else{
									placement = 'right';
								}
							}else{
								placement =constrainsH?'right-top':'top-right';
							}
							//placement= pageY>targetHeight+arrowSize?'top-right':'bottom-right';
						}else if (pageX<clientWidth*2/3){
							if (pageY<clientHeight/3){
								if (constrainsH){
									placement =pageX<=clientWidth/2?'right-bottom':'left-bottom';
								}else{
									placement ='bottom';
								}
							}else if (pageY<clientHeight*2/3){
								if (constrainsH){
									placement = pageX<=clientWidth/2?'right':'left';
								}else{
									placement = pageY<=clientHeight/2?'bottom':'top';
								}
							}else{
								if (constrainsH){
									placement =pageX<=clientWidth/2?'right-top':'left-top';
								}else{
									placement ='top';
								}
							}
						}else{
							//placement = pageY>targetHeight+arrowSize?'top-left':'bottom-left';
							if (pageY<clientHeight/3){
								placement = constrainsH?'left-bottom':'bottom-left';
							}else if (pageY<clientHeight*2/3){
								if (constrainsV){
									placement = pageY<=clientHeight/2?'bottom-left':'top-left';
								}else{
									placement = 'left';
								}
							}else{
								placement = constrainsH?'left-top':'top-left';
							}
						}
					}else if (placement==='auto-top'){
						if (pageX<clientWidth/3){
							placement='top-right';
						}else if (pageX<clientHeight*2/3){
							placement='top';
						}else{
							placement='top-left';
						}
					}else if (placement==='auto-bottom'){
						if (pageX<clientWidth/3){
							placement='bottom-right';
						}else if (pageX<clientHeight*2/3){
							placement='bottom';
						}else{
							placement='bottom-left';
						}
					}else if (placement==='auto-left'){
						if (pageY<clientHeight/3){
							placement='left-top';
						}else if (pageY<clientHeight*2/3){
							placement='left';
						}else{
							placement='left-bottom';
						}
					}else if (placement==='auto-right'){
						if (pageY<clientHeight/3){
							placement='right-top';
						}else if (pageY<clientHeight*2/3){
							placement='right';
						}else{
							placement='right-bottom';
						}
					}
					return placement;
				},
				getElementPosition:function(){
					return $.extend({},this.$element.offset(), {
				        width: this.$element[0].offsetWidth,
				        height: this.$element[0].offsetHeight
				    });
				},

				getTargetPositin:function(elementPos,placement,targetWidth,targetHeight){
					var pos = elementPos,
						elementW = this.$element.outerWidth(),
						elementH = this.$element.outerHeight(),
						position={},
						arrowOffset=null,
						arrowSize = this.options.arrow?20:0,
						fixedW = elementW<arrowSize+10?arrowSize:0,
						fixedH = elementH<arrowSize+10?arrowSize:0;
					switch (placement) {
			          case 'bottom':
			            position = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - targetWidth / 2};
			            break;
			          case 'top':
			            position = {top: pos.top - targetHeight, left: pos.left + pos.width / 2 - targetWidth / 2};
			            break;
			          case 'left':
			            position = {top: pos.top + pos.height / 2 - targetHeight / 2, left: pos.left - targetWidth};
			            break;
			          case 'right':
			            position = {top: pos.top + pos.height / 2 - targetHeight / 2, left: pos.left + pos.width};
			            break;
			          case 'top-right':
			            position = {top: pos.top - targetHeight, left: pos.left-fixedW};
			            arrowOffset = {left: Math.min(elementW,targetWidth)/2 + fixedW};
			            break;
			          case 'top-left':
			            position = {top: pos.top - targetHeight, left: pos.left -targetWidth +pos.width + fixedW};
			            arrowOffset = {left: targetWidth - Math.min(elementW,targetWidth) /2 -fixedW};
			            break;
			          case 'bottom-right':
			            position = {top: pos.top + pos.height, left: pos.left-fixedW};
			            arrowOffset = {left: Math.min(elementW,targetWidth) /2+fixedW};
			            break;
					  case 'bottom-left':
			            position = {top: pos.top + pos.height, left: pos.left -targetWidth +pos.width+fixedW};
			            arrowOffset = {left: targetWidth- Math.min(elementW,targetWidth) /2 - fixedW};
			            break;
					  case 'right-top':
			            position = {top: pos.top -targetHeight + pos.height + fixedH, left: pos.left + pos.width};
			            arrowOffset = {top: targetHeight - Math.min(elementH,targetHeight)/2 -fixedH};
			            break;
			          case 'right-bottom':
			            position = {top: pos.top - fixedH, left: pos.left + pos.width};
			            arrowOffset = {top: Math.min(elementH,targetHeight) /2 +fixedH };
			            break;
			          case 'left-top':
			            position = {top: pos.top -targetHeight + pos.height+fixedH, left: pos.left - targetWidth};
			            arrowOffset = {top: targetHeight - Math.min(elementH,targetHeight)/2 - fixedH};
			            break;
					  case 'left-bottom':
			            position = {top: pos.top -fixedH , left: pos.left -targetWidth};
			            arrowOffset = {top: Math.min(elementH,targetHeight) /2 + fixedH };
			            break;

			        }
			        return {position:position,arrowOffset:arrowOffset};
				}
		};
		$.fn[ pluginName ] = function ( options ) {
				return this.each(function() {
						var webuiPopover = $.data( this, 'plugin_' + pluginName );
						if (!webuiPopover) {
								if (!options){
									webuiPopover = new WebuiPopover( this, null);
								}else if (typeof options ==='string'){
									if (options!=='destroy'){
										webuiPopover = new WebuiPopover( this, null );
										webuiPopover[options]();
									}
								}else if (typeof options ==='object'){
									webuiPopover = new WebuiPopover( this, options );
								}
								$.data( this, 'plugin_' + pluginName, webuiPopover);
						}else{
							if (options==='destroy'){
								webuiPopover.destroy();
							}else if (typeof options ==='string'){
								webuiPopover[options]();
							}
						}
				});
		};

})( jQuery, window, document );


//fgnass.github.com/spin.js#v2.1.0
!function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd?define(b):a.Spinner=b()}(this,function(){"use strict";function a(a,b){var c,d=document.createElement(a||"div");for(c in b)d[c]=b[c];return d}function b(a){for(var b=1,c=arguments.length;c>b;b++)a.appendChild(arguments[b]);return a}function c(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=j.substring(0,j.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return m[e]||(k.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",k.cssRules.length),m[e]=1),e}function d(a,b){var c,d,e=a.style;for(b=b.charAt(0).toUpperCase()+b.slice(1),d=0;d<l.length;d++)if(c=l[d]+b,void 0!==e[c])return c;return void 0!==e[b]?b:void 0}function e(a,b){for(var c in b)a.style[d(a,c)||c]=b[c];return a}function f(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)void 0===a[d]&&(a[d]=c[d])}return a}function g(a,b){return"string"==typeof a?a:a[b%a.length]}function h(a){this.opts=f(a||{},h.defaults,n)}function i(){function c(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}k.addRule(".spin-vml","behavior:url(#default#VML)"),h.prototype.lines=function(a,d){function f(){return e(c("group",{coordsize:k+" "+k,coordorigin:-j+" "+-j}),{width:k,height:k})}function h(a,h,i){b(m,b(e(f(),{rotation:360/d.lines*a+"deg",left:~~h}),b(e(c("roundrect",{arcsize:d.corners}),{width:j,height:d.scale*d.width,left:d.scale*d.radius,top:-d.scale*d.width>>1,filter:i}),c("fill",{color:g(d.color,a),opacity:d.opacity}),c("stroke",{opacity:0}))))}var i,j=d.scale*(d.length+d.width),k=2*d.scale*j,l=-(d.width+d.length)*d.scale*2+"px",m=e(f(),{position:"absolute",top:l,left:l});if(d.shadow)for(i=1;i<=d.lines;i++)h(i,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(i=1;i<=d.lines;i++)h(i);return b(a,m)},h.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}var j,k,l=["webkit","Moz","ms","O"],m={},n={lines:12,length:7,width:5,radius:10,scale:1,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",position:"absolute"};if(h.defaults={},f(h.prototype,{spin:function(b){this.stop();var c=this,d=c.opts,f=c.el=e(a(0,{className:d.className}),{position:d.position,width:0,zIndex:d.zIndex});if(e(f,{left:d.left,top:d.top}),b&&b.insertBefore(f,b.firstChild||null),f.setAttribute("role","progressbar"),c.lines(f,c.opts),!j){var g,h=0,i=(d.lines-1)*(1-d.direction)/2,k=d.fps,l=k/d.speed,m=(1-d.opacity)/(l*d.trail/100),n=l/d.lines;!function o(){h++;for(var a=0;a<d.lines;a++)g=Math.max(1-(h+(d.lines-a)*n)%l*m,d.opacity),c.opacity(f,a*d.direction+i,g,d);c.timeout=c.el&&setTimeout(o,~~(1e3/k))}()}return c},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=void 0),this},lines:function(d,f){function h(b,c){return e(a(),{position:"absolute",width:f.scale*(f.length+f.width)+"px",height:f.scale*f.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/f.lines*k+f.rotate)+"deg) translate("+f.scale*f.radius+"px,0)",borderRadius:(f.corners*f.scale*f.width>>1)+"px"})}for(var i,k=0,l=(f.lines-1)*(1-f.direction)/2;k<f.lines;k++)i=e(a(),{position:"absolute",top:1+~(f.scale*f.width/2)+"px",transform:f.hwaccel?"translate3d(0,0,0)":"",opacity:f.opacity,animation:j&&c(f.opacity,f.trail,l+k*f.direction,f.lines)+" "+1/f.speed+"s linear infinite"}),f.shadow&&b(i,e(h("#000","0 0 4px #000"),{top:"2px"})),b(d,b(i,h(g(f.color,k),"0 0 1px rgba(0,0,0,.1)")));return d},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}}),"undefined"!=typeof document){k=function(){var c=a("style",{type:"text/css"});return b(document.getElementsByTagName("head")[0],c),c.sheet||c.styleSheet}();var o=e(a("group"),{behavior:"url(#default#VML)"});!d(o,"transform")&&o.adj?i():j=d(o,"animation")}return h});/**
 * Copyright (c) 2009 Sergiy Kovalchuk (serg472@gmail.com)
 * 
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *  
 * Following code is based on Element.mask() implementation from ExtJS framework (http://extjs.com/)
 *
 */
(function($){
	
	/**
	 * Displays loading mask over selected element(s). Accepts both single and multiple selectors 	
	 * @param options the options to be used to display the mask
	 * @example $('el').mask({spinner: false, label: 'Some Text'});
	 * @example $('el').mask({spinner: { lines: 10, length: 4, width: 2, radius: 5}, delay: 100, label: 'Loading...'});
	 */
	$.fn.mask = function(options) {
		options = $.extend({
			spinner: { lines: 10, length: 4, width: 2, radius: 5},
			spinnerPadding: 5,
			label: "",
			delay: 0,
			overlayOpacity: 0.75,
			overlaySize: false
		}, options);

		return $(this).each(function() {
			var element = $(this);

			if(options.delay > 0) {
				element.data("_mask_timeout", setTimeout(function() { $.maskElement(element, options)}, options.delay));
			} else {
				$.maskElement(element, options);
			}
		});
	};
	
	/**
	 * Removes mask from the element(s). Accepts both single and multiple selectors.
	 */
	$.fn.unmask = function(){
		return $(this).each(function() {
			$.unmaskElement($(this));
		});
	};
	
	/**
	 * Checks if a single element is masked. Returns false if mask is delayed or not displayed. 
	 */
	$.fn.isMasked = function(){
		return this.hasClass("masked");
	};

	$.maskElement = function(element, options) {
		
		//if this element has delayed mask scheduled then remove it and display the new one
		if (element.data("_mask_timeout") !== undefined) {
			clearTimeout(element.data("_mask_timeout"));
			element.removeData("_mask_timeout");
		}

		if(element.isMasked()) {
			$.unmaskElement(element);
		}
		
		if(element.css("position") == "static") {
			element.addClass("masked-relative");
		}
		
		element.addClass("masked");
		
		var maskDiv = $('<div class="loadmask"></div>').css({opacity: 0 });

		if(options.overlaySize !== false) {
			if(options.overlaySize.height !== undefined)
				maskDiv.height(options.overlaySize.height)

			if(options.overlaySize.width !== undefined)
				maskDiv.width(options.overlaySize.width)
		}
		
		// auto height fix for IE
		if(navigator.userAgent.toLowerCase().indexOf("msie") > -1){
			maskDiv.height(element.height() + parseInt(element.css("padding-top")) + parseInt(element.css("padding-bottom")));
			maskDiv.width(element.width() + parseInt(element.css("padding-left")) + parseInt(element.css("padding-right")));
		}
		
		// fix for z-index bug with selects in IE6
		if(navigator.userAgent.toLowerCase().indexOf("msie 6") > -1){
			element.find("select").addClass("masked-hidden");
		}
		
		element.append(maskDiv);

		if(options.label.length > 0 || options.spinner !== false) {
			var maskMsgDiv = $('<div class="loadmask-msg" style="display:none;"></div>').css({'opacity':0});

			if(options.spinner !== false)
				maskMsgDiv.append(new Spinner(options.spinner).spin().el);

			if(options.label.length > 0) {
				var label = $('<div class="loadmask-label">' + options.label + '</div>')
				maskMsgDiv.append(label)
			}

			element.append(maskMsgDiv);

			// calculate center position
			// TODO there must be cleaner way to do this; check newer jQuery methods and see if anything will fit
			maskMsgDiv.css("top", Math.round(maskDiv.height() / 2 - (maskMsgDiv.height() - parseInt(maskMsgDiv.css("padding-top")) - parseInt(maskMsgDiv.css("padding-bottom"))) / 2)+"px");
			maskMsgDiv.css("left", Math.round(maskDiv.width() / 2 - (maskMsgDiv.width() - parseInt(maskMsgDiv.css("padding-left")) - parseInt(maskMsgDiv.css("padding-right"))) / 2)+"px");
			maskMsgDiv.show();

			if(options.spinner !== false && options.label.length > 0) {
				var spinnerSquare = options.spinner.radius * 2 + (options.spinner.width + options.spinner.length) * 2

				// The center of the spinner is positioned at the top left corner of this DIV
				// center the label text vertically, and align the label to the right of the spinner
				label.css({
					'margin-left': spinnerSquare / 2 + options.spinnerPadding,
					'margin-top': -label.height() / 2
				})
			}

			maskMsgDiv.fadeTo('slow', 1)
		}

		// TODO this should be customizable
		maskDiv.fadeTo('slow', options.overlayOpacity);
	};
	
	$.unmaskElement = function(element){
		//if this element has delayed mask scheduled then remove it
		if (element.data("_mask_timeout") !== undefined) {
			clearTimeout(element.data("_mask_timeout"));
			element.removeData("_mask_timeout");
		}
		
		element.find(".loadmask-msg,.loadmask").remove();
		element.removeClass("masked");
		element.removeClass("masked-relative");
		element.find("select").removeClass("masked-hidden");
	};
 
})(jQuery);
/*! Hammer.JS - v2.0.4 - 2014-09-28
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2014 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(k(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function i(a,b){return h(a,b,!0)}function j(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&h(d,c)}function k(a,b){return function(){return a.apply(b,arguments)}}function l(a,b){return typeof a==kb?a.apply(b?b[0]||d:d,b):a}function m(a,b){return a===d?b:a}function n(a,b,c){g(r(b),function(b){a.addEventListener(b,c,!1)})}function o(a,b,c){g(r(b),function(b){a.removeEventListener(b,c,!1)})}function p(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function q(a,b){return a.indexOf(b)>-1}function r(a){return a.trim().split(/\s+/g)}function s(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function t(a){return Array.prototype.slice.call(a,0)}function u(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];s(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function v(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ib.length;){if(c=ib[g],e=c?c+f:b,e in a)return e;g++}return d}function w(){return ob++}function x(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function y(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){l(a.options.enable,[a])&&c.handler(b)},this.init()}function z(a){var b,c=a.options.inputClass;return new(b=c?c:rb?N:sb?Q:qb?S:M)(a,A)}function A(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&yb&&d-e===0,g=b&(Ab|Bb)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,B(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function B(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=E(b)),e>1&&!c.firstMultiple?c.firstMultiple=E(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=F(d);b.timeStamp=nb(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=J(h,i),b.distance=I(h,i),C(c,b),b.offsetDirection=H(b.deltaX,b.deltaY),b.scale=g?L(g.pointers,d):1,b.rotation=g?K(g.pointers,d):0,D(c,b);var j=a.element;p(b.srcEvent.target,j)&&(j=b.srcEvent.target),b.target=j}function C(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===yb||f.eventType===Ab)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function D(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Bb&&(i>xb||h.velocity===d)){var j=h.deltaX-b.deltaX,k=h.deltaY-b.deltaY,l=G(i,j,k);e=l.x,f=l.y,c=mb(l.x)>mb(l.y)?l.x:l.y,g=H(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function E(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:lb(a.pointers[c].clientX),clientY:lb(a.pointers[c].clientY)},c++;return{timeStamp:nb(),pointers:b,center:F(b),deltaX:a.deltaX,deltaY:a.deltaY}}function F(a){var b=a.length;if(1===b)return{x:lb(a[0].clientX),y:lb(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:lb(c/b),y:lb(d/b)}}function G(a,b,c){return{x:b/a||0,y:c/a||0}}function H(a,b){return a===b?Cb:mb(a)>=mb(b)?a>0?Db:Eb:b>0?Fb:Gb}function I(a,b,c){c||(c=Kb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function J(a,b,c){c||(c=Kb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function K(a,b){return J(b[1],b[0],Lb)-J(a[1],a[0],Lb)}function L(a,b){return I(b[0],b[1],Lb)/I(a[0],a[1],Lb)}function M(){this.evEl=Nb,this.evWin=Ob,this.allow=!0,this.pressed=!1,y.apply(this,arguments)}function N(){this.evEl=Rb,this.evWin=Sb,y.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function O(){this.evTarget=Ub,this.evWin=Vb,this.started=!1,y.apply(this,arguments)}function P(a,b){var c=t(a.touches),d=t(a.changedTouches);return b&(Ab|Bb)&&(c=u(c.concat(d),"identifier",!0)),[c,d]}function Q(){this.evTarget=Xb,this.targetIds={},y.apply(this,arguments)}function R(a,b){var c=t(a.touches),d=this.targetIds;if(b&(yb|zb)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=t(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return p(a.target,i)}),b===yb)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ab|Bb)&&delete d[g[e].identifier],e++;return h.length?[u(f.concat(h),"identifier",!0),h]:void 0}function S(){y.apply(this,arguments);var a=k(this.handler,this);this.touch=new Q(this.manager,a),this.mouse=new M(this.manager,a)}function T(a,b){this.manager=a,this.set(b)}function U(a){if(q(a,bc))return bc;var b=q(a,cc),c=q(a,dc);return b&&c?cc+" "+dc:b||c?b?cc:dc:q(a,ac)?ac:_b}function V(a){this.id=w(),this.manager=null,this.options=i(a||{},this.defaults),this.options.enable=m(this.options.enable,!0),this.state=ec,this.simultaneous={},this.requireFail=[]}function W(a){return a&jc?"cancel":a&hc?"end":a&gc?"move":a&fc?"start":""}function X(a){return a==Gb?"down":a==Fb?"up":a==Db?"left":a==Eb?"right":""}function Y(a,b){var c=b.manager;return c?c.get(a):a}function Z(){V.apply(this,arguments)}function $(){Z.apply(this,arguments),this.pX=null,this.pY=null}function _(){Z.apply(this,arguments)}function ab(){V.apply(this,arguments),this._timer=null,this._input=null}function bb(){Z.apply(this,arguments)}function cb(){Z.apply(this,arguments)}function db(){V.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function eb(a,b){return b=b||{},b.recognizers=m(b.recognizers,eb.defaults.preset),new fb(a,b)}function fb(a,b){b=b||{},this.options=i(b,eb.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=z(this),this.touchAction=new T(this,this.options.touchAction),gb(this,!0),g(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function gb(a,b){var c=a.element;g(a.options.cssProps,function(a,d){c.style[v(c.style,d)]=b?a:""})}function hb(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var ib=["","webkit","moz","MS","ms","o"],jb=b.createElement("div"),kb="function",lb=Math.round,mb=Math.abs,nb=Date.now,ob=1,pb=/mobile|tablet|ip(ad|hone|od)|android/i,qb="ontouchstart"in a,rb=v(a,"PointerEvent")!==d,sb=qb&&pb.test(navigator.userAgent),tb="touch",ub="pen",vb="mouse",wb="kinect",xb=25,yb=1,zb=2,Ab=4,Bb=8,Cb=1,Db=2,Eb=4,Fb=8,Gb=16,Hb=Db|Eb,Ib=Fb|Gb,Jb=Hb|Ib,Kb=["x","y"],Lb=["clientX","clientY"];y.prototype={handler:function(){},init:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(x(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&o(this.element,this.evEl,this.domHandler),this.evTarget&&o(this.target,this.evTarget,this.domHandler),this.evWin&&o(x(this.element),this.evWin,this.domHandler)}};var Mb={mousedown:yb,mousemove:zb,mouseup:Ab},Nb="mousedown",Ob="mousemove mouseup";j(M,y,{handler:function(a){var b=Mb[a.type];b&yb&&0===a.button&&(this.pressed=!0),b&zb&&1!==a.which&&(b=Ab),this.pressed&&this.allow&&(b&Ab&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:vb,srcEvent:a}))}});var Pb={pointerdown:yb,pointermove:zb,pointerup:Ab,pointercancel:Bb,pointerout:Bb},Qb={2:tb,3:ub,4:vb,5:wb},Rb="pointerdown",Sb="pointermove pointerup pointercancel";a.MSPointerEvent&&(Rb="MSPointerDown",Sb="MSPointerMove MSPointerUp MSPointerCancel"),j(N,y,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Pb[d],f=Qb[a.pointerType]||a.pointerType,g=f==tb,h=s(b,a.pointerId,"pointerId");e&yb&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ab|Bb)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Tb={touchstart:yb,touchmove:zb,touchend:Ab,touchcancel:Bb},Ub="touchstart",Vb="touchstart touchmove touchend touchcancel";j(O,y,{handler:function(a){var b=Tb[a.type];if(b===yb&&(this.started=!0),this.started){var c=P.call(this,a,b);b&(Ab|Bb)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:tb,srcEvent:a})}}});var Wb={touchstart:yb,touchmove:zb,touchend:Ab,touchcancel:Bb},Xb="touchstart touchmove touchend touchcancel";j(Q,y,{handler:function(a){var b=Wb[a.type],c=R.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:tb,srcEvent:a})}}),j(S,y,{handler:function(a,b,c){var d=c.pointerType==tb,e=c.pointerType==vb;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Ab|Bb)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Yb=v(jb.style,"touchAction"),Zb=Yb!==d,$b="compute",_b="auto",ac="manipulation",bc="none",cc="pan-x",dc="pan-y";T.prototype={set:function(a){a==$b&&(a=this.compute()),Zb&&(this.manager.element.style[Yb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){l(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),U(a.join(" "))},preventDefaults:function(a){if(!Zb){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=q(d,bc),f=q(d,dc),g=q(d,cc);return e||f&&c&Hb||g&&c&Ib?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var ec=1,fc=2,gc=4,hc=8,ic=hc,jc=16,kc=32;V.prototype={defaults:{},set:function(a){return h(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=Y(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=Y(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=Y(a,this),-1===s(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=Y(a,this);var b=s(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(c.options.event+(b?W(d):""),a)}var c=this,d=this.state;hc>d&&b(!0),b(),d>=hc&&b(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=kc)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(kc|ec)))return!1;a++}return!0},recognize:function(a){var b=h({},a);return l(this.options.enable,[this,b])?(this.state&(ic|jc|kc)&&(this.state=ec),this.state=this.process(b),void(this.state&(fc|gc|hc|jc)&&this.tryEmit(b))):(this.reset(),void(this.state=kc))},process:function(){},getTouchAction:function(){},reset:function(){}},j(Z,V,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(fc|gc),e=this.attrTest(a);return d&&(c&Bb||!e)?b|jc:d||e?c&Ab?b|hc:b&fc?b|gc:fc:kc}}),j($,Z,{defaults:{event:"pan",threshold:10,pointers:1,direction:Jb},getTouchAction:function(){var a=this.options.direction,b=[];return a&Hb&&b.push(dc),a&Ib&&b.push(cc),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Hb?(e=0===f?Cb:0>f?Db:Eb,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Cb:0>g?Fb:Gb,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return Z.prototype.attrTest.call(this,a)&&(this.state&fc||!(this.state&fc)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),j(_,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[bc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&fc)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),j(ab,V,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[_b]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ab|Bb)&&!f)this.reset();else if(a.eventType&yb)this.reset(),this._timer=e(function(){this.state=ic,this.tryEmit()},b.time,this);else if(a.eventType&Ab)return ic;return kc},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===ic&&(a&&a.eventType&Ab?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=nb(),this.manager.emit(this.options.event,this._input)))}}),j(bb,Z,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[bc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&fc)}}),j(cb,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Hb|Ib,pointers:1},getTouchAction:function(){return $.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Hb|Ib)?b=a.velocity:c&Hb?b=a.velocityX:c&Ib&&(b=a.velocityY),this._super.attrTest.call(this,a)&&c&a.direction&&a.distance>this.options.threshold&&mb(b)>this.options.velocity&&a.eventType&Ab},emit:function(a){var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),j(db,V,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[ac]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&yb&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ab)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||I(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=ic,this.tryEmit()},b.interval,this),fc):ic}return kc},failTimeout:function(){return this._timer=e(function(){this.state=kc},this.options.interval,this),kc},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ic&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),eb.VERSION="2.0.4",eb.defaults={domEvents:!1,touchAction:$b,enable:!0,inputTarget:null,inputClass:null,preset:[[bb,{enable:!1}],[_,{enable:!1},["rotate"]],[cb,{direction:Hb}],[$,{direction:Hb},["swipe"]],[db],[db,{event:"doubletap",taps:2},["tap"]],[ab]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var lc=1,mc=2;fb.prototype={set:function(a){return h(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?mc:lc},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&ic)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===mc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(fc|gc|hc)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof V)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(s(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return g(r(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return g(r(a),function(a){b?c[a].splice(s(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&hb(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&gb(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(eb,{INPUT_START:yb,INPUT_MOVE:zb,INPUT_END:Ab,INPUT_CANCEL:Bb,STATE_POSSIBLE:ec,STATE_BEGAN:fc,STATE_CHANGED:gc,STATE_ENDED:hc,STATE_RECOGNIZED:ic,STATE_CANCELLED:jc,STATE_FAILED:kc,DIRECTION_NONE:Cb,DIRECTION_LEFT:Db,DIRECTION_RIGHT:Eb,DIRECTION_UP:Fb,DIRECTION_DOWN:Gb,DIRECTION_HORIZONTAL:Hb,DIRECTION_VERTICAL:Ib,DIRECTION_ALL:Jb,Manager:fb,Input:y,TouchAction:T,TouchInput:Q,MouseInput:M,PointerEventInput:N,TouchMouseInput:S,SingleTouchInput:O,Recognizer:V,AttrRecognizer:Z,Tap:db,Pan:$,Swipe:cb,Pinch:_,Rotate:bb,Press:ab,on:n,off:o,each:g,merge:i,extend:h,inherit:j,bindFn:k,prefixed:v}),typeof define==kb&&define.amd?define(function(){return eb}):"undefined"!=typeof module&&module.exports?module.exports=eb:a[c]=eb}(window,document,"Hammer");var WebPullToRefresh = (function () {
	'use strict';

	/**
	 * Hold all of the default parameters for the module
	 * @type {object}
	 */	
	var defaults = {
		// ID of the element holding pannable content area
		contentEl: 'pullable', 

		// ID of the element holding pull to refresh loading area
		ptrEl: 'ptr', 

		// Number of pixels of panning until refresh 
		distanceToRefresh: 70, 

		// Pointer to function that does the loading and returns a promise
		loadingFunction: false,

		// Dragging resistance level
		resistance: 2.5
	};

	/**
	 * Hold all of the merged parameter and default module options
	 * @type {object}
	 */
	var options = {};

	/**
	 * Pan event parameters
	 * @type {object}
	 */
	var pan = {
		enabled: false,
		distance: 0,
		startingPositionY: 0
	};
	
	/**
	 * Easy shortener for handling adding and removing body classes.
	 */
	var bodyClass = document.body.classList;
	
	/**
	 * Initialize pull to refresh, hammer, and bind pan events.
	 * 
	 * @param {object=} params - Setup parameters for pull to refresh
	 */
	var init = function( params ) {
		params = params || {};
		options = {
			contentEl: params.contentEl || document.getElementById( defaults.contentEl ),
			ptrEl: params.ptrEl || document.getElementById( defaults.ptrEl ),
			distanceToRefresh: params.distanceToRefresh || defaults.distanceToRefresh,
			loadingFunction: params.loadingFunction || defaults.loadingFunction,
			resistance: params.resistance || defaults.resistance
		};

		if ( ! options.contentEl || ! options.ptrEl ) {
			return false;
		}

		var h = new Hammer( options.contentEl );

		h.get( 'pan' ).set( { direction: Hammer.DIRECTION_VERTICAL } );

		h.on( 'panstart', _panStart );
		h.on( 'pandown', _panDown );
		h.on( 'panup', _panUp );
		h.on( 'panend', _panEnd );
	};

	/**
	 * Determine whether pan events should apply based on scroll position on panstart
	 * 
	 * @param {object} e - Event object
	 */
	var _panStart = function(e) {
		pan.startingPositionY = document.body.scrollTop;

		if ( pan.startingPositionY === 0 ) {
			pan.enabled = true;
		}
	};

	/**
	 * Handle element on screen movement when the pandown events is firing.
	 * 
	 * @param {object} e - Event object
	 */
	var _panDown = function(e) {
		if ( ! pan.enabled ) {
			return;
		}

		e.preventDefault();
		pan.distance = e.distance / options.resistance;

		_setContentPan();
		_setBodyClass();
	};

	/**
	 * Handle element on screen movement when the pandown events is firing.
	 * 
	 * @param {object} e - Event object
	 */
	var _panUp = function(e) {
		if ( ! pan.enabled || pan.distance === 0 ) {
			return;
		}

		e.preventDefault();

		if ( pan.distance < e.distance / options.resistance ) {
			pan.distance = 0;
		} else {
			pan.distance = e.distance / options.resistance;
		}

		_setContentPan();
		_setBodyClass();
	};

	/**
	 * Set the CSS transform on the content element to move it on the screen.
	 */
	var _setContentPan = function() {
		// Use transforms to smoothly animate elements on desktop and mobile devices
		options.contentEl.style.transform = options.contentEl.style.webkitTransform = 'translate3d( 0, ' + pan.distance + 'px, 0 )';
		options.ptrEl.style.transform = options.ptrEl.style.webkitTransform = 'translate3d( 0, ' + ( pan.distance - options.ptrEl.offsetHeight ) + 'px, 0 )';
	};

	/**
	 * Set/remove the loading body class to show or hide the loading indicator after pull down.
	 */
	var _setBodyClass = function() {
		if ( pan.distance > options.distanceToRefresh ) {
			bodyClass.add( 'ptr-refresh' );
		} else {
			bodyClass.remove( 'ptr-refresh' );
		}		
	};

	/**
	 * Determine how to animate and position elements when the panend event fires.
	 * 
	 * @param {object} e - Event object
	 */
	var _panEnd = function(e) {
		if ( ! pan.enabled ) {
			return;
		}

		e.preventDefault();

		options.contentEl.style.transform = options.contentEl.style.webkitTransform = '';
		options.ptrEl.style.transform = options.ptrEl.style.webkitTransform = '';

		if ( document.body.classList.contains( 'ptr-refresh' ) ) {
			_doLoading();
		} else {
			_doReset();
		}

		pan.distance = 0;
		pan.enabled = false;
	};

	/**
	 * Position content and refresh elements to show that loading is taking place.
	 */
	var _doLoading = function() {
		bodyClass.add( 'ptr-loading' );

		// If no valid loading function exists, just reset elements
		if ( ! options.loadingFunction ) {
			return _doReset();
		}

		// The loading function should return a promise
		var loadingPromise = options.loadingFunction();

		// For UX continuity, make sure we show loading for at least one second before resetting
		setTimeout( function() {
			// Once actual loading is complete, reset pull to refresh
			loadingPromise.then( _doReset );
		}, 1000 );
	};

	/**
	 * Reset all elements to their starting positions before any paning took place.
	 */
	var _doReset = function() {
		bodyClass.remove( 'ptr-loading' );
		bodyClass.remove( 'ptr-refresh' );
		bodyClass.add( 'ptr-reset' );

		var bodyClassRemove = function() {
			bodyClass.remove( 'ptr-reset' );
			document.body.removeEventListener( 'transitionend', bodyClassRemove, false );
		};

		document.body.addEventListener( 'transitionend', bodyClassRemove, false );
	};

	return {
		init: init
	}

})(); // ----------------------------------------------------------------------------
 // Buzz, a Javascript HTML5 Audio library
 // v1.1.10 - Built 2015-04-20 13:05
 // Licensed under the MIT license.
 // http://buzz.jaysalvat.com/
 // ----------------------------------------------------------------------------
 // Copyright (C) 2010-2015 Jay Salvat
 // http://jaysalvat.com/
 // ----------------------------------------------------------------------------

(function(t,e){"use strict";"undefined"!=typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd?define([],e):t.buzz=e()})(this,function(){"use strict";var t=window.AudioContext||window.webkitAudioContext,e={defaults:{autoplay:!1,duration:5e3,formats:[],loop:!1,placeholder:"--",preload:"metadata",volume:80,webAudioApi:!1,document:window.document},types:{mp3:"audio/mpeg",ogg:"audio/ogg",wav:"audio/wav",aac:"audio/aac",m4a:"audio/x-m4a"},sounds:[],el:document.createElement("audio"),getAudioContext:function(){if(void 0===this.audioCtx)try{this.audioCtx=t?new t:null}catch(e){this.audioCtx=null}return this.audioCtx},sound:function(t,n){function i(t){for(var e=[],n=t.length-1,i=0;n>=i;i++)e.push({start:t.start(i),end:t.end(i)});return e}function u(t){return t.split(".").pop()}n=n||{};var s=n.document||e.defaults.document,r=0,o=[],a={},h=e.isSupported();if(this.load=function(){return h?(this.sound.load(),this):this},this.play=function(){return h?(this.sound.play(),this):this},this.togglePlay=function(){return h?(this.sound.paused?this.sound.play():this.sound.pause(),this):this},this.pause=function(){return h?(this.sound.pause(),this):this},this.isPaused=function(){return h?this.sound.paused:null},this.stop=function(){return h?(this.setTime(0),this.sound.pause(),this):this},this.isEnded=function(){return h?this.sound.ended:null},this.loop=function(){return h?(this.sound.loop="loop",this.bind("ended.buzzloop",function(){this.currentTime=0,this.play()}),this):this},this.unloop=function(){return h?(this.sound.removeAttribute("loop"),this.unbind("ended.buzzloop"),this):this},this.mute=function(){return h?(this.sound.muted=!0,this):this},this.unmute=function(){return h?(this.sound.muted=!1,this):this},this.toggleMute=function(){return h?(this.sound.muted=!this.sound.muted,this):this},this.isMuted=function(){return h?this.sound.muted:null},this.setVolume=function(t){return h?(0>t&&(t=0),t>100&&(t=100),this.volume=t,this.sound.volume=t/100,this):this},this.getVolume=function(){return h?this.volume:this},this.increaseVolume=function(t){return this.setVolume(this.volume+(t||1))},this.decreaseVolume=function(t){return this.setVolume(this.volume-(t||1))},this.setTime=function(t){if(!h)return this;var e=!0;return this.whenReady(function(){e===!0&&(e=!1,this.sound.currentTime=t)}),this},this.getTime=function(){if(!h)return null;var t=Math.round(100*this.sound.currentTime)/100;return isNaN(t)?e.defaults.placeholder:t},this.setPercent=function(t){return h?this.setTime(e.fromPercent(t,this.sound.duration)):this},this.getPercent=function(){if(!h)return null;var t=Math.round(e.toPercent(this.sound.currentTime,this.sound.duration));return isNaN(t)?e.defaults.placeholder:t},this.setSpeed=function(t){return h?(this.sound.playbackRate=t,this):this},this.getSpeed=function(){return h?this.sound.playbackRate:null},this.getDuration=function(){if(!h)return null;var t=Math.round(100*this.sound.duration)/100;return isNaN(t)?e.defaults.placeholder:t},this.getPlayed=function(){return h?i(this.sound.played):null},this.getBuffered=function(){return h?i(this.sound.buffered):null},this.getSeekable=function(){return h?i(this.sound.seekable):null},this.getErrorCode=function(){return h&&this.sound.error?this.sound.error.code:0},this.getErrorMessage=function(){if(!h)return null;switch(this.getErrorCode()){case 1:return"MEDIA_ERR_ABORTED";case 2:return"MEDIA_ERR_NETWORK";case 3:return"MEDIA_ERR_DECODE";case 4:return"MEDIA_ERR_SRC_NOT_SUPPORTED";default:return null}},this.getStateCode=function(){return h?this.sound.readyState:null},this.getStateMessage=function(){if(!h)return null;switch(this.getStateCode()){case 0:return"HAVE_NOTHING";case 1:return"HAVE_METADATA";case 2:return"HAVE_CURRENT_DATA";case 3:return"HAVE_FUTURE_DATA";case 4:return"HAVE_ENOUGH_DATA";default:return null}},this.getNetworkStateCode=function(){return h?this.sound.networkState:null},this.getNetworkStateMessage=function(){if(!h)return null;switch(this.getNetworkStateCode()){case 0:return"NETWORK_EMPTY";case 1:return"NETWORK_IDLE";case 2:return"NETWORK_LOADING";case 3:return"NETWORK_NO_SOURCE";default:return null}},this.set=function(t,e){return h?(this.sound[t]=e,this):this},this.get=function(t){return h?t?this.sound[t]:this.sound:null},this.bind=function(t,e){if(!h)return this;t=t.split(" ");for(var n=this,i=function(t){e.call(n,t)},u=0;t.length>u;u++){var s=t[u],r=s;s=r.split(".")[0],o.push({idx:r,func:i}),this.sound.addEventListener(s,i,!0)}return this},this.unbind=function(t){if(!h)return this;t=t.split(" ");for(var e=0;t.length>e;e++)for(var n=t[e],i=n.split(".")[0],u=0;o.length>u;u++){var s=o[u].idx.split(".");(o[u].idx===n||s[1]&&s[1]===n.replace(".",""))&&(this.sound.removeEventListener(i,o[u].func,!0),o.splice(u,1))}return this},this.bindOnce=function(t,e){if(!h)return this;var n=this;return a[r++]=!1,this.bind(t+"."+r,function(){a[r]||(a[r]=!0,e.call(n)),n.unbind(t+"."+r)}),this},this.trigger=function(t,e){if(!h)return this;t=t.split(" ");for(var n=0;t.length>n;n++)for(var i=t[n],u=0;o.length>u;u++){var r=o[u].idx.split(".");if(o[u].idx===i||r[0]&&r[0]===i.replace(".","")){var a=s.createEvent("HTMLEvents");a.initEvent(r[0],!1,!0),a.originalEvent=e,this.sound.dispatchEvent(a)}}return this},this.fadeTo=function(t,n,i){function u(){setTimeout(function(){t>s&&t>o.volume?(o.setVolume(o.volume+=1),u()):s>t&&o.volume>t?(o.setVolume(o.volume-=1),u()):i instanceof Function&&i.apply(o)},r)}if(!h)return this;n instanceof Function?(i=n,n=e.defaults.duration):n=n||e.defaults.duration;var s=this.volume,r=n/Math.abs(s-t),o=this;return this.play(),this.whenReady(function(){u()}),this},this.fadeIn=function(t,e){return h?this.setVolume(0).fadeTo(100,t,e):this},this.fadeOut=function(t,e){return h?this.fadeTo(0,t,e):this},this.fadeWith=function(t,e){return h?(this.fadeOut(e,function(){this.stop()}),t.play().fadeIn(e),this):this},this.whenReady=function(t){if(!h)return null;var e=this;0===this.sound.readyState?this.bind("canplay.buzzwhenready",function(){t.call(e)}):t.call(e)},this.addSource=function(t){var n=this,i=s.createElement("source");return i.src=t,e.types[u(t)]&&(i.type=e.types[u(t)]),this.sound.appendChild(i),i.addEventListener("error",function(t){n.trigger("sourceerror",t)}),i},h&&t){for(var d in e.defaults)e.defaults.hasOwnProperty(d)&&void 0===n[d]&&(n[d]=e.defaults[d]);if(this.sound=s.createElement("audio"),n.webAudioApi){var l=e.getAudioContext();l&&(this.source=l.createMediaElementSource(this.sound),this.source.connect(l.destination))}if(t instanceof Array)for(var c in t)t.hasOwnProperty(c)&&this.addSource(t[c]);else if(n.formats.length)for(var f in n.formats)n.formats.hasOwnProperty(f)&&this.addSource(t+"."+n.formats[f]);else this.addSource(t);n.loop&&this.loop(),n.autoplay&&(this.sound.autoplay="autoplay"),this.sound.preload=n.preload===!0?"auto":n.preload===!1?"none":n.preload,this.setVolume(n.volume),e.sounds.push(this)}},group:function(t){function e(){for(var e=n(null,arguments),i=e.shift(),u=0;t.length>u;u++)t[u][i].apply(t[u],e)}function n(t,e){return t instanceof Array?t:Array.prototype.slice.call(e)}t=n(t,arguments),this.getSounds=function(){return t},this.add=function(e){e=n(e,arguments);for(var i=0;e.length>i;i++)t.push(e[i])},this.remove=function(e){e=n(e,arguments);for(var i=0;e.length>i;i++)for(var u=0;t.length>u;u++)if(t[u]===e[i]){t.splice(u,1);break}},this.load=function(){return e("load"),this},this.play=function(){return e("play"),this},this.togglePlay=function(){return e("togglePlay"),this},this.pause=function(t){return e("pause",t),this},this.stop=function(){return e("stop"),this},this.mute=function(){return e("mute"),this},this.unmute=function(){return e("unmute"),this},this.toggleMute=function(){return e("toggleMute"),this},this.setVolume=function(t){return e("setVolume",t),this},this.increaseVolume=function(t){return e("increaseVolume",t),this},this.decreaseVolume=function(t){return e("decreaseVolume",t),this},this.loop=function(){return e("loop"),this},this.unloop=function(){return e("unloop"),this},this.setSpeed=function(t){return e("setSpeed",t),this},this.setTime=function(t){return e("setTime",t),this},this.set=function(t,n){return e("set",t,n),this},this.bind=function(t,n){return e("bind",t,n),this},this.unbind=function(t){return e("unbind",t),this},this.bindOnce=function(t,n){return e("bindOnce",t,n),this},this.trigger=function(t){return e("trigger",t),this},this.fade=function(t,n,i,u){return e("fade",t,n,i,u),this},this.fadeIn=function(t,n){return e("fadeIn",t,n),this},this.fadeOut=function(t,n){return e("fadeOut",t,n),this}},all:function(){return new e.group(e.sounds)},isSupported:function(){return!!e.el.canPlayType},isOGGSupported:function(){return!!e.el.canPlayType&&e.el.canPlayType('audio/ogg; codecs="vorbis"')},isWAVSupported:function(){return!!e.el.canPlayType&&e.el.canPlayType('audio/wav; codecs="1"')},isMP3Supported:function(){return!!e.el.canPlayType&&e.el.canPlayType("audio/mpeg;")},isAACSupported:function(){return!!e.el.canPlayType&&(e.el.canPlayType("audio/x-m4a;")||e.el.canPlayType("audio/aac;"))},toTimer:function(t,e){var n,i,u;return n=Math.floor(t/3600),n=isNaN(n)?"--":n>=10?n:"0"+n,i=e?Math.floor(t/60%60):Math.floor(t/60),i=isNaN(i)?"--":i>=10?i:"0"+i,u=Math.floor(t%60),u=isNaN(u)?"--":u>=10?u:"0"+u,e?n+":"+i+":"+u:i+":"+u},fromTimer:function(t){var e=(""+t).split(":");return e&&3===e.length&&(t=3600*parseInt(e[0],10)+60*parseInt(e[1],10)+parseInt(e[2],10)),e&&2===e.length&&(t=60*parseInt(e[0],10)+parseInt(e[1],10)),t},toPercent:function(t,e,n){var i=Math.pow(10,n||0);return Math.round(100*t/e*i)/i},fromPercent:function(t,e,n){var i=Math.pow(10,n||0);return Math.round(e/100*t*i)/i}};return e});/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssanimations-shiv-cssclasses-prefixed-testprop-testallprops-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.cssanimations=function(){return D("animationName")};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,e.prefixed=function(a,b,c){return b?D(a,b,c):D(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};/**
 * notificationFx.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
;( function( window ) {
	
	'use strict';

	var docElem = window.document.documentElement,
		support = { animations : Modernizr.cssanimations },
		animEndEventNames = {
			'WebkitAnimation' : 'webkitAnimationEnd',
			'OAnimation' : 'oAnimationEnd',
			'msAnimation' : 'MSAnimationEnd',
			'animation' : 'animationend'
		},
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];
	
	/**
	 * extend obj function
	 */
	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	/**
	 * NotificationFx function
	 */
	function NotificationFx( options ) {	
		this.options = extend( {}, this.options );
		extend( this.options, options );
		this._init();
	}

	/**
	 * NotificationFx options
	 */
	NotificationFx.prototype.options = {
		// element to which the notification will be appended
		// defaults to the document.body
		wrapper : document.getElementById('notifier'),
		// the message
		message : 'yo!',
		// layout type: growl|attached|bar|other
		layout : 'growl',
		// effects for the specified layout:
		// for growl layout: scale|slide|genie|jelly
		// for attached layout: flip|bouncyflip
		// for other layout: boxspinner|cornerexpand|loadingcircle|thumbslider
		// ...
		effect : 'slide',
		// notice, warning, error, success
		// will add class ns-type-warning, ns-type-error or ns-type-success
		type : 'error',
		// if the user doesn´t close the notification then we remove it 
		// after the following time
		ttl : 60000,
		// callbacks
		onClose : function() { return false; },
		onOpen : function() { return false; }
	}

	/**
	 * init function
	 * initialize and cache some vars
	 */
	NotificationFx.prototype._init = function() {
		// create HTML structure
		this.ntf = document.createElement( 'div' );
		this.ntf.className = 'ns-box ns-' + this.options.layout + ' ns-effect-' + this.options.effect + ' ns-type-' + this.options.type;
		var strinner = '<div class="ns-box-inner">';
		strinner += this.options.message;
		strinner += '</div>';
		strinner += '<span class="ns-close"></span></div>';
		this.ntf.innerHTML = strinner;

		// append to body or the element specified in options.wrapper
		this.options.wrapper.insertBefore( this.ntf, this.options.wrapper.firstChild );

		// dismiss after [options.ttl]ms
		var self = this;
		this.dismissttl = setTimeout( function() {
			if( self.active ) {
				self.dismiss();
			}
		}, this.options.ttl );

		// init events
		this._initEvents();
	}

	/**
	 * init events
	 */
	NotificationFx.prototype._initEvents = function() {
		var self = this;
		// dismiss notification
		this.ntf.querySelector( '.ns-close' ).addEventListener( 'click', function() { self.dismiss(); } );
	}

	/**
	 * show the notification
	 */
	NotificationFx.prototype.show = function() {
		this.active = true;
		classie.remove( this.ntf, 'ns-hide' );
		classie.add( this.ntf, 'ns-show' );
		this.options.onOpen();
	}

	/**
	 * dismiss the notification
	 */
	NotificationFx.prototype.dismiss = function() {
		var self = this;
		this.active = false;
		clearTimeout( this.dismissttl );
		classie.remove( this.ntf, 'ns-show' );
		setTimeout( function() {
			classie.add( self.ntf, 'ns-hide' );
			
			// callback
			self.options.onClose();
		}, 25 );

		// after animation ends remove ntf from the DOM
		var onEndAnimationFn = function( ev ) {
			if( support.animations ) {
				if( ev.target !== self.ntf ) return false;
				this.removeEventListener( animEndEventName, onEndAnimationFn );
			}
			self.options.wrapper.removeChild( this );
		};

		if( support.animations ) {
			this.ntf.addEventListener( animEndEventName, onEndAnimationFn );
		}
		else {
			onEndAnimationFn();
		}
	}

	/**
	 * add to global namespace
	 */
	window.NotificationFx = NotificationFx;

} )( window );