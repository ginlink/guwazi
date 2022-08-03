import { build } from 'electron-builder'

build({
  config: {
    productName: 'Guwazi',
    artifactName: '${productName}-${version}-${platform}-${arch}.${ext}',
    files: ['dist/**/*'],
    directories: {
      output: 'release',
    },
    win: {
      target: ['zip', 'nsis'],
    },
    nsis: {
      artifactName: '${productName}-${version}-installer.${ext}',
    },
    mac: {
      identity: null,
      target: ['default'],
    },
  },
})
