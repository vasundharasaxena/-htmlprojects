console.log("Welcome to spotify");

// initialize the variables
let songindex = 0 ;
let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');


let songs = [  
    {songname: 'Pillowtalk' , filepath: "song/1.mp3" , coverpath: "covers/1.jpg"},
    {songname: 'Pillowtalk' , filepath: "song/1.mp3" , coverpath: "covers/1.jpg"},
    {songname: 'Pillowtalk' , filepath: "song/1.mp3" , coverpath: "covers/1.jpg"},
    {songname: 'Pillowtalk' , filepath: "song/1.mp3" , coverpath: "covers/1.jpg"},
    {songname: 'Pillowtalk' , filepath: "song/1.mp3" , coverpath: "covers/1.jpg"},
    {songname: 'Pillowtalk' , filepath: "song/1.mp3" , coverpath: "covers/1.jpg"},
]

// audioElement.play();

// handel play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

    }

})



// listen to events

myprogressbar.addEventListener('timeupdate' , ()=>{
    console.log('timeupdate');
    // update seekbar
})
