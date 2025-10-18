const userIcon = document.getElementById('userIcon');
    const dropdown = document.getElementById('userDropdown');

function openDropdown() {
    dropdown.classList.toggle('show');
    const expanded = dropdown.classList.contains('show');
    userIcon.setAttribute('aria-expanded', expanded);
    dropdown.setAttribute('aria-hidden', !expanded);
}

userIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    openDropdown();
});
userIcon.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openDropdown();
    } else if (e.key === 'Escape') {
        dropdown.classList.remove('show');
        userIcon.setAttribute('aria-expanded', 'false');
        dropdown.setAttribute('aria-hidden', 'true');
        userIcon.focus();
    }
});
document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && !userIcon.contains(e.target)) {
        dropdown.classList.remove('show');
        userIcon.setAttribute('aria-expanded', 'false');
        dropdown.setAttribute('aria-hidden', 'true');
    }
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        dropdown.classList.remove('show');
        userIcon.setAttribute('aria-expanded', 'false');
        dropdown.setAttribute('aria-hidden', 'true');
    }
});