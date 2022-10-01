function x() {
  for (let i = 1; i < 6; i++) {
    setTimeout(function () {
      console.log(i);
    }, 2000);
  }
}

x();
