const { reject, result } = require("lodash");

function delayFuntion(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
console.log("Promise starts");
delayFuntion(2000).then(() => console.log("Starts in 2s"));
console.log("end");

function devideFn(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject("We cant perforn dev by 0");
    } else {
      resolve(num1 / num2);
    }
  });
}
devideFn(10, 0)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
