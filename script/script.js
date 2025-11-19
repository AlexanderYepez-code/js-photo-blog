const cardPhoto = document.querySelector(".bachecca");
const aPI = `https://lanciweb.github.io/demo/api/pictures/`
const overlay = document.querySelector(".overlay")
let content = document.querySelector(".content")
const close = document.querySelector(".btn")

axios.get(aPI).then((resp) => {
  console.log(resp)
  const photoArray = resp.data;
  let photoString = " ";
  photoArray.forEach((curPhoto) => {
    photoString += `<div class="card col p-20"
         data-url="${curPhoto.url}"
         data-date="${curPhoto.date}"
         data-title="${curPhoto.title}">
        <img class="puntina" src="./img/pin.svg" alt="">
        <img src="${curPhoto.url}" alt="">
        <p class="fontdate">${curPhoto.date}</p>
        <h3 class="uppercase">${curPhoto.title}</h3>
    </div>
`;





  });
  cardPhoto.innerHTML = photoString


  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      console.log(card)
      overlay.classList.remove("d-none");
      content.innerHTML = `<div class="content">
                <img src="${card.dataset.url}" alt="">
                <p class="fontdate">${card.dataset.date}</p>
                <h3 class="uppercase">${card.dataset.title}</h3>
                </div>
            `;

    });

  });

});
close.addEventListener("click", () => {
  overlay.classList.add("d-none");
});
overlay.addEventListener("click", () => {
  overlay.classList.add("d-none");
});