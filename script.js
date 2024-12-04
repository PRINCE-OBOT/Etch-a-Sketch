const container = document.querySelector(".container")
const preferredChoice = document.querySelector(".preferredChoice")

let execute = 0

let dispatchEtch = new Event("click")

preferredChoice.addEventListener("click", (e)=>{
  let numberOfEtch = 2
  execute++
  
  if(execute > 1){
    numberOfEtch = enterPreferredChoice()
  }

for(i=1; i<=numberOfEtch; i++){
  const containerChild = document.createElement("div")
   for(j=1; j<=numberOfEtch; j++){
    const containerGrandChild = document.createElement("div")
    
    containerChild.appendChild(containerGrandChild)
    
    containerGrandChild.classList.toggle("containerGrandChildToggle")
  }
  
  container.appendChild(containerChild)
  
  containerChild.classList.toggle("containerChildToggle")
  
  }

  function enterPreferredChoice(){
let enteredChoice = +prompt(`Enter the number of Etch-a-Sketch you want ranging from (1 - 200)`) 
if(enteredChoice){
 const containerChild = document.querySelectorAll(".containerChildToggle")
 
 containerChild.forEach((div)=>{
  container.removeChild(div)
       })
    }
    return enteredChoice
 }
})

preferredChoice.dispatchEvent(dispatchEtch)