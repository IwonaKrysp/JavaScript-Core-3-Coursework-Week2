let img = document.getElementById("img");
let error = document.getElementById("error");


let fetchData = () => {

  fetch(`https://xkcd.now.sh/?comic=latest`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      img.src = data.img;
    })
    .catch((error) => {
      console.log(error);
      error.innerText = "Error";
    });
};
fetchData();