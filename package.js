Package.describe({
  name: 'kriegslustig:iso-router',
  version: '0.2.2',
  summary: 'An isomorphic router for Meteor',
  git: 'https://github.com/Kriegslustig/meteor-iso-router',
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.2')
  api.use(['ecmascript', 'webapp', 'underscore', 'reactive-var'])
  api.use('cosmos:browserify@0.8.1')
  Npm.depends({ 'path-to-regexp': '0.1.6' })
  api.addFiles(
    [
      'app.browserify.js',
      'lib/files.js',
      'lib/utils.js',
      'lib/events.js',
      'lib/navigate.js',
      'lib/route.js',
      'iso-router.js'
    ],
    ['server', 'client']
  )
  api.export('IsoRouter')
})

Package.onTest(function (api) {
  api.use(['kriegslustig:iso-router', 'ecmascript', 'tinytest', 'http', 'underscore', 'webapp', 'reactive-var'])
  api.use('cosmos:browserify@0.3.0')
  Npm.depends({
    'path-to-regexp': '0.1.6'
  })
  api.addFiles([
    'app.browserify.js',
    'lib/utils.js',
    'lib/events.js',
    'lib/navigate.js',
  ])
  api.addFiles([
    'tests/app.browserify.js',
    'tests/utils.js',
    'tests/events.js',
    'tests/navigate.js',
    'tests/route.js',
    'tests/iso-router.js'
  ])
})
