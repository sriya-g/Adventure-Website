var left = document.getElementById("left");
var right = document.getElementById("right");
var dispText = document.getElementById("disp");

left.addEventListener("click", goLeft);
right.addEventListener("click", goRight);

var alreadyClicked = false;

function goLeft() {
  if (alreadyClicked == false) {
    dispText.innerHTML = "You walk through the dark forest and find a tree with a hollowed-out trunk. This will be the perfect place to sleep!";
    window.localStorage.setItem('shelter', "true");
    alreadyClicked = true;
    if (window.localStorage.getItem('water').localeCompare("true") != 0) {
    setTimeout(function() {
      window.location.href = "water.html";
}, 1000);
    }
    else {
      if (window.localStorage.getItem('food').localeCompare("true") != 0) {
    setTimeout(function() {
      window.location.href = "food.html";
}, 1000);
      }
      else {
    setTimeout(function() {
      window.location.href = "end.html";
}, 1000);
      }
    }
  }
}

function goRight() {
  if (alreadyClicked == false) {
    dispText.innerHTML = "The wide-open area may be beautiful and sunny, but there's no shelter here.";
    alreadyClicked = true;
    if (window.localStorage.getItem('water').localeCompare("true") != 0) {
    setTimeout(function() {
      window.location.href = "water.html";
}, 1000);
    }
    else {
      if (window.localStorage.getItem('food').localeCompare("true") != 0) {
    setTimeout(function() {
      window.location.href = "food.html";
}, 1000);
      }
      else {
    setTimeout(function() {
      window.location.href = "end.html";
}, 1000);
      }
    }
  }
}