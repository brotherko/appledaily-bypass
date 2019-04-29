var code = `setInterval(function(){ OMOSubscFlag = false })`;
var script = document.createElement('script');
script.textContent = code;
(document.head||document.documentElement).appendChild(script);