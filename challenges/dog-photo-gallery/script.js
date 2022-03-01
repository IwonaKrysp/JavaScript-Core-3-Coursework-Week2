let btn = document.getElementById("btn");
let ul = document.getElementById("ul");
let img = document.createElement("img");
let li = document.createElement("li");
li.style.listStyleType = "none";
const error = document.getElementById("error");

btn.addEventListener("click", () => {
  
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
   
      img.src = data.message;

      ul.appendChild(li);
      li.appendChild(img);

    })
    .catch((error) => {
      console.log(error);
      error.innerText = "Error ";
    });
});
