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

    // const headline = document.getElementById('headline');
    // const cursor = document.getElementById('cursor');
    // const text = headline.innerText;

    // function erase() {
    //     let interval = setInterval(function() {
    //         if (text.length == 0) {
    //             clearInterval(interval);
    //         } else {
    //             text = text.slice(0, -1);
    //             headline.innerHTML = text;
    //         }
    //     }, 50);
    // }

    // function write() {
    //     let index = 0;
    //     let interval = setInterval(function() {
    //         if (index == text.length) {
    //             clearInterval(interval);
    //         } else {
    //             let char =text.charAt(index);
    //             if (char == '') {
    //                 headline.innerHTML += "&nbsp;";
    //             } else{
    //                 headline.innerHTML += char;
    //             }
    //             index++;
    //         }
    //     }, 50) 
    // }

    // headline.addEventListener('click', () =>{
    //     erase();
    //     setTimeout(() =>{
    //         write();
    //     }, 500);
    // });

}