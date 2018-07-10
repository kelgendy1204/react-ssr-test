const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client.js',
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        port: 9000,
        historyApiFallback: true
    },
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'web.html',
            template: 'web.html',
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'clientonly': JSON.stringify('clientonly')
            }
        })
    ]
};
