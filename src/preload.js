const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('auth', {
  login: () => ipcRenderer.invoke('/login'),
  signUp: () => ipcRenderer.invoke('/signUp'),
})
