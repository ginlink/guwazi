import { BrowserWindow, clipboard, ipcMain } from 'electron';
import { CLOSE_WINDOW, MINIMIZE_WINDOW, WRITE_CLIPBOARD } from '../../universal/constants';
import { LifeCycle } from '../lifeCycle';

const ipcList = {
  listen(ctx: LifeCycle) {
    const mainWindow = ctx.mainWindow;

    ipcMain.on('update-title', (_e, arg) => {
      mainWindow?.setTitle(`Electron React TypeScript: ${arg}`);
    });

    ipcMain.handle('guwazi:translate', async (_, input) => {
      const guwazi = ctx.guwazi;

      guwazi.setConfig({
        'translate.youdao': {
          appKey: '796774f424aa0625',
          key: 'YKnbybN4JaVm2prhirUGbVa0sUNvnoCx',
        },
      });

      await guwazi.translate(input);

      return guwazi.output;
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
