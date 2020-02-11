const Koa = require('koa')
const static = require('koa-static')
const regular = new Koa()

regular.use(static(__dirname + '/dist'))

regular.listen(9899, ()=>{
  console.log('Listening on port 9899.')
})