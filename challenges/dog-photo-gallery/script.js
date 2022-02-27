fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((body) => {
    let imageUrl = body.message;

    let contentDiv = document.getElementById("content");

    let imgEl = document.createElement("img");
    imgEl.src = imageUrl;

    contentDiv.appendChild(imgEl);
  })
  .catch((err) => console.log("something went wrong"));
