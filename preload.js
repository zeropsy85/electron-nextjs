const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld(
    'electron',
    {
        getOs : () => ipcRenderer.send('get-os-info'),
        print : () => ipcRenderer.send('print-direct'),
        on : (channel, func) => {ipcRenderer.on(channel, func)},
    }
);