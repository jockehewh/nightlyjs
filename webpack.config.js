const makeConf = require('./webpackmakeconfig')()
console.log('generated Webpack configuration: \n',makeConf)

module.exports = makeConf
