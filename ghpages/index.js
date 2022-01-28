const ghpages = require('gh-pages');

const BUILD_DIRECTORY = 'dist';

ghpages.publish(BUILD_DIRECTORY, (err) => {
  if (err) {
    console.warn(err);
    process.exit(1);
  }

  console.log('Deployed to Github pages!');
});
