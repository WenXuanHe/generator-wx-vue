let webpack = require('webpack');
let path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    output: {
        path: path.resolve(__dirname, "../", 'dist/'),
        filename: "[name].js",
        //配置按需加载[chunkhash:5]
        chunkFilename: '[name].trunk.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [{
                        loader: 'vue-loader',
                        options: {
                            loaders: {
                                'css': ExtractTextPlugin.extract({
                                    fallback: 'vue-style-loader',
                                    //如果需要，可以在 postcss-loader 之前将 resolve-url-loader 链接进来
                                    use: ['css-loader', 'postcss-loader']
                                }),
                                'scss': ExtractTextPlugin.extract({
                                    fallback: 'vue-style-loader',
                                    //如果需要，可以在 postcss-loader 之前将 resolve-url-loader 链接进来
                                    use: ['css-loader', 'sass-loader']
                                })
                            }
                        }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //如果需要，可以在 postcss-loader 之前将 resolve-url-loader 链接进来
                    use: ['css-loader', 'postcss-loader']
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]?[hash]'
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [
        //提取css
        new ExtractTextPlugin('styles/[name].css'),
    ]
}
