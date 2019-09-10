// from data.js
var sightings = data;

// YOUR CODE HERE!

//Button Click
var buttonclick = d3.select("#filter-btn");

var tbody = d3.select("#ufo-table > tbody");
sightings.forEach(function(sighting) {
  var row = tbody.append("tr");
  Object.entries(sighting).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
});


buttonclick.on("click", function() {
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");

  if (inputValue.length == 0) {
    d3.selectAll("#ufo-table > tbody > tr").remove();
    var tbody = d3.select("#ufo-table > tbody");
    sightings.forEach(function(sighting) {
      var row = tbody.append("tr");
      Object.entries(sighting).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  }

  else
    d3.selectAll("#ufo-table > tbody > tr").remove();
    var filteredData = sightings.filter(sighting => sighting.datetime === inputValue);
    var tbody = d3.select("#ufo-table > tbody");
    filteredData.forEach(function(sighting) {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });
});
