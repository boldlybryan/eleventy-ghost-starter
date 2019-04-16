[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/brykng/eleventy-ghost-starter.git)

This starter template has two main dependencies:
1. Eleventy
2. Ghost Content API

They can be installed by cloning this repository and running ```npm install```.

Once the dependencies are installed, you'll need to change the Ghost Content API details in ```/_data/ghost.js``` to match those of your own Ghost account.

To run a local build and watch for changes, use ```npx eleventy --serve```.

Other than the Ghost integration, this starter template follows standard Eleventy conventions, to the best of my knowledge.