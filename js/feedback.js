// feedback script
var button = document.getElementById('feedbackButton')
var feedbackField = document.getElementById('feedback')

window.addEventListener('online', function(e) {
  localStorage.removeItem('feedbacks')
});

button.addEventListener('click', function() {
    var feedbackFieldValue = feedbackField.value;

    if(feedbackFieldValue.length == 0){
      window.alert('Please fill the field');
    }
    else{
      var feedback = '<div class="feedback"><h2> Вася Петькін</h2><span>'+ new Date().toDateString() +'</span><p>'+ feedbackField.value+'</p></div>'
      var feedbacks= document.getElementById('feedbacksWrap')
      var feedbackWrap = document.createElement('div')
      feedbackWrap.innerHTML = feedback
      feedbacks.appendChild(feedbackWrap)
      addFeedback();

      function addFeedback() {
        class Feedback {
          constructor(text, author, date) {
            this.text = text;
            this.author = author;
            this.date = date;
          }
        }
        var date = new Date().toDateString();
        var feedbacks = new Feedback(feedbackField.value, 'Вася Петькін',date);
        navigator.onLine
          ? sendToServer()
          : addToStorage(feedbacks);
        alert('Article sent!');
        feedbackField.value = ''
      }

      function sendToServer() {}

      function addToStorage(feedbacksItem) {
        feedbacks = []
        feedbacks.push(feedbacksItem);
        localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
        return false;
      }
    }
 });
