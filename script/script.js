const API_URL = "https://lanciweb.github.io/demo/api/pictures/";
const cardPhoto = document.querySelector(".bachecca");
const overlay = document.querySelector(".overlay");
const content = document.querySelector(".content");
const close = document.querySelector(".btn");

axios.get(API_URL).then((resp) => {
  console.log(resp)
  const photoArray = resp.data;
  photoArray.forEach((curPhoto) => {
    cardPhoto.innerHTML += 
    `<div class="card col p-20"
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

  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      console.log(card)
      overlay.classList.remove("d-none");
      content.innerHTML = 
            `<div class="content">
                <img src="${card.dataset.url}" alt="">
                <p class="fontdate">${card.dataset.date}</p>
                <h3 class="uppercase">${card.dataset.title}</h3>
              </div>`;

    });

  });

});

close.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function closeModal() {
  overlay.classList.add("d-none");
}