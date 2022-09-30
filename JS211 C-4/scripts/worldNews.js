// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

////////////////////    user Details Sidebar    //////////////////////////

let user = JSON.parse(localStorage.getItem("user")) || [] ;

let sidebar = document.getElementById("sidebar");

  user.forEach((element) => {
    let img = document.createElement("img");
    img.src = element.image;
  
    let name = document.createElement("h2");
    name.innerText = element.name;
  
    let email = document.createElement("p");
    email.innerText = element.email;
  
    let country = document.createElement("p");
    country.innerText = `Country Code : ${element.country}`;
  
    let div = document.createElement("div");
    div.id = "userDetails";
  
    div.append(img,name,email,country);
    sidebar.append(div);

  });


//////////////////////////   INPUT SEARCH REDIRECT ////////////////////////////

var input = document.getElementById("search");

input.addEventListener("keypress", search);

async function search(event) {
  if (event.key === "Enter") {
    event.preventDefault();

    let query = document.getElementById("search").value;

    let data = await geData(query);

    append(data);

    searchNews(data);
  }
}

let geData = async (query) => {
  const url = `https://masai-api.herokuapp.com/news?q=${query}`;

  let res = await fetch(url);
  let data = await res.json();

  return data.articles;
};

///////////////////////////    COUNTRY SEARCH     /////////////////////////////

document.getElementById("in").addEventListener("click", india);
document.getElementById("ch").addEventListener("click", china);
document.getElementById("us").addEventListener("click", us);
document.getElementById("uk").addEventListener("click", uk);
document.getElementById("nz").addEventListener("click", nz);

async function india() {
  let country = (document.getElementById("in").value = "in");

  let data = await getData(country);
  append(data);
}

async function china() {
  let country = (document.getElementById("ch").value = "ch");

  let data = await getData(country);
  append(data);
}
async function us() {
  let country = (document.getElementById("us").value = "us");

  let data = await getData(country);
  append(data);
}
async function uk() {
  let country = (document.getElementById("uk").value = "uk");

  let data = await getData(country);
  append(data);
}
async function nz() {
  let country = (document.getElementById("nz").value = "nz");
  let data = await getData(country);
  append(data);
}

let getData = async (country) => {
  const url = `https://masai-api.herokuapp.com/news/top-headlines?country=${country}`;

  let res = await fetch(url);
  let data = await res.json();

  console.log(data);
  console.log(res);

  return data.articles;
};

///////////////////////////      APPEND DATA   ////////////////////////////////

let append = (data) => {
  let news = document.getElementById("news_container");
  news.innerHTML = null;

  data.forEach((element) => {
    let img = document.createElement("img");
    img.src = element.urlToImage;

    let imd = document.createElement("div");
    imd.append(img);

    let Title = document.createElement("h2");
    Title.innerText = element.title;
    Title.id = "newsTitle";

    let td = document.createElement("div");
    td.append(Title);

    let description = document.createElement("b");
    description.innerText = element.description;

    let dd = document.createElement("div");
    dd.append(description);

    let div = document.createElement("div");
    div.className = "news";
    div.onclick = () => {
      detailNews(element);
    };

    let pd = document.createElement("div");

    pd.append(td, dd);

    div.append(imd, pd);

    news.append(div);
  });
};

////////////////////////////////////////////////

let detailNews = (data) => {
  localStorage.setItem("news", JSON.stringify(data));
  window.location.href = "./news.html";
};
///////////////////////////////////////////////

let searchNews = (data) => {
  localStorage.setItem("searchData", JSON.stringify(data));
  window.location.href = "./search.html";
};


