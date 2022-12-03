const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
function createWindow() {
    const startUrl = process.env.ELECTRON_START_URL || new URL("./index.html", __dirname)
    const win = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadURL(startUrl);
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    });
}
app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    });
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});
