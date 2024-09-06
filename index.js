//animated name on hero
document.addEventListener('DOMContentLoaded', function() {
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
});

// custom cursor
const cursor = document.querySelector('#cursor');

document.addEventListener('mousemove', (event) => {
    cursor.style.left = `${event.pageX}px`;
    cursor.style.top = `${event.pageY}px`;
    cursor.style.opacity = '1'; 
});

document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0'; 
});

document.addEventListener('DOMContentLoaded', () => {
    cursor.style.opacity = '0';
});