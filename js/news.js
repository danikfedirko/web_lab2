var condition = "offline";
var useLocalStorage = false

window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange

if (!window.indexedDB) {
  window.alert("Your browser doesn't support a stable version of IndexedDB.")
}

window.addEventListener('online', function(e) {
  var condition = 'online'
  takeFromServer()
});

window.addEventListener('offline', function(e) {
  var condition = 'offline'
  takeFromStorage()
});

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

function getNewsFromDB() {
  var dbNews = [];
  var db_news_item = ''
  const dbName = "Storage";
  var open = indexedDB.open(dbName);
  open.onsuccess = function() {
    var db = open.result;
    var tx = db.transaction("News", "readwrite");
    var objectStore = tx.objectStore("News");
    objectStore.openCursor().onsuccess = function(event) {
      var cursor = event.target.result;
      if (cursor) {
        db_news_item = cursor.value
      } else {}
      if (db_news_item !== null && db_news_item !== '') {
        dbNews.push(db_news_item)
          console.log(dbNews);
          for (var i = 0; i < dbNews.length; i++) {
            createNews(dbNews[i]);
          }
      }
    }
  }
  return true
}

  function takeFromServer() {
    if (useLocalStorage) {
      var news = getNews();
      if ((typeof news !== 'undefined') && (news.length > 0)) {
        for (var i = 0; i < news.length; i++) {
          createNews(news[i]);
        }
      }
      localStorage.removeItem('news')
    } else {
      getNewsFromDB();

      if(getNewsFromDB()){
      const dbName = "Storage";
      var open = indexedDB.open(dbName);
      open.onsuccess = function() {
        console.log('clear');
        var db = open.result;
        var tx = db.transaction("News", "readwrite");
        var objectStore = tx.objectStore("News");
        var objectStoreRequest = objectStore.clear();
      }
    }
    }
  }
  function takeFromStorage() {}
