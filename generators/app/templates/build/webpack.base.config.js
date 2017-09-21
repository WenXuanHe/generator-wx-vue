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
                use: [{
                    loader: 'babel-loader',
                    options:{
                        "presets": [
                          ["env", {
                            "modules": false,
                            "targets": {
                              "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
                            }
                          }],
                          "stage-2"
                        ],
                        "plugins": ["transform-runtime"],
                        "env": {
                          "test": {
                            "presets": ["env", "stage-2"],
                            "plugins": ["istanbul"]
                          }
                        }
                      }
                }],
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
            'vue': 'vue/dist/vue.js',
            '$components': path.resolve(__dirname, "../", 'src/client/components'),
            '$router': path.resolve(__dirname, "../", 'src/client/router'),
            '$store': path.resolve(__dirname, "../", 'src/client/store'),
            '$utils': path.resolve(__dirname, "../", 'src/client/utils'),
            '$views': path.resolve(__dirname, "../", 'src/client/views'),
            '$apis': path.resolve(__dirname, "../", 'src/client/apis')
        }
    },
    plugins: [
        //提取css
        new ExtractTextPlugin('styles/[name].css'),
    ]
}
