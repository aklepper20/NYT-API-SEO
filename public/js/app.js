const baseUrl = 'https://api.nytimes.com/svc/topstories/v2/us.json?api-key=FdPUu6Ng9dn4hBxqWZuiG6vwMqdTPXDj';
let newsArticles = [];

document.addEventListener('DOMContentLoaded', () => fetchAllArticles());

  function fetchAllArticles() {
    fetch(baseUrl)
    .then((response) => response.json())
    .then((jsonData) => {
      console.log(jsonData)
      newsArticles = jsonData.results;
      console.log(newsArticles)
      renderAllArticles(newsArticles)
    })
  };

  function renderAllArticles(articleArray) {
    const row = document.getElementById('article-row')
     let results = articleArray.slice(0, 31);
    const html = results.map(renderSingleArticle).join('');
    row.innerHTML = html;
};

function renderSingleArticle(article) {
  const url = `${article.multimedia[0].url}`;

  return `
  <div class="column-third">
    <div class="article-card">
    <h2 class="news-title">${article.title}</h2>
      <img src=${url} alt="CurrentNews">
      <div class="article-card-text>
        <p class="abstract">${article.abstract}</p>
        <a href=${article.short_url} target="blank">Click here to read more...</a>
      </div>
    </div>
  </div>
`;
};
