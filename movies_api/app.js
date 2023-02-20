const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2f0931f4f1bd4a2a8e2a55413b890466';
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=2f0931f4f1bd4a2a8e2a55413b890466&query=";






const main = document.querySelector('.container');
const form = document.getElementById('form-1');
const search = document.getElementById('search-bar');

returnMovies(APILINK)
function returnMovies(url) {
  fetch(url).then(res => res.json())
    .then(function (data) {
      console.log(data.results);
      data.results.forEach(element => {
        const div_card = document.createElement('div');
        div_card.setAttribute('class', 'card');

        const div_row = document.createElement('div');
        div_row.setAttribute('class', 'row');

        const div_column = document.createElement('div');
        div_column.setAttribute('class', 'column');

        const title = document.createElement('p');
        title.setAttribute('id', 'card-name');

        const image = document.createElement('img');
        // image.setAttribute('class', 'thumbnail');
        image.setAttribute('class', 'card-img');



        // const center = document.createElement('div');

        title.innerHTML = `${element.title}`;
        image.src = IMG_PATH + element.poster_path;


        div_card.appendChild(image);
        div_card.appendChild(title);

        div_column.appendChild(div_card);
        div_row.appendChild(div_column);

        main.appendChild(div_row);
      });
    });
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = '';

  const searchItem = search.value;

  if (searchItem) {
    returnMovies(SEARCHAPI + searchItem);
    search.value = "";
  }
});


// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.querySelector('.navbar')

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}