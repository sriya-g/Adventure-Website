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
  }
}

function runAwayPicked() {
  if (alreadyClicked == false) {
    dispChoice.innerHTML = "You trip over a rock and lose your backpack and thermos. The bear chases you for a while, but soon loses interest.";
    window.localStorage.setItem('thermos', "false");
    alreadyClicked = true;
    if (window.localStorage.getItem('water').localeCompare("true") != 0) {
      window.location.href = "water.html";
    }
    else {
      if (window.localStorage.getItem('shelter').localeCompare("true") != 0) {
        window.location.href = "shelter.html";
      }
      else {
        window.location.href = "end.html";
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
      window.location.href = "water.html";
    }
    else {
      if (window.localStorage.getItem('shelter').localeCompare("true") != 0) {
        window.location.href = "shelter.html";
      }
      else {
        window.location.href = "end.html";
      }
    }
  }
}