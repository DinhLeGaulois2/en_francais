module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'jasmine-matchers'],
    preprocessors: {
      '*.js': ['coverage']
    },
    files: [
      "./custom-matchers.js",
      '*.js',
      '*.spec.js'
    ],
    plugins: [
      'karma-jasmine',
      'karma-jasmine-matchers',
      'karma-chrome-launcher',
      'karma-coverage'
    ],
    // 'dot': start, 'coverage': end
    reporters: ['dots', 'coverage'],
    colors: true,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    coverageReporter: { // the output
      dir: 'coverage/',
      reporters: [
        {type: 'html', subdir: 'html'}
      ]
    }
  })
};
