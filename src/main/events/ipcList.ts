import { StringKeyMap } from '@ginlink/guwazi-core';
import { BrowserWindow, clipboard, ipcMain } from 'electron';
import { CLOSE_WINDOW, MINIMIZE_WINDOW, WRITE_CLIPBOARD } from '../../universal/constants';
import { LifeCycle } from '../lifeCycle';
import { getConfig } from './utils';

const ipcList = {
  listen(ctx: LifeCycle) {
    const mainWindow = ctx.mainWindow;
    const guwazi = ctx.guwazi;

    ipcMain.handle('guwazi:translate', async (_, input) => {
      try {
        await guwazi.translate(input);

        return guwazi.output;
      } catch (err) {
        console.log('[err]:', err);
      }
    });

    ipcMain.handle('guwazi:getPluginConfig', async (_, pluginName) => {
      return getConfig(pluginName, 'translatePlugins', guwazi);
    });

    ipcMain.handle('guwazi:saveConfig', async (_, config: StringKeyMap<any>) => {
      guwazi.saveConfig(config);
    });

    ipcMain.handle('guwazi:getConfig', async (_, name?: string) => {
      return guwazi.getConfig(name);
    });

    ipcMain.on('update-title', (_e, arg) => {
      mainWindow?.setTitle(`Electron React TypeScript: ${arg}`);
    });

    ipcMain.on(MINIMIZE_WINDOW, () => {
      const window = BrowserWindow.getFocusedWindow();
      window?.minimize();
    });

    ipcMain.on(CLOSE_WINDOW, () => {
      const window = BrowserWindow.getFocusedWindow();
      if (process.platform === 'linux') {
        window?.hide();
      } else {
        window?.close();
      }
    });

    ipcMain.on(WRITE_CLIPBOARD.WRITE_CLIPBOARD_TEXT, (_, text: string) => {
      clipboard.writeText(text);
    });
  },
};

export default ipcList;
