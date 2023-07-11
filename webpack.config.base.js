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
    module: {
        rules: [
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:["file-loader"]

            } ,          
          {
            test: /\.styl$/,
            loader: ['style-loader','css-loader','stylus-loader'],
          },
          {
            test: /\.less$/i,
            loader:['style-loader','css-loader','less-loader'],
          },
          {
            test: /\.scss$/i,
            use: [
              "style-loader",
              "css-loader",
              {
                loader:"sass-loader",
                options:{implementation:require('dart-sass')}
              }
            ],
          },
        ],
      },
};