// -----------------------------------------------------------------
// Exercise 1
// Directions: Write a pure function that prints "good afternoon" if
//       its afternoon and "good morning" any other time of the day.
// Hint - this will help with time of day: new Date().getHours()
// -----------------------------------------------------------------

// const greeting = () => {
//     let hourOfDay = new Date().getHours();
//     if (hourOfDay > 12) {
//         return 'good afternoon'
//     } else {
//         return 'good morning'
//     };
// };


const greeting = () => {
    let variableGreeting = new Date().getHours() > 12 ? 'good afternoon' : 'good morning';
    return variableGreeting;
};

console.log(greeting())



// -----------------------------------------------------------------
// Exercise 2
// Directions: Write a pure function that takes in a number and  
//       returns an array of items counting down from that number to 
//       zero.
// -----------------------------------------------------------------


