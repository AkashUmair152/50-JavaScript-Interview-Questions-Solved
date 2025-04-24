
// Question 1: Log your name on console with hobby
const cooking = "cooking"; // Define the variable cooking
console.log(`My name is Akash and my hobby is ${cooking}`);

// Question 2: Perform and console the result of 45 * 20 - 10
const result = 45 * 20 - 10;
console.log("Result of 45 * 20 - 10 is:", result);

// Question 3: print current full year /

const currentYear = new Date().getFullYear(); // Get the current year
console.log("Current full year is:", currentYear);  

// Question 4: create a two variables for first name and last name
const firstName = "Akash"; // Define the variable firstName
const lastName = "Umair"; // Define the variable lastName
console.log(`${firstName} ${lastName}`); // Print the full name

// Question 5: create a variable and track the value of the variable before and after udating it
let myVariable = 10; // Initialize the variable with a value of 10
console.log("Before updating, myVariable is:", myVariable); // Log the value before updating
myVariable = 20; // Update the variable to a new value of 20    
console.log("After updating, myVariable is:", myVariable); // Log the value after updating

// Question 6: print an error message using console.error
console.error("This is an error message!"); // Log an error message

// Question 7: create a variable for number and then take the square root of that number
console.log('Square root of a number 12 is '+  + 12*12); // Log the message
const number = 16; // Define the variable number

const squareRoot = Math.sqrt(number); // Calculate the square root of the number

console.log(`The square root of ${number} is:`, squareRoot); // Log the square root

// Question 8: create a variable and then find the type of that variable
const myVariableType = 42; // Define the variable myVariableType
const variableType = typeof myVariableType; // Get the type of the variable
console.log(`The type of myVariableType is:`, variableType); // Log the type of the variable

// Question 9: create a variable and then find the type of that variable
const myVariableType2 = "Hello, World!"; // Define the variable myVariableType2

const variableType2 = typeof myVariableType2; // Get the type of the variable
console.log(`The type of myVariableType2 is:`, variableType2); // Log the type of the variable

// 10 create a variable and then find the type of that variable
const myVariableType3 = true; // Define the variable myVariableType3
const variableType3 = typeof myVariableType3; // Get the type of the variable   
console.log(`The type of myVariableType3 is:`, variableType3); // Log the type of the variable

// Question 11: create a variable holding your age and then find the its grater then 18 or not 

const myAge = 2; // Define the variable myAge
const isGreaterThan18 = myAge > 18; // Check if myAge is greater than 18
console.log(`Is my age greater than 18?`, isGreaterThan18); // Log the result

// Question 12: console the result of 100/0 and observe the result
const divisionResult = 100 / 0; // Perform the division
console.log("Result of 100 / 0 is:", divisionResult); // Log the result

// Question 13: create a variable using let and cosnole the value of that variable
let myLetVariable = "Hello, let!"; // Define the variable myLetVariable
console.log("Value of myLetVariable is:", myLetVariable); // Log the value of the variable  

// Question 14: create a constant to store the value of PI
const PI = Math.PI; // Define the constant PI
console.log("Value of PI is:", PI); // Log the value of PI

// Question 15: create a variable with let and reassign the value of that variable and see the result
let myReassignableVariable = "Initial value"; // Define the variable myReassignableVariable
console.log("Before reassignment, myReassignableVariable is:", myReassignableVariable); // Log the value before reassignment
myReassignableVariable = "Reassigned value"; // Reassign the variable to a new value
console.log("After reassignment, myReassignableVariable is:", myReassignableVariable); // Log the value after reassignment

// Question 16: check type of null and log the result
const nullValue = null; // Define the variable nullValue
const nullType = typeof nullValue; // Get the type of the variable
console.log(`The type of nullValue is:`, nullType); // Log the type of the variable

// Question 17: check type of undefined and log the result
const undefinedValue = undefined; // Define the variable undefinedValue
const undefinedType = typeof undefinedValue; // Get the type of the variable
console.log(`The type of undefinedValue is:`, undefinedType); // Log the type of the variable

// Question 18: craete a variable of number as a string and then log it
const numberAsString = "42"; // Define the variable numberAsString
console.log("Value of numberAsString is:", numberAsString); // Log the value of the variable

// Question 19: create three variable of string, number and boolean and log them
const myString = "Hello, World!"; // Define the variable myString
const myNumber = 42; // Define the variable myNumber
const myBoolean = true; // Define the variable myBoolean
console.log("String:", myString); // Log the string variable
console.log("Number:", myNumber); // Log the number variable
console.log("Boolean:", myBoolean); // Log the boolean variable

// Question 20: use const to create an array and try to reassigning the  array and observe the error
const myArray = [1, 2, 3,4,5,6]; // Define the array myArray
console.log("Original array:", myArray); // Log the original array
myArray.pop(); // Remove the last element from the array
console.log("Array after pop:", myArray); // Log the array after removing the last element


// Question 21:create a for loop that prints numbers from 1 to 50
for(let i = 1; i <= 50; i++) { // Loop from 1 to 50
    console.log(i); // Log the current number
}

// Question 22: create a while loop to sum the numbers from 1 to 10

let sum = 0; // Initialize the sum variable
let j = 1; // Initialize the loop variable
while (j <= 10) { // Loop from 1 to 10
    sum += j; // Add the current number to the sum
    // console.log("Current number:", j); // Log the current number
    // console.log("Current sum:", sum); // Log the current sum
    j++; // Increment the loop variable
}
console.log("Sum of numbers from 1 to 10 is:", sum); // Log the sum

// Question 23: create for ..of loop to log each character of a string "JavaScript"
const myString2 = "JavaScript"; // Define the string myString2
for (const char of myString2) { // Loop through each character of the string
    console.log(char); // Log the current character
}

// Question 24: create a for LOOP that skips even numbers from 1 to 20
for (let k=1; k<=20; k++){ // Loop from 1 to 20
    if (k % 2 === 0) { // Check if the number is even
        continue; // Skip the even number
    }
    console.log(k); // Log the odd number
}

// Question 25: usingdo..while loop to log numbers from 10 to 1
console.log("Numbers from 10 to 1:"); // Log the message
let m = 10; // Initialize the loop variable
do{
    console.log(m); // Log the current number
    m--; // Decrement the loop variable

} while (m >= 1); // Continue until m is less than 1

// Question 26: create a for loop that calculates the factorial of a 5
let factorial = 1; // Initialize the factorial variable
const numberToFactorial = 5; // Define the number to calculate the factorial
for (let n = 5; n >0; n--) { // Loop from 1 to the number
    factorial = factorial*n; // Multiply the current number to the factorial
}
console.log(`Factorial of ${numberToFactorial} is:`, factorial); // Log the factorial

// Question 27: create a nested loop to print a 3x3 gird
const rows = 3; // Define the number of rows
const cols = 3; // Define the number of columns
for (let row = 1; row <= rows; row++) { // Loop through each row
    let gridRow = ""; // Initialize the gridRow variable
    for (let col = 1; col <= cols; col++) { // Loop through each column
        gridRow += `${row}${col} `; // Append the current row and column to the gridRow
    }
    console.log(gridRow); // Log the current row of the grid
}

// Question 28: use a for loop to reverse an arry [1,2,3,4,5]
const myArray2 = [1, 2, 3, 4, 5]; // Define the array myArray2
const reversedArray = []; // Initialize the reversedArray variable
for (let p = myArray2.length - 1; p >= 0; p--) { // Loop from the last index to the first index
    reversedArray.push(myArray2[p]); // Append the current element to the reversedArray
}
console.log("Reversed array:", reversedArray); // Log the reversed array

// Question 29: use a while loop to log number from 1 to 100 divisible by 5
let q = 1; // Initialize the loop variable
while (q <= 100) { // Loop from 1 to 100
    if (q % 5 === 0) { // Check if the number is divisible by 5
        console.log(q); // Log the number
    }
    q++; // Increment the loop variable
}

// Question 30: make a for .. in  loop to iterate over an object and logs its keys and values
const myObject = { // Define the object myObject
    name: "Akash",
    age: 25,
    hobby: "cooking"
};
for (const key in myObject) { // Loop through each key in the object
    console.log(`Key: ${key}, Value: ${myObject[key]}`); // Log the key and its corresponding value
}

// Question 31: create an arry of 5 favorite fruits and log them using forEach

const favoriteFruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"]; // Define the array favoriteFruits
favoriteFruits.forEach((fruit) => { // Use forEach to iterate over the array
    console.log(fruit); // Log each fruit
});

// Question 32: create an array and find and log  the 2nd  element of that array
const myArray3 = [10, 20, 30, 40, 50]; // Define the array myArray3
const secondElement = myArray3[1]; // Get the 2nd element of the array (index 1)
console.log("2nd element of the array is:", secondElement); // Log the 2nd element

// Question 33: add two elements to the array and log the result
const myArray4 = [1, 2, 3]; // Define the array myArray4
myArray4.push(4, 5); // Add two elements to the array
console.log("Array after adding two elements:", myArray4); // Log the updated array

// Question 34: remove the last element of the array and log the result
const myArray5 = [1, 2, 3, 4, 5]; // Define the array myArray5
myArray5.pop(); // Remove the last element of the array
console.log("Array after removing the last element:", myArray5); // Log the updated array

// Question 35: extract frsit three element of the array and log the result
const myArray6 = [1, 2, 3, 4, 5,6,7,8,9,10]; // Define the array myArray6
const firstThreeElements = myArray6.slice(0, 3); // Extract the first three elements of the array
console.log("First three elements of the array are:", firstThreeElements); // Log the first three elements

// Question 36: create an array and find the index of a specific element in that array
const myArray7 = [10, 20, 30, 40, 50]; // Define the array myArray7
const elementToFind = 30; // Define the element to find
const indexOfElement = myArray7.indexOf(elementToFind); // Find the index of the element in the array
console.log(`Index of ${elementToFind} in the array is:`, indexOfElement); // Log the index of the element

// Question 37: create an array and check if a specific element exists in that array .includes()

const myArray8 = [1, 2, 3, 4, 5]; // Define the array myArray8
const elementToCheck = 3; // Define the element to check
const elementExists = myArray8.includes(elementToCheck); // Check if the element exists in the array
console.log(`Does ${elementToCheck} exist in the array?`, elementExists); // Log the result

// Question 38: combine two arrays and log the result
const array1 = [1, 2, 3]; // Define the first array
const array2 = [4, 5, 6]; // Define the second array
const combinedArray = array1.concat(array2); // Combine the two arrays
console.log("Combined array:", combinedArray); // Log the combined array

// Question 39: create an array and sort it in ascending order using boble sort using for loop
const unsortedArray = [5, 2, 8, 1, 4]; // Define the unsorted array
let sortedArray = [...unsortedArray]; // Create a copy of the unsorted array
const arrayLength = sortedArray.length; // Get the length of the array

for (let i = 0; i < arrayLength - 1; i++) { // Loop through the array
    for (let j = 0; j < arrayLength - i - 1; j++) { // Loop through the unsorted part of the array
        if (sortedArray[j] > sortedArray[j + 1]) { // Compare adjacent elements
            // Swap the elements if they are in the wrong order
            const temp = sortedArray[j]; // Store the current element in a temporary variable
            sortedArray[j] = sortedArray[j + 1]; // Move the next element to the current position
            sortedArray[j + 1] = temp; // Place the current element in the next position
        }
    }
}
console.log("Sorted array in ascending order:", sortedArray); // Log the sorted array

// Question 40: create a copy of an array without manupulating the original array
const originalArray = [1, 2, 3, 4, 5]; // Define the original array
const copiedArray = [...originalArray]; // Create a copy of the original array using spread operator
console.log("Original array:", originalArray); // Log the original array
console.log("Copied array:", copiedArray); // Log the copied array

// Question 41: write a function that checks the even or odd number
function checkEvenOdd(number) { // Define the function checkEvenOdd
    if (number % 2 === 0) { // Check if the number is even
        console.log(`${number} is an even number.`); // Log that the number is even
    } else { // If the number is odd
        console.log(`${number} is an odd number.`); // Log that the number is odd
    }
}

checkEvenOdd(10); // Call the function with an even number
checkEvenOdd(7); // Call the function with an odd number


// Question 42: write a function to calculate the area of circle with its radius
function calculateAreaOfCircle(radius) { // Define the function calculateAreaOfCircle
    const area = Math.PI * radius * radius; // Calculate the area of the circle
    return area; // Return the calculated area
}
const radius = 3; // Define the radius of the circle
const areaOfCircle = Math.round(calculateAreaOfCircle(radius)); // Call the function to calculate the area
console.log(`Area of the circle with radius ${radius} is:`, areaOfCircle); // Log the area of the circle

// Question 43: write a function to calculate that accept an array and return the sum of all elements in that array

function calculateArraySum(array) { // Define the function calculateArraySum
    let sum = 0; // Initialize the sum variable
    for (const element of array) { // Loop through each element in the array
        sum += element; // Add the current element to the sum
    }
    return sum; // Return the calculated sum
}
const myArray9 = [1, 2, 3, 4, 5]; // Define the array myArray9
const arraySum = calculateArraySum(myArray9); // Call the function to calculate the sum
console.log("Sum of all elements in the array is:", arraySum); // Log the sum of the array elements

// Question 44: write a function that checks if a string is start with specfics character 

function startsWithCharacter(string, character) { // Define the function startsWithCharacter
    if (string.startsWith(character)) { // Check if the string starts with the specified character
        console.log(`"${string}" starts with "${character}".`); // Log that the string starts with the character
    } else { // If the string does not start with the character
        console.log(`"${string}" does not start with "${character}".`); // Log that the string does not start with the character
    }
}
const myString3 = "Hello, World!"; // Define the string myString3
const characterToCheck = "H"; // Define the character to check
startsWithCharacter(myString3, characterToCheck); // Call the function to check if the string starts with the character

// Question 45: write a function to find the maximum of two numbers
function findMaximum(a, b) { // Define the function findMaximum
    return a > b ? a : b; // Return the maximum of the two numbers using ternary operator
}
const num1 = 10; // Define the first number
const num2 = 20; // Define the second number
const maxNumber = findMaximum(num1, num2); // Call the function to find the maximum number
console.log(`Maximum of ${num1} and ${num2} is:`, maxNumber); // Log the maximum number

// Question 46: write a function that gets a number and return its factroial 

function fact(){
    const number = 5; // Define the number to calculate the factorial
    let result = 1; // Initialize the result variable
    for (let i = 1; i <= number; i++) { // Loop from 1 to the number
        result *= i; // Multiply the current number to the result
    }
    return result; // Return the calculated factorial
}
const factorialResult = fact(); // Call the function to calculate the factorial
console.log(`Factorial of 5 is:`, factorialResult); // Log the factorial result

// Question 47: write a function that takes a string and returns its reverse

function reverseString(str) { // Define the function reverseString
    return str.split("").reverse().join(""); // Split the string into an array, reverse it, and join it back into a string
}   
const myString4 = "Hello"; // Define the string myString4
const reversedString = reverseString(myString4); // Call the function to reverse the string
console.log(`Reversed string of "${myString4}" is:`, reversedString); // Log the reversed string

// Question 48: write a function that takes an array and returns the largest number in that array
function findLargestNumber(array) { // Define the function findLargestNumber
    let largest = array[0]; // Initialize the largest variable with the first element of the array
    for (const number of array) { // Loop through each number in the array
        if (number > largest) { // Check if the current number is larger than the largest number
            largest = number; // Update the largest number
        }
    }
    return largest; // Return the largest number
}
const myArray10 = [1, 2, 3,100, 4, 5]; // Define the array myArray10
const largestNumber = findLargestNumber(myArray10); // Call the function to find the largest number
console.log("Largest number in the array is:", largestNumber); // Log the largest number

// Question 49: write a function that combines strings in kabab-case ("hello-world")
function toKebabCase(str) { // Define the function toKebabCase
    return str.split(" ").join("-").toLowerCase(); // Split the string into an array, join it with "-", and convert to lowercase
}
const myString5 = "Hello World"; // Define the string myString5
const kebabCaseString = toKebabCase(myString5); // Call the function to convert to kebab-case
console.log(`Kebab-case string of "${myString5}" is:`, kebabCaseString); // Log the kebab-case string

// Question 50: write a function everytime it called logs "Hello World"
function logHelloWorld() { // Define the function logHelloWorld
    console.log("Hello World"); // Log "Hello World"
}
logHelloWorld(); // Call the function to log "Hello World"  


// Question 51: Write a function that checks if a number is a prime number

function isPrime(number) { // Define the function isPrime
    if (number <= 1) return false; // Numbers less than or equal to 1 are not prime
    for (let i = 2; i <= Math.sqrt(number); i++) { // Loop from 2 to the square root of the number
        if (number % i === 0) { // Check if the number is divisible by i
            return false; // If divisible, it's not a prime number
        }
    }
    return true; // If no divisors are found, it's a prime number
}

const testNumber = 29; // Define a number to test
const isTestNumberPrime = isPrime(testNumber); // Call the function to check if the number is prime
console.log(`Is ${testNumber} a prime number?`, isTestNumberPrime); // Log the result