var autoprefixer = require('autoprefixer')
var postcssImport = require('postcss-import')
var cssnano = require('cssnano')
var postcssCssnext = require('postcss-cssnext')
var sprites = require('postcss-sprites')
module.exports = {
    plugins: [
        autoprefixer, //css3加前缀
        postcssImport, //合并import引入代码
        // cssnano  //压缩代码
        postcssCssnext, //解析高级属性，使得兼容低版本浏览器
        sprites({
            spritePath: './dist/images',
            styleSheetPath: './src/index.css'
        })

    ]
}