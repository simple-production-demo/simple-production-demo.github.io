
var script = document.createElement('script');
script.onload = function() {
  var link = document.createElement('link');
  link.rel="import";
  link.href = "https://simple-production-demo.github.io/banners/ipad-banner.html";
  document.getElementsByTagName('head')[0].appendChild(link);
  document.getElementsByClassName(bannerTgt)[0].innerHTML="<ipad-banner entry-id=134964></ipad-banner>";
};
script.src = "https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.0.1/webcomponents-lite.js";
document.getElementsByTagName('head')[0].appendChild(script);
