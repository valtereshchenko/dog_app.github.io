const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
const select = document.querySelector('.breeds');
const img = document.querySelector('.dogimg');

fetch(BREEDS_URL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const breedsObject = data.message;
        const breedsArray = Object.keys(breedsObject);

        for (let i=0; i<breedsArray.length; i++) {
            const option = document.createElement('option');
            option.value = breedsArray[i];
            option.innerText = breedsArray[i];
            select.appendChild(option); 
        }
        //document.querySelector('.doggos').appendChild(img);             
    // stop showing loading spinner
    }) 
    

function addDoggo (url) {
    // show loading spinner
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function (data) {
            img.src = data.message;
    }
        )
}


select.addEventListener("change", function(event) {
    let selected = event.target.value; 
    let url = `https://dog.ceo/api/breed/${selected}/images/random`
    
    addDoggo(url);

})

  