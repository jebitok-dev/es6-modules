const path = require('path');

module.exports = {
    entry: {
        app: ['babel-polyfill', './src/notes-app.js'],
        edit: ['babel-polyfill', './src/notes-edit.js']
    },
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: '[name]-bundle.js'
    },
    module: {
        rules: [{
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            },
            test: /\.js$/,
            exclude: /node_modules/
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        publicPath: '/scripts/'
    }
}