/* function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

x(); */

/* function x() {
  for (var i = 1; i <= 5; i++) {
    function close(j) {
      setTimeout(function () {
        console.log(j);
      }, j * 1000);
    }
    close(i);
  }
}

x(); */

/* function outest() {
  var a = "HelloWorld";
  function MOuter() {
    var b = 20;
    function outer() {
      var c = 10;
      function inner() {
        // console.log(typeof a);
        console.log(c, b, a);
      }
      return inner;
    }
    return outer;
  }
  return MOuter;
}
let a = 100;
outest()()()(); */

/* function counter() {
  var count = 0;
  function incrementCounter() {
    count++;
    console.log(count);
  }
  return incrementCounter;
}
counter()(); */

/* function Counter() {
  var count = 0;
  this.incrementCounter = function () {
    count++;
    console.log(count);
  };

  this.decrementCounter = function () {
    count--;
    console.log(count);
  };
}

var counter1 = new Counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();
counter1.decrementCounter(); */

// Function Statement
/* function a() {
  console.log("a called");
}
a(); */

// Function Expression
/* var b = function () {
  console.log("b called");
};
b(); */

// Function Declaration
/* function xyz() {} */

// Anonymous Function
/* function () {} */

// Named Function Expression
/* function xyz() {} */

// Difference between Parameters & Arguments
// param1 and param2 are Parameters
/* function x(param1, param2) {
  console.log(param1, param2);
} */

// 1, 2 are Arguments
/* x(1, 2); */

/* setTimeout(function () {
  console.log("timer");
}, 3000);

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
}); */

/* document.getElementById("clickMe").addEventListener("click", function xyz() {
  console.log("Buttton Clicked");
}); */

/* function n() {
  // var num = 0;
  function m() {
    for (let i = 1; i < 6; i++) {
      console.log(i++);
    }
  }
  return m;
}
n()(); */

// Polyfill and Bind Method
let naam = {
  firstName: "Dharam",
  lastName: "Yadav",
};

let printName = function () {
  console.log(this.firstName + " " + this.lastName);
};

let printMyName = printName.bind(naam);
printMyName();

