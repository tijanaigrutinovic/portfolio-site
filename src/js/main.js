import { animatedHero } from './animated-hero.js';
import { customCursor } from './custom-cursor.js';
import { darkLightTheme } from './dark-light-theme.js'; 
import { memoryGame } from './memory-game.js';
import { hamburgerMenu } from './hamburger-menu.js';

document.addEventListener('DOMContentLoaded', () => {
    hamburgerMenu();
    animatedHero();
    customCursor();
    darkLightTheme();
    memoryGame();
});