/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-09-23 16:58:07
 * @LastEditTime: 2022-09-23 17:47:30
 * @Email: Tom
 * @FilePath: \vue-webpack\webpack.config.js
 * @Environment: Win 10
 * @Description:
 */
/*
 * @Author: Tom
 * @LastEditors: Tom
 * @Date: 2022-09-23 16:58:07
 * @LastEditTime: 2022-09-23 17:06:41
 * @Email: Tom
 * @FilePath: \vue-webpack\webpack.config.js
 * @Environment: Win 10
 * @Description:
 */

const { Configuration } = require('webpack')
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const { VueLoaderPlugin } = require('vue-loader/dist/index')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

/**
 * @type {Configuration}
 */

const config = {
  // 打包模式
  mode: 'development',
  // 入口文件
  entry: './src/main.ts',
  module: {
    rules: [
      // 识别vue文件
      { test: /\.vue$/, use: 'vue-loader' },
      // 解析 css
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      // 解析 less
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      // 解析 ts
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          configFile: path.resolve(process.cwd(), 'tsconfig.json'),
          appendTsSuffixTo: [/\.vue$/],
        },
      },
    ],
  },
  // 出口  打包后文件
  output: {
    filename: '[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.vue', '.ts', '.js'],
  },
  stats: 'errors-only',
  devServer: {
    port: '8080',
  },
  plugins: [
    // html 模板
    new htmlWebpackPlugin({ template: './public/index.html' }),
    // 识别vue文件
    new VueLoaderPlugin(),
    // 每次打包清除dist 里面的文件
    new CleanWebpackPlugin(),
    // 美化 webpack 控制台日志
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['You appliaction is running here: http://localhost:8000'],
      },
    }),
  ],
  // 性能优化
  // 不添加这个打包 800多kb  添加后打包 大小 40多kb
  // 为什么一下子 这么小 都去哪了呢?
  //           这个是支持cdn引入的
  //           在 public下的index.html 引入下vue的cdn地址就好了
  //     cdn 缺点就是 网不好的时候 有点歇逼    优点就是 打包后的体积是真滴 小
  externals: {
    vue: 'Vue',
  },
}

module.exports = config
