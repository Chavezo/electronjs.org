document.addEventListener('DOMContentLoaded', () => {
  require('./get-localized-strings')()
  require('./create-filter-list')()
  require('./fix-platform-labels')()
  require('./update-demo-app-download-link')()
  require('./update-app-download-links')()
  require('./platform-specific-content')()
  require('./apply-active-class-to-active-links')()
  require('./remove-scheme-from-link-text')()
  require('./lazy-load-images')()
  require('browser-date-formatter')()
  require('./copy-code-to-clipboard')()
})