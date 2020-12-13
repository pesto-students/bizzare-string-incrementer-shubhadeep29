// Start your implementation here

const bizarreStringIncrementer = (bizarreString) => {
    let resultStr = '';
    for (const digit of getStringAndNumber(bizarreString).lastNumbers) {
        if (isNumber(digit)) {
            resultStr +=digit
        } else {
            break
        }
    }

    return getStringAndNumber(bizarreString).firstString.join('') + ( Number(resultStr)+1);

};

let getStringAndNumber = (bizarreString) => {
    const reversedSplittedString = bizarreString.split('').reverse();
    let numberPositionCount = 0;
    for (const letters of reversedSplittedString) {
        if (isNumber(letters)) {
            numberPositionCount++
        } else {
            break
        }
    }
    lastNumbers = reversedSplittedString.slice(0, numberPositionCount).reverse()
    firstString = reversedSplittedString.slice(numberPositionCount, numberPositionCount.length).reverse()
    //console.log(resultSum,numberPositionCount,firstString,lastNumbers);
    return {'firstString': firstString, 'lastNumbers': lastNumbers};
}

let isNumber = (letter) => {
    var pattern = /^\d+$/;
    return pattern.test(letter);  // returns a boolean
}

module.exports =  bizarreStringIncrementer 
