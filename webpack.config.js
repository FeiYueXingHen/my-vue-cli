const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//抽离css代码插件
const HtmlWebpackPlugin = require('html-webpack-plugin');//自动创建html文件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');//build之前自动清除dist文件夹插件
module.exports = {
    entry:{
        index:'./src/main.js'
    },

    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        chunkFilename: '[name].js',//动态import文件名
    },

    module:{
        rules:[
            {
                test:/\.vue/,
                loader:'vue-loader'
            },
            // {
            //     test:/\.css/,
            //     use: ['style-loader', 'css-loader']
            // }
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },

    plugins:[
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[name].css"
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html', // 生成的文件名称
            template: 'index.html', // 指定用index.html做模版
            inject: 'body' // 指定插入的<script>标签在body底部
        })
    ],

    resolve: {
        alias: {
            "@": resolve('src')
        }
    }
}
