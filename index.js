// Code your solution in this file
function findMatching(drivers, name){
  return drivers.filter(function(driver)){
    return driver.toLowerCase() === name.toLowerCase()
  }
}
