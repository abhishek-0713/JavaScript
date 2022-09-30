// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

///////////////////////       Sidebar        //////////////////////////////

let user = JSON.parse(localStorage.getItem("user")) || [] ;

console.log(user);

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


/////////////////////////        Detailed News         ///////////////////////////////

let newsD = JSON.parse(localStorage.getItem("news"));
let detailNews = [];
detailNews.push(newsD);

function displayProducts(newsD) {
  let newsDetail = document.getElementById("show_news");
  newsDetail.innerHTML = null;

  newsD.forEach(function (element) {
    let img = document.createElement("img");
    img.src = element.urlToImage;

    let Title = document.createElement("h2");
    Title.innerText = element.title;

    let description = document.createElement("b");
    description.innerText = element.description;

    let content = document.createElement("p");
    content.innerText = element.content;

    let div = document.createElement("div");

    div.append(img, Title, description, content);

    newsDetail.append(div);
  });
}

displayProducts(detailNews);

var input = document.getElementById("search");
input.addEventListener("keypress", async function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    let query = document.getElementById("search").value;
    let data = await getData(query);
    append(data);
    search(data);
  }
});

let getData = async (query) => {
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

  let data = await Data(country);
  append(data);
}

async function china() {
  let country = (document.getElementById("ch").value = "ch");

  let data = await Data(country);
  append(data);
}
async function us() {
  let country = (document.getElementById("us").value = "us");

  let data = await Data(country);
  append(data);
}
async function uk() {
  let country = (document.getElementById("uk").value = "uk");

  let data = await Data(country);
  append(data);
}
async function nz() {
  let country = (document.getElementById("nz").value = "nz");
  let data = await Data(country);
  append(data);
}

let Data = async (country) => {
  const url = `https://masai-api.herokuapp.com/news/top-headlines?country=${country}`;

  let res = await fetch(url);
  let data = await res.json();

  console.log(data);
  console.log(res);

  return data.articles;
};

//////////////////////////////////////////////////////////////////////

let append = (data) => {

  let news = document.getElementById("show_news");
  news.innerHTML = null;

  data.forEach((element) => {
    let img = document.createElement("img");
    img.src = element.urlToImage;

    let imd = document.createElement("div");
    imd.append(img);

    let Title = document.createElement("h2");
    Title.innerText = element.title;

    let td = document.createElement("div");
    td.append(Title);

    let description = document.createElement("b");
    description.innerText = element.description;

    let dd = document.createElement("div");
    dd.append(description);

    let div = document.createElement("div");
    div.className = "news";
    div.onclick = () => {
      detailNs(element);
    };

    let pd = document.createElement("div");

    pd.append(td, dd);

    div.append(imd, pd);

    news.append(div);
  });
};
//////////////////////////////////////////////////////////////////

let detailNs = (data) => {
  localStorage.setItem("news", JSON.stringify(data));
  window.location.href = "./news.html";
};


let search = (data) => {
  localStorage.setItem("searchData", JSON.stringify(data));
  window.location.href = "./search.html";
};
