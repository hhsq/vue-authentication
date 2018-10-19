'use strict';
/**
 * 生产环境构建
 * */
require('./check-versions')();//  检查node vue版本

process.env.NODE_ENV = 'production';// 设置环境

const ora = require('ora')//  node 终端的 loading 图
const rm = require('rimraf') // 深度删除
const path = require('path')
const chalk = require('chalk')// 命令行彩色输出
const webpack = require('webpack')  // webpack
const config = require('../config')  // 引用config文件夹
const webpackConfig = require('./webpack.prod.conf')  // 引用生产环境webpackConfig

const spinner = ora('building for production...')  // 打包进行中
spinner.start()


/**
使用 rimraf 将旧的编译输出的文件夹删除，然后重新编译生成
rimraf(f: 路径, [opts], callback: 回调)
*/
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
});
