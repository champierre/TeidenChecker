var win = Titanium.UI.currentWindow;

var web = Ti.UI.createWebView();
var home_url = "http://teiden.dumdee.com/";
web.url = home_url;

var backButton = Ti.UI.createButton({
  title: "戻る"
});

backButton.addEventListener('click', function(){
  web.url = home_url;
  win.hideNavBar();
});

web.addEventListener('load', function(e){
  if (e.url != "http://teiden.dumdee.com/") {
    win.showNavBar();
    win.title = "";
    win.setLeftNavButton(backButton);
    
    // web.stopLoading();
    // web.goBack();
    // var openURL = function() {Ti.Platform.openURL(e.url);};
    // setTimeout(openURL, 1000);
  }
});

win.add(web);