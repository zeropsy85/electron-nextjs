const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 800,
    autoHideMenuBar: true,
  });

  const startUrl = url.format({
      pathname: path.join(__dirname, './build/index.html'),
      protocol: 'file:',
      slashes: true
  });

  // mainWindow.setMenu(null);
  mainWindow.loadURL(startUrl); 
//   mainWindow.webContents.openDevTools();
//   mainWindow.kiosk = true;
};

app.whenReady().then(() => {
  createWindow();

  const myNotification = new Notification({
    title: 'Hello!',
    body: 'This is an example notification.'
  })

  myNotification.show();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
