export interface IElectronAPI {
  update: (count: number) => void
}
export interface ISystemAPI {
  closeWindow: () => void
  minimizeWindow: () => void
  platform: () => NodeJS.Platform
}

declare global {
  interface Window {
    myAPI: IElectronAPI
    systemAPI: ISystemAPI
  }
}
