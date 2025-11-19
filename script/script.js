const cardPhoto = document.querySelector(".bachecca");
const aPI = `https://lanciweb.github.io/demo/api/pictures/`

axios.get(aPI).then((resp) => {
    console.log(resp)
    const photoArray = resp.data;
    let photoString = " ";
    photoArray.forEach((curPhoto) =>{
        photoString += `<div class="card col p-20">
                    <img class="puntina" src="./img/pin.svg" alt="">
                    <img src="${curPhoto.url}" alt="">
                    <p class="fontdate">${curPhoto.date}</p>
                    <h3 class="uppercase">${curPhoto.title}</h3></div> `

        
                    
                
       
    });
    cardPhoto.innerHTML = photoString
})