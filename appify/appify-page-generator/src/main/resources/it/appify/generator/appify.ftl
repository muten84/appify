<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>${title}</title>

<!-- Sets initial viewport load and disables zooming  -->
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui">

<!-- Makes your prototype chrome-less once bookmarked to your phone's home screen -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">


<link href="${gwtModule}/ratchet/css/ratchet.css" rel="stylesheet">
<link href="${gwtModule}/snapjs/snap.css" rel="stylesheet">
<link href="${gwtModule}/css/font-awesome.min.css" rel="stylesheet">
<!-- for docs http://fortawesome.github.io/Font-Awesome/${gwtModule}s/ -->
<link href="${gwtModule}/appjs/app.min.css" rel="stylesheet">
<#if css??>
   <#include "${css}.html" parse=false>
</#if>

</head>
<body>
	<script type="text/javascript" language="javascript"
		src="${gwtModule}/${gwtModule}.nocache.js"></script>
	<iframe src="javascript:''" id="__gwt_historyFrame" tabIndex='-1'
		style="position: absolute; width: 0; height: 0; border: 0"></iframe>

	<!-- PUT HERE YOUR HTML VIEWS -->
	<#list pages as page>
	<#include "${page.name}.html" parse=false>
	</#list>

	<script src="${gwtModule}/appjs/zepto.js"></script>
	<script src="${gwtModule}/appjs/app.min.js"></script>
	<script src="${gwtModule}/vuejs/vue.js"></script>
	<!-- Include the compiled Ratchet JS -->
	<script src="${gwtModule}/ratchet/js/ratchet.js"></script>
	<script src="${gwtModule}/snapjs/snap.js"></script>
	<#if js??>
   		<#include "${js}.html" parse=false>
	</#if>
	
</body>
</html>