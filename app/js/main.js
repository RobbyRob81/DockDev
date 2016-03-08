// MAIN ACTIONS FOR THE APP////////////////////////////////////
// NOTE : We are using jQuery for the MVP.  Once we understand how electron works we can convert this to React
// /////////////////////////////////////////////
//requir in electron middleware
const remote = require('remote');

//send calls between processes.
const ipcRenderer = require('electron').ipcRenderer;

console.log('main.js');

// console.log(ipcRenderer.sendSync('show-prefs', 'hello-world'));

//instanciate a menu model
var Menu = remote.require('menu');

// DESKTOP MENU////////////////////////////////////
// NOTE : This creates an instance of the Menu object.  This is the users menu that is accessible in the computers DOM.
// /////////////////////////////////////////////
var menu = Menu.buildFromTemplate([{
  label: 'Electron',
  submenu :[
    {
      label : 'Prefs',
      click  :  function(){
          ipcRenderer.send('show-prefs');
      }
    }
  ]
},
{
  label: 'Settings',
  submenu : [
    {
      label : 'Label #1',
      click  : function(){
        console.log('clicked');
      }
    }
  ]
}
]);

Menu.setApplicationMenu(menu);



$(function(){
  $('#settings').on('click', function(){
    console.log('sidebar settings clicked');
  });

});
