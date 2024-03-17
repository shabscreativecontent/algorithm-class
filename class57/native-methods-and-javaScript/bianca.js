// TASK: Transform this simple sorting algorithm into a unique sort, meaning that it should not return any duplicate values in the sorted array.


const uniqSort = function(arr){
    const breadcrumbs = {}
    // const result = [arr[0]]
    const result = []

    for (let i = 1; i < arr.length; i++){
        // start loop at 1 as element 0 can never be a duplicate
        if(!breadcrumbs[arr[i]]){
            result.push(arr[i])
            breadcrumbs[arr[i]] = true
        }
    }
    return result.sort((a,b) => a - b)
}

const answer = uniqSort([4,2,2,3,2,2,2]) // => [2,3,4]

console.log(answer);



// TASK: Write a function, times10, that takes an argument, n, and multiples n times 10
// A simple multiplication fn
const time10 = (n) => (n * 10);

console.log(time10(5));




// TASK: use an object to cache the results of your times10 function.
// protip 1: create a function that checks if the value for n has been calculated before.
// protip: if the value for n has not been calculated, calculate and then save the result in the cashe object.
const cashe = {}

const memoTimes10 = (n) => {
    if(n in cashe){
        console.log("Fatching from cashe:", n);
        return cache[n];
    } else {
        console.log("Calculating result");
        let result = time10(n)
        cashe[n] = result;
        return result
    }
}

console.log(memoTimes10(6));
// console.log(memoTimes10(6))




// TASK: rewrite this function so that it uses a loop rather than recursion

function joinElements(arr,joinString){
    let resultSoFar = ''

    for(let i = 0; i < arr.length - 1; i++){
        resultSoFar += arr[i] + joinString
    }

    return resultSoFar + arr[arr.length - 1]
}

const hmm = joinElements(['s', 'cr', 't cod', ' :) :)'], 'e')

console.log(hmm);



// TIME COMPLEXITY
const isUni = (arr) => {
    let result = true;

    for(let i = 0; i < arr.length; i++){
        console.log(`...Outer Loop.... ${i}`);
        for (let j = 0; j < array.length; j++) {
            console.log(`...Inner Loop.... ${j}`);
            if(i !== j && arr[i] === arr[j]){
                result = false
            }
            
        }
    }

    return result
}

const isUnique = (arr) => {
    const breadCrumbs = {}
    let result = true;

    for(let i = 0; i < arr.length; i++){
        console.log(`...Outer Loop.... ${i}`);
        if(breadCrumbs[arr[i]]){
            result = false;
        } else {
            breadCrumbs[arr[i]] = true
        }
    }

    return result;
}

console.log(isUnique([1,2,3,4]) === true);




// TASK: Transform this simple sorting algorithm into a unique sort.
// it should not return any duplicate values in the sorted array.


// input: [1,5,2,1] => output: [1,2,5]
// input: [4,2,2,3,2,2,2] => output [2,3,4]

const uniqSort1 = function(arr){
    const breadCrumbs = {}
    let newArr = []

    for(let num of arr){
        if(!breadCrumbs[num]){
            newArr.push(num)
            breadCrumbs[num] = true
        }
    }

    return newArr.sort((a, b) => a - b);
}

console.log(uniqSort1([4,2,2,3,2,2,2]));




// TASK: Write a function, times10, that takes an argument, n, and multiples n times 10
// A simple multiplication fn
const times10 = (n) => (n * 10)


// TASK: use an object to cache the results of your times10 function.
// protip 1: create a function that checks if the value for n has been calculated before.
// protip: if the value for n has not been calculated, calculate and then save the result in the cashe object.

let cacheObj = {}

function checkCacheObj(n){

    if(n in cacheObj){
        console.log(n);
        return cacheObj[n]
    } else {
        let result = times10(n)
        cacheObj[n] = result
        return result
    }
}


console.log(checkCacheObj(9));
console.log(checkCacheObj(9));




// TASK : Clean up your global scope by moving your cache inside your function.
// protip: Use a closure to return a function that you can call later

const memoizedClosureTime10 = () => {
    let cache = {}
    console.log(cache);

    return (n)=>{
        if(n in cache){
            console.log(n);
            return cache[n]
        } else{
            let result = n * 10
            cache[n] = result
            return result
        }
    }
}

const memoClosureTimes10 = memoizedClosureTime10()

// console.log(memoClosureTimes10(8));
// console.log(memoClosureTimes10(9));
// console.log(memoClosureTimes10(10));




// TASK:  Make your memo function generic and accept the time10 function as a callback rather than defining the n*10 logic inside the if/else or pulling in from the global scope.

// protip: Take advantage of the fact that parameters are saved in the closure as well, just like the cache from the previous example
const memoize = (cb) => {
    const cache = {}

    return (n)=>{
        if(n in cache){
            console.log(`Fetch from cache : ${n}`);
            cache[n] = n
        } else {
            let result = cb(n)
            cache[n] = result
            return result
        }
    }
}

const memoize1 = (cb) => {
    const cache = {}

    return (...args)=>{
        if(n in cache){
            console.log(`Fetch from cache : ${n}`);
            return cache[n]
        } else {
            let result = cb(...args)
            cache[n] = result
            return result
        }
    }
}

// return function from memorizedAdd
const memorizedAdd = memoize(times10)

console.log(memorizedAdd(9));



// RECURSION
// Call Stack GAme
let traker = 0

let callMe = function(arg) {
    traker++
    if(traker === 3){
        traker = 0
        return `loops! ${arg}`;
    }
    return callMe('anytime')
}

console.log(callMe());
console.log(traker);


const loopTimes = (n)=>{
    console.log('n ===', n);

    if(n <= 1){
        return 'Complete'
    }

    return loopTimes(n-1)
}

console.log(loopTimes(3));


// FACTORIAL WITH LOOP
function computeFactorial(num){
    let result = 1

    for(let i = 2; i <= num; i++){
        console.log(`result = ${result} * ${i} (${result * i})`)
        result *= i;
    }

    return result
}

console.log(computeFactorial(5));

// RECURSION FACTORIAL LOOP
function recursionFactorial(num){
    if(num === 1){
        console.log('Hitting the base case');
        return 1
    } else {
        console.log(`returning ${num} * recursionFactorial(${num - 1})`);
        return num * recursionFactorial(num - 1)
    }
}

console.log(recursionFactorial(5));



// FACTORIAL WITH LOOP
function startEndPoint(start, end) {
    let result = 1

    for(let i = start; i <= end; i++){
        result *= i
    }

    return result
}

console.log(startEndPoint(1, 5));

// RECURSION FACTORIAL LOOP
function logNumberRecursively(start, end){
    console.log(`recurtively looping from ${start} until ${end}`);

    function recurse(i){
        console.log(`hitting index`, i);

        if(i < end){
            recurse(i + 1)
        }
    }

    recurse(start)
}

logNumberRecursively(1, 4)





// Wrapper Functions
function wrapper(start, end){
    function recurse(i){
        console.log(`Looping from ${start} until ${end}`);

        if(i < end){
            recurse(i + 1)
        }
    }

    recurse(start)
}

function memoFn(i, end){
    console.log(`Looping from ${i} until ${end}`);

    if(i < end){
        memoFn(i + 1, end)
    }
}

console.log(memoFn(1, 4));

// ACCUMULATORS
function joinEleM(array, joinString){

    function recurse(index, resultSoFar){
        resultSoFar += array[index]

        if(index === array.length - 1){
            return resultSoFar
        } else{
            return recurse(index + 1, resultSoFar + joinString)
        }
    }

    return recurse(0, '')
}

console.log(joinEleM(['s','cr','t cod', ' :) :)'], 'e'));



// TASK: rewrite this function so that it usee a loop rather than recursion
function joinElementClass(array, joinString){

    function recurse(index, resultSoFar){
        resultSoFar += array[index]

        if(index === array.length - 1){
            return resultSoFar
        } else{
            return recurse(index + 1, resultSoFar + joinString)
        }
    }

    return recurse(0, '')
}

function joinElement(array, string){
    let joinStr = ''

    for(let i = 0; i < array.length - 1; i++){
        joinStr += (array[i] + string)
    }

    return joinStr + array[array.length - 1]
}

console.log(joinElement(['s','cr','t cod', ' :) :)'], 'e'));


// TASK: Without peeking, write your own recursive factorial method
const memorize = (fn) =>{
    let cache = {}

    return (...args)=>{
        let n = args[0]

        if(n in cashe){
            console.log("fetching from cache", n);
            return cashe[n]
        } else {
            console.log("calculating result", n);
            let result = fn(n)
            cache[n] = result
            return result;
        }
    }
}

const factorials = memorize((x) => {
    if(x === 0){
        return 1
    }else{
        console.log(`x = ${x} and factorials(${x - 1}) `);
        return x * factorials(x - 1)
    }
})

// Task: use your memo function from the previous execise to memoize your factorial method

console.log(factorials(6));





// DIVIDE AND COMQUER
// Exercise 1
// TASK: implement linear Search.

function linearSearch(list, item){
    for (let i = 0; i < list.length; i++) {
        if(list[i] === item){
            return `${item} is on index ${i}`
        }
        
    }
}

console.log(linearSearch([2,6,7,90,100], 90));

// BInarySearch
function binarySearch(list, item){
    let min = 0;
    let max = list.length - 1
    let guess

    while(min <= max){
        guess = Math.floor((min + max) / 2)

        console.log(guess);
        if (list[guess] === item){
            return guess
        } else {
            if(list[guess] < item){
                min = guess + 1
            } else {
                max = guess - 1
            }
        }
    }

    return -1;
}

console.log(binarySearch([2,6,7,90,100], 90));



// TASK: Impliment bubblesort
// Simple of arrays to sort
let arrayRandom = [9,2,5,6,4,3,7,10,1,8]
let arrayOrder = [1,2,3,4,5,6,7,8,9,10]
let arrayReversed = [10,9,8,7,6,5,4,3,2,1]

function swap(array, i, j){
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp;
}

// basic implementation
function bubblesort(array){
    let countOuter = 0
    let countInner = 0
    let CountSwap = 0

    // for(let i = 0; i < array.length; i++){
    //     countOuter++
    //     for(let j = 1; j < array.length; j++){
    //         countInner++
    //         if(array[j - 1] > array[j]){
    //             CountSwap++
    //             swap(array, j - i, j)
    //         }
    //     }
    // }

    let swapped;
    do{
        countOuter++
        swapped = false
        for(let i = 0; i < array.length; i++){
            if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
                countInner++
                swap(array, i, i + 1)
                swapped = true
            }
        }
    } while(swapped)

    console.log('Outer:', countOuter, "inner", countInner, "swap", CountSwap);
    return array
}

console.log(bubblesort(arrayRandom));



// Task: implement mergeSort
// Split the array into halves ans merge them recursively
function mergeSort(arr){
    if(arr.length === 1){
        // return once we hit an array with a single item
        return arr
    }

    const middle = Math.floor(arr.length /2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    const sortLeft = mergeSort(left)
    const sortRight = mergeSort(right)

    return merge( sortLeft, sortRight )
}

// Compare the arrays item by item and return the concatenated result
function merge(left, right){
    let result = []
    let indexLeft = 0
    let indexRight = 0

    while(indexLeft < left.length && indexRight < right.length){
        if(left[indexLeft] < right[indexRight]){
            result.push(left[indexLeft])
            indexLeft++
        } else {
            result.push(right[indexRight])
            indexRight++
        }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

const list = [2,5,1,3,7,2,3,8,6,3]
console.log(mergeSort(list));



// GREEDY ALGORITHMS
// Examples
// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5.


// coin values: 5,10,25
const makeChange = (coins, amount) => {
    let sortCoins = coins.sort((a,b) => b - a)

    let coinTotal = 0
    let i = 0
    while(amount > 0){
        if(sortCoins[i] <= amount){
            console.log(`amount: ${amount} and coins: ${coins[i]}`);
            amount -= sortCoins[i]
            coinTotal++
        } else {
            i++
        }
    }

    return coinTotal
}

console.log(makeChange([25,10,5], 40));
// input amount: 40, output # of coins: 3 (25, 10, 5)
// input amount: 35, output # of coins: 2 (25, 10)



// BRUTE FORCE ALGORITHMS
let recursionCounter = 0
const coins = [10,6,1]

const makechange = (value) => {
    recursionCounter++
    console.log(`${recursionCounter}: calling ${value}`);

    if(value === 0) return 0

    let minCoins
    coins.forEach((coin) => {
        if(value - coin >= 0){
            let currMinCoins = makeChange(value - coins)

            if(minCoins === undefined || currMinCoins < minCoins){
                minCoins = currMinCoins
            }
        }
    })

    return minCoins + 1
}

console.log(makechange(12));




// Example 2:
const cache = {}
const coinS = [10,6,1]

const makEChange = (c)=>{
    // return the value if it's in the cache
    if(cache[c]) return cache[c]

    let minCoins = -1

    // find the best coin
    coinS.forEach(coin => {
        if(c - coin >= 0){
            let currMinCoins = makEChange(c - coin)

            if(minCoins === -1 || currMinCoins < minCoins){
                minCoins = currMinCoins
            }
        }
    })

    // Save the value into the cache
    cache[c] = minCoins + 1
    return cache[c]
}


