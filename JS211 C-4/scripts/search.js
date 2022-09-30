// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

///////////////////////////////////////////////////////////////////////////////

let searchData = JSON.parse(localStorage.getItem("searchData")) || [];

displayNews(searchData);

function displayNews(searchData) {
  let news = document.getElementById("news_container");
  news.innerHTML = null;

  searchData.forEach((element) => {
    let img = document.createElement("img");
    img.src = element.urlToImage;

    let imd = document.createElement("div");
    imd.append(img);

    let Title = document.createElement("h3");
    Title.innerText = element.title;

    let td = document.createElement("div");
    td.append(Title);

    let description = document.createElement("p");
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
}

/////////////////////////////////////////////////////////////////////////

var input = document.getElementById("search");
input.addEventListener("keypress", async function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    let query = document.getElementById("search").value;
    let data = await getData(query);
    append(data);
  }
});

let getData = async (query) => {
  const url = `https://masai-api.herokuapp.com/news?q=${query}`;

  let res = await fetch(url);
  let data = await res.json();

  console.log(data);
  console.log(res);

  return data.articles;
};

let append = (data) => {
  let news = document.getElementById("news_container");
  news.innerHTML = null;

  data.forEach((element) => {
    let img = document.createElement("img");
    img.src = element.urlToImage;

    let imd = document.createElement("div");
    imd.append(img);

    let Title = document.createElement("h3");
    Title.innerText = element.title;

    let td = document.createElement("div");
    td.append(Title);

    let description = document.createElement("p");
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

///////////////////////////////////////////////////////////////////////////

let detailNews = (data) => {
  localStorage.setItem("news", JSON.stringify(data));
  window.location.href = "./news.html";
};
