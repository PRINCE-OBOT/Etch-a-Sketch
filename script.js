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
  container.appendChild(containerChild)
  }

  function enterPreferredChoice(){
return +prompt(`Enter the number of Etch-a-Sketch you want ranging from (1 - 200)`)   }
})

preferredChoice.dispatchEvent(dispatchEtch)