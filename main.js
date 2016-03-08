'use strict';
// PROCESSES////////////////////////////////////
// NOTE : Electron has two processes, Main and Renderer.
//
// Main Process: Is the app process.
// Renderer Process: is anything rendered in the view. Anything that is brought in view through script tags and so forth.
// /////////////////////////////////////////////


const electron = require('electron');
const ipcMain = require('electron').ipcMain;
// Module to control application life.
const app  = electron.app;
const Menu = electron.Menu;
const Tray = electron.Tray;


// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
// var appIcon = null;




function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 750,
    height: 550,
    // titleBarStyle: 'hidden',
    skipTaskbar:true,
    title: 'DockDev'
  });


  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/app/index.html');

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  const prefsWindow = new BrowserWindow({
    width: 700,
    height: 500,
    show: false
  });

  // prefsWindow.loadURL('file://' + __dirname + '/app/new.html');

  ipcMain.on('show-prefs', function(event, arg){
    // console.log(event);
    prefsWindow.show();
  });

}//end of window build function

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', createWindow);


// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
