const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all';
const select = document.querySelector('.breeds');
const img = document.querySelector('.dogimg');
const spinner = document.querySelector('.spinner');

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
    spinner.classList.add('show');
    img.classList.remove('show');
    // show loading spinner
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function (data) {
            img.src = data.message;
            //spinner.classList.remove('show');
            //img.classList.add ('show');
    }
        )
}

img.addEventListener("load", function() {
    // what until this "load" event happens
    spinner.classList.remove("show");
    // remove the show from the spinner and add it to the image
    img.classList.add ('show');
})

select.addEventListener("change", function(event) {
    let selected = event.target.value; 
    let url = `https://dog.ceo/api/breed/${selected}/images/random`
    
    addDoggo(url);

})

  