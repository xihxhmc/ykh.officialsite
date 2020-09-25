'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

// process.env.Api
// isDev:true运行测试接口;false运行正式接口
const isDev = true  
const dev = {
  Api: '"https://dev.ykhcn.net"',
}
const prod = {
  Api: '"https://www.ykhcn.net"',
}
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  version: `'2020100101${isDev? 'D': false}'`,
  Api: isDev? dev.Api : prod.Api,
})
