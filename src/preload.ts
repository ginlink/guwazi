import { contextBridge, ipcRenderer } from 'electron'
import { CLOSE_WINDOW, MINIMIZE_WINDOW, TRANSLATE } from './universal/constants'

contextBridge.exposeInMainWorld('myAPI', {
  update: (count: number) => ipcRenderer.send('update-title', count),
})

contextBridge.exposeInMainWorld('systemAPI', {
  platform: () => process.platform,
  closeWindow: () => ipcRenderer.send(CLOSE_WINDOW),
  minimizeWindow: () => ipcRenderer.send(MINIMIZE_WINDOW),
})

contextBridge.exposeInMainWorld('guwaziAPI', {
  translate: (input: any) => ipcRenderer.invoke('guwazi:translate', input),
})
