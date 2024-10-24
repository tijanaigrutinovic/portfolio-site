export function memoryGame() {
    const cards = document.querySelectorAll(".card");
    const resolveBtn = document.querySelector(".resolve-game"); 
    const resolveGameCopy = document.querySelector('.resolve-game-copy');
    let matched = 0;
    let cardOne, cardTwo;
    let disableDeck = false;

    resolveBtn.style.display = "none";
    resolveGameCopy.style.display = "none";

    function flipCard({target: clickedCard}) {
        if(cardOne !== clickedCard && !disableDeck) {
            clickedCard.classList.add("flip");
            if(!cardOne) {
                return cardOne = clickedCard;
            }
            cardTwo = clickedCard;
            disableDeck = true;
            let cardOneImg = cardOne.querySelector(".back-view img").src,
            cardTwoImg = cardTwo.querySelector(".back-view img").src;
            matchCards(cardOneImg, cardTwoImg);
        }
    }

    function matchCards(img1, img2) {
        if(img1 === img2) {
            matched++;
           
            cardOne.removeEventListener("click", flipCard);
            cardTwo.removeEventListener("click", flipCard);
            cardOne = cardTwo = "";
            disableDeck = false;

            if (matched === 1) {
                resolveBtn.style.display = "block"; 
                resolveGameCopy.style.display = "block";
            }

            return;
        }
        setTimeout(() => {
            cardOne.classList.add("shake");
            cardTwo.classList.add("shake");
        }, 400);

        setTimeout(() => {
            cardOne.classList.remove("shake", "flip");
            cardTwo.classList.remove("shake", "flip");
            cardOne = cardTwo = "";
            disableDeck = false;
        }, 1200);
    }

    function shuffleCard() {
        matched = 0;
        disableDeck = false;
        cardOne = cardTwo = "";
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
        arr.sort(() => Math.random() > 0.5 ? 1 : -1);
        cards.forEach((card, i) => {
            card.classList.remove("flip");
            let imgTag = card.querySelector(".back-view img");
            imgTag.src = `src/images/img-${arr[i]}.png`;
            card.addEventListener("click", flipCard);
        });

        resolveBtn.style.display = "none";
        resolveGameCopy.style.display = "none";
    }

    function resolveGame() {
        cards.forEach(card => {
            if (!card.classList.contains("flip")) {
                card.classList.add("flip");
            }
        });
    }

    resolveBtn.addEventListener("click", resolveGame);

    shuffleCard();
        
    cards.forEach(card => {
        card.addEventListener("click", flipCard);
    });
}
