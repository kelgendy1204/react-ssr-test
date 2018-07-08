const path = require('path');

module.exports = {
    entry: './server.js',
    target: 'node',
    mode: 'development',
    output: {
        filename: 'server.js',
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
                use: ['file-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};