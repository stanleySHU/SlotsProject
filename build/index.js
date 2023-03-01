const devConfig = require('./dev.config');
const prodConfig = require('./prod.config');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const { id, mode } = process.env;
const rootPath = path.join(path.resolve(__dirname, 'games'), id);

module.exports = {
    entry: path.join(rootPath, 'index.tsx'),
    output: {
        path: path.join(rootPath, 'dist'),
        filename: "app.bundle.js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            'engine': path.join(path.resolve(__dirname, '..'), 'engine'),
            "game": rootPath
        }
    },
    module: {
        rules: [
            {
                test: /\.([cm]?ts|tsx)$/,
                loader: "ts-loader"
            }, {
                test: /.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(rootPath, 'index.html'),
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeEmptyAttributes: true,
                removeAttributeQuotes: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'index.css'
        }),
        new CopyPlugin({
            patterns: [
                { from: path.join(rootPath, 'assets'), to:  path.join(rootPath, 'dist/assets')}
            ],
        })
    ],
    mode: mode
}

