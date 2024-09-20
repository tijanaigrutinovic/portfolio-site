import { animatedHero } from './animated-hero.js';
import { customCursor } from './custom-cursor.js';
import { darkLightTheme } from './dark-light-theme.js'; 
import { memoryGame } from './memory-game.js';
import { rockPaperScissors } from './rock-paper-scissors.js';
import { setComputerImage } from './rock-paper-scissors.js';

document.addEventListener('DOMContentLoaded', () => {
    animatedHero();
    customCursor();
    darkLightTheme();
    memoryGame();
    rockPaperScissors();
    setComputerImage();
});