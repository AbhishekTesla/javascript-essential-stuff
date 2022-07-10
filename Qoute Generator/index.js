const btn = document.querySelector('.btn')
const person_qoute =document.querySelector('.person-qoute')
const person = document.querySelector('.person')

const qoutes = [
    {
        qoute:'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        name:'Nelson Mandela'
    },
    
    {
        qoute:`If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.`,
        name:'Oprah Winfrey'
    }, 
    
    
    {
        qoute:'The greatest glory in living lies not in never falling, but in rising every time we fall.',
        name:'Nelson Mandela'
    },
    
    {
        qoute:`If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.`,
        name:'James Cameron'
    },
    
    
    {
        qoute:`Life is what happens when you're busy making other plans.`,
        name:'John Lennon'
    }

]


btn.addEventListener('click',()=>{

    const number=Math.floor(Math.random() *qoutes.length );

    person_qoute.innerText= qoutes[number].qoute;

    person.innerText= qoutes[number].name;

})





