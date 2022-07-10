
const openbtn = document.getElementById('open-btn');

const closebtn =document.getElementById('close-btn');

const container = document.getElementById('container');

openbtn.addEventListener('click',()=>{
    container.style.display='block';
})

closebtn.addEventListener('click',()=>{
    container.style.display='none';
})

window.addEventListener('click',(e)=>{
    if(e.target===container){
        container.style.display='none';
    }
})








