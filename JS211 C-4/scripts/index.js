/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/


let user = JSON.parse(localStorage.getItem("user")) || [] ;

function news(image,name,email,country){

    this.image = image;
    this.name = name;
    this.email = email;
    this.country = country;
}


let getData = () => {

    let image = document.getElementById("image").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let country = document.getElementById("country").value;
  
    
    let details = new news(image,name,email,country);

    user.push(details);

    localStorage.setItem("user", JSON.stringify(user))

}