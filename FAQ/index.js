
const content = document.getElementsByClassName('container-content');


for (let index = 0; index < content.length; index++) {
    
   content[index].addEventListener('click',function(){
    this.classList.toggle('active');
   })

}













