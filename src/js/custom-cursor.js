export function customCursor() {
    const cursor = document.querySelector('#cursor');

    document.addEventListener('mousemove', (event) => {
        cursor.style.left = `${event.clientX}px`; 
        cursor.style.top = `${event.clientY}px`;
        cursor.style.opacity = '1'; 
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0'; 
    });

    document.addEventListener('DOMContentLoaded', () => {
        cursor.style.opacity = '0';
    });
    const mediaQuery = window.matchMedia('(max-width: 600px)')
        if (mediaQuery.matches) {
        cursor.style.opacity = '0'; 
        }
}

