'use strict';

describe('Service: config', function () {

  // load the service's module
  beforeEach(module('app'));

  // instantiate service
  var config;
  beforeEach(inject(function (_config_) {
    config = _config_;
  }));

  it('config and its api should be available', function () {
    expect(!!config).toBe(true);
    expect(config.get).toBeDefined();
  });

  it('should get non exists', function () {
    expect(function() {
      config.get('nonExists');
    }).toThrowError('key: nonExists not exists');
  });

  it('should get defaultValue', function () {
    var value = config.get('nonExists', 'fallback');
    expect(value).toBe('fallback');
  });

  it('should get existing value', function () {
    expect(config.get('apiEndPoint')).toBe('<%= apiEndPoint %>');
  });


  it('should have attributes', function () {
    expect(config.env).toBe('<%= env %>');
    expect(config.apiEndPoint).toBe('<%= apiEndPoint %>');
  });

});
