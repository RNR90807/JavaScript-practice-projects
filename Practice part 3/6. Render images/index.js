// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

const divContainer = document.getElementById("container")

function setImages(){
    let images = ""
    for(let i = 0; i < imgs.length; i++){
        images += `<img alt="company employee" class="team-img" src="${imgs[i]}">`
    }
    divContainer.innerHTML = images //this way interaction with DOM less
}

setImages()
