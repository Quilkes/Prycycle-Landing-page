document.addEventListener('DOMContentLoaded', () =>{
    initApp();
})

const initApp = () => {
    const menuBtn = document.querySelector('.menu');
    const navOpen = document.querySelector ('nav');

    menuBtn.addEventListener('click', toggleBtn)
    navOpen.addEventListener('click', toggleBtn)
}

const toggleBtn = () =>{
    const menuBtn = document.querySelector('.menu');
    const navOpen = document.querySelector ('nav');
    menuBtn.classList.toggle('open')
    navOpen.classList.toggle('open')
}