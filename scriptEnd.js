var disp = document.getElementById("disp");

if (window.localStorage.getItem('thermos').localeCompare("true") != 0) {
    disp.innerHTML = "You survived but you lost your thermos. It was expensive :(";
}
else {
  disp.innerHTML = "You survived! You quickly found your way out of the forest and enjoyed a salad at your favorite cafe.";
}