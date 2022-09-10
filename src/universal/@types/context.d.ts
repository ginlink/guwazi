import { StringKeyMap } from '@ginlink/guwazi-core';
import { PluginConfig } from '@ginlink/guwazi-core/dist/lib/LifecyclePlugins';

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

  getPluginConfig: (pluginName: string) => Promise<PluginConfig[]>;

  saveConfig: (config: StringKeyMap<any>) => Promise<void>;

  getConfig: (name?: string) => Promise<any>;
}

declare global {
  interface Window {
    myAPI: IElectronAPI;
    systemAPI: ISystemAPI;
    guwaziAPI: IGuwaziAPI;
  }
}
