//Front End



// Business End
// Constructor i think this is it

function Places(name, location, landMarks, timeOfYear, notes) {
  this.name = name;
  this.location = location;
  this.landMarks = landMarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

var portlandPlaces = new Places("Portland", "Oregon", "Japanese Garden, Saturday Market, Waterfront", "Spring", "Don't get robbed");

var lagunaBeachPlaces = new Places("Laguna Beach", "California", "Beach, tide pools, lighthouse", "Fall", "Enjoyt the sun");

var newYorkPlace = new Places("New York", "New York", "Empire State Building, Time Square", "Winter", "Have fun in the Big Apple");
