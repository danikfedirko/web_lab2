var condition = navigator.onLine
  ? "online"
  : "offline";

window.addEventListener('offline', function(e) {
  condition = 'offline'
});

window.addEventListener('online', function(e) {
  condition = 'online';
  localStorage.removeItem('news')
});

if (condition === 'online') {
  takeFromServer()
} else {
  takeFromStorage()
}

function createNews(news) {
  var element = document.getElementById("news");
  element.innerHTML += '<div class="col-lg-4"><div class="article"> <center><img src = "' + news.image + '" alt = "News" width="300" height = "300"></center><center><h3>' + news.title + '</h3></center><p>' + news.text + '</p></div></div>'
}

function getNews() {
  var news = [];
  var news_item = localStorage.getItem('news');
  if (news_item !== null) {
    news = JSON.parse(news_item);
  }
  return news;
}

function takeFromServer() {
  console.log('online');
  var news = getNews();
  if ((typeof news !== 'undefined') && (news.length > 0)) {
    for (var i = 0; i < news.length; i++) {
      createNews(news[i]);
    }
  }
  localStorage.removeItem('news')
}
function takeFromStorage() {}
