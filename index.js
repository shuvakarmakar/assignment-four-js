// =======================First Problem Solve
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


// ======================== Second Problem Solve
// After getting a string into this function, string length check with Remainder operation and if its true then it will return 'even'. Else it will return 'odd'

function evenOdd(text){
    if(text.length % 2 == 0){
        return 'even';
    }
    else if(typeof text !=='string'){
        return 'Please input a String';
    }
    else{
        return 'odd';
    }

}

const myString = 'Batch7'; 
// You Can Write any String and Return will be Perfect



// ==========================  Third Problem Solve 
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



// ========================= Fourth problem Solve
const values = [ -4, -9, 5, 33, -55, 78, -98 ];

// You can write any array and result will be perfect
// This Function after getting an array it check till the end index of the array, if any value of the array get any value less than 0 then it count and add into neg_count variable ant all value of neg_count put into countValue variable.Otherwise it will return 0.

function findingBadData(values){
    let neg_count = 0;
    let countValue = 0;
    for(let i=0; i<values.length; i++){
        if(typeof values !== 'object'){
            return 'Please input an Array';
        }
        else if (values[i]<0){
            neg_count++;
            countValue = neg_count;
        }
        else{
            countValue;
        }
    }
    return countValue;
}


// ======================= Fifth Problem Solve
// After getting 3 input into the parameter, 1st input multiply with 21, 2nd input multiply with 32 and 3rd input multiply with 43 and all value put into a variable with addition then it compare with >=1000*2.If this condition true then it return totalFreindgem with substracting 2000. Otherwise it return previous value.

function gemsToDiamond(gem1, gem2, gem3){

    let firstFriendGem = gem1 * 21;
    let secondFriendGem = gem2 * 32;
    let thirdFriendGem = gem3 * 43;

    let totalFriendGem = firstFriendGem + secondFriendGem + thirdFriendGem;

    if(typeof gem1 !== 'number' || typeof gem2 !== 'number' || typeof gem3 !== 'number'){
        return 'Please Input Number';
    }
    else if(totalFriendGem >= 1000*2){
        totalFriendGem = totalFriendGem - 2000;
        return totalFriendGem;
    }
    else if(totalFriendGem < 1000*2){
        return totalFriendGem;
    }

}
