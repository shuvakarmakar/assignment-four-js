// After getting a number input in this function, those value substract with 7 and put this value into a variable called subsValue. If subsValue is less than 7 then it will return subsValue again. Otherwise if subsValue  is greater than 7 it will return input value with  multiply 2.

function isLGSeven(numb){

    const subsValue = numb - 7;
    if(typeof numb !== 'number'){
        return 'Please input a Number';
    }
    else if(subsValue < 7){
        return subsValue;
    }
    else if(subsValue > 7){
        return numb*2;
    }
    
}

const inputNumb = isLGSeven(15);
console.log(inputNumb);