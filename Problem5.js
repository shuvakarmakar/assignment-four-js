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


const givenValue = gemsToDiamond(20, 200, 50);
console.log(givenValue);