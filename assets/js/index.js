const cardSection = document.querySelector('.card-section')
const card = document.querySelectorAll('.card');
const cardBack = document.querySelectorAll('.card-back')
const hOne = document.querySelector('.h1')
const playAgainDiv = document.querySelector('.play-again-div')
const playAgain = document.querySelector('.play-again')

let numberArray1 = [1, 2, 3, 4, 5, 6, 7, 8]
let numberArray2 = [1, 2, 3, 4, 5, 6, 7, 8]
let cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

assignCards()

let firstPick = null
let secondPick = null

let firstCardId = null

function flipCard(e) {

    if(e.target.classList.contains('card-front')) {
        if(firstPick == null) {
            const selectedCard = e.target.parentElement.parentElement
            selectedCard.classList.add('flip')
            firstPick = e.target.parentElement.children[1].innerText
            selectedCard.classList.add('first-card')
            firstCardId = e.target.parentElement.id
            
        } else {
            const selectedCard = e.target.parentElement.parentElement
            selectedCard.classList.add('flip')
            secondPick = e.target.parentElement.children[1].innerText
            
            if (secondPick == firstPick) {
                console.log(`It's a match!`)
                for (i = 0; i < card.length; i++) {
                  
                    if(card[i].children[0].parentElement.classList.contains('first-card')) {
                        card[i].children[0].parentElement.classList.remove('first-card')
                        
                        const cardIFEC = card[i].firstElementChild

                        setTimeout(function(){
                            cardIFEC.classList.add('match')
                            selectedCard.firstElementChild.classList.add('match')
                        }, 500)
                        setTimeout(function() {
                            cardIFEC.classList.remove('match')
                            selectedCard.firstElementChild.classList.remove('match')
                        }, 1000)
                    } 
                }
    
            } else {       
                for (i = 0; i < card.length; i++) {
                    if (card[i].children[0].parentElement.classList.contains('first-card')) {
                        card[i].children[0].parentElement.classList.remove('first-card') 
                        setTimeout(function() {
                            selectedCard.classList.remove('flip')
                            card[i].classList.remove('flip')
                        }, 1000); 
                        break;
                    }
                }
            }
            firstPick = null
            secondPick = null
            firstCardId = null

            allFlipped = document.querySelectorAll('.flip')
            if (allFlipped.length === 16) {
                setTimeout (function(){
                    hOne.innerText = "You win!"
                    playAgainDiv.classList.remove('hide-me')
                }, 1500)
                console.log('You win!')
            }
        }
        return firstPick, secondPick, firstCardId
    } else {
        console.log('You did not select a card.')
    }
}

function playGameAgain() {
    let allFlipped = document.querySelectorAll('.flip')
    for (i = 0; i < card.length; i++) {
        if (allFlipped.length === 16) {
            const singleCard = card[i] 
            singleCard.classList.remove('flip')
        }
    }
    hOne.innerText = 'Match the Cards!'
    playAgainDiv.classList.add('hide-me')
    cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    setTimeout(function(){
        assignCards()
        shuffle(cardArray)
    }, 2000)
    
}

function assignCards() {
    let shuffledCardArray = shuffle(cardArray)
    let shuffledNumberArray1 = shuffle(numberArray1)
    let shuffledNumberArray2 = shuffle(numberArray2)
    
    for (i = 0; i < cardBack.length; i++) {
        let cardNumber = shuffledCardArray.pop()
        cardBack[i].id = cardNumber
        if (cardNumber % 2 === 0) {
            let displayNumber = shuffledNumberArray2.pop()
            cardBack[i].innerText = displayNumber
        } else {
            let displayNumber = shuffledNumberArray1.pop()
            cardBack[i].innerText = displayNumber
        }
    }

    numberArray1 = [1, 2, 3, 4, 5, 6, 7, 8]
    numberArray2 = [1, 2, 3, 4, 5, 6, 7, 8]

}

function shuffle(arr) {
    let currentIndex = arr.length, randomIndex
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex], arr[currentIndex]];
  }

  return arr
}


cardSection.addEventListener('click', flipCard)
playAgainDiv.addEventListener('click', playGameAgain)