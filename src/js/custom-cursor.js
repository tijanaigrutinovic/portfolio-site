export function customCursor() {
    const cursor = document.querySelector('#cursor');

    document.addEventListener('mousemove', (event) => {
        cursor.style.left = `${event.clientX}px`; // No need for scroll offset since we're using position: fixed
        cursor.style.top = `${event.clientY}px`;
        cursor.style.opacity = '1'; 
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0'; 
    });

    document.addEventListener('DOMContentLoaded', () => {
        cursor.style.opacity = '0';
    });
}

