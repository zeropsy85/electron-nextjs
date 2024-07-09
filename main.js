import { app, BrowserWindow, Notification , ipcMain } from 'electron';
import serve from 'electron-serve';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const loadURL = serve({directory: 'build'});
let mainWindow;

(async () => {
	await app.whenReady();

	mainWindow = new BrowserWindow({
		width: 1400, 
		height: 800,
		autoHideMenuBar: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
	});
	
    // mainWindow.webContents.openDevTools();
	// mainWindow.setMenu(null);
	mainWindow.kiosk = true;

	const myNotification = new Notification({
        title: 'Hello!',
		body: 'This is an example notification.'
    })
	
	myNotification.show();

    await loadURL(mainWindow);
})();

ipcMain.on('print-direct', () => {
    mainWindow.webContents.print({ silent: true }, (success) => {
        if (success) {
            mainWindow.webContents.send('print-completed');
        } else {
            mainWindow.webContents.send('print-failed');
        }
    });
});

ipcMain.on('get-os-info', () => {
    const osInfo = {
        platform: os.platform(),
        arch: os.arch(),
        release: os.release(),
        version: os.version(),
        hostname: os.hostname(),
    };

    mainWindow.webContents.send('os-info', osInfo);
});