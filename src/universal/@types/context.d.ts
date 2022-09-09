export interface IElectronAPI {
  update: (count: number) => void;
}
export interface ISystemAPI {
  closeWindow: () => void;
  minimizeWindow: () => void;
  platform: () => NodeJS.Platform;
  writeClipboardText: (text: string) => void;
}

export interface IGuwaziAPI {
  translate: (input: any) => Promise<any>;
}

declare global {
  interface Window {
    myAPI: IElectronAPI;
    systemAPI: ISystemAPI;
    guwaziAPI: IGuwaziAPI;
  }
}
