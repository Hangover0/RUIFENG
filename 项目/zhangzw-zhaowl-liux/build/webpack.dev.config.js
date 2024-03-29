// 1.【模块引入】
const webpack = require('webpack');
const path    = require('path');
const Entry   = require('./webpack.entry');
const HTML    = require('./webpack.html');
const Loader  = require('./webpack.loader');
const ExtractTextPlugin    = require('extract-text-webpack-plugin');
const CopyWebpackPlugin    = require('copy-webpack-plugin');
// 2.【配置任务】
module.exports = {
    // * Context
    context: path.resolve(__dirname, '../'),
    // * Entry
    entry: Entry.config,
    // * Output
    output: {
        // 输出路径
        path: path.resolve(__dirname, '../dist/'),
        // 文件名
        filename: "static/js/[name]-bundle.js",
        publicPath: "http://localhost:8080/"
    },
    // * Loader
    module: {
        rules: Loader.config
    },
    // * Plugin
    plugins: [
        // 编译HTML文件
        ...HTML.config,
        // 热更新
        new webpack.HotModuleReplacementPlugin(),
        // 抽离CSS
        new ExtractTextPlugin('static/css/[name].min.css'),

        // 版权声明
        new webpack.BannerPlugin("版权所有， 翻版必究！"),
        // 全局引入三方插件
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new CopyWebpackPlugin([
            {
                from: './src/json',
                to: './static/json'
            },
            {
                from: './src/plugin',
                to: './static/plugin'
            }
        ])
    ],
    // * resolve
    resolve: {
        // 路径解析/创建别名
        alias: {
            'Router': path.resolve(__dirname, '../src/js/router.js'),
            'Common-LESS': path.resolve(__dirname, '../src/less/common.less'),
            'Common-JS': path.resolve(__dirname, '../src/js/common.js'),
            "loginRegister-LESS" : path.resolve(__dirname, '../src/less/loginRegister.less'),
            
           
        }
    },
    // * devServer
    devServer:{
        // 设置服务器访问的基本目录
        contentBase:path.resolve(__dirname,'./dist'), // 最好设置成绝对路径
        // 设置服务器的ip地址,可以是localhost
        host:'localhost',
        // 设置端口
        port:8080,
        // 设置自动拉起浏览器
        open:true,
        // 自动刷新
        inline: true,
        // 模块热替换
        hot: true
    }
}
