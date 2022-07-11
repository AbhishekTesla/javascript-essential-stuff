const startBtn =document.querySelector('.startBtn');
const stopBtn =document.querySelector('.stopBtn');

const timer =document.querySelector('.timer');

let seconds=0;
let minutes=0;
let hours=0;


let leadingSeconds=0;
let leadingMinutes=0;
let leadingHours=0;


let timeInterval =null;
let timeStatus="stopped";




function stopWatch(){
   
    seconds++;
    if(seconds / 60 ===1)
    { 
        seconds=0;
        minutes++;

        if(minutes / 60 ===1)
        {
            minutes=0;
            hours++;
        }
    }


    if(seconds < 10){
        leadingSeconds="0"+seconds.toString();
    }
    else{
        leadingSeconds=seconds;
    } 
    
    if(minutes < 10){
        leadingMinutes="0"+minutes.toString();
    }
    else{
        leadingMinutes=minutes;
    }
    
    
    if(hours < 10){
        leadingHours="0"+hours.toString();
    }
    else{
        leadingHours=hours;
    }

    timer.innerText= leadingHours + ":" + leadingMinutes + ":" + leadingSeconds ;
   

}




// startBtn.addEventListener('click',stopWatch);

// window.setInterval(stopWatch,1000)

startBtn.addEventListener('click',()=>{

   if(timeStatus==="stopped"){

    timeInterval = window.setInterval(stopWatch,1000);
    startBtn.innerHTML=`<i class="fa-solid fa-pause" id="pause"></i>`
    timeStatus="started";
   }

   else{
     window.clearInterval(timeInterval);
     startBtn.innerHTML=`<i class="fa-solid fa-play" id="play"></i>`
     timeStatus="stopped"
   }

})


stopBtn.addEventListener('click',()=>{
    window.clearInterval(timeInterval);
    seconds=0;
    minutes=0;
    hours=0;

    timer.innerText="00:00:00";
    



})















