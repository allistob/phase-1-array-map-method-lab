const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  const newTutorials = tutorials.map(function(title) {
        // console.log(title)
        // title is a string
        //we want to capitalize each word in title.
        //If title was an array of words what method could we use to capitalize each word.
        // toUppercase would be used. we can also use the map method.
        //split it into an individual array of words and then use map method.
        const newArray = title.split(' ');
        const newArray2 = newArray.map(function(word) {
          const firstLetter = word.charAt(0).toUpperCase();
          const restOfWord = word.slice(1);
          return firstLetter + restOfWord;
        })
        console.log(newArray2)
        return newArray2.join(' ')
  })
  console.log(newTutorials)
  return newTutorials
}
// const titleCased = () => {
//   return tutorials
// }
