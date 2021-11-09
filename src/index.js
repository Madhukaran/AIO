const { app, BrowserWindow, nativeTheme, ipcMain } = require('electron')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  nativeTheme.themeSource = 'dark'

  win.loadFile(path.join(__dirname, '/pages/login.html'))

  ipcMain.handle('/login', () => {
    win.loadFile(path.join(__dirname, '/pages/homepage.html'))
    return true
  })

}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})