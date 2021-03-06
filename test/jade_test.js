var grunt = require('grunt');

exports.jade = {
  compile: function(test) {
    'use strict';

    test.expect(9);

    var actual = grunt.file.read('tmp/jade.html');
    var expected = grunt.file.read('test/expected/jade.html');
    test.equal(expected, actual, 'should compile jade templates to html');

    actual = grunt.file.read('tmp/jade2.html');
    expected = grunt.file.read('test/expected/jade2.html');
    test.equal(expected, actual, 'should compile jade templates to html (multiple files support)');

    actual = grunt.file.read('tmp/jadeInclude.html');
    expected = grunt.file.read('test/expected/jadeInclude.html');
    test.equal(expected, actual, 'should compile jade templates to html with an include');

    actual = grunt.file.read('tmp/jadeTemplate.html');
    expected = grunt.file.read('test/expected/jadeTemplate.html');
    test.equal(expected, actual, 'should compile jade templates to html with grunt template support');

    actual = grunt.file.read('tmp/jadeDynamicData.html');
    expected = grunt.file.read('test/expected/jadeDynamicData.html');
    test.equal(expected, actual, 'should allow options.data to be a function');

    actual = grunt.file.read('tmp/inlineFilters.html');
    expected = grunt.file.read('test/expected/jadeFilters.html');
    test.equal(expected, actual, 'should compile jade with inline filters');

    actual = grunt.file.read('tmp/exportedFilters.html');
    expected = grunt.file.read('test/expected/jadeFilters.html');
    test.equal(expected, actual, 'should compile jade with exported filters');

    actual = grunt.file.read('tmp/jadeAdvancedFilters.html');
    expected = grunt.file.read('test/expected/jadeAdvancedFilters.html');
    test.equal(expected, actual, 'should compile jade with nested filters with access to locals');

    actual = grunt.file.read('tmp/jadeUsingmixin.html');
    expected = grunt.file.read('test/expected/jadeUsingmixin.html');
    test.equal(expected, actual, 'should compile jade with nested mixins');

    test.done();
  }
};
