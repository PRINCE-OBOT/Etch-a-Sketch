const container = document.querySelector(".container")
const backgroundColorCon = document.querySelector(".backgroundColorCon")
const mulBgColor = document.querySelector(".mulBgColor")
const dimension = document.querySelector(".dimension")

let opacityIncreement = 0
let execute = 0

dispatchDefaultEtchNum()
function dispatchDefaultEtchNum(){
let dispatchEtch = new Event("click")

backgroundColorCon.addEventListener("click", (e)=>{
  function randBackgroundColor(num){
  return Math.floor(Math.random()*num)
}

  let randomBg = e.target.className
  let defaultNumberOfEtch = 16
  execute++
  
  //Enable the enterPreferredChoice function, prompt only after the default 16x16 grid display. Setting execute to 0, dispatching Event making it 1, and clicking the target making it 2, which is greater than 1, making the entered function to prompt.
  if(execute > 1 && randomBg === "mulBgColor"){
    defaultNumberOfEtch = enterPreferredChoice()
    
   function randBackgroundColor(num){
  return Math.floor(Math.random()*num)
    }
  }
  else if(execute > 1 && randomBg === "singleBackgroundColor"){
    defaultNumberOfEtch = enterPreferredChoice()
    
   function randBackgroundColor(num){
  return 10
    }
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
    dimension.textContent = `${enteredChoice}x${enteredChoice}`
    return enteredChoice
    }
    else if(enteredChoice > 100){ alert('Etch-a-Sketch number greater than 100') }
   else if(enteredChoice == false){let cancel = true}
    else if(enteredChoice <= 0){ alert('Etch-a-Sketch number lower than 0') }
    else{ alert('Invalid Etch-a-Sketch input')} 
  }
})

backgroundColorCon.dispatchEvent(dispatchEtch)
}
