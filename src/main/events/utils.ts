import { Guwazi } from '@ginlink/guwazi-core';
import { PluginConfig } from '@ginlink/guwazi-core/dist/lib/LifecyclePlugins';

type GuwaziHelperType =
  | 'beforeTransformPlugins'
  | 'transformPlugins'
  | 'beforeTranslatePlugins'
  | 'translatePlugins'
  | 'afterTranslatePlugins';

// get uploader or transformer config
const getConfig = (name: string, type: GuwaziHelperType, ctx: Guwazi) => {
  let config: PluginConfig[] = [];
  if (name === '') {
    return config;
  } else {
    const handler = ctx.helper[type].get(name);

    if (handler) {
      if (handler.config) {
        config = handler.config(ctx);
      }
    }
    return config;
  }
};

export { getConfig };
