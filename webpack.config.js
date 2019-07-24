var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:  'index.js',
    library:  'scrollbar' ,  // 添加一个全局变量library，方便直接页面script标签引入使用
    libraryTarget:  'umd',  // umd代表打包后支持cmd，amd, es6模块语法引入，'this'、'global'（node环境）表示上面library变量添加的位置
  }
};