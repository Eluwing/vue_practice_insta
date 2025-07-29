/* eslint-disable @typescript-eslint/no-require-imports */
// vue CLIを使っているため、commonJSで作成必要
const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.js', '.vue'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@home': path.resolve(__dirname, 'src/views/Home'),
        '@upload': path.resolve(__dirname, 'src/views/Upload'),
        '@search': path.resolve(__dirname, 'src/views/Search'),
        '@activity': path.resolve(__dirname, 'src/views/Activity'),
      },
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/], // <script lang="ts"> 処理
          },
        },
      ],
    },
  },
})