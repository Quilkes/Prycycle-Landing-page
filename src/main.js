document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

const initApp = () => {
    const menuBtn = document.getElementById('mobile-open-btn');
    const navOpen = document.getElementById('mobile-nav');

    const toggleBtn = () => {
        navOpen.classList.toggle('hidden');
        navOpen.classList.toggle('flex');
    };

    menuBtn.addEventListener('click', toggleBtn);
    navOpen.addEventListener('click', toggleBtn);

    
};
