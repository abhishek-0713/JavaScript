// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let money = +localStorage.getItem("amount") || 0 ;

document.getElementById("wallet").innerText = money;

////////////////////    Debouncing    /////////////////////////////



const debouncing = (func, delay) => {

    let debounce ;

    return function(){
        const i = this ;
        const args = arguments ;
        clearTimeout(debounce)
        debounce = setTimeout(() => func.apply(i,args), delay)
    }
}

 
let input = document.getElementById("search");

input.addEventListener("input", debouncing(function(){

    let query = document.getElementById("search").value;

    getData(query);

}, 3000));

////////////////////    Fetch Movies Data     /////////////////////  

let data;

    async function getData(movie) {
        try {

        const url = `https://www.omdbapi.com/?apikey=47c5f61b&s=${movie}`;

          let res = await fetch(url);
    
           data = await res.json();

           append(data.Search);

        } 
        catch (err) {

          console.log(err);

        }
      }

////////////////////    Append Movies Data     /////////////////////    
      
    function append(data) {

      let container = document.getElementById("movies");
      container.innerHTML = null;
    
 
      data.forEach(function (element) {

        let div = document.createElement("div");
        div.className = "movie_tab";

        let poster = document.createElement("img");
        poster.src = element.Poster; 
        poster.alt = "NA" ;
    
        let title = document.createElement("h2");
        title.innerText = element.Title;
    
        let Year = document.createElement("p");
        Year.innerText = `Released Year : ${element.Year}`;
    
        let type = document.createElement("p");
        type.innerText = `Genres : ${element.Type}`;

        
        let typeDiv = document.createElement("p");
        typeDiv.id = "typeDiv";
        typeDiv.append(type,Year)

        
        let book = document.createElement("button");
        book.className = "book_now";
        book.innerText = `Book Now`;
        book.addEventListener("click", function(){


            localStorage.setItem("movie", JSON.stringify(element));

            window.location.href = "./checkout.html"

            console.log(movies);

        })



        div.append(poster, title,typeDiv,book);
        container.append(div);
    
      });
    }

//////////////////////////////////////////////////////////////////////////