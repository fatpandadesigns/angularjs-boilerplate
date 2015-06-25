'use strict';

describe('Service: config', function () {

  // load the service's module
  beforeEach(module('iorad'));

  // instantiate service
  var config;
  beforeEach(inject(function (_config_) {
    config = _config_;
  }));

  it('config and its api should be available', function () {
    expect(!!config).toBe(true);
    expect(config.get).toBeDefined();
  });

  it('get non exists', function () {
    expect(function() {
      config.get('nonExists');
    }).toThrowError('key: nonExists not exists');
  });

  it('get defaultValue', function () {
    var value = config.get('nonExists', 'fallback');
    expect(value).toBe('fallback');
  });

  it('get existing value', function () {
    expect(config.get('apiEndPoint')).toBe('<%= apiEndPoint %>');
  });

});
