const compression = require('compression')
const express = require('express')
const helmet = require('helmet')
const config = require('dos-config')
const createUrl = require('./api/create-url')

const app = express()

app.disable('x-powered-by')

app.use(compression())

app.use(helmet())

// the CSP module sets the Content-Security-Policy header which can help
// protect against malicious injection of JavaScript, CSS, plugins, and more.
// https://helmetjs.github.io/docs/csp/
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'none'"],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    connectSrc: ["'self'"],
    imgSrc: ["'self'"],
    fontSrc: ["'self'"],
    upgradeInsecureRequests: config.protocol === 'https'
  },
  loose: false
}))

// The Referrer Policy module can control the behavior of the Referer header
// by setting the Referrer-Policy header.
// https://helmetjs.github.io/docs/referrer-policy/
app.use(helmet.referrerPolicy({
  policy: 'same-origin'
}))


// Enforce configured domain
app.use((req, res, next) => {
  let uri = req.url

  // Trailing slash removal logic
  if (req.url.length > 1) {
    if (req.url.endsWith('/')) {
      // Remove trailing slash
      uri = uri.slice(0, -1)
    } else if (req.url.includes('/?')) {
      // Remove trailing slash including query
      uri = uri.replace('/?', '?')
    }
  } else if (req.url !== '/') {
    // On root, enforce trailing slash (some browsers do this, others don't)
    uri = '/'
  }

  if (
    // Normalize uri
    req.url !== uri
    // Enforce SSL
    || req.protocol !== config.protocol
    // Enforce configured domain
    || req.hostname !== config.host
  ) {
    return res.redirect(301, createUrl(uri))
  }

  next()
})

app.start = (port = 3000) => new Promise((resolve, reject) => {
  app.listen(port, (err) => {
    if (err) {
      reject(err)
    } else {
      resolve()
    }
  })
})

module.exports = app
