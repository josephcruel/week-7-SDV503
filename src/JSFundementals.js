// //Create a new function that takes an array with only numbers and return the first element. 
// let x = 5;
// console.log("Hello Class!")
// //A function that give the first value of an array
// function firstElementValue(arr) {
//     return arr[0][0]
// }
// //prints true if condition is met.
// if(x == 5) {
//     console.log("True")
// }

// //Calling the function to return the first element of the array.
// console.log(firstElementValue([["Joseph"],[1, 2, 3, 4, 5 ,6]]))



// //Create a function that takes a number, increment the number by 1 and return the result.
// //Function that give add an original number by "1".
// function incNum(x) {
//   return  x += 1
    
// }
// //Invoking the function
// console.log(incNum(10))



// //Create a function that takes an int minutes and convert it in seconds.

//Function that converts the minutes into seconds.
// function int(x) {
//     return int = (x * 60)
// }
//Calls the function.
// console.log(int(3))



// //second way of doing it

//Function that converts the minutes into seconds.
// function conSec(min) {
//     return (min * 60)
// }
//Calls the function.
// console.log(conSec(3))



// //Create a function that takes two numbers, returns true if the sum of both numbers is less than 100.
// function sumOfNum(x,y) {
//     if ((x + y) < 100) {
//         return "true"
//     } else {
//         return "false"
//     }
// }
// console.log(sumOfNum(60, 40))


// //ES6 way of doing it 
// const lessThan = (x,y) => (a+b) < 100




//Create a function that take an array of number, and return both minimum and maximum numbers in order.
//minMax[1,2,3,4,5] -> [1,5]
//Pair Coding 

// function minMax(minmax) {
//     let min = Math.min(...minmax)
//     let max = Math.max(...minmax)
//     return[min, max]
// }
// console.log(minMax([1,2,3,4,5]))

// //Function that gives the minimum and maximum value of the array
// function minMax(arr) {
//     let outputArr = []
//     let minArr = arr[0]
//     let maxArr = arr[0]
//     for(let i = 1; i < arr.length; i++) {
//         if(arr[i] < minArr) {
//             minArr = arr[i]
//         }
//         if(arr[i] > maxArr) {
//             maxArr = arr[i]
//         }
//     }
//     outputArr.push(minArr)
//     outputArr.push(maxArr)

//     return outputArr
// }
// //Calls the function
// console.log(minMax([34,4564,3,322,5]))



// //ES6 way 
// function minMax(arr) {
//     return [Math.min(...arr), Math.max(...arr)]
// }
// //Calls the function
// console.log(minMax([3,4,100,99,2342,-4242,-4242453]))
