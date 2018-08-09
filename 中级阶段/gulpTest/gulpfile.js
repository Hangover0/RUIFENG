//引入
const gulp         = require('gulp');                  // gulp 构建对象      
const less         = require('gulp-less');             // gulp 编译less
const babel        = require('gulp-babel');            // gulp 编译ES6
const uglify       = require('gulp-uglify');           // gulp 丑化js
const rename       = require('gulp-rename');           // gulp 重命名
const notify       = require('gulp-notify');           // gulp 发送通知
const plumber      = require('gulp-plumber');          // gulp 发送异常
const rev          = require('gulp-rev');              // gulp 添加hash
const del          = require('del');                   // gulp 删除文件
const autoprefixer = require('gulp-autoprefixer');     // gulp 自动添加前缀
const cleanCSS     = require('gulp-clean-css');        // gulp 自动添加前缀
const concat       = require('gulp-concat');           // gulp 合并文件
const htmlreplace  = require('gulp-html-replace');     // gulp 模块替换
const htmlmin      = require('gulp-htmlmin');          // gulp 压缩Html
//删除文件
gulp.task('del', () => {
    //同步删除
    del.sync(['./dist']);
})
//定义任务
gulp.task('one', (cb) => {
    setTimeout(() =>{
        console.log('one is done.');
        cb();
    },2000)
})


//编译JS
gulp.task("compileJS", () => {
    return gulp.src(['./src/js/tool.js', './src/js/index.js'])
           .pipe(plumber({errorHandler:notify.onError('Error: <%= error.message %>')})
        )
           .pipe(babel({
               presets:["env"]
           }))
           .pipe(uglify())
           .pipe(concat('index.min.js'))
           .pipe(gulp.dest('./dist/static/js/'))
           .pipe(notify({message: 'compileJS task is ok.'}))
})


gulp.task("compileLESS", () => {
    return gulp.src(['./src/less/normalize.less', './src/less/index.less'])
           .pipe(less())          
           .pipe(autoprefixer({
            browsers: ['last 2 versions'],          // 浏览器版本
            cascade: true,                          // 美化属性，默认true
            add: true,                              // 是否添加前缀，默认true
            remove: true,                           // 删除过时前缀，默认true
            flexbox: true                           // 为flexbox属性添加前缀，默认true
            }))
           .pipe(cleanCSS())
           .pipe(concat('index.min.css'))
           .pipe(gulp.dest('./dist/static/css'))
           .pipe(notify({message: 'compileLESS task is ok.'}))
})


gulp.task('compileHTML', () => {
    return gulp.src('./src/index.html')
            .pipe(htmlreplace({
                'css':'./static/css/index.min.css',
                'js':'./static/js/index.min.js',
            }))
            .pipe(htmlmin({
                // 1. 清除html注释	
                removeComments:true, 
                // 2. 清除空格(压缩)
                collapseWhitespace: true, 
                // 3. 省略布尔属性的值 <input checked="true"/> ==> <input />
                collapseBooleanAttributes: true, 
                // 4. 删除所有空格作属性值 <input id="" /> ==> <input />
                removeEmptyAttributes: true,
                // 5. 删除<script>的type="text/javascript"
                removeScriptTypeAttributes: true,
                // 6. 删除<style>和<link>的type="text/css"
                removeStyleLinkTypeAttributes: true,
                // 7. 压缩页面css
                minifyCSS: true,
                // 8. 压缩页面js
                minifyJS: true
            }))
            .pipe(gulp.dest('./dist'))
            .pipe(notify({message: 'compileLESS task is ok.'}))
});


gulp.task("default", ["del","compileJS","compileLESS", "compileHTML"], () => {
    console.log("default is done.");
})


//监听
gulp.task('dev', () => {
    gulp.watch('./src/js/*.js', ['compileJS']);
    gulp.watch('./src/less/*.less', ['compileLESS']);
})
