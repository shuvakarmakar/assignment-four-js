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

const myString = 'true'; 
// You Can Write any String and Return will be Perfect
const stringLength = evenOdd(myString);
console.log(stringLength);