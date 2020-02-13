const Koa = require('koa')
const static = require('koa-static')
const webpack = require('webpack')
const config = require('./webpack.config.js')
const webpackDevMiddleware = require('koa-webpack-dev-middleware')
const nightly = new Koa()

const compiler = webpack(config)

console.log(config[0].output)
//nightly.use(static(__dirname + '/dist'))

nightly.use(static(__dirname + '/assets'))

config.forEach(page=>{
  nightly.use(webpackDevMiddleware(compiler,{
    quiet: true,
    stats: {colors: true},
    publicPath: page.output.publicPath,
  }))
})


nightly.listen(9899, ()=>{
  console.log('Listening on port 9899.')
})