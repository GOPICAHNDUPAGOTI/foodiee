let printMessage = (message, color) => {
    let anchorTag = document.querySelector('#head');
    anchorTag.innerHTML = message;
    anchorTag.style.backgroundColor = color;

};
let Home = document.querySelector('.home');
Home.addEventListener('mouseenter',function (){
    printMessage('Home','orange');
});
let Burger = document.querySelector('.burger');
Burger.addEventListener('mouseenter',function (){
    printMessage('Burger','Fuchsia');
});
let pizza = document.querySelector('.pizza');
pizza.addEventListener('mouseenter',function (){
    printMessage('pizza','Crimson');
});
let Biryani = document.querySelector('.biryani');
Biryani.addEventListener('mouseenter',function (){
    printMessage('Biryani','Green');
});
let noodles = document.querySelector('.noodles');
noodles.addEventListener('mouseenter',function (){
    printMessage('noodles','red');
});
let juices = document.querySelector('.juices');
juices.addEventListener('mouseenter',function (){
    printMessage('juices','purple');
});


