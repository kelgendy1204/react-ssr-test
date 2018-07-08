const path = require('path');
var IsomorphicLoaderPlugin = require("isomorphic-loader/lib/webpack-plugin");

module.exports = {
    entry: './server.js',
    target: 'node',
    mode: 'development',
    output: {
        filename: 'server.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'build'),
        libraryTarget: 'commonjs2'
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
                use: ['file-loader', 'isomorphic-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new IsomorphicLoaderPlugin()
    ]
};