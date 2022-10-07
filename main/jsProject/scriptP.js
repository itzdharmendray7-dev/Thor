const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

// close modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// open modal function
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// open modal event
openModalBtn.addEventListener("click", openModal);

/* function hourglassSum(arr) {
  let sums = [];
  //slice() -> removes first value.
  //splice() -> removes a fix value (index, remove values).
  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = 1; j < arr.length - 1; j++) {
      sums.push(
        arr[i -1][j - 1] +
          arr[i - 1][j] +
          arr[i - 1][j + 1] +
          arr[i][j] +
          arr[i + 1][j - 1] +
          arr[i + 1][j] +
          arr[i + 1][j + 1]
      );
    }
  }
  return Math.max(...sums);
} 

console.log(
  hourglassSum([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
  ])
  ); */

/* function rotLeft(a, d) {
  // Write your code here
  for (let i = 1; i <= d; i++) {
    var x = a.shift();
    a.push(x);
  }
  console.log(a.join(" "));
}
rotLeft([1, 2, 3, 4, 5], 4); */

/* function minimumBribes(q) {
  let swaps = 0;
  let min = q.length;
  for (var i = q.length - 1; i >= 0; i--) {
    if (q[i] - i > 3) {
      console.log("Too chaotic");
      return `Too chaotic`;
    }
    if (q[i] > i + 1) {
      swaps += q[i] - (i + 1);
    } else {
      if (min > q[i]) {
        min = q[i];
      } else if (q[i] != min) {
        swaps++;
      }
    }
  }
  console.log(swaps);
}

console.log(minimumBribes([1, 2, 3, 5, 4, 6, 7, 8, 9])); */

/* function minimumSwaps(arr) {
  var swaps = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] === i + 1) {
          const temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          swaps++;
        }
      }
    }
  }
  return swaps;
}

console.log(minimumSwaps([2, 3, 4, 1, 5])); */

/* var twoSum = function (nums, target) {
  var number = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target && i != j) {
        number.push(i);
        number.push(j);
      }
    }
  }
  return number.slice(0, 2);
};

console.log(twoSum([3, 3, 2, 7], 9));
console.log(twoSum([2, 5, 5, 11], 10)); */

var isPalindrome = function (x) {
  
};

console.log(isPalindrome(121));
console.log(isPalindrome(123));
