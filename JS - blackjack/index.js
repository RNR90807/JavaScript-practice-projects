let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
//let sumEl = document.querySelector("#sum-el")

let player = {
    name: "Rog",
    chips: 140
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name +": $"+ player.chips


function getRandomCard(){
    let randCard = Math.floor(Math.random()*13) + 1
    if(randCard === 1){
        return 11
    } else if (randCard > 10){
        return 10
    } else {
        return randCard
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let seondCard = getRandomCard()
    sum = firstCard+seondCard
    cards = [firstCard, seondCard]
    renderGame()
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum
    
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] +" "
    }
    
    if (sum <= 20){
        message = "Do you want to draw another card?"
    } else if (sum === 21){
        hasBlackjack = true
        message = "You got Blackjack!"
    } else {
        isAlive = false
        message = "You're out of the game"
    }
    messageEl.textContent = message
}


function newCard(){
    if(isAlive === true && hasBlackjack === false){
        let newCard = getRandomCard()
        cards.push(newCard)
        sum += newCard
        renderGame()
    }
}