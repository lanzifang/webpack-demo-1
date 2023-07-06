const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    
    entry:path.join(__dirname,'./src/index.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'index.[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '蓝梓方',
            template: 'src/assets/index.html'
        }),
    ],
};