const rewireLess = require('react-app-rewire-less')
const rewireTypescript = require('react-app-rewire-typescript')

module.exports = function override (config, env) {
  config = rewireLess(config, env)
  config = rewireTypescript(config, env)
  return config
}
