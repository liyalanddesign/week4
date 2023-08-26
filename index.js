console.log(` 
======================
1. QUESTION:
======================
   Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
      a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
            - Do not use numbers to reference the last element, find it programmatically.
            - ages[7] - ages[0] is not allowed!
      b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
      c. Use a loop to iterate through the array and calculate the average age.

ANSWER:
`);
// Initialize an array "ages" with given values
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Calculating the difference between the last and first element in the array
// Using the length of the array to access the last element ensures that we do not hard-code any indexes
let difference = ages[ages.length - 1] - ages[0];
console.log(`A : ${difference}`);

// Add a new age to the end of the array
ages.push(difference);

// Recalculate the difference to ensure our approach works dynamically for arrays of different lengths
difference = ages[ages.length - 1] - ages[0];
console.log(`B : ${difference}`);

// Calculate the average age
// First, get the total sum of all ages using a loop
let totalAge = 0;
for (let i = 0; i < ages.length; i++) {
  totalAge += ages[i];
}
// Then, divide the total sum by the number of ages to get the average
const averageAge = totalAge / ages.length;
console.log(`C : ${averageAge}`);

console.log(`

======================
2. QUESTION:
======================
- Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
     a. Use a loop to iterate through the array and calculate the average number of letters per name.
     b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

ANSWER:`);

const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
// a. Calculate average number of letters per name
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
  totalLetters += names[i].length;
}
const averageLetters = totalLetters / names.length;
console.log(`-a. Average number of letters per name: ${averageLetters}`);

// b. Concatenate names
let concatenatedNames = "";
for (let i = 0; i < names.length; i++) {
  concatenatedNames += names[i] + " ";
}
console.log(`-b. Concatenated names: ${concatenatedNames}`);

console.log(`

======================
3. QUESTION: 
======================
How do you access the last element of any array?

ANSWER:`);
// Initialize an array named 'lastElArray' with four integer values
const lastElArray = [5, 10, 15, 20];

// Access and print the last element of the array
// The index of the last element is 'length of the array minus 1' because arrays are 0-indexed
console.log(lastElArray[lastElArray.length - 1]); // Outputs: 20

console.log(`

======================
4. QUESTION: 
======================
How do you access the first element of any array?

ANSWER:`);
// Initialize an array named 'myFirstArray' with four integer values
const myFirstArray = [5, 10, 15, 20];

// Access and print the first element of the array using the index 0
console.log(myFirstArray[0]); // Outputs: 5

console.log(`

======================
5. QUESTION: 
======================
Create a new array called nameLengths. Write a loop to iterate over the previously created names
array and add the length of each name to the nameLengths array.

ANSWER:`);

// Initialize an empty array to store lengths of names
const nameLengths = [];

// Loop through each name in the 'names' array
for (let i = 0; i < names.length; i++) {
  // Get the length of the current name and add it to the 'nameLengths' array
  nameLengths.push(names[i].length);
}
// Print the resulting 'nameLengths' array to the console
console.log(nameLengths); // Expected output: [3, 5, 3, 5, 4, 3]

console.log(`

======================
QUESTION 6:
======================
Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

ANSWER:`);

// Initialize a variable to store the sum of the lengths
let sumOfLengths = 0;

// Loop through each length in the 'nameLengths' array
for (let i = 0; i < nameLengths.length; i++) {
  // Add the current length to the 'sumOfLengths' variable
  sumOfLengths += nameLengths[i];
}

// Print the total sum of name lengths to the console
console.log(sumOfLengths); // Expected output: 23

console.log(`

======================
QUESTION 7:
======================
Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to 
itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 
'HelloHelloHello').

ANSWER:`);
// Define a function that concatenates a word to itself 'n' times
function repeatWord(word, n) {
  return word.repeat(n);
}
console.log(repeatWord("Hello", 3)); // HelloHelloHello

console.log(`

======================
QUESTION 8:
======================
Write a function that takes two parameters, firstName and lastName, and returns a full name. 
The full name should be the first and the last name separated by a space.


ANSWER:`);
// Define a function that returns a full name
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(getFullName("John", "Doe")); // John Doe

console.log(`

======================
QUESTION 9:
======================
Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array 
is greater than 100.


ANSWER:`);
// Define a function that checks if sum of numbers in an array is greater than 100
function isSumGreaterThan100(numbers) {
  const total = numbers.reduce((acc, num) => acc + num, 0);
  return total > 100;
}
console.log(isSumGreaterThan100([50, 30, 25])); // true

console.log(`

======================
QUESTION 10:
======================
Write a function that takes an array of numbers and returns the average of all the elements in the array.

ANSWER:`);
// Define a function that calculates the average of numbers in an array
function average(numbers) {
  // 0 is initial value in this function
  const total = numbers.reduce((acc, num) => acc + num, 0);
  return total / numbers.length;
}
console.log(average([10, 20, 30])); // 20

console.log(`

======================
QUESTION 11:
======================
Write a function that takes two arrays of numbers and returns true if the average of the elements in 
the first array is greater than the average of the elements in the second array.

ANSWER:`);
//Define a function that checks if average of first array is greater than the second
function isFirstAverageGreater(arr1, arr2) {
  // previous function "average()" used;
  return average(arr1) > average(arr2);
}
console.log(isFirstAverageGreater([10, 20, 30], [15, 125])); // false

console.log(`

======================
QUESTION 12:
======================
Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

ANSWER:`);
// 12. Define a function that returns true if it's hot outside and money in pocket is greater than 10.50
function willBuyDrink(isHotOutside, moneyInPocket) {
  return isHotOutside && moneyInPocket > 10.5;
}
console.log(willBuyDrink(true, 11)); // true

console.log(`

======================
13. QUESTION:
======================
Create a function of your own that solves a problem. In comments, write what the function 
does and why youcreated it.

ANSWER:
`);
// Function that capitalizes the first letter of each word in a name
// This can be useful for form submissions where users might not capitalize their names correctly
function capitalizeName(name) {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
console.log(capitalizeName("john doe")); // John Doe
