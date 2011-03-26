// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//
// create base UI tab and root window
//
var web_win = Titanium.UI.createWindow({
    fullscreen: true,
    backgroundColor:'#fff',
    url: 'web.js'
});
web_win.hideNavBar();

var tab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:web_win
});

//
//  add tabs
//
web_win.hideTabBar();
tabGroup.addTab(tab);  

// open tab group
tabGroup.open();
