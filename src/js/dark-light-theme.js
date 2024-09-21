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
    };

    const theme = {
        value: getColorPreference(),
    };

    reflectPreference();

    themeToggle.addEventListener('click', () => {
        themeToggle.classList.add('rotate'); // Dodaj rotaciju
        setTimeout(() => themeToggle.classList.remove('rotate'), 500); // Ukloni posle 500ms
        theme.value = theme.value === 'dark' ? 'light' : 'dark';
        setPreference();
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches: isDark }) => {
        theme.value = isDark ? 'dark' : 'light';
        setPreference();
    });
}
