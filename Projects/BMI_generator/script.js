let form = document.querySelector('form')

form.addEventListener('submit',function (e) {
    e.preventDefault();

    const height = Number.parseInt(document.querySelector('#height').value);
    const weight = Number.parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const details = document.querySelector('#details')

    if(height == '' || height < 0 || isNaN(height)){
        results.innnerHTML = `please enter a valid height`;
    }
    else if(weight == '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `please enter a valid weight`;
    }
    else{
        let bmi = (weight / ((height*height)/10000)).toFixed(2);
        results.innerHTML = `${bmi}`

        if(bmi <= "18.6"){
            details.innerHTML = `You are under weight`
        }
        else if(bmi > "18.6" && bmi < "24.9"){
            details.innerHTML = `You are in normal range`
        }
        else if(bmi > 24.9){
            details.innerHTML = `You are over weight`
        }
    }

    
})