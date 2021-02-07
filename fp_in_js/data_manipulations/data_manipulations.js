var nearEarthObjects = require('./nasa_near_earth_object_API.json');

// helper function to pull all objects from json and push them into an array
const jsonToArray = (data) => {
    let allObj = [];
    for (subList in data.near_earth_objects) {
        for (item of data.near_earth_objects[subList]) {
            allObj.push(item);
        }
    }
    return allObj;
};

// The object in the nasa_near_earth_object_API.json is a copy of real API response from the NASA Near-Earth Object API. 
// Find the following from the API:

// Total Count ---------------------------------------------
// 1. How many near-earth objects did NASA register for the date of the search? Return the asteroid count.
const totalNEO = nearEarthObjects.element_count;

// console.log(`The total number of near earth objects in this dataset is ${totalNEO}.`)


// Averages ------------------------------------------------
// 2. What was the average absolute magnitude of all the near earth objects in this data set? Return the average absolute_magnitude_h.
const averageAbsMag = (data) => {
    let totalMagnitude = 0;
    let i = 0;
    for (item of data) {
        totalMagnitude += item.absolute_magnitude_h;
        i += 1;
    }
    return totalMagnitude / i;
};

// console.log(`The total average magnitude of all near earth objects in the dataset is ${averageAbsMag(jsonToArray(nearEarthObjects))}`);


// Hazardous -----------------------------------------------
// 3. A list of all objects (their id, name, max size in miles, and closest approach in miles) that are labeled potentially hazardous
const findHazardousObjects = (data) => {
    let hazObj = data.filter(item => item.is_potentially_hazardous_asteroid === true);
    let finalResult = hazObj.map(item => (
        {
            id: item.id,
            name: item.name,
            maxSize: item.estimated_diameter.miles.estimated_diameter_max,
            closestApproach: item.close_approach_data[0].miss_distance.miles
        }
    ));
    return finalResult;
};

// console.log(findHazardousObjects(jsonToArray(nearEarthObjects)));



// Too Close for Comfort -----------------------------------
// 4. A list of all objects (their id, name, max size in miles, and closest approach in miles) that have a miss_distance of less than 900,000 miles
const superCloseObjects = (data) => {
    let closeObjects = data.filter(item => parseInt(item.close_approach_data[0].miss_distance.miles) < 900000);
    let finalResult = closeObjects.map(item => (
        {
            id: item.id,
            name: item.name,
            maxSize: item.estimated_diameter.miles.estimated_diameter_max,
            closestApproach: item.close_approach_data[0].miss_distance.miles
        }
    ));
    return finalResult;
};

// console.log(superCloseObjects(jsonToArray(nearEarthObjects)));

// Alert ---------------------------------------------------
// 5. Of all the near-earth objects for this date, find the time that the asteroid with the nearest miss will be closest to earth. 
