
// Business End
// Constructor i think this is it
//
//
// function PlacesIBe() {
//   this.places = []
//   this.currentId = 0
// }
//
// PlacesIBe.prototype.addPlaces = function(places) {
//   places.id = this.assignId();
//   this.places.push(places);
// }
//
// PlacesIBe.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }

function Places(name, location, landMarks, timeOfYear, notes) {
  this.name = name,
  this.location = location,
  this.landMarks = landMarks,
  this.timeOfYear = timeOfYear,
  this.notes = notes
}




Places.prototype.landMarks = function() {
  return this.landmarks;
}


function printPlaces(places) {
  var names = $('#placesName');
  var placeString = "";
  // places.name.forEach(function(cityName){
  // for(var i = 0; i < 3; i++){
      placeString += "<li>" + places.name + " " + places.location + " " + places.landMarks + " " + places.timeOfYear + " " + places.notes + "</li>";
    // };
  // });
  names.append(placeString);
}

//Front End


$(function() {

  var name = $(Places.name).val();
  var location = $(Places.location).val();
  var landMarks = $(Places.landMarks).val();
  var timeOfYear = $(Places.timeOfYear).val();
  var notes = $(Places.notes).val();
  var portlandPlaces = new Places("Portland", "Oregon", "Japanese Garden, Saturday Market, Waterfront", "Spring", "Don't get robbed");
  var lagunaBeachPlaces = new Places("Laguna Beach", "California", "Beach, tide pools, lighthouse", "Fall", "Enjoyt the sun");
  var newYorkPlace = new Places("New York", "New York", "Empire State Building, Time Square", "Winter", "Have fun in the Big Apple");

  printPlaces(portlandPlaces);
  printPlaces(lagunaBeachPlaces);
  printPlaces(newYorkPlace);
  // $("#placesName").append(portlandPlaces.name).val();

});
