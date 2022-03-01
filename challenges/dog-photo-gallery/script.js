fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((body) => {
    let imageUrl = body.message;

    let contentDiv = document.getElementById("content");

    let imgEl = document.createElement("img");
    imgEl.src = imageUrl;

    contentDiv.appendChild(imgEl);


    let btn = document.getElementById("nextBtn");

    imgEl.addEventListener("click", function goNext(){
     return imageUrl;
    }
    );

  })
  .catch((err) => console.log("something went wrong"));
