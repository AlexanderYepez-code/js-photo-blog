const cardPhoto = document.querySelector(".bachecca");
const api = "https://lanciweb.github.io/demo/api/pictures/";

// Loader 
const loader = `<p>Caricamento...</p>`;

async function loadPhotos() {
  // Mostra loader
  cardPhoto.innerHTML = loader;

  // Richiesta API
  const { data: photoArray } = await axios.get(api);

  // Genera HTML con destrutturazione
  const photoString = photoArray
    .map(({ url, date, title }) => `
      <div class="card col p-20">
      <img class="puntina" src="./img/pin.svg" alt="">
        <img src="${url}" alt="${title}">
        <p class="fontdate">${date}</p>
        <h3 class="uppercase">${title}</h3>
      </div>
    `)
    .join("");

  // Inserisce le card
  cardPhoto.innerHTML = photoString;
}

loadPhotos();