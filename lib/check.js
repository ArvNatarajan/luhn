var checkAlgo = require("./luhn");

var luhnNumber = process.argv[2];
var checkNumber = checkAlgo.removeLastDigit(luhnNumber);
var checkDigit = checkAlgo.checkLastDigit(luhnNumber);

var result = checkAlgo.checkLastDigit(checkAlgo.sumArray(checkAlgo.collapseDoubleDigits(checkAlgo.doubleSecondDigit(checkAlgo.reverseArray(checkAlgo.convertNumToArray(checkNumber))))) * 9);


if (result === checkDigit) {
  console.log("You're loooooooony!!");
} else {
  console.log("Awwwww no loon for you!");
}
