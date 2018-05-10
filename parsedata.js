var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'https://focused-stonebraker-1166ed.netlify.com/mdihistory.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var superHeroes = request.response;
    showHeroes(superHeroes);
  }

  function showHeroes(jsonObj) {
    var heroes = jsonObj['members'];
    var myList = document.createElement('ul');

    for (var i = 0; i < heroes.length; i++) {
      
        var listItem = document.createElement('li');
        listItem.textContent = heroes[1].title;
        myList.appendChild(listItem);
      }
  }
  