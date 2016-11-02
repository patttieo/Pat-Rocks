'use strict';

const handlebars = require('handlebars'),
      compiledTemplates = require('./compiled/templates')(handlebars),
      _ = require('underscore'),
      templates = {};

_.each(compiledTemplates, (value, key) => {
  templates[key.replace('templates/browser/', '').replace('.hbs', '')] = value;
});

handlebars.registerHelper('ifCond', (v1, operator, v2, options) => {
  switch (operator) {
  case '==':
    return (v1 === v2) ? options.fn(this) : options.inverse(this);
  case '===':
    return (v1 === v2) ? options.fn(this) : options.inverse(this);
  case '<':
    return (v1 < v2) ? options.fn(this) : options.inverse(this);
  case '<=':
    return (v1 <= v2) ? options.fn(this) : options.inverse(this);
  case '>':
    return (v1 > v2) ? options.fn(this) : options.inverse(this);
  case '>=':
    return (v1 >= v2) ? options.fn(this) : options.inverse(this);
  case '&&':
    return (v1 && v2) ? options.fn(this) : options.inverse(this);
  case '||':
    return (v1 || v2) ? options.fn(this) : options.inverse(this);
  default:
    return options.inverse(this);
  }
});

module.exports = templates;
