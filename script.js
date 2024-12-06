const container = document.querySelector(".container")
const headText = document.querySelector("h3")
const backgroundColorCon = document.querySelector(".backgroundColorCon")
const headerContainer = document.querySelector(".headerContainer")
const dimension = document.querySelector(".dimension")

let opacityIncreement = 0
let execute = 0
let defaultColor = "defColor";
let opacitySetting = true;

function randBackgroundColor(rgb){
  if(defaultColor === "defColor"){
    return 0
  }
  else if(defaultColor === "mulColor"){
    return Math.floor(Math.random()*rgb)
  }
  else if(defaultColor === "singleColor"){
    return 10
  }
}

function opacity(range){
  if(opacityIncreement === 9){
    return 9
  }
  else if(opacityIncreement <= 10){
  return range
  }
}
dispatchDefaultEtchNum()
function dispatchDefaultEtchNum(){
let dispatchEtch = new Event("click")

headerContainer.addEventListener("click", (e)=>{

//Updates the value of opacityIncreement, opacitySetting when clicked 
  opacityIncreement = 9
  opacitySetting = false
  let headerChild = e.target.className
  let defaultNumberOfEtch = 16
  execute++
  
  
  //Enable the enterPreferredChoice function, prompt only after the default 16x16 grid display. Setting execute to 0, dispatching Event making it 1, and clicking the target making it 2, which is greater than 1, making the entered function to prompt.
  if(execute > 1 && headerChild === "dimension"){
    defaultNumberOfEtch = enterPreferredChoice()
  }
  //Updates the value of opacityIncreement, opacitySetting and defaultColor when clicked 
  else if(execute > 1 && headerChild === "headText"){
    defaultColor = defColor
    opacityIncreement = 9;
    opacity = false
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
  ` background : rgb(${randBackgroundColor(255)}, ${randBackgroundColor(255)}, ${randBackgroundColor(255)});
    opacity : 0.${opacity(opacityIncreement)}`
     
     
      if(clickedArea){
        if(opacityIncreement === 10){
          opacityIncreement = 0
        }
        if(opacitySetting){
        opacityIncreement++
        }
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

headerContainer.dispatchEvent(dispatchEtch)
}

//Updates the value of opacityIncreement,  opacitySetting and defaultColor when clicked 
backgroundColorCon.addEventListener("click", (e)=>{
  let clicked = e.target.className
  if(clicked === "mulBgColor"){
    defaultColor = "mulColor";
    opacityIncreement = 9;
    opacitySetting = false
  }
  else if(clicked === "singleBackgroundColor"){
    defaultColor = "singleColor";
    opacityIncreement = 0
    opacitySetting = true
  }
})
