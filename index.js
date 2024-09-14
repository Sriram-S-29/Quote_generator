let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

let getQuote = () => {
  fetch(url)
      .then((data) => data.json())
      .then((item) => {
          quote.innerText = item.content;
          author.innerText = item.author;
          let change = document.getElementById('change');
          change.style.backgroundColor = getRandomColor();
      })
      .catch((error) => {
          console.error('Error fetching quote:', error);
          // alert('ERROR HAPPENED IN API')
      });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);


$(document).ready(function() {
  const text = " Quote Generator!";
  const $typingElement = $('#typing-text');
  
  let index = 0;

  function typeText() {
      if (index < text.length) {
          $typingElement.text($typingElement.text() + text[index]);
          index++;
          setTimeout(typeText, 1000);
      } else {
          setTimeout(resetText, 2000);
      }
  }

  function resetText() {
      $typingElement.text('');
      index = 0;
      typeText();
  }

  typeText();
});


