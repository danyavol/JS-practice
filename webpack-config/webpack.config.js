const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },

    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },





    module: {
        rules: [


            {
                test: /\.js$/i,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            },


            {
                test: /\.(c|le)ss$/i,
                exclude: /(node_modules|bower_components)/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ],
            }


        ]
    },




    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),

        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        }),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })

    ]
}
