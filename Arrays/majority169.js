function findMajority(nums){
    let candidate = null , count=0;

    for(let num of nums){
        if(count == 0){
            candidate = num;
        };

        count+= (candidate = num)? 1 : -1;
    }
        return candidate;
};
let nums = [2,2,1,1,1,2,2];
console.log(findMajority(nums))




// Input: nums = [2,2,1,1,1,2,2]
// Output: 2