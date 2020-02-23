const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path');
const fs = require('fs')
const makeConf = ()=>{
  let pagesConfig = []
  var t = fs.readdirSync('./src/apps')
  t.forEach((file)=>{
    if(file !== undefined){
      pagesConfig.push({
      entry: `./src/apps/${file}`,
      plugins: [
        new MiniCssExtractPlugin({
          filename: file.replace(/(.js)$/, '.css')
        }),
        new HtmlWebpackPlugin({
          filename: file === 'main.js' ? 'index.html' : file.replace(/(.js)$/, '.html'),
          template: './src/indexTemplate.html'
        })
        ],
        module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
        ],
      },
      output: {
        filename: file,
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
      },
      //stats: 'errors-only'
    })
    }
  })
  return pagesConfig
}
module.exports = makeConf




/* 
{
  entry: './src/main.js',
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/indexTemplate.html'
    })
    ],
    module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  }
};
 */