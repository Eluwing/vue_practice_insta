// vue CLIを使っているため、commonJSで作成必要
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.js', '.vue'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/], // <script lang="ts"> 처리
          },
        },
      ],
    },
  },
})