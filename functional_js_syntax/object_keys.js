// Use Object.keys with the map method to print "This character has a(n) [property-name]" for each property

const character = {
    id: '12mn18udcbv9823',
    name: 'Chewbacca',
    race: 'Wookie',
    planet: 'Kashyyyk',
    job: 'First Mate'
};

const allKeys = (item) => {
    return Object.keys(item)
};

const allKeysLogger = (keys) => {
    return keys.map(key => {
        console.log(`This character has a(n) ${key}`);
        return `This character has a(n) ${key}`;
    })
};

console.log(allKeys(character));
console.log(allKeysLogger(allKeys(character)));
// console.log(Object.keys(character));
// Expected Output: 
// This character has a(n) id.
// This character has a(n) name.
// This character has a(n) race.
// This character has a(n) planet.
// This character has a(n) job.
// [ 'This character has a(n) id',  'This character has a(n) name',  'This character has a(n) race', 'This character has a(n) planet', 'This character has a(n) job' ]
