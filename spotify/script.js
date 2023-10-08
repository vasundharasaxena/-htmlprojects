console.log("Welcome to spotify");

// initialize the variables
let songindex = 0 ;
let audioElement = new Audio('song/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songitem = Array.from(document.getElementsByClassName('songitem'));
let songs = [  
    {songname: 'Dhundhala' , filepath: "song/1.mp3" , coverpath: "covers/11.jpg"},
    {songname: 'Khayal' , filepath: "song/2.mp3" , coverpath: "covers/12.jpg"},
    {songname: 'Bikhra' , filepath: "song/3.mp3" , coverpath: "covers/13.jpg"},
    {songname: 'Heeriye' , filepath: "song/4.mp3" , coverpath: "covers/14.jpg"},
    {songname: 'Baarishein' , filepath: "song/5.mp3" , coverpath: "covers/15.jpg"},
    {songname: 'Maybe my soulmate died' , filepath: "song/6.mp3" , coverpath: "covers/16.jpg"},
    {songname: '9:45' , filepath: "song/7.mp3" , coverpath: "covers/17.jpg"},
    {songname: 'Tu aake dekhle' , filepath: "song/8.mp3" , coverpath: "covers/18.jpg"}
    

]

songitem.forEach((element , i) =>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
})


// audioElement.play();

// handel play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }

})

// listen to events

myprogressbar.addEventListener('timeupdate' , ()=>{
    
    // update seekbar

    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
   
    myprogressbar.value = progress;

})

myprogressbar.addEventListener('change' , ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;

})
