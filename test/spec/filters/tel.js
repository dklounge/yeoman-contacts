'use strict';

describe('Filter: tel', function () {

  // load the filter's module
  beforeEach(module('yeomanContactsAppApp'));

  // initialize a new instance of the filter before each test
  var tel;
  beforeEach(inject(function ($filter) {
    tel = $filter('tel');
  }));

  it('should return the string formatted as (555) 555-5555', function () {
    var text = '555-555-5555';
    expect(tel(text)).toBe('(555) 555-5555');
  });
});
