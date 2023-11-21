// This is a list of words
let words = ['Loops', 'are', 'a', 'great', 'way', 'to', 'find', 'elements', 'in', 'an', 'array'];

// TODO: implement this function to return a string containing all words in a paragraph.
function createParagraph(words) {
  let paragraph = '';

  words.forEach(function (word, index) {
    paragraph += word;
    if (index < words.length - 1) {
      paragraph += ' ';
    }
  })

  return paragraph;
}



// Prints paragraph to console
console.log(createParagraph(words));

//don't change this line
module.exports = { createParagraph };



// * --------TASK 02-----------
// This is the array that contains numbers for you to work with
var myArray = [1, 2, 5, 6, 12, 23, 15, 31];

// This array should only contain even numbers
var evenArray = [];

// This code will call your function when the page loads up
// Don't edit this function!
window.onload = () => {
  console.log(filterArray(myArray, isEvenCallBack));
};

function filterArray(myArray, isEvenCallBack) {
  // TODO: use filterArray to determine if a number is even or odd.
  //If the number is even, add it to the array 'evenArray'

  return evenArray;
}

// This function should return 'true' if a number is even and 'false' if a number is odd
function isEvenCallBack(number) {
  // TODO: use the mod operator (%) to determine if number is even or odd
}

// Do not edit code past this point
module.exports = { filterArray, isEvenCallBack };



// * ------------TASK 03-------
// This script will run when the page is loaded
window.onload = () => {
  let result = countWords();
  console.log(result);
};


function countWords() {
  // The text variable contains the long string of words
  let text =
    "Some of the biggest and most expensive transportation projects in the world have involved building bridges. Bridges are crucial links that carry cars, trucks and trains across bodies of water, mountain gorges or other roads. As a result, they are one of the most important aspects of civil engineering and are subject to intense scrutiny, especially when they collapse. Bridge collapses can be tragic events, leading to loss of life and serious property damage. That is why bridge engineers, designers and builders must always take their jobs very seriously. The best way for them to prevent these accidents is to understand why bridges collapse in the first place. Understanding bridge collapses can lead to major changes in the design, construction and safety of future building projects. The following are main reasons why bridges fall.";

  // TODO: add code here to remove the periods and commas and transform all words to lowercase letters

  // The wordArray array will contains a key value pair for words and their occurences in the text
  const wordArray = text.split(" ");

  // This loop goes through the wordArray and creates the key value pair objects
  const wordCount = {};
  wordArray.forEach((item) => {
    if (wordCount[item] == null) wordCount[item] = 1;
    else {
      wordCount[item] += 1;
    }
  });

  // Turn objects into an array of arrays
  let myArray = Object.entries(wordCount);

  // TODO: sort the arrays based on the count number and store the result in a variable called bArray

  // return the first three most common words.
  return bArray;
}

//don't change this line
module.exports = { countWords };





// * ----------PROVIDED SOLUTIONS:

// * --------TASK 01:
// This is a list of words
// let words = ['Loops', 'are', 'a', 'great', 'way', 'to', 'find', 'elements', 'in', 'an', 'array'];

// // TODO: implement this function to return a string containing all words in a paragraph.
// function createParagraph(words) {
//   let paragraph = '';

//   words.forEach((word) => {
//     paragraph += word + ' ';
//   });

//   return paragraph;
// }

// // Prints paragraph to console
// console.log(createParagraph(words));

// // don't change this line
//   module.exports = { createParagraph };



// * --------TASK 02:

// // This is the array that contains numbers for you to work with
// var myArray = [1, 2, 5, 6, 12, 23, 15, 31];

// // This array should only contain even numbers
// var evenArray = [];

// function filterArray(myArray, isEvenCallBack) {
//   // TODO: use filterArray to determine if a number is even or odd.
//   //If the number is even, add it to the array 'evenArray'
//   for (let i = 0; i < myArray.length; i++) {
//     if (isEvenCallBack(myArray[i])) evenArray.push(myArray[i]);
//   }
//   return evenArray;
// }

// // This function should return 'true' if a number is even and 'false' if a number is odd
// function isEvenCallBack(number) {
//   // TODO: use the mod operator (%) to determine if number is even or odd
//   if (number % 2 == 0) return true;
//   else return false;
// }

// // This code will call your function when the page loads up
// // Don't edit this function!
// window.onload = () => {
//   console.log(filterArray(myArray, isEvenCallBack));
// };

// // Do not edit code past this point
//   module.exports = { filterArray, isEvenCallBack };


// * ---------------TASK 03:
// // Count words in text and then order with
// // most common first
// window.onload = () => {
//   let result = countWords();
//   console.log(result);
// };

// function countWords() {
//   let text =
//     'Some of the biggest and most expensive transportation projects in the world have involved building bridges. Bridges are crucial links that carry cars, trucks and trains across bodies of water, mountain gorges or other roads. As a result, they are one of the most important aspects of civil engineering and are subject to intense scrutiny, especially when they collapse. Bridge collapses can be tragic events, leading to loss of life and serious property damage. That is why bridge engineers, designers and builders must always take their jobs very seriously. The best way for them to prevent these accidents is to understand why bridges collapse in the first place. Understanding bridge collapses can lead to major changes in the design, construction and safety of future building projects. The following are main reasons why bridges fall.';
//   // remove the periods and commas and make all lowercase letters
//   text = text.replace(/[.,]/g, '');
//   text = text.toLocaleLowerCase();
//   const wordArray = text.split(' ');
//   console.log(wordArray);
//   // create object and make keys the "words" and the value the "word count"
//   const wordCount = {};
//   wordArray.forEach((item) => {
//     if (wordCount[item] == null) wordCount[item] = 1;
//     else {
//       wordCount[item] += 1;
//     }
//   });
//   // turn objects into an array of arrays
//   let myArray = Object.entries(wordCount);

//   // now sort the arrays based on the count number
//   let bArray = myArray.sort((a, b) => (a[1] < b[1] ? 1 : a[1] > b[1] ? -1 : 0)).slice(0, 3);
//   // print out first three most common words.
//   return bArray;
// }

// //don't change this line
//   module.exports = {countWords};