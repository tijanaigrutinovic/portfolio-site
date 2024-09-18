const gameContainer = document.querySelector('.container');
const userResoult = document.querySelector('.user-result img');
const computerResoult = document.querySelector('.computer-result img');
const result = document.querySelector('.result');
const optionImages = document.querySelectorAll('.option-image');

optionImages.forEach((image,index) => {
    image.addEventListener('click', (e) =>{
        image.classList.add('active');

        userResoult.src = computerResoult.src = 'images/rock.png';
        result.textContent = 'Wait...'

        optionImages.forEach((image2,index2) => {
            index !== index2 && image2.classList.remove('active');
        });

        gameContainer.classList.add('start');

        let time = setTimeout(() => {
            gameContainer.classList.remove('start');
            let imageSrc = e.target.querySelector('img').src;
            userResoult.src = imageSrc;
            let randomNumber = Math.floor(Math.random() * 3);
            console.log(randomNumber);

            let computerImages = ['images/rock.png', 'images/paper.png', 'images/scissors.png'];
            computerResoult.src = computerImages[randomNumber];

            let computerValue = ['R', 'P', 'S'][randomNumber];
            let userValue = ['R', 'P', 'S'][index];

            let outcomes = {
                RR: 'Draw',
                RP: 'Tijana',
                RS: 'You',
                PP: 'Draw',
                PR: 'You',
                PS: 'Tijana',
                SS: 'Draw',
                SR: 'Tijana',
                SP: 'You',
            };

            let outComeValue = outcomes[userValue + computerValue];
            
            result.textContent = userValue === computerValue ? 'Match Draw' : `${outComeValue} Won!!`;
        }, 3000);
    });
});

