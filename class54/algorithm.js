// O(1) or Order(1) 
// Constant Time
// No matter how many inputs are located in nums there will only ever be one operation needed!

const nums = [1,2,3,4,5]
const firstNum = nums[0]
console.log(firstNum);


// O(n) or Order n
// Linear Time
// Linear Scailing Time
// Here we sum the numbers in the array. we have to add each number to a running sum, so we have to operate on each one. this means one operation per input.

const nums1 = [1,2,3,4,5]
let sum = 0

for(let num of nums1){
   sum += num
}

console.log(sum);


// O(1) vs O(n)
// summing function for a sorted, contiguous array of integers that start with the number 1? could easily be O(n) but..
const sumContiguousArr = function(arr){
   // // get the last item
   const lastItem = arr[arr.length - 1]

   // // Gauss's trick
   return lastItem * (lastItem + 1) / 2
}

const numbers = [1,2,3,4,5]
const sumOfArr = sumContiguousArr(numbers)

console.log(sumOfArr);



// O(n^2) or Ordered N Squared
const hasDuplicates = function(nums){
   for(let i = 0; i < nums.length; i++){
      const thisNum = nums[i]
      for(let j = 0; j < nums.length; j++){
         if(j !== i){
            const otherNum = nums[j]
         }
      }
      if(otherNum === thisNum) return true
   }
   return false
}


const nums2 = [1,2,3,4,5,5]
// const answer = hasDuplicates(nums2)

console.log();




// Let's loop through all bids
// the complexity of the code is a * Quadratic *
const findMaxBid = function(bids){
   let maxBid = bids[0]
   let minBid = bids[0]

   for (let i = 0; i < bids.length; i++){
      for (let j = 0; j < bids.length; j++){
         if(bids[i] > bids[j] && bids[i] > maxBid){
            maxBid = bids[i]
         } else if (bids[i] < bids[j] && bids[i] < minBid){
            minBid = bids[i]
         }
      }
   }
   
   return [maxBid, minBid]
}

const allBibs = [2,7,3,1,4,5,5]
console.log(findMaxBid(allBibs));