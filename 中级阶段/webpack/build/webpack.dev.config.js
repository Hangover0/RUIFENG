// 模块引入
const webpack = require('webpack');
const path    = require('path');
const glob    = require('glob');
const Entry   = require('./webpack.entry');
const Html    = require('./webpack.html');
const Loader  = require('./webpack.loader');
const Clean   = require('clean-webpack-plugin');
const purifyCSSPlugin   = require("purifycss-webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');





// 配置任务
module.exports = {
    // Content 配置基础目录
    content: path.resolve(__dirname, '../'),
    // 入口entry 
    entry: Entry.config,
    // 出口output
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'static/js/[name]-[hash:5].js',
        publicPath: "http://localhost:8080/"
    },
    // 加载器loader
    module: {
        rules: Loader.config
    },
    // 插件plugin
    plugins: [
        // 清除文件
        new Clean(['../dist/static']),
        // 编译HTML文件
        ...Html.config,
        // 热更新
        new webpack.HotModuleReplacementPlugin(),
        // 抽离CSS
        new ExtractTextPlugin('static/css/[name]-[hash:5].css'),
        // 去除未使用的css样式
        new purifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, "src/*.html"))
        }),
        // 6.版权声明
        new webpack.BannerPlugin("版权归公司所有，翻版必究！"),
    ],
    // 热加载/热替换devServer
    devServer:{
        // 设置服务器访问的基本目录
        contentBase: path.resolve(__dirname,' ./dist'), //最好设置成绝对路径
        // 设置服务器的ip地址,可以是localhost
        host: 'localhost',
        // 设置端口
        port: 8080,
        // 设置自动拉起浏览器
        open: true,
        // 自动刷新
        inline: true,
        // 模块热替换
        hot: true
    }
}