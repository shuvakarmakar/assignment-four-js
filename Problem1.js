// After getting a number value in this funtion, this number multiply with 3 then total value put into a variable, then again those value addion with 10 then this new value divide with 2.Finally this new value substract with number 5 then it will return.

function mindGame(number){
    const multiplyValue = number * 3;
    const additionValue = multiplyValue + 10;
    const divisionValue = additionValue / 2;
    const substructValue = divisionValue - 5;

    if(typeof number !== 'number'){
        return 'Please Input A Number'
    }

    return substructValue;
}


const inputValue = mindGame(50);
console.log(inputValue);
