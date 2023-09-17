let randomColor = function(){
    let hex = '0123456789ABCDEF';
    let color = '#'

    for(let i = 0; i < 6; i++){
        color += hex[Math.round(Math.random() * 16)]
    }
    return color;
}

let intervalId;

let stratChangingColor = function(){

    if(!intervalId){
        intervalId = setInterval(changeColor,1000)
    }

    function changeColor(){
        document.body.style.background = randomColor();
    }

    return intervalId;
}

let stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector('#start').addEventListener('click', stratChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)
