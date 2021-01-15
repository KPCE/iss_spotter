const {fetchMyIP} = require('./iss');
const {fetchCoordsByIP} = require('./iss');
const {fetchISSFlyOverTimes} = require('./iss');
const {nextISSTimesForMyLocation} = require('./iss');
//const  ip = "96.48.246.125";
//Latitude: 49.2663
//Longitude: -122.7815

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log('Error fetch details:', error);
//   } else {
//     console.log('it worked! Returned IP:', ip);
//   }
// });

// fetchCoordsByIP('96.48.246.125', (error, coordinates) => {
//   if (error) {
//     console.log('Error fetch details:', error);
//   }
//   console.log('It worked! Returned coordinates: ', coordinates);
  
// });


// fetchISSFlyOverTimes({ latitude: 49.2663, longitude: -122.7815 }, (error, passes) => {
//     if (error) {
//       console.log('Error fetch details:', error);
//     }
//     console.log('It worked! Returned next 5 ISS passes: ', passes);
    
//   });

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

// const printPassTimes = function(passTimes) {
//   for (const pass of passTimes) {
//     let datetime = new Date(0);
//     datetime.setUTCSeconds(pass.risetime);
//     const duration = pass.duration;
//     console.log(`Next pass at ${datetime.toLocaleDateString()} for ${duration} seconds!`);
//   }
// };


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});