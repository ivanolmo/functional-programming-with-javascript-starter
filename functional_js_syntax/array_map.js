// 1. Write a map function to reverse this array:
const start = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// your code
const reversedStart = start.map(x => Math.abs(x - 11));
console.log(reversedStart);
// expected output: Array [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// ----------------------------------------------------------



// 2. Write a map function to print the Job: Name:
const shipMates = [["Mal", "Captain"], ["Wash", "Pilot"], ["Zoey", "1st Mate"], ["Jayne", "Public Relations"]];

// your code
const matesWithTitles = shipMates.map(x => `${x[1]}: ${x[0]}`);
console.log(matesWithTitles);
// expected output: Array ["Captain: Mal", etc...]

// ----------------------------------------------------------



// 3. Write a map function that prints the name: even|odd
const awayTeam = ["Picard", "Riker", "Troy", "Data"];

// your code
const awayTeamUpdated = awayTeam.map((x, i) => (i % 2 === 0) ? `${x}: even` : `${x}: odd`);
console.log(awayTeamUpdated);
// expected output: Array: ["Picard: even", "Riker: odd", etc...]

// ----------------------------------------------------------



// 4. Create a multidimensional array of each item and its index in the original Array.

const sci_fi_shows = ['Manedlorian', 'Enterprise', 'Firefly', 'Battlestar Galactica']

// your code
const showsEnumerated = sci_fi_shows.map((x, i) => [x, i]);
console.log(showsEnumerated);
// expected output: Array [['Manedlorian', 0], ['Enterprise', 1], ['Firefly', 2], ['Battlestar Galactica', 3]]

// ----------------------------------------------------------



// 5. For each item in this array, create a multidimensional array containing the entire original array.

const numbers = [1, 2, 3, 4]

// your code
const listOfNumbers = numbers.map((x, i, a) => a);
console.log(listOfNumbers);
// expected output: Array [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]

// Having trouble with creating a 2D array? 
// Take a closer look at the last two arguments of map, one of them might be able to help
