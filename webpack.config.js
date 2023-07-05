var path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    mode:'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    entry:'./src/index.js',
    output:{
        filename:'index.[contenthash].js'
    },
    plugins: [new HtmlWebpackPlugin({
        title: '蓝梓方',
        template: 'src/assets/index.html'
    })],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
    },
};


