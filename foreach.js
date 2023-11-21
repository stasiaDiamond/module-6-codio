// * --------TASK 01: Using for...each Loops-----------


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



// * ----------PROVIDED SOLUTION:

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

