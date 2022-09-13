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

/* let a = prompt();
for (let i = 1; i <= 10; i++) {
  let b = a * i;
  console.log(`${a} * ${i} = ${b}`);
} */

/* let arr = [3, 4, 2, 1, 5, 6, 7, 8, 9, 10];
let max = arr[0];
let min = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  } else if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max, min) */
