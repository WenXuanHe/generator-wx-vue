let path = require('path');
let routeComponentRegex = /public\/src\/([^\/]+\/?[^\/]+).js$/;

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/unit/*.js'
    ],

    preprocessors: {
      // add webpack as preprocessor
      'public/src/**/*.js': ['webpack', 'sourcemap'],
      'test/unit/*.js': ['webpack', 'sourcemap']
    },

    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      resolve: {
        // root:path.resolve(__dirname, './public/src'),
        extensions: ['', '.js', '.jsx', '.css', '.scss'],
        alias: {
          $redux: path.resolve(__dirname, 'public/src/redux'),
            $components: path.resolve(__dirname, 'public/src/components'),
            $routes: path.resolve(__dirname, 'public/src/routes'),
            $styles: path.resolve(__dirname, 'public/src/styles'),
            $helper: path.resolve(__dirname, 'public/src/helper'),
            $utils: path.resolve(__dirname, 'public/src/utils'),
            $actions: path.resolve(__dirname, 'public/src/actions')
        }
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: path.resolve(__dirname, 'node_modules'),
            query: {
              presets: ['airbnb', 'stage-0']
            }
          },
          {
            test: /\.json$/,
            loader: 'json',
          },
          {
                test: routeComponentRegex,
                include: path.resolve(__dirname, 'src'),
                loaders: ['bundle?lazy', 'babel']
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=50000&name=[path][name].[ext]'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.scss$/,//'postcss-loader?parser=postcss-scss' 
                loader: 'style!css!postcss!sass'
            }
        ]
      },
      externals: {
        cheerio: 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'react-addons-test-utils': 'react-dom',
      },
    },

    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher'
    ],


    babelPreprocessor: {
      options: {
        presets: ['airbnb']
      }
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless', 'MyHeadlessChrome'],
    singleRun: false,
  })
};