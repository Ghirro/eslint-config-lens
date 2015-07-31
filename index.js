var merge = require('lodash/object/merge');

var airbnbConfig = require('eslint-config-airbnb');
var config = require('./eslintrc');

module.exports = merge({}, airbnbConfig, config);
