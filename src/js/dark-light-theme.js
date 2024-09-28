export function darkLightTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const storageKey = 'theme-preference';

    const getColorPreference = () => {
        if (localStorage.getItem(storageKey)) {
            return localStorage.getItem(storageKey);
        } else {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
    };

    const setPreference = () => {
        localStorage.setItem(storageKey, theme.value);
        reflectPreference();
    };

    const reflectPreference = () => {
        document.documentElement.setAttribute('data-theme', theme.value);
        themeToggle.setAttribute('aria-label', theme.value);

        // Dinamički menja boju toolbar-a u Safari-u
        const isDark = theme.value === 'dark';
        const newColor = isDark ? '#000000' : '#ffffff'; // Boje za tamnu i svetlu temu
        setThemeColor(newColor);
    };

    const theme = {
        value: getColorPreference(),
    };

    reflectPreference();

    themeToggle.addEventListener('click', () => {
        themeToggle.classList.add('rotate'); 
        setTimeout(() => themeToggle.classList.remove('rotate'), 500);
        theme.value = theme.value === 'dark' ? 'light' : 'dark';
        setPreference();
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches: isDark }) => {
        theme.value = isDark ? 'dark' : 'light';
        setPreference();
    });

    function setThemeColor(color) {
        const metaThemeColor = document.querySelector("meta[name='theme-color']");
        if (metaThemeColor) {
            metaThemeColor.setAttribute("content", color);
        }
    }
}
