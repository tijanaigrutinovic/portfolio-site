export function hamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('close');

    hamburger.addEventListener('click', () => {
        modal.style.display = 'block'; 
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none'; 
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}