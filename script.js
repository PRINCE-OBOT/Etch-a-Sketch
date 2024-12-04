const container = document.querySelector(".container")
const preferredChoice = document.querySelector(".preferredChoice")

let opacityIncreement = 0
let execute = 0

function randBackgroundColor(num){
  return Math.floor(Math.random()*num)
}

let dispatchEtch = new Event("click")

preferredChoice.addEventListener("click", (e)=>{
  let numberOfEtch = 16
  execute++
  
  if(execute > 1){
    numberOfEtch = enterPreferredChoice()
  }

for(i=1; i<=numberOfEtch; i++){
  const containerChild = document.createElement("div")
   for(j=1; j<=numberOfEtch; j++){
    const containerGrandChild = document.createElement("div")
    
    containerGrandChild.addEventListener("click", (e)=>{
      let clickedArea = e.target
      let saturatedBackground =
  ` background : rgb(${randBackgroundColor(255)+1}, ${randBackgroundColor(255)+1}, ${randBackgroundColor(255)+1});
     opacity : 0.${opacityIncreement};`
     
     
      if(clickedArea){
        if(opacityIncreement === 9){
          opacityIncreement = 0
        }
        opacityIncreement++
        clickedArea.style.cssText = saturatedBackground
      }
    })
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