/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const sortedNums = nums.sort((a, b)=> a - b )
    const setNums = new Set(sortedNums)
    const absentNums = [];
    for(let i = 1 ; i <= sortedNums.length ; i++){
      if(setNums.has(i) !== true){
        absentNums.push(i)
      }
    }
    return absentNums;
};