const searchBar = document.getElementById('search-bar');

searchBar.addEventListener('keyup', (e) => {
  const searchTarget = e.target.value;

  const filteredArticles = newsArticles.filter((article) => {
    return (
    article.title.includes(searchTarget) ||
    article.abstract.includes(searchTarget)
    );
  });
  renderAllArticles(filteredArticles);
});
