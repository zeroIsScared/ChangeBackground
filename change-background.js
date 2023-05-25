const myButton = document.querySelector('button');
const page = document.body;

const randomNumber = (num) => Math.floor(Math.random() * num);

const changeBackgrond = function () {
    const colors = ['yellow', 'red', 'green', 'blue', 'black', 'orange', 'pink'];
    const randomColor = colors[randomNumber(colors.length)];
    page.style.backgroundColor = randomColor;
}

myButton.addEventListener('click', changeBackgrond);
