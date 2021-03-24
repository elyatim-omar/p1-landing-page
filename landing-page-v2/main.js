



function changecolor(color){
    const circle1 = document.querySelector('#circle1');
    const circle2 = document.querySelector('#circle2');
    const buy = document.querySelector('.content .text a');
    
    circle1.style.background = color;
    circle2.style.background = color;
    if(window.innerWidth>1080)
    {buy.style.background = color;}
    else{
        buy.style.background = '#000000'; 
    }

}   
function changeimg(anything){
    document.querySelector('.model').src = anything;
};

