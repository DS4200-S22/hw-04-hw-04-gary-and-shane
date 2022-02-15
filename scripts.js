let count = 0;
let visableCircle = true;

function textCircleCLicked() {
  count += 1;
  console.log(count);
  let circleText = document.getElementById("text-circle");
  circleText.textContent = count;
}


function hoverOverBorderCircle() {
  let circle = document.getElementById("hover-circle");
  circle.setAttribute("stroke", "black");

}

function hoverOverBorderCircleOut() {
  let circle = document.getElementById("hover-circle");
  circle.setAttribute("stroke", "lightgreen");
}


function disapearCircle() {
  let circle = document.getElementById("hover-disappear");


  if (visableCircle) {
    circle.style.opacity = "0%";
    visableCircle = false;
  } else {
    circle.style.opacity = "100%";
    visableCircle = true;
  }

}

function resetCount() {
  count = -1;
  textCircleCLicked();
}
