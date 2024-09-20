export function rockPaperScissors(){
    const gameContainer = document.querySelector('.container');
    const userResoult = document.querySelector('.user-result img');
    const computerResoult = document.querySelector('.computer-result img');
    const result = document.querySelector('.result');
    const optionImages = document.querySelectorAll('.option-image');

    function getTheme() {
        return document.documentElement.getAttribute('data-theme') || 'light'; 
    }

    optionImages.forEach((image, index) => {
        image.addEventListener('click', (e) => {
            image.classList.add('active');

            const currentTheme = getTheme();

            const userImagePath = currentTheme === 'dark' ? 'src/images/rock-hand.png' : 'src/images/rock-hand.png';
            const computerImagePath = currentTheme === 'dark' ? 'src/images/rock-comp-white.png' : 'src/images/rock-comp-black.png';

            userResoult.src = userImagePath;
            computerResoult.src = computerImagePath;

            result.innerHTML = `
                <div class="animated-words">
                    <span class="word animate__animated">paper</span>
                    <span class="word animate__animated">rock</span>
                    <span class="word animate__animated">scissors</span>
                </div>
            `;

            optionImages.forEach((image2, index2) => {
                index !== index2 && image2.classList.remove('active');
            });

            gameContainer.classList.add('start');

            let time = setTimeout(() => {
                gameContainer.classList.remove('start');

                let imageSrc = e.target.querySelector('img').src;
                userResoult.src = imageSrc;

                const computerImages = currentTheme === 'dark'
                    ? ['src/images/rock-comp-white.png', 'src/images/paper-comp-white.png', 'src/images/scissors-comp-white.png']
                    : ['src/images/rock-comp-black.png', 'src/images/paper-comp-black.png', 'src/images/scissors-comp-black.png'];

                let randomNumber = Math.floor(Math.random() * 3);
                computerResoult.src = computerImages[randomNumber];

                let computerValue = ['R', 'P', 'S'][randomNumber];
                let userValue = ['R', 'P', 'S'][index];

                let outcomes = {
                    RR: 'Draw',
                    RP: 'Computer',
                    RS: 'You',
                    PP: 'Draw',
                    PR: 'You',
                    PS: 'Computer',
                    SS: 'Draw',
                    SR: 'Computer',
                    SP: 'You',
                };

                let outComeValue = outcomes[userValue + computerValue];

                result.textContent = userValue === computerValue ? 'Match Draw' : `${outComeValue} Won!!`;
            }, 2500);

            animateWords();
        });
    });

    function animateWords() {
        const words = document.querySelectorAll('.word');

        words.forEach((word, index) => {
            setTimeout(() => {
                word.style.opacity = '1'; 

              
                if (index === 0) {
                    word.classList.add('animate__zoomInLeft'); 
                } else if (index === 1) {
                    word.classList.add('animate__zoomInDown'); 
                } else if (index === 2) {
                    word.classList.add('animate__zoomInRight'); 
                }

                
                setTimeout(() => {
                    word.style.opacity = '0'; 
                }, 800); 
            }, index * 600); 
        });
    }
}

export function setComputerImage() {
    const computerImage = document.querySelector('.computer-result img');

    function updateImage() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';

        if (currentTheme === 'dark') {
            computerImage.src = 'src/images/rock-comp-white.png';
        } else {
            computerImage.src = 'src/images/rock-comp-black.png'; 
        }
    }

    updateImage();

    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('change', updateImage);
}