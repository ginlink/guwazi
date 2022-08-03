import { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import path from 'path'

const isDev = process.env.NODE_ENV === 'development'

const common: Configuration = {
  mode: isDev ? 'development' : 'production',
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    plugins: [new TsconfigPathsPlugin()],
  },
  externals: ['fsevents'],
  output: {
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(ico|png|jpe?g|svg|eot|woff?2?)$/,
        type: 'asset/resource',
      },
    ],
  },
  watch: isDev,
  devtool: isDev ? 'inline-source-map' : undefined,
}

const main: Configuration = {
  ...common,
  target: 'electron-main',
  entry: {
    main: './src/main.ts',
  },
}

const preload: Configuration = {
  ...common,
  target: 'electron-preload',
  entry: {
    preload: './src/preload.ts',
  },
}

const renderer: Configuration = {
  ...common,
  target: 'web',
  entry: {
    app: './src/renderer/index.tsx',
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/renderer/index.html',
    }),
  ],
}

const config = isDev ? renderer : [main, preload, renderer]
export default config
