document.addEventListener('DOMContentLoaded', () =>{
    initApp();
})

const initApp = () => {
    const menuBtn = document.querySelector('.menu');
    const navOpen = document.querySelector ('nav');

    const toggleBtn = () =>{
        const menuBtn = document.querySelector('.menu');
        const navOpen = document.querySelector ('nav');
        menuBtn.classList.toggle('open')
        navOpen.classList.toggle('open')
    }

    menuBtn.addEventListener('click', toggleBtn);
    navOpen.addEventListener('click', toggleBtn);
}