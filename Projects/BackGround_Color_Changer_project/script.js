let buttons = document.querySelectorAll('.button')
let body = document.querySelector('body');

buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click',(e)=>{
        console.log(e);
        console.log(e.target);

        if(e.target.id === "grey"){
            document.body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "white"){
            document.body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "blue"){
            document.body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "yellow"){
            document.body.style.backgroundColor = e.target.id;
        }
    })
})