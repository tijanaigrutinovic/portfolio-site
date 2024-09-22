export function hamburgerMenu() {
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