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

const totalBadNumber = findingBadData(values);
console.log(totalBadNumber);