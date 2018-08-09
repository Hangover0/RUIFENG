
const ExtractTextPlugin = require('extract-text-webpack-plugin');
exports.config = [
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
            use: ["css-loader", "postcss-loader", "less-loader"]
        }),   
        exclude:/node_modules/
    },
    // 图片
    {
        test:/\.(jpg|png|jpeg|gif|svg)$/,
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