const myButton= document.querySelector('button');
const page=document.body;

const changeBackgrond = function(){
    const colors= ['yellow','red','green','blue','black','orange','pink'];
    const randomColor= colors[Math.floor(Math.random()*colors.length)];   
    page.style.backgroundColor= randomColor;
}

myButton.addEventListener('click', changeBackgrond);
