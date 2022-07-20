var drink = document.getElementById("drinkWater");
var dontDrink = document.getElementById("dontDrink");
var dispChoice = document.getElementById("dispText");

drink.addEventListener("click", drinkChoice);
dontDrink.addEventListener("click", dontDrinkChoice);

var alreadyClicked = false;

function drinkChoice() {
  if (alreadyClicked == false) {
    dispChoice.innerHTML = "The water was poisonous! Game over.";
    dispChoice.classList.add("end");
    alreadyClicked == true;
  }
}
function dontDrinkChoice() {
  if (alreadyClicked == false) {
    if (window.localStorage.getItem('thermos').localeCompare("true") != 0) {
      dispChoice.innerHTML = "You decide to keep looking for a water source. You eventually find a river that is safe to drink from. However, since you lost your thermos, you can't take any water with you.";
  }
    else {
      dispChoice.innerHTML = "You decide to keep looking for a water source. You eventually find a river that is safe to drink from. You also fill your thermos, before moving on.";
  }
    alreadyClicked = true;
    localStorage.setItem('water', "true");
    if (window.localStorage.getItem('shelter').localeCompare("true") != 0) {
      window.location.href = "shelter.html";
    }
    else {
      if (window.localStorage.getItem('food').localeCompare("true") != 0) {
        window.location.href = "food.html";
      }
      else {
        window.location.href = "end.html";
      }
    }
  }
}