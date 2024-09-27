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
        setThemeColor(theme.value === 'dark' ? '#000000' : '#ffffff'); // Postavi boju toolbar-a
    };

    const reflectPreference = () => {
        document.documentElement.setAttribute('data-theme', theme.value);
        themeToggle.setAttribute('aria-label', theme.value);
    };

    const setThemeColor = (color) => {
        const metaThemeColor = document.querySelector("meta[name='theme-color']");
        if (metaThemeColor) {
            metaThemeColor.setAttribute("content", color);
        }
    };

    const theme = {
        value: getColorPreference(),
    };

    reflectPreference();

    themeToggle.addEventListener('click', () => {
        theme.value = theme.value === 'dark' ? 'light' : 'dark';
        setPreference();
        themeToggle.classList.add('rotate'); 
        setTimeout(() => themeToggle.classList.remove('rotate'), 500);
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches: isDark }) => {
        theme.value = isDark ? 'dark' : 'light';
        setPreference();
    });
}
