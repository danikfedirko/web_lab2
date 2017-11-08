// feedback script
var button = document.getElementById('feedbackButton')
var feedbackField = document.getElementById('feedback')

button.addEventListener('click', function() {
    var feedbackFieldValue = feedbackField.value;

    if(feedbackFieldValue.length == 0){
      window.alert('Please fill the field');
    }
    else{
      var feedback = document.createElement('div');
      feedback.classList.add('feedback');

      var author =  document.createElement('h2');
      author.innerHTML = 'John Doe'

      var feedbackText = document.createElement('p');
      feedbackText.innerText = feedbackFieldValue

      var date = document.createElement('span');
      date.innerText = new Date().toDateString();

      feedback.appendChild(author);
      feedback.appendChild(date);
      feedback.appendChild(feedbackText);
      document.getElementById('feedbacksWrap').appendChild(feedback);

      feedbackField.value = ''
    }
 });

 //news script

 var newsButton = document.getElementById('sendArticle')
 var articleField = document.getElementById('article')
 var title = document.getElementById('title')

 newsButton.addEventListener('click', function() {
     var articleFieldValue = articleField.value;
     var titleFieldValue = title.value;

     if(articleFieldValue.length == 0 || titleFieldValue.length == 0){
       window.alert('Please fill the field');
       articleField.classList.add('alert');
       title.classList.add('alert');
     }
     else{
       articleField.value = ''
       title.value = ''
     }
  });
