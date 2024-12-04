const container = document.querySelector(".container")
const preferredChoice = document.querySelector(".preferredChoice")

let opacityIncreement = 0
let execute = 0

function randBackgroundColor(num){
  return Math.floor(Math.random()*num)
}

dispatchDefaultEtchNum()
function dispatchDefaultEtchNum(){
let dispatchEtch = new Event("click")

preferredChoice.addEventListener("click", (e)=>{
  let defaultNumberOfEtch = 16
  execute++
  
  if(execute > 1){
    defaultNumberOfEtch = enterPreferredChoice()
  }

generateEnteredChoice()
function generateEnteredChoice(){
 
for(i=1; i<=defaultNumberOfEtch; i++){
  const containerChild = document.createElement("div")
   for(j=1; j<=defaultNumberOfEtch; j++){
    const containerGrandChild = document.createElement("div")
    
    containerGrandChild.addEventListener("click", (e)=>{
      let clickedArea = e.target
      let randomBackgroundColor =
  ` background : rgb(${randBackgroundColor(255)+1}, ${randBackgroundColor(255)+1}, ${randBackgroundColor(255)+1});
     opacity : 0.${opacityIncreement};`
     
      if(clickedArea){
        if(opacityIncreement === 9){
          opacityIncreement = 0
        }
        opacityIncreement++
        clickedArea.style.cssText = randomBackgroundColor
      }
    })
    containerChild.appendChild(containerGrandChild)
    
    containerGrandChild.classList.toggle("containerGrandChildToggle")
  }
  
  container.appendChild(containerChild)
  
  containerChild.classList.toggle("containerChildToggle")
  }
}
  function enterPreferredChoice(){
let enteredChoice = +prompt(`Enter the number of Etch-a-Sketch you want ranging from (1 - 100)`) 
if(enteredChoice <= 100 && enteredChoice > 0){
 const containerChild = document.querySelectorAll(".containerChildToggle")
 
 containerChild.forEach((div)=>{
  container.removeChild(div)
       })
    return enteredChoice
    }
    else if(enteredChoice > 100){ alert('Maximun number out of range') }
    else if(!enteredChoice){
      let cancel = true
    }
    else if(enteredChoice <= 0){ alert('Minimum number') }
    else{ alert('Invalid')} 
  }
})

preferredChoice.dispatchEvent(dispatchEtch)
}
