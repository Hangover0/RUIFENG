/**
 * 功能：Webpack配置文件
 * 日期：2017/4/10
 **/

const webpack = require("webpack");
const path = require("path");
// 文件压缩
const compress = new webpack.optimize.UglifyJsPlugin({
	comments: false,
	compress: {
		warnings: false
	}
});

module.exports = {
	devtool: 'source-map',
	context: __dirname + "/js",
	entry: ["./index.js"],
	output: {
		path: path.resolve(__dirname, "js"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader'
			}
		]
	},
	plugins: [compress]
};