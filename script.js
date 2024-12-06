const container = document.querySelector(".container");
const headText = document.querySelector("h3");
const backgroundColorCon = document.querySelector(".backgroundColorCon");
const dimension = document.querySelector(".dimension");

let opacityIncreement = 9;
let defaultColor = "defColor";
let opacitySetting = false;
let defaultNumberOfEtch = 16;
let generateGrid = 0;

function backgroundSelection(rgb) {
  if (defaultColor === "defColor") {
    return 0;
  } else if (defaultColor === "mulColor") {
    return Math.floor(Math.random() * rgb);
  } else if (defaultColor === "singleColor") {
    return 10;
  }
}

function opacity(range) {
  if (opacityIncreement === 9) {
    return 9;
  } else if (opacityIncreement <= 10) {
    return range;
  }
}

container.addEventListener("mouseenter", (event) => {
  if (event.target) generateGrid++;
  if (generateGrid === 1) {
    for (i = 1; i <= defaultNumberOfEtch; i++) {
      const containerChild = document.createElement("div");
      for (j = 1; j <= defaultNumberOfEtch; j++) {
        const containerGrandChild = document.createElement("div");

        containerGrandChild.addEventListener("mouseenter", (e) => {
          let clickedArea = e.target;
          let randomBackgroundColor = ` background : rgb(${backgroundSelection(
            255
          )}, ${backgroundSelection(255)}, ${backgroundSelection(255)});
      opacity : 0.${opacity(opacityIncreement)}`;

          if (clickedArea) {
            if (opacityIncreement === 10) {
              opacityIncreement = 0;
            }
            if (opacitySetting) {
              opacityIncreement++;
            }
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
  if (enteredChoice <= 100 && enteredChoice > 0) {
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

//Updates the value of opacityIncreement,  opacitySetting and defaultColor when clicked
document.body.addEventListener("click", (e) => {
  let clicked = e.target.className;
  if (clicked === "mulBgColor") {
    defaultColor = "mulColor";
    opacityIncreement = 9;
    opacitySetting = false;
  } else if (clicked === "singleBackgroundColor") {
    defaultColor = "singleColor";
    opacityIncreement = 0;
    opacitySetting = true;
  } else if (clicked === "headText") {
    defaultColor = "defColor";
    opacityIncreement = 9;
    opacitySetting = false;
  } else if (clicked === "dimension") {
    generateGrid = 0;
    enterPreferredChoice();
  }
});
