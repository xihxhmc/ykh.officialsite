'use strict'

const isDev = true  

const dev = {
  Api: '"https://dev.ykhcn.net"',
}
const prod = {
  Api: '"https://www.ykhcn.net"',
}
module.exports = {
  NODE_ENV: '"production"',
  version: `'2020100101${isDev? 'D': false}'`,
  Api: isDev? dev.Api : prod.Api,
}
