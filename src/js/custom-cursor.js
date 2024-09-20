export function customCursor() {
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
}