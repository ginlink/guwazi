import { Plugin } from './types'

export class LifecyclePlugins {
  private list: { [id: string]: Plugin } = {}

  register(id: string, plugin: Plugin) {
    if (!id) throw new TypeError('id is required!')
    // 如果插件没有handle的方法，则不予注册
    if (typeof plugin.handle !== 'function') throw new TypeError('plugin.handle must be a function!')
    // 如果插件的id重复了，则不予注册
    if (this.list[id]) throw new TypeError(`duplicate id: ${id}!`)

    this.list[id] = plugin
  }

  get(id: string): Plugin | undefined {
    return this.list[id]
  }

  getList() {
    return Object.values(this.list)
  }

  getIdList() {
    return Object.keys(this.list)
  }
}
