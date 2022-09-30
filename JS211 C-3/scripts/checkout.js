// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let money = +localStorage.getItem("amount") || 0 ;
document.getElementById("wallet").innerText = money;


function book_movie(){

    let per_seat = 100 ;

    let seats = +document.getElementById("number_of_seats").value;

    if(money >= per_seat * seats){

        money -= per_seat * seats ;

        localStorage.setItem("amount",JSON.stringify(money));
        document.getElementById("wallet").innerText = money;

        alert("Booking successfull!") ;

    }
    else{
        alert("Insufficient Balance !");
    }

}



    let movies = JSON.parse(localStorage.getItem("movie")) ;

      let div = document.createElement("div");
      div.id = "movie_tab";

      let poster = document.createElement("img");
      poster.src = movies.Poster; 
      poster.alt = "NA" ;
  
      let title = document.createElement("h2");
      title.innerText = movies.Title;

      div.append(poster, title);

      document.getElementById("movie").append(div);
