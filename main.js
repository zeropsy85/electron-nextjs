import {app, BrowserWindow} from 'electron';
import serve from 'electron-serve';

const loadURL = serve({directory: 'build'});

let mainWindow;

(async () => {
	await app.whenReady();

	mainWindow = new BrowserWindow({width: 1200, height: 800});

	await loadURL(mainWindow);
	await loadURL(mainWindow, {id: 4, foo: 'bar'});
	await mainWindow.loadURL('app://-');

    mainWindow.webContents.openDevTools();
})();