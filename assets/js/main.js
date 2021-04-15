

// -----------------------------API for IMDB ---//

// allocate results to result container, create array, create key variable, 
// associate button to search

const result = document.querySelector(".result-container");
let resultArray = [];
const key = "k_x3bnm044";
let title = "";

// input #searchmovies to be sent as a search reference. 

$("#searchMovies").change(e => title = e.target.value);

// on click, retrieve data from IMDB, then as promise, json data back 
// to be entered into result array. 

$(".submit button").click(()=> {
   result.innerHTML = "";
   fetch (`https://imdb-api.com/en/API/SearchMovie/${key}/${title}`)
   .then(res => res.json()
            .then(data => {
            console.log(data) ;
            resultArray = data.results;
            console.log(resultArray);

// iterate each item of the array but return only image, title, 
// description, ID. 
        
        resultArray.forEach((item)=> {
            let div = document.createElement("div");
            div.className = "result";
            div.innerHTML = `
               <img src =${item.image}/>
               <h5> ${item.title}</h5>
               <h6>${item.description}</h6>
               <btn class = "btn-imdb"><a href = "http://imdb.com/title/${item.id}" target = "_blank">See IMDb</a></btn>
         `;
//append the div and contents into the result-container using the variable

         result.appendChild(div);
      }) ;
   
    }) 
)});