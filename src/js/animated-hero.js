export function animatedHero() {
    const animatedText = document.querySelector('#animatedText');
    const textToAnimate = 'Tijana Igrutinović';
    
    let index = 0;
    let isDeleting = false;
    let speed = 100;
    let pauseAfterTyping = 3000; 

    function typeWriter() {
        if (!isDeleting) {
            if (index < textToAnimate.length) {
                animatedText.textContent += textToAnimate.charAt(index);
                index++;
            } else {
                setTimeout(() => {
                    isDeleting = true;
                    typeWriter(); 
                }, pauseAfterTyping);
                return;
            }
        } else {
            if (index > 0) {
                animatedText.textContent = textToAnimate.substring(0, index - 1);
                index--;
            } else {
                isDeleting = false; 
            }
        }

        setTimeout(typeWriter, speed);
    }

    typeWriter();
}
