//food
var playDead = document.getElementById("playDead");
var runAway = document.getElementById("runAway");
var attack = document.getElementById("attack");
var dispChoice = document.getElementById("dispChoice");

playDead.addEventListener("click", playDeadPicked);
runAway.addEventListener("click", runAwayPicked);
attack.addEventListener("click", attackPicked);

var alreadyClicked = false;

function playDeadPicked() {
  if (alreadyClicked == false) {
    dispChoice.innerHTML = "The bear eats you anyway. Game over.";
    dispChoice.classList.add("end");
    alreadyClicked == true;
    setTimeout(function() {
      window.location.href = "index.html";
}, 3000);
  }
}

function runAwayPicked() {
  if (alreadyClicked == false) {
    dispChoice.innerHTML = "You trip over a rock and lose your backpack and thermos. The bear chases you for a while, but soon loses interest.";
    window.localStorage.setItem('thermos', "false");
    alreadyClicked = true;
    if (window.localStorage.getItem('water').localeCompare("true") != 0) {
    setTimeout(function() {
      window.location.href = "water.html";
}, 3000);
    }
    else {
      if (window.localStorage.getItem('shelter').localeCompare("true") != 0) {
    setTimeout(function() {
      window.location.href = "shelter.html";
}, 3000);
      }
      else {
    setTimeout(function() {
      window.location.href = "end.html";
}, 3000);
      }
    }
  }
}

function attackPicked() {
  if (alreadyClicked == false) {
    dispChoice.innerHTML = "You boop the bear on the snoot. Surprisingly, it enjoys being petted. it takes you to a honeycomb bursting with fresh honey. You take some.";
    window.localStorage.setItem('food', "true");
    alreadyClicked = true;
    if (window.localStorage.getItem('water').localeCompare("true") != 0) {
    setTimeout(function() {
      window.location.href = "water.html";
}, 1000);
    }
    else {
      if (window.localStorage.getItem('shelter').localeCompare("true") != 0) {
    setTimeout(function() {
      window.location.href = "shelter.html";
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