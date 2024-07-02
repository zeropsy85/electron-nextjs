const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld(
    'electron',
    {
        getOs : () => ipcRenderer.send('get-os-info'),
        print : () => ipcRenderer.send('print-direct'),
        on : (channel, func) => {ipcRenderer.on(channel, func)},
    }
);

ipcRenderer.on('print-completed', () => {
    alert('프린트 출력이 완료 되었습니다.');
});

ipcRenderer.on('print-failed', () => {
    alert('프린트 출력이 취소 되었습니다.');
});