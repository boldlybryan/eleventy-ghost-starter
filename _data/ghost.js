const GhostContentAPI = require('@tryghost/content-api');

const api = new GhostContentAPI({
    url: 'https://demo.ghost.io',
    key: '22444f78447824223cefc48062',
    version: 'v2'
});

async function fetchPosts(){
    const posts = api.posts.browse({include:'tags,authors'});
    return posts;
}

async function fetchPages(){
  const pages = api.pages.browse();
  return pages;
}


async function fetchSettings(){
  const settings = api.settings.browse();
  return settings;
}
   
module.exports = async function(){

    let posts = await fetchPosts();
    let pages = await fetchPages();
    let settings = await fetchSettings();

    return {
      'pages': pages,
      'posts': posts,
      'settings': settings
     };
};