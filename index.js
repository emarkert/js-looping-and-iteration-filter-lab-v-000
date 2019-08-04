// Code your solution in this file

// returns all drivers matching passed in name, case insensitive, returns empty array if no matches
function findMatching(arr, name) {
  return arr.filter(function (driverName) {
    return driverName.toLowerCase() === arr.toLowerCase()
  })
};

function fuzzyMatch() {

}

function matchName() {

}
