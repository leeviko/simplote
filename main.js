const url = require('url') 
const path = require('path')
const {app, BrowserWindow} = require('electron')

let mainWindow = null

function createWindow () {
    makeSingleInstance()

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


function makeSingleInstance () {
    if (process.mas) return
    
    app.requestSingleInstanceLock()
  
    app.on('second-instance', () => {
      if (mainWindow) {
        if (mainWindow.isMinimized()) mainWindow.restore()
        mainWindow.focus()
      }
    })
  }


//Creates window when ready
app.on("ready", () => {
    createWindow()
})