
// let string = " ";

// let buttons = document.querySelectorAll('.btn')

// Array.from(buttons).forEach((btn)=>{

//     btn.addEventListener('click' , (e)=>{

//        if(e.target.innerHTML == '='){
//           string = eval(string)
//           document.querySelector('input').value = string
//        }
//        else if(e.target.innerHTML == 'C'){
//         string = " "
//         document.querySelector('input').value = string
//        }
//         else{
//         console.log(e.target)
//         string = string + e.target.innerHTML;
//         document.querySelector('input').value = string;
//         }
//     })

// })




let string = " "


let buttons = document.querySelectorAll(".btn")

let display = document.getElementsByClassName("input")


Array.from(buttons).forEach((e)=>{
      
    e.addEventListener('click' , (t)=>{
         
       if(t.target.innerHTML == '='){
          string = eval(string)
          document.querySelector('input').value = string
       }
       else if(t.target.innerHTML == 'C'){
              string = " "
              document.querySelector('input').value = string
       }
       else{
           
           string =  string  +t.target.innerHTML 
           document.querySelector('input').value = string
           document.getElementById('ft').value = string
           document.getElementsByClassName('input').value = string


       }







    })


})


















































