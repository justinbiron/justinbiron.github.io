// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', currentTheme);

    // Update button text based on current theme and language
    updateThemeButton(currentTheme);

    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeButton(newTheme);
    });

    function updateThemeButton(theme) {
        const isFrench = document.documentElement.lang === 'fr';
        if (theme === 'light') {
            themeToggle.textContent = isFrench ? 'Mode Sombre' : 'Dark Mode';
            themeToggle.style.backgroundColor = 'var(--text-color)';
            themeToggle.style.color = 'var(--white)';
            themeToggle.style.borderColor = 'var(--text-color)';
        } else {
            themeToggle.textContent = isFrench ? 'Mode Clair' : 'Light Mode';
            themeToggle.style.backgroundColor = '#ffffff';
            themeToggle.style.color = '#333333';
            themeToggle.style.borderColor = '#cccccc';
        }
    }
});