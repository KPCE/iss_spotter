const {fetchMyIP} = require('./iss');
const {fetchCoordsByIP} = require('./iss');
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

fetchCoordsByIP('96.48.246.125', (error, coordinates) => {
  if (error) {
    console.log('Error fetch details:', error);
  }
  console.log('It worked! Returned coordinates: ', coordinates);
  
});