const { ipcMain } = require('electron');
const { autoUpdater } = require('electron-updater');

function registerIpcHandlers(mainWindow) {
    ipcMain.on('start-update-check', () => {
        autoUpdater.checkForUpdates();
    });

    ipcMain.on('start-download', () => {
        autoUpdater.downloadUpdate();
    });

    ipcMain.on('quit-and-install', () => {
        autoUpdater.quitAndInstall(false, true);
    });
}

module.exports = { registerIpcHandlers };