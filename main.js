const {app, BrowserWindow} = require('electron')
const fs = require('fs')

let win = null

app.on('ready', () => {

  win = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      devTools: true
    }
  })
  win.webContents.openDevTools()
  win.loadURL(`file://${app.getAppPath()}/index.html`)

})
