document.addEventListener('DOMContentLoaded', () => {


    const cardArray = [
        {
          name: 'fries',
          img: 'images/fries.png'
        },
        {
          name: 'cheeseburger',
          img: 'images/cheeseburger.png'
        },
        {
          name: 'ice-cream',
          img: 'images/ice-cream.png'
        },
        {
          name: 'pizza',
          img: 'images/pizza.png'
        },
        {
          name: 'milkshake',
          img: 'images/milkshake.png'
        },
        {
          name: 'hotdog',
          img: 'images/hotdog.png'
        },
        {
          name: 'fries',
          img: 'images/fries.png'
        },
        {
          name: 'cheeseburger',
          img: 'images/cheeseburger.png'
        },
        {
          name: 'ice-cream',
          img: 'images/ice-cream.png'
        },
        {
          name: 'pizza',
          img: 'images/pizza.png'
        },
        {
          name: 'milkshake',
          img: 'images/milkshake.png'
        },
        {
          name: 'hotdog',
          img: 'images/hotdog.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChoosen = []
    let cardsChoosenId = []
    let cardsWon = []

    function createBoard(){
        for (let i=0; i< cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipcard)
            grid.appendChild(card)
        }
    }

    //check for match
    function checkForMatch(){
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChoosenId[0]
        const optionTwoId = cardsChoosenId[1]
        if(optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('You have clicked the same image!')
        }
        else if (cardsChoosen[0]===cardsChoosen[1]){
            alert('you fouund a match')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cards[optionOneId].removeEventListener('click', flipcard)
            cards[optionTwoId].removeEventListener('click', flipcard)
            cardsWon.push(cardsChoosen)
        }
        else{
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            alert('Sorry, try again !')
        }
        cardsChoosen = []
        cardsChoosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congratulations ! you found them all !'
        }
    }

    //flip your card
    function flipcard(){
        let cardId = this.getAttribute('data-id')
        cardsChoosen.push(cardArray[cardId].name)
        cardsChoosenId.push(cardId)
        this.setAttribute('src',cardArray[cardId].img)
        if (cardsChoosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})

