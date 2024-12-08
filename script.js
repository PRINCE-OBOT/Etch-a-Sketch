const container = document.querySelector(".container");
const headText = document.querySelector("h3");
const backgroundColorCon = document.querySelector(".backgroundColorCon");
const dimension = document.querySelector(".dimension");
const randomActivated = document.querySelector(".randomActivated");
const defaultActivated = document.querySelector(".defaultActivated");
const singleActivated = document.querySelector(".singleActivated");

let defaultColor = "defColor";
let opacitySetting = false;
let defaultNumberOfEtch = 16;
let generateGrid = 0;
defaultActivated.innerHTML = `&#128161;`;

function backgroundSelection(rgb) {
  if (defaultColor === "defColor") {
    return 0;
  } else if (defaultColor === "mulColor") {
    return Math.floor(Math.random() * rgb);
  }
}

let myEvent = new MouseEvent("mouseenter");
container.addEventListener("mouseenter", (event) => {
  //Increement generateGrid setting it to 1 to enable the grid to be generated.
  if (event.target) generateGrid++;
  if (generateGrid === 1) {
    for (i = 1; i <= defaultNumberOfEtch; i++) {
      const containerChild = document.createElement("div");

      for (j = 1; j <= defaultNumberOfEtch; j++) {
        const containerGrandChild = document.createElement("div");

        //set unique identify for each row and column container while they are created to identify them.
        containerGrandChild.setAttribute(`data-opacity`, "0");

        containerGrandChild.addEventListener("mouseenter", (e) => {
          let clickedArea = e.target;
          let randomBackgroundColor = ` background : rgb(${backgroundSelection(
            255
          )}, ${backgroundSelection(255)}, ${backgroundSelection(255)});
    `;

          if (clickedArea && opacitySetting) {
            //retrieve the current data-opacity value and convert to number.
            let currentOpacity = +clickedArea.getAttribute(`data-opacity`);

            //Increement click target data-opacity value and replaces the data-opacity with the increemented value
            currentOpacity++;
            clickedArea.setAttribute(`data-opacity`, currentOpacity);

            //Keeps returning the smallest number, so as to maintain the full opaque.
            let useOpacityValue = Math.min(currentOpacity, 9);
            clickedArea.style.cssText = ` background : red;
            opacity : 0.${useOpacityValue};
    `;
          } else if (clickedArea && !opacitySetting) {
            clickedArea.style.cssText = randomBackgroundColor;
          }
        });
        containerChild.appendChild(containerGrandChild);

        containerGrandChild.classList.toggle("containerGrandChildToggle");
      }

      container.appendChild(containerChild);

      containerChild.classList.toggle("containerChildToggle");
    }
  }
});
function enterPreferredChoice() {
  let enteredChoice = +prompt(
    `Enter the number of Etch-a-Sketch you want ranging from (1 - 100)`
  );
  if (enteredChoice <= 100 && enteredChoice >= 1) {
    const containerChild = document.querySelectorAll(".containerChildToggle");
    containerChild.forEach((div) => {
      container.removeChild(div);
      defaultNumberOfEtch = enteredChoice;
    });
    dimension.innerHTML = `&#128297;${enteredChoice}x${enteredChoice}`;
  } else if (enteredChoice > 100) {
    alert("Etch-a-Sketch number greater than 100");
  } else if (enteredChoice == false) {
    defaultNumberOfEtch = enteredChoice;
  } else if (enteredChoice <= 0) {
    alert("Etch-a-Sketch number lower than 0");
  } else {
    alert("Invalid Etch-a-Sketch input");
  }
}

//Updates opacitySetting, defaultActivated, and defaultColor when clicked
document.body.addEventListener("click", (e) => {
  let clicked = e.target.className;
  if (clicked === "mulBgColor") {
    defaultColor = "mulColor";
    opacitySetting = false;
    randomActivated.innerHTML = `&#128161;`;
    singleActivated.innerHTML = ``;
    defaultActivated.innerHTML = ``;
  } else if (clicked === "singleBackgroundColor") {
    defaultColor = "singleColor";
    opacityIncreement = 0;
    opacitySetting = true;
    singleActivated.innerHTML = `&#128161;`;
    randomActivated.innerHTML = ``;
    defaultActivated.innerHTML = ``;
  } else if (clicked === "headText") {
    defaultColor = "defColor";
    opacityIncreement = 9;
    opacitySetting = false;
    defaultActivated.innerHTML = `&#128161;`;
    singleActivated.innerHTML = ``;
    randomActivated.innerHTML = ``;
    //Allows user to input there preferred number of choice without having to hover around the grid for the first time.
    //generateGrid set to 0, makes sure that the container does not generate extra grid when selecting colors.
    //enterPreferredChoice ensure the prompt interaction does not run while the toy in loaded.
  } else if (clicked === "dimension") {
    container.dispatchEvent(myEvent);
    generateGrid = 0;
    enterPreferredChoice();
  }
});
