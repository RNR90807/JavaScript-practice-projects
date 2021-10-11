
let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment(){
    count += 1
    countEl.textContent = count
}

function save(){
    let saveCount = count + " - " 
    saveEl.textContent += saveCount
    console.log(count)

    count = 0
    countEl.textContent = count
}


