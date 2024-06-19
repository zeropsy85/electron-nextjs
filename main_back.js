const { app, BrowserWindow, ipcMain, Notification } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    autoHideMenuBar: true,
  });

  const startUrl = url.format({
      pathname: path.join(__dirname, './build/index.html'),
      protocol: 'file:',
      slashes: true
  });

  // mainWindow.setMenu(null);
  mainWindow.loadURL(startUrl); 
  mainWindow.webContents.openDevTools();
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

ipcMain.on('print-setting', () => {
  mainWindow.webContents.print();
});

ipcMain.on('print-direct', () => {
  mainWindow.webContents.print({ silent: true });
});

  
ipcMain.on('print-getprintersasync', async() => {
  const printers = await mainWindow.webContents.getPrintersAsync();
  console.log(printers[0]); 
  mainWindow.webContents.print({
    silent: false,
    deviceName: printers[0].name,
  }, (success, error) => {
    if(success){
      console.log('printed');
    }else{
      console.log('failed');
    }
  })
})