/* Testing mehtods of applying multiple functions at a time
*/

// var result = checkIfLuhn.checkLastDigit(checkIfLuhn.sumArray(checkIfLuhn.collapseDoubleDigits(checkIfLuhn.doubleSecondDigit(checkIfLuhn.reverseArray(checkIfLuhn.convertNumToArray(checkNumber))))) * 9);


var luhnNumber = process.argv[2];

function compose(...fns) {
  return fns.reduce(function (f, g) {
    return function (...args) {
      return f(g(...args));
    };
  });
}

function runValidation(luhnNumber) {
  var checkIfLuhn = require("./luhn-functions");
  var checkNumber = checkIfLuhn.removeLastDigit(luhnNumber);
  var checkDigit = checkIfLuhn.checkLastDigit(luhnNumber);

  var transform = compose(checkIfLuhn.checkLastDigit,
                          checkIfLuhn.sumArray,
                          checkIfLuhn.collapseDoubleDigits,
                          checkIfLuhn.doubleSecondDigit,
                          checkIfLuhn.reverseArray,
                          checkIfLuhn.convertNumToArray);

  var result = transform(checkNumber) * 9;

  return checkIfLuhn.checkLastDigit(result) === checkDigit;
}

if (runValidation(luhnNumber)) {
  console.log("You're loooooooony!!");
} else {
  console.log("Awwwww no loon for you!");
}
