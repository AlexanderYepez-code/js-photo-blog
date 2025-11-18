const cardPhoto = document.querySelector(".bachecca");
const aPI = `https://lanciweb.github.io/demo/api/pictures/`

axios.get(aPI).then((resp) => {
    console.log(resp)
    const photoArray = resp.data;
    let photoString = " ";
    photoArray.forEach((curPhoto) =>{
        photoString += `<div class="card col p-20">
                    <img src="${curPhoto.url}" alt="">
                    <h3>${curPhoto.title}</h3>
                    <p>${curPhoto.date}</p></div> `

        
                    
                
       
    });
    cardPhoto.innerHTML = photoString
})