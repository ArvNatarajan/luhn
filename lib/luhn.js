function convertNumToArray(number) {
  return number.toString().split("").map(Number);
}

function reverseArray(array) {
  return array.reverse();
}

function doubleSecondDigit(array) {
  return array.map(function(element, index) {
    if (index % 2 === 0) {
      return element * 2;
    } else {
      return element;
    }
  });
}

function collapseDoubleDigits(array) {
  return array.map(function(element) {
    if (element > 9) {
      return sumArray(convertNumToArray(element));
    } else {
      return element;
    }
  });
}

function sumArray(array) {
  return array.reduce(function (a, b) {
    return a + b;
  });
}

function checkLastDigit(number) {
  var newArray = convertNumToArray(number);
  return Number(newArray[newArray.length -1]);
}

function removeLastDigit(number){
  return Number(number.toString().substring(0, number.toString().length - 1));

}

module.exports = {convertNumToArray: convertNumToArray,
                  reverseArray: reverseArray,
                  doubleSecondDigit: doubleSecondDigit,
                  collapseDoubleDigits: collapseDoubleDigits,
                  sumArray: sumArray,
                  checkLastDigit: checkLastDigit,
                  removeLastDigit: removeLastDigit
                }
