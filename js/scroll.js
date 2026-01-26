if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

function scrollToHash() {
    const hash = window.location.hash;
    if (!hash) return;

    const el = document.querySelector(hash);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}

// Try once on load (works for hard reload)
window.addEventListener('load', scrollToHash);

// Try again when dynamic content finishes loading (works for navigation)
document.addEventListener('dynamicContentReady', scrollToHash);
