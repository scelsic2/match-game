const cardSection = document.querySelector('.card-section')
const card = document.querySelectorAll('.card')
const cardBack = document.querySelectorAll('.card-back')

const numberArray1 = [1, 2, 3, 4, 5, 6, 7, 8]
const numberArray2 = [1, 2, 3, 4, 5, 6, 7, 8]
const cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

assignCards()

let firstPick = null
let secondPick = null

function flipCard(e) {
    if(firstPick == null) {
        const selectedCard = e.target.parentElement.parentElement
        selectedCard.classList.add('flip')
        firstPick = e.target.parentElement.children[1].innerText
        selectedCard.dataset.attribute = 0

    } else {
        const selectedCard = e.target.parentElement.parentElement
        selectedCard.classList.add('flip')
        secondPick = e.target.parentElement.children[1].innerText
        
        if (secondPick == firstPick) {
            console.log(`It's a match!`)
        } else {
            setInterval(function() {
                selectedCard.classList.remove('flip')
              }, 2000);
              
            for (i = 0; i < card.length; i++) {
                let dataAttribute = card[i].attributes[1]
                
                if (dataAttribute == 0) {
                    console.log('-----dataAttribute-----')
                    console.log(dataAttribute)
                    
                } else {
                    setInterval(function() {
                        selectedCard.classList.remove('flip')
                        console.log(cardAtIndex)
                        // card[i].classList.remove('flip')
                      }, 2000);
                      card[i].removeAttribute('data-attribute')
                }
            }
              firstPick = null
              secondPick = null
        }
    }
    return firstPick, secondPick
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