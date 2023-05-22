const myButton= document.querySelector('button');

myButton.style.cssText +='display:flex;justify-content:center';
const page=document.body;



const changeBackgrond = function(){
    const colors= ['yellow','red','green','blue','black','orange','pink'];
    const randomColor= colors[Math.floor(Math.random()*7)];   
    page.style.backgroundColor= randomColor;
}

myButton.addEventListener('click', changeBackgrond);