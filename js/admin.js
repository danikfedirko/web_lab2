//news script

var newsButton = document.getElementById('sendArticle')
var articleField = document.getElementById('article')
var title = document.getElementById('title')
var image = document.getElementById('inputfile')

window.addEventListener('online', function(e) {
  localStorage.removeItem('news')
});

newsButton.addEventListener('click', function() {
  var articleFieldValue = articleField.value;
  var titleFieldValue = title.value;

  if (articleFieldValue.length == 0 || titleFieldValue.length == 0) {
    window.alert('Please fill the field');
  } else {
    addNews();

    function addNews() {
      class News {
        constructor(title, text, image) {
          this.title = title;
          this.text = text;
          this.image = image;
        }
      }

      var DEFAULT_PHOTO = "img/img.png";
      var news = new News(title.value, articleField.value, DEFAULT_PHOTO);
      navigator.onLine
        ? sendToServer()
        : addToStorage(news);
      alert('Article sent!');
      articleField.value = ''
      title.value = ''
    }

    function sendToServer() {
      localStorage.removeItem('news')
    }

    function addToStorage(newsItem) {
      news = []
      console.log(newsItem);
      news.push(newsItem);
      localStorage.setItem('news', JSON.stringify(news));
      return false;
    }

  }
});
