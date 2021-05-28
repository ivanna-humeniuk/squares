const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    "sass-loader",
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        openPage: ['./'],
        hot: true,
        open: true,
        historyApiFallback: true,
    },
};
