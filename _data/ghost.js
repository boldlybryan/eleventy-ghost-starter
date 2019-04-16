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

async function fetchTags(){
  const tags = api.tags.browse({include:'count.posts'});
  return tags;
}

async function fetchAuthors(){
  const authors = api.authors.browse({include:'count.posts'});
  return authors;
}
   
module.exports = async function(){

    let posts = await fetchPosts();
    let pages = await fetchPages();
    let settings = await fetchSettings();
    let tags = await fetchTags();
    let authors = await fetchAuthors();

    return {
      'posts': posts,
      'pages': pages,
      'settings': settings,
      'tags': tags,
      'authors': authors
     };
};