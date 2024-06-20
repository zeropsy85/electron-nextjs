import { app, BrowserWindow, Notification } from 'electron';
import serve from 'electron-serve';

const loadURL = serve({directory: 'build'});

let mainWindow;

(async () => {
	await app.whenReady();

	mainWindow = new BrowserWindow({
		width: 1400, 
		height: 800,
		autoHideMenuBar: true,
	});
	
    // mainWindow.webContents.openDevTools();
	// mainWindow.setMenu(null);
	// mainWindow.kiosk = true;

	const myNotification = new Notification({
        title: 'Hello!',
		body: 'This is an example notification.'
    })
	
	myNotification.show();

    await loadURL(mainWindow);
})();