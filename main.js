const { app, BrowserWindow } = require('electron');

// Desactivamos aceleración por hardware para fluidez en laptops viejitas
app.disableHardwareAcceleration();

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        title: "Pixel ScoreMaster TKD",
        autoHideMenuBar: true,
        backgroundColor: '#07090e',
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            backgroundThrottling: false
        }
    });

    mainWindow.maximize();

    // Prueba cargando una página web
    mainWindow.loadFile('index.html');

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});