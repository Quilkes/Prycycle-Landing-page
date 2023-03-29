document.addEventListener('DOMContentLoaded', () =>{
    initApp();
})

const initApp = () => {
    const menuBtn = document.querySelector('.menu');
    const navOpen = document.querySelector ('nav');

    menuBtn.addEventListener('click', toggleBtn)
    navOpen.addEventListener('click', toggleBtn)

    const headline = document.getElementById('headline');
const cursor = document.getElementById('cursor');
const text = headline.innerText;

function eraseText() {
  headline.innerText = headline.innerText.slice(0, -1);
  if (headline.innerText.length === 0) {
    clearInterval(intervalId);
    setTimeout(writeText, 1000);
  }
}

function writeText() {
  headline.innerText = '';
  let i = 0;
  intervalId = setInterval(() => {
    headline.innerText += text.charAt(i);
    i++;
    if (i === text.length) {
      clearInterval(intervalId);
    }
  }, 100);
}

let intervalId = setInterval(eraseText, 100);

}

const toggleBtn = () =>{
    const menuBtn = document.querySelector('.menu');
    const navOpen = document.querySelector ('nav');
    menuBtn.classList.toggle('open')
    navOpen.classList.toggle('open')
}
