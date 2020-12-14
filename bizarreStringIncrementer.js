// Start your implementation here

const bizarreStringIncrementer = (bizarreString) => {
  let resultStr = "";
  let numberStr = "";
  let zeroCount = 0;
  let numberCount = 0;
  for (const digit of getStringAndNumber(bizarreString).lastNumbers) {
    if (isNumber(digit)) {
      numberStr += digit;
      if(Number(digit)==0 && zeroCount<2){
      	zeroCount +=1;
      } else {
      	numberCount +=1;
      }
    }
  }
  
  resultStr = Number(numberStr) + 1;
  
  if(zeroCount>1 && resultStr.toString().length==numberCount){
  	padZero = "00"
  } else if(zeroCount==2){
  	padZero = "0"
  } else {
  	padZero = ""
  }
  return (
    getStringAndNumber(bizarreString).firstString.join("") + padZero + resultStr
  );
};

let getStringAndNumber = (bizarreString) => {
  const reversedSplittedString = bizarreString.split("").reverse();
  let numberPositionCount = 0;
  for (const letters of reversedSplittedString) {
    if (isNumber(letters)) {
      numberPositionCount++;
    } else {
      break;
    }
  }
  lastNumbers = reversedSplittedString.slice(0, numberPositionCount).reverse();
  firstString = reversedSplittedString
    .slice(numberPositionCount, numberPositionCount.length)
    .reverse();
  return { firstString: firstString, lastNumbers: lastNumbers };
};

let isNumber = (letter) => {
  var pattern = /^\d+$/;
  return pattern.test(letter);
};

//console.log(bizarreStringIncrementer("foo0098"));

module.exports = {bizarreStringIncrementer};