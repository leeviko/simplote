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
}