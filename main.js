const url = require('url') 
const path = require('path')
const {app, BrowserWindow} = require('electron')

let mainWindow = null

function createWindow () {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    })
    mainWindow.loadURL(url.format ({ 
        pathname: path.join(__dirname, 'index.html'), 
        protocol: 'file:', 
        slashes: true 
     })) 

    //Garbage collector
    mainWindow.on('closed', () => {
        mainWindow = null
      })
}

//Creates window when ready
app.on("ready", () => {
    createWindow()
})