import EventEmitter from 'events'

export class Lifecycle extends EventEmitter {
  constructor() {
    super()
  }

  async start(input: any): Promise<void> {
    try {
      await this.beforeTransform(input)
      await this.doTransform(input)
      await this.beforeTranslate(input)
      await this.doTranslate(input)
      await this.afterTranslate(input)
    } catch (err) {
      console.log('[err]:', err)
    }
  }
  private async beforeTransform(input: any) {
    this.emit('beforeTransform', input)
  }

  private async doTransform(input: any) {
    this.emit('doTransform', input)
  }

  private async beforeTranslate(input: any) {
    this.emit('beforeTranslate', input)

    await this.handlePlugins(beforeTranslatePlugins.getList(), input) // 执行并「等待」插件执行结束
  }

  private async doTranslate(input: any) {
    this.emit('doTranslate', input)
  }

  private async afterTranslate(input: any) {
    this.emit('afterTranslate', input)
  }

  private async handlePlugins(plugins: any[], input: any) {
    await Promise.all(
      plugins.map(async (plugin) => {
        await plugin.handle(input)
      })
    )
  }
}
