const Koa = require('koa')
const static = require('koa-static')
const nightly = new Koa()

nightly.use(static(__dirname + '/dist'))

nightly.use(static(__dirname + '/assets'))

nightly.listen(9899, ()=>{
  console.log('Listening on port 9899.')
})