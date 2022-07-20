//index
localStorage.clear();
window.localStorage.setItem('thermos', "true");
window.localStorage.setItem('food', "false");
window.localStorage.setItem('water', "false");
window.localStorage.setItem('shelter', "false");

var inputText = document.getElementById("name");
var btn = document.getElementById("enterName");
var dispText = document.getElementById("dispname");

btn.addEventListener("click", dispName);

function dispName() {
  var username = inputText.value;
  dispText.innerHTML = "Hello "+username+"!";
}