
const HtmlWebpackPlugin = require('html-webpack-plugin');

exports.config = [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: true,
        chunks: ["main"],
        filename: "index.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/loginRegister.html",
        inject: true,
        chunks: ["loginRegister"],
        filename: "static/pages/loginRegister.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/beds.html",
        inject: true,
        chunks: ["beds"],
        filename: "static/pages/beds.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/more.html",
        inject: true,
        chunks: ["more"],
        filename: "static/pages/more.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/shop.html",
        inject: true,
        chunks: ["shop"],
        filename: "static/pages/shop.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/sofa.html",
        inject: true,
        chunks: ["sofa"],
        filename: "static/pages/sofa.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/tables.html",
        inject: true,
        chunks: ["tables"],
        filename: "static/pages/tables.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/userInfo.html",
        inject: true,
        chunks: ["userInfo"],
        filename: "static/pages/userInfo.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/storage.html",
        inject: true,
        chunks: ["storage"],
        filename: "static/pages/storage.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/sofa-Details.html",
        inject: true,
        chunks: ["sofaDetails"],
        filename: "static/pages/sofa-Details.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/sofa-Details2.html",
        inject: true,
        chunks: ["sofaDetails2"],
        filename: "static/pages/sofa-Details2.html"
    }),
   

    
]

