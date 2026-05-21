(function iife() {
  console.log("this is an immediate invoke function car");
})();




(function () {
    console.log("Welcome to JavaScript");
})();


(function (num) {
    console.log("Square is :", num * num);
})(5);