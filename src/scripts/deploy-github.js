const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/jesussanzdev/tribute-page.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)