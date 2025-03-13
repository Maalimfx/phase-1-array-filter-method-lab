// Code your solution here
// Function 1: findMatching
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Function 2: fuzzyMatch
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}

// Function 3: matchName
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

// Export the functions if needed for testing
module.exports = { findMatching, fuzzyMatch, matchName };
