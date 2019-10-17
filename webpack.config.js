var path = require ('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports={
    entry:'./src/js/app.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js'
        //publicPath:'/dist'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['env']
                    }
                }]
            },
            {
                test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader','sass-loader'
        ],
            },
            {
                test:/\.html$/,
                use:['html-loader']
            }
            ,
            {
                test:/\.png$/,
                use:[{
                    loader:'file-loader',
                    options:{
                        name:'[name].[ext]',
                        outputPath:'img/'
                    }
                }]
            }
            

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
          }),
        new HtmlWebpackPlugin({
            template:'src/index.html'
        }),
        new CleanWebpackPlugin(['dist'])
    ]
}