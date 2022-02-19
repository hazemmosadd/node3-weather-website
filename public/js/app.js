const address = document.querySelector('input') ; 
const form =  document.querySelector('form') ; 
const ms1 = document.querySelector('.ms1') ;
const ms2 = document.querySelector('.ms2') ;
console.log('Client side javascript file is loaded!')
// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then(data=>{
//         console.log(data);
//     })
// })

form.addEventListener('submit' , (e)=>{
    e.preventDefault()
    const city = address.value 
    ms1.textContent = 'Loading ...'
    ms2.textContent = ''
fetch(`/weather?address=${city}`).then((response)=>{
    response.json().then(data=>{
       if(data.error )
       {
           ms1.textContent = data.error 
          
       }else{
        ms1.textContent = data.location 
        ms2.textContent = data.forecast 
       }

    })
})
})

fetch('http://localhost:3000/weather?address=cairo').then((response)=>{
    response.json().then(data=>{
       if(data.error )
       {
           console.log(data.error);
       }else{
           console.log(data.location);
           console.log(data.forecast);
       }

    })
})

