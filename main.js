document.addEventListener('DOMContentLoaded', () =>{
    initApp();
})

const initApp = () => {
    const menuBtn = document.querySelector('.menu');
    const navOpen = document.querySelector ('nav');

    menuBtn.addEventListener('click', toggleBtn);
    navOpen.addEventListener('click', toggleBtn);

    const headline = document.getElementById('headline');
    const cursor = document.getElementById('cursor');
    const text = headline.innerText;

    function erase() {
        let text = document.querySelector('#text').innerHTML;
        let interval = setInterval(function() {
            if (text.length == 0) {
                clearInterval(interval);
            } else {
                text = text.slice(0, -1);
                document.querySelector('#text').innerHTML = text;
            }
        }, 50);
    }


    function write() {
        let text = 'Bicycles, Skateboards, and Accessories!!!';
        let index = 0;
        let interval = setInterval(function() {
            if (index == text.length) {
                clearInterval(interval);
            } else {
                let char =text.charAt(index);
                if (char == "") {
                    document.querySelector('#text').innerHTML += "&nbsp;";
                } else {
                    document.querySelector('#text').innerHTML += char;
                }
                index++;
            }
        }, 50) 
    }

    const toggleBtn = () =>{
        const menuBtn = document.querySelector('.menu');
        const navOpen = document.querySelector ('nav');
        menuBtn.classList.toggle('open')
        navOpen.classList.toggle('open')
    }
}