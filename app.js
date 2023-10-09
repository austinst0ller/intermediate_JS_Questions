// Q1.
// given 2 values, return 1st if falsey, else return 2nd value
/**
 * function filterFalsey(elem1, elem2) {
 *      if (// falsey) {
 *          // return elem1
 *      }
 *      return elem2
 *      // !! returns whether value is truthy or falsey
 * }
 */

function filterFalsey(elem1, elem2) {
    return !elem1 ? elem1 : elem2
}
console.log(filterFalsey(null, 5))


// Q2. 
// given an array, return its length
function arrLength(array) {
    return array.length
}
console.log(arrLength([0, 45, 7]))


// Q3. 
// given an array, retunr the last value
function returnLastValue(arr) {
    return arr[arr.length - 1]
}
console.log(returnLastValue([9, 4, 'apple']))


// Q4. 
// given an arr, return the sum of every value
function arrSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
console.log(arrSum([9, 4, 1, 2]))


// Q5. 
// given a num, add up all the numbers from 1 to the num given
// @example: input of 4 will give you 1 + 2 + 3 + 4, which = 10
function progressiveSum(num) {
    let sum = 0
    for (let i = 1; i <= num; i++) {
        sum += i
    }
    return sum
}
console.log(progressiveSum(4))


// Q6. 
// given a num in seconds, return the num in mm:ss format
function calcTime(seconds) {
    let timerMins = Math.floor(seconds / 60)
    let timerSecs = seconds % 60

    if (timerMins.toString().length === 1) {
        timerMins = '0' + timerMins
    }
    return timerMins + ':' + timerSecs
}
console.log(calcTime(98))


// Q7.
// given an arr of numbers, return the largest num
function getMax(arr) {
    let largest = Math.max.apply(0, arr)
    return largest
}
console.log(getMax([-100, -200, 10]))


// Q8.
// given a str, return the str in reverse
function reverseStr(str) {
    // Step 1. use .split('') to convert str into an array
    // let splitStr = str.split('')
    // ['A', 'u', 's', 't', 'i', 'n']

    // Step 2. use .reverse() to reverse the new array
    // let reverseArr = splitStr.reverse()
    // ['n', 'i', 't', 's', 'u', 'A']

    // Step 3. use .join("") to join the elems in arr into a str
    // let joinArr = reverseArr.join("")
    // 'nitsuA'

    // join the 3 methods together to condense this into 1 line

    return str.split('').reverse().join('')
}
console.log(reverseStr('Austin'))


// Q9.
// take an arr and return the same length arr replacing all elements with 0s
function convertToZeros(arr) {
    // Solution 1.
    // let newArr = []
    // for (let i = 0; i < arr.length; i++) {
    //     newArr[i] = 0
    // }
    // return newArr

    // Solution 2.
    // return new Array(arr.length).fill(0)

    // Solution 3.
    return arr.map(elem => 0)
    // .map() turns every element of an arr to the value
    // on the right of the '=>' arrow

    /**
     * there is an invisible 'return' statement after the '=>'
     * if you want to return an object:
     * 
     * return arr.map(elem => {
     *      return 0
     * })
     * 
     * the 'return' statement won't be there anymore so you
     * have to type it out
     */
}
console.log(convertToZeros([0, 1, 2, 3, 4]))


// Q10.
// filter out apples from the array
function removeApples(arr) {
    // Solution 1.
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === 'Apple') {
    //       arr.splice(i, 1)
    //     }
    // }
    // return arr

    // Solution 2.
    return arr.filter(elem => elem !== 'Apple')
}
console.log(removeApples(['Mango', 'Apple', 'Orange', 'Apple', 'Banana', 'Apple']))


// Q11.
// given an array, filter out all the falsy values and return only truthy
function filterOutFalsy(arr) {
    return arr.filter(elem => !!elem === true)
}
console.log(filterOutFalsy(['String', 0, false, [], 500, null]))

/* this is how you do it but w a for-loop */
function filterOutFalsyForLoop(arr) {
    let truthyArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!!arr[i] === true) {
            truthyArr.push(arr[i])
        }
    }
    return truthyArr
}
console.log(filterOutFalsyForLoop([null, 500, 'String']))


// Q12.
// given an arr of truthy & falsy vals, return the same arr w its boolean vals
function convertToBoolean(arr) {
    let convertedArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!!arr[i] === true) {
            convertedArr.push(true)
        } else {
            convertedArr.push(false)
        }
    }
    return convertedArr
}
console.log(convertToBoolean([0, 500, '500', NaN, 'Austin']))

/* much more efficient */
function convertToBooleanBetter(arr) {
    return arr.map(elem => !!elem)
}
console.log(convertToBooleanBetter([0, 500, '500', NaN, 'Austin', []]))