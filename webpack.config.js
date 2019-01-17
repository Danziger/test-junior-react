const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const pkg = require('./package.json');

module.exports = (env, argv) => {

    const DEV = argv.mode === 'development';
    const PROD = argv.mode === 'production';

    const config = {
        devtool: DEV ? 'eval-source-map' : false,

        entry: {
            main: path.resolve(__dirname, 'src/main.jsx'),
        },

        resolve: {
            extensions: ['.js', '.jsx'],
        },

        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
        },

        devServer: {
            historyApiFallback: true,
            contentBase: path.resolve(__dirname, 'static'),
            publicPath: '/',
        },

        module: {
            rules: [{
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'eslint-loader',
                    options: {
                        fix: true,
                        emitWarning: true,
                    },
                },
            }, {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            }, {
                test: /\.scss/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            }, {
                test: /\.css/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ],
            }],
        },

        plugins: [
            new HtmlWebpackPlugin({
                filename: path.resolve(__dirname, 'dist/index.html'),
                template: path.resolve(__dirname, 'src/app/templates/index.html'),
                title: 'Test Junior React',
                description: pkg.description,
                favicon: path.resolve(__dirname, 'static/favicon.ico'),
                minify: PROD,
                meta: {
                    author: pkg.author.name,
                    description: pkg.description,
                    viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
                },
                // We can use templateParameters if more options are required, but it will override all the above.
            }),
            new MiniCssExtractPlugin({
                filename: '[name].css',
            }),
            new StyleLintPlugin({
                syntax: 'scss',
                fix: true,
            }),
            new CopyWebpackPlugin([{
                from: 'static',
            }]),
            new webpack.DefinePlugin({
                'process.env': {
                    DEVELOPMENT: true,
                },
            }),
            // new BundleAnalyzerPlugin(),
        ],

        optimization: {
            // Extract all styles in a single file:
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.css$/,
                        chunks: 'all',
                        enforce: true,
                    },
                },
            },

            minimizer: PROD ? [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: false,
                }),
                // Might not be needed with Webpack 5:
                new OptimizeCSSAssetsPlugin({}),
            ] : [],
        },
    };

    return config;
};
