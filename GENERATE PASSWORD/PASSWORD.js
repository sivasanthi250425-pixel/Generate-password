let password=["a","b","c","d","e","l","s",
    "f","g","h","j","k","l",
    "p","o","i","u","y","t","r","w","q",
    0,9,8,7,6,5,4,3,2,1,"!","@","#",
    "$","%","^","&","*","(",")"]
let  pass1el=document.getElementById("pass1")
let  pass2el=document.getElementById("pass2")
let generateel=document.getElementById("generate")
 
generateel.addEventListener("click",
function generatepassword(){
  pass1el.textContent=""
   pass2el.textContent=""
    for(let r=0;r<9;r++){
  let ran1=Math.floor(Math.random()*password.length)
  let ran2=Math.floor(Math.random()*password.length)
  
    pass2el.textContent+=password[ran2]
    pass1el.textContent+=password[ran1]
   
    }
    
})
