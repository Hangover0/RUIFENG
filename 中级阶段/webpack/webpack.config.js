// 引入模块
const webpack = require('webpack');
const path    = require('path');
const glob    = require("glob");          // 因为我们需要同步检查html模板，所以我们需要引入node的glob对象使用
// 引入插件
const CleanWebpackPlugin      = require('clean-webpack-plugin');
const HtmlWebpackPlugin       = require("html-webpack-plugin");
const ExtractTextPlugin       = require('extract-text-webpack-plugin');
const purifyCSSPlugin         = require("purifycss-webpack"); 
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');     // 压缩CSS
// 配置任务
module.exports = {
    // 入口（重点）
    entry:{
        main: "./src/js/main.js",
        news: "./src/js/news.js"
    },
    // 出口（重点）
    output:{
        // 输出路径
        path:path.resolve(__dirname, './dist/'),
        // 文件名
        filename:"static/js/[name]-bundle-[hash:5].js",
        // 处理静态资源路径
  		// 静态资源最终访问路径 = output.publicPath + 资源loader或插件等配置路径
  		// 这里假设开启devServer服务
  		publicPath: "http://localhost:8080/"
    },
    // 加载器loader（重点）
    module:{
        rules:[
            // 1.ES6
            {
                test:/\.js$/,
                use:"babel-loader",
                exclude:/node_modules/
            },
            // 2.Less
            {
                test:/\.less$/,
                // 顺序是从后向前，不然会报错
                use:ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","postcss-loader", "less-loader"]
                }),   
                exclude:/node_modules/
            },
            // 图片
            {
                test:/\.(jpg|png|jpeg|gif|svg)/,
                use:{
                    loader: "file-loader",
                    options: {
                        limit: "1000",
                        // 输出文件名字
                        name: "[name].[ext]",
                        // 输出路径
                        outputPath: "static/images/"
                    }
                },
                exclude: /node_modules/
            },
            // 处理HTML中的图片
            {
                test: /\.html/,
                loader: "html-withimg-loader"
            }
        ]
    },
    // 插件（重点）
    plugins:[
        // 1.清除文件
        new CleanWebpackPlugin(["./dist/static"]),
        // 2.编译主页
        new HtmlWebpackPlugin({
            // 需要引用的原模版文件
            template: "./src/index.html",
            // 设置JS文件插入的位置，可选：“true/body”，“head”
            inject: true,
            // 指定输出文件所依赖的入口文件（*.js）的[name]，
            // 这里的值是由“entry”（入口）属性内定义的
            chunks: ["main"],
            // 输出的子目录及完整文件名
            filename: "index.html"
        }),
        // 2.编译新闻
        new HtmlWebpackPlugin({
            // 需要引用的原模版文件
            template: "./src/pages/news.html",
            // 设置JS文件插入的位置，可选：“true/body”，“head”
            inject: true,
            // 指定输出文件所依赖的入口文件（*.js）的[name]，
            // 这里的值是由“entry”（入口）属性内定义的
            chunks: ["news"],
            // 输出的子目录及完整文件名
            filename: "static/pages/news.html"
        }),
        // 3.抽离css
        new ExtractTextPlugin('static/css/[name]-[hash:5].css'),
        // 4.去除未使用的CSS
        new purifyCSSPlugin({
        paths: glob.sync(path.join(__dirname, "src/*.html"))
        }),
        // 压缩CSS
        new OptimizeCssAssetsPlugin({
            // 匹配资源文件
            assetNameRegExp: /\.css$/g, 
            // 用什么插件来处理
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                discardComments: { removeAll: false },
                // 避免 cssnano 重新计算 z-index
                safe: false,
                // cssnano 集成了autoprefixer的功能
                // 会使用到autoprefixer进行无关前缀的清理
                // 关闭autoprefixer功能
                // 使用postcss的autoprefixer功能
                autoprefixer: false
            },
            canPrint: true
        }),
        // 6.版权声明
        new webpack.BannerPlugin("版权归公司所有，翻版必究！"),
        // 7.热更新
        new webpack.HotModuleReplacementPlugin()
    ],
    // 8.服务/热更新（重点）
    devServer:{
        // 设置服务器访问的基本目录
        contentBase:path.resolve(__dirname,'./dist'),    //最好设置成绝对路径
        // 设置服务器的ip地址, 可以是localhost
        host:'localhost',
        // 设置端口
        port:8080,
        // 设置自动拉起浏览器
        open:true,
        // 自动更新
        inline: true,
        // 模块热替换
        hot: true
    }
};