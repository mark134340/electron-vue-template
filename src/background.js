'use strict'
import { app, protocol, BrowserWindow,ipcMain } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
// import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer' //vue调试工具可自行安装
const isDevelopment = process.env.NODE_ENV !== 'production'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])


//获取flash安装目录，如果安装了flash就加载插件
let flashPath = app.getPath('pepperFlashSystemPlugin')

if(flashPath){
  app.commandLine.appendSwitch('ppapi-flash-path', flashPath)
}

function createWindow() {
  // 创建主窗口.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 400,
    minHeight: 300,
    frame:false,
    
    webPreferences: {
      //新版vue-cli-plugin-electron-builder需在webpack里启用nodeIntegration（让渲染进程node可用）
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      webviewTag:true,
      //允许跨域
      webSecurity: false,
      plugins: true,
      // allowDisplayingInsecureContent: true,
      // allowRunningInsecureContent: true,
    }
  })
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }

  win.on('closed', () => {
    win = null
  })
}
//渲染进程控制窗口
ipcMain.on('minimize', (e) => win.minimize());//最小化
ipcMain.on('maximize', (e) => {//最大化
    if (win.isMaximized()) {
      win.unmaximize();
    } else {
      win.maximize();
    }
});
ipcMain.on('closeWindow', (event) => {
  
    const currentWin = BrowserWindow.fromWebContents(event.sender.webContents);
    currentWin.close();
    currentWin.destroy()
    
});

app.on('web-contents-created', (event, contents) => {
  if (contents.getType() === 'webview') {
    contents.on('new-window', (event) => {
      event.preventDefault() 
    })
  }
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    // try {
    //   await installExtension(VUEJS_DEVTOOLS)
    // } catch (e) {
    //   console.error('Vue Devtools failed to install:', e.toString())
    // }
  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

