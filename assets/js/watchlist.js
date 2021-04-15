let movieList = JSON.parse(window.localStorage.getItem("movieList"))|| [];
console.log(movieList);
let currentMovie = "";


const movieInput = document.querySelector(".movies-input");
const saveBtn = document.querySelector(".save-btn");
const ul = document.querySelector(".saved-movies");
const tick = document.querySelector(".tick");
const done = document.querySelector(".tick-linethrough");


const listRendering = () => {
    ul.innerHTML = "";
      movieList.forEach(movie => {
        const li = document.createElement("li");


        li.innerHTML = `
            <h3 class="element ${movie.viewed && 'viewed-movie'}">${movie.title} </h3>
            <div class = "box"><span onclick= "handleDelete(this, '${movie.title}')" class = "cross"><i class="far fa-times-circle"></i></span> <span onclick= "handleViewedClick(this, '${movie.title}')" class = "tick"><i class="far fa-check-circle"></i> </span> </div>
        `;
        ul.appendChild(li);
    });
};

listRendering();


movieInput.addEventListener("change", (e) => {
    e.preventDefault();
    console.log(currentMovie);
    currentMovie = e.target.value;
    console.log(currentMovie);
});



saveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    movieList.push({
        title: currentMovie,
        viewed: false
    });
    window.localStorage.setItem("movieList", JSON.stringify(movieList));
    console.log(window.localStorage);
    listRendering();
})

function handleDelete(e, title) {
    movieList = movieList.filter((movie) => movie.title !== title);
    window.localStorage.setItem("movieList", JSON.stringify(movieList));
    console.log(movieList, window.localStorage);
    listRendering();   

}

function handleViewedClick(e, title) {
      const remainingMovies = movieList.map((movie) => {
          if (movie.title === title) {
               movie.viewed = !movie.viewed;
          }

          return movie;
      });
    console.log(remainingMovies);
  

    window.localStorage.setItem("movieList", JSON.stringify(remainingMovies));
    listRendering();
    console.log(movieList, window.localStorage)  ;

}

