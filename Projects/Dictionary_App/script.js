let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

let result = document.getElementById("result")
let sound = document.getElementById("speaker")

let button = document.getElementById("btn")

button.addEventListener('click',(e)=>{
    let inpWord = document.getElementById("inp-word").value
    fetch(`${url}${inpWord}`)
    .then((response)=> response.json())
    .then((data)=>{
        console.log(data);
        result.innerHTML = ` 
        <div class="word">
            <h1>${inpWord}</h1>
            <input type="button" value ="sound" onclick= "playSound()">
            <audio id="speaker"></audio>
        </div>

        <div class="details">
            <p>${data[0].meanings[0].partOfSpeech}</p>
            <p class="second">${data[0].phonetics[1].text}</p>
        </div>

        <div class="info">
            <p>
                ${data[0].meanings[0].definitions[0].definition}
            </p>
      </div>
      `

      sound.setAttribute("src",`${data[0].phonetics[0].audio}`);
      console.log(sound.src);

    })
    //.catch(()=>{
      //  result.innerHTML = `<h3>Couldn't find the word</h3>`
    //})
})

function playSound(){
    sound.play();
}