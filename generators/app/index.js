// initializing - 您的初始化方法（检查当前项目状态，获取配置等）
// prompting- 在哪里提示用户选择（你打电话的地方this.prompt()）
// configuring- 保存配置并配置项目（创建.editorconfig文件和其他元数据文件）
// default - 如果方法名称与优先级不匹配，将被推送到此组。
// writing - 编写生成器特定文件（路由，控制器等）的位置
// conflicts - 处理冲突（内部使用）
// install - 运行安装（npm，bower）
// end- 称为最后，清理，再见再见等
const path = require('path');
const chalk = require('chalk'); //不同颜色的info
const util = require('util');
const Generator = require('yeoman-generator');
const yosay = require('yosay'); //yeoman弹出框
module.exports = class extends Generator {
    info() {
        this.log(chalk.strikethrough(
            'I am going to build your app🏡'
        ));
    }
    constructor(args, opts) {
        super(args, opts);
        this.answers = null;
        this.importGraphql="import graphql from './routes/graphql'";
        this.useGraphql="app.use(graphql.routes(), graphql.allowedMethods());";
        this.appname = "wx-vue";
    }

    paths() {
        this.sourceRoot();
    }
    install() { //安装依赖
        // this.installDependencies({
        //     skipInstall: this.options['skip-install']
        // });
    }
    prompting() {
        return this.prompt([{
            type: 'input',
            name: 'name',
            message: 'please Input Your project name',
            default: this.appname // Default to current folder name
        }, {
            type: 'list',
            name: 'model',
            message: 'Select the reaction model',
            choices: ['restful', 'graphql']
        },{
            type: 'list',
            name: 'preprocessor',
            message: 'Select the CSS preprocessor',
            choices: ['PostCSS', 'Sass']
        }]).then((answers) => {
            this.log('app model', answers.model);
            this.answers = answers;
            this.appname = answers.name;
            console.log("answers.model", answers.model);
            if(answers.model === "restful"){
                this.importGraphql="";
                this.useGraphql="";
            }
            if (answers.preprocessor) {
                this.log(chalk.yellow(
                    '预处理已被我强烈建议成PostCSS💻'
                ));
            }
        });
    }
    writing() {
        const _path = this.appname;
        this.fs.copy(
            this.templatePath('.travis'),
            this.destinationPath(_path + '/.travis')
        );
        this.fs.copy(
            this.templatePath('build'),
            this.destinationPath(_path + '/build')
        );
        // --------------------src--------------------------
        this.fs.copyTpl(
            this.templatePath('src/app.js'),
            this.destinationPath(_path + '/src/app.js')
        );
        this.fs.copyTpl(
            this.templatePath('src/App.vue'),
            this.destinationPath(_path + '/src/App.vue')
        );
        this.fs.copyTpl(
            this.templatePath('src/entry-client.js'),
            this.destinationPath(_path + '/src/entry-client.js')
        );
        this.fs.copyTpl(
            this.templatePath('src/entry-server.js'),
            this.destinationPath(_path + '/src/entry-server.js')
        );
        this.fs.copyTpl(
            this.templatePath('src/index.html'),
            this.destinationPath(_path + '/src/index.html')
        );
        this.fs.copy(
            this.templatePath('src/service/model'),
            this.destinationPath(_path + '/src/service/model')
        );
        this.fs.copy(
            this.templatePath('src/service/routes'),
            this.destinationPath(_path + '/src/service/routes')
        );
         this.fs.copy(
            this.templatePath('src/client/components'),
            this.destinationPath(_path + '/src/client/components')
        );
          this.fs.copy(
            this.templatePath('src/client/router'),
            this.destinationPath(_path + '/src/client/router')
        );
        this.fs.copy(
            this.templatePath('src/client/store'),
            this.destinationPath(_path + '/src/client/store')
        );
        this.fs.copy(
            this.templatePath('src/client/utils'),
            this.destinationPath(_path + '/src/client/utils')
        );
        this.fs.copy(
            this.templatePath('src/client/views'),
            this.destinationPath(_path + '/src/client/views')
        );
        this.fs.copyTpl(
            this.templatePath('src/client/store/actions.js'),
            this.destinationPath(_path + '/src/client/store/actions.js'), {
                model: this.answers.model,
                passenger: this.answers.model === 'graphql'? 'passenger' : 'data',
                companyInfo: this.answers.model === 'graphql' ? 'companyInfo' : 'data',
                departNames: this.answers.model === 'graphql' ? 'departNames' : 'data',
                commonPassenger:  this.answers.model === 'graphql' ? 'commonPassenger' : 'data'
        });

        if(this.answers.model === 'graphql'){
            this.fs.copyTpl(
                this.templatePath('src/service/routes.graphql.js'),
                this.destinationPath(_path + '/src/service/routes/graphql.js')
            );
            this.fs.copy(
                this.templatePath('src/service/graph'),
                this.destinationPath(_path + '/src/service/graph')
            );
            this.fs.copyTpl(
                this.templatePath('src/client/apis/graphql.js'),
                this.destinationPath(_path + '/src/client/apis/graphql.js')
            );
            this.fs.copyTpl(
                this.templatePath('src/service/app.graphql.js'),
                this.destinationPath(_path + '/src/service/app.js')
            );
        }else{
            this.fs.copyTpl(
                this.templatePath('src/client/apis/restful.js'),
                this.destinationPath(_path + '/src/client/apis/restful.js')
            );
            this.fs.copyTpl(
                this.templatePath('src/service/app.js'),
                this.destinationPath(_path + '/src/service/app.js')
            );
        }
        // -----------------------src-------------------------
        this.fs.copy(
            this.templatePath('test'),
            this.destinationPath(_path + '/test')
        );
        this.fs.copyTpl(
            this.templatePath('.babelrc'),
            this.destinationPath(_path + '/.babelrc')
        );
        this.fs.copyTpl(
            this.templatePath('.travis.yml'),
            this.destinationPath(_path + '/.travis.yml')
        );
        this.fs.copyTpl(
            this.templatePath('id_rsa.enc'),
            this.destinationPath(_path + '/id_rsa.enc')
        );
        this.fs.copyTpl(
            this.templatePath('karma.conf.js'),
            this.destinationPath(_path + '/karma.conf.js')
        );
        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath(_path + '/package.json'), { packagename: this.appname }
        );
        this.fs.copyTpl(
            this.templatePath('postcss.config.js'),
            this.destinationPath(_path + '/postcss.config.js')
        );
        this.fs.copyTpl(
            this.templatePath('tsconfig.json'),
            this.destinationPath(_path + '/tsconfig.json')
        );
    }
    end() {
        this.log(yosay(
            '创建任务Success😁'
        ));
    }
};
