let progress = document.getElementById("progress")
let song = document.getElementById("song")
let ctrlIcon = document.getElementById("play")

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(ctrlIcon.classList.contains("pause")){
        song.pause();
        ctrlIcon.classList.remove("pause")
        ctrlIcon.classList.add("play")
    }
    else{
        song.play();
        ctrlIcon.classList.add("pause")
        ctrlIcon.classList.remove("play")
    }
}

ctrlIcon.addEventListener('click',function(){
    if(ctrlIcon.innerText === "PLAY"){
        ctrlIcon.innerText = "PAUSE"
    }
    else{
        ctrlIcon.innerText = "PLAY"
    }
    
})

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },1000)
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
}

