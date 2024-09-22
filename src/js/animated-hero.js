export function animatedHero() {
    //animated name on hero
    const animatedText = document.querySelector('#animatedText');
    const textToAnimate = 'Tijana Igrutinović'; 
    
    let index = 0;
    let isDeleting = false;
    let speed = 100;
    
    function typeWriter() {
        if (!isDeleting) {
            if (index < textToAnimate.length) {
                animatedText.textContent += textToAnimate.charAt(index);
                index++;
            } else {
                isDeleting = true;
                speed = 50; 
            }
        } else {
            if (index > 0) {
                animatedText.textContent = textToAnimate.substring(0, index - 1);
                index--;
            } else {
                isDeleting = false;
                speed = 100; 
            }
        }
        setTimeout(typeWriter, speed);
    }
    typeWriter();

    const hamburger = document.getElementById('hamburger');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close');

    hamburger.addEventListener('click', () => {
        modal.style.display = 'block'; // Prikazuj modal
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none'; // Zatvori modal
    });

    // Zatvori modal ako se klikne van njega
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

}