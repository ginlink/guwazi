import { Guwazi } from '@ginlink/guwazi-core'
import { app, BrowserWindow, ipcMain, session } from 'electron'
import { searchDevtools } from 'electron-search-devtools'
import path from 'path'
import { CLOSE_WINDOW, MINIMIZE_WINDOW, TRANSLATE } from '../../universal/constants'

const isDev = process.env.NODE_ENV !== 'production'
const ROOT_DIR = isDev ? path.resolve(__dirname, '../..') : __dirname

// In development mode, use electron-reload to hot reload.
if (isDev) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('electron-reload')(ROOT_DIR, {
    electron: path.resolve(
      ROOT_DIR,
      process.platform === 'win32' ? '../node_modules/electron/dist/electron.exe' : '../node_modules/.bin/electron'
    ),
  })
}

class LifeCycle {
  guwazi: Guwazi

  constructor() {
    this.guwazi = new Guwazi()
  }

  private async beforeReady() {
    console.log('[beforeReady]:')
  }

  private onReady() {
    const readyFunction = async () => {
      console.log('on ready')
      const options: Electron.BrowserWindowConstructorOptions = {
        width: 400,
        height: 350,
        show: true,
        frame: true,
        center: true,
        fullscreenable: false,
        resizable: false,
        title: 'Guwazi',
        vibrancy: 'ultra-dark',
        transparent: true,
        titleBarStyle: 'hidden',
        webPreferences: {
          // backgroundThrottling: false,
          preload: path.join(ROOT_DIR, 'preload.js'),
        },
      }

      if (process.platform === 'win32') {
        // 针对windows平台做出不同的配置
        options.show = true // 创建即展示
        options.frame = false // 创建一个frameless窗口
        options.backgroundColor = '#3f3c37' // 背景色
      }

      const mainWindow = new BrowserWindow(options)

      console.log('[ROOT_DIR]:', ROOT_DIR)

      ipcMain.on('update-title', (_e, arg) => {
        mainWindow.setTitle(`Electron React TypeScript: ${arg}`)
      })

      ipcMain.on(TRANSLATE, async (_, input: any) => {
        const guwazi = this.guwazi

        guwazi.setConfig({
          'translate.youdao': {
            appKey: '796774f424aa0625',
            key: 'YKnbybN4JaVm2prhirUGbVa0sUNvnoCx',
          },
        })

        console.log('[input]:', input)

        // await guwazi.translate('哈哈哈哈，你是谁？')
        await guwazi.translate(input)

        console.log('[结果]:', guwazi.output)

        return guwazi.output
      })

      ipcMain.handle('guwazi:translate', async (_, input) => {
        const guwazi = this.guwazi

        guwazi.setConfig({
          'translate.youdao': {
            appKey: '796774f424aa0625',
            key: 'YKnbybN4JaVm2prhirUGbVa0sUNvnoCx',
          },
        })

        console.log('[input]:', input)

        // await guwazi.translate('哈哈哈哈，你是谁？')
        await guwazi.translate(input)

        console.log('[结果]:', guwazi.output)

        return guwazi.output
      })

      ipcMain.on(MINIMIZE_WINDOW, () => {
        const window = BrowserWindow.getFocusedWindow()
        window?.minimize()
      })

      ipcMain.on(CLOSE_WINDOW, () => {
        const window = BrowserWindow.getFocusedWindow()
        if (process.platform === 'linux') {
          window?.hide()
        } else {
          window?.close()
        }
      })

      // Load the React Devtools extension and open devtools in a new window.
      if (isDev) {
        searchDevtools('REACT').then((devtools) => {
          session.defaultSession.loadExtension(devtools, { allowFileAccess: true })
        })
        mainWindow.webContents.openDevTools({ mode: 'detach' })
      }

      // Load the renderer process.
      mainWindow.loadFile('dist/index.html')
    }
    if (!app.isReady()) {
      app.on('ready', readyFunction)
    } else {
      readyFunction()
    }
  }

  private onRunning() {
    app.on('second-instance', (event, commandLine, workingDirectory) => {
      console.log('[second-instance]:')
    })
    app.on('activate', () => {
      console.log('[activate]:')
    })
  }

  private onQuit() {
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit()
      }
    })

    app.on('will-quit', () => {
      console.log('[will-quit]:')
    })
    // Exit cleanly on request from parent process in development mode.
    if (isDev) {
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
  }

  async launchApp() {
    const gotTheLock = app.requestSingleInstanceLock()
    if (!gotTheLock) {
      app.quit()
    } else {
      await this.beforeReady()
      this.onReady()
      this.onRunning()
      this.onQuit()
    }
  }
}

const bootstrap = new LifeCycle()
export { bootstrap }
