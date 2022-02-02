const chuckButEl = document.querySelector('#chuckButton'),
chuckSpanEl = document.querySelector('#chuck'),
catButEl = document.querySelector('#kittieButton'),
catImgEl = document.querySelector('#katta');

chuckButEl.addEventListener('click', e => {
    fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => {
      chuckSpanEl.innerHTML = data.value; 
  });
})

catButEl.addEventListener('click', e => {
    fetch('https://cataas.com/cat?json=true')
  .then(response => response.json())
  .then(data => {
      catImgEl.innerHTML =data.url;  
  });
})
