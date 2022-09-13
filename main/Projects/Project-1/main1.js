// 'screen' is name 👇 of a function
window.onresize = screen;
window.onload = screen;

// Function named 'screen' 👇

function screen() {
  Width = window.innerWidth;
  Height = window.innerHeight;
  document.getElementById("width").innerHTML = "Width : " + Width + " px";
  document.getElementById("height").innerHTML = "Height : " + Height + " px";
}
