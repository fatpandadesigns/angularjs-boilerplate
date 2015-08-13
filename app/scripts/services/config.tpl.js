'use strict';

/**
 * @ngdoc service
 * @name app.config
 * @description
 * # config
 * Constant in the app.
 */
angular.module('app')
  .constant('config', (function() {

    // options are `$ grunt template` depending on the env grunt option
    var options = {
      'env': '<%= env %>',
      'apiEndPoint': '<%= apiEndPoint %>'
    };

    /**
     * Gets the config value from a specified key.
     *
     * If key exists, return the associated value.
     * If no key exists:
     * + no defaultValue is provided => throw Error
     * + defaultValue is provided => return the defaultValue
     *
     * @param key
     * @param defaultValue
     */
    options.get = function (key, defaultValue) {
      if (this[key] !== undefined) {
        return this[key];
      } else if (defaultValue !== undefined) {
        return defaultValue;
      } else {
        throw Error('key: ' + key + ' not exists');
      }
    };

    return options;
  })());
