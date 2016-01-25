//business logic
function Place(location, landmark, when, withWho) {
  this.location = location;
  this.landmark = landmark;
  this.when = when;
  this.withWho = withWho;
}
Place.prototype.fullPlace = function() {
  return this.location + ", " + this.landmark;
}

//interface
$(document).ready(function() {
  $("form#newPlace").submit(function(event) {
  event.preventDefault();

    var inputtedLocation = $("input#newLocation").val();
    var inputtedLandmark = $("input#newLandmark").val();
    var inputtedWhen = $("input#newWhen").val();
    var inputtedWithWho = $("input#newWithWho").val();
    var newPlace = new Place(inputtedLocation, inputtedLandmark, inputtedWhen, inputtedWithWho);

    $("ul#locationLandmarks").append("<li><span class='place'>" + newPlace.fullPlace() + "</span></li>");

    $("input#newLocation").val("");
    $("input#newLandmark").val("");
    $("input#newWhen").val("");
    $("input#newWithWho").val("");

    $(".place").last().click(function() {
      $(".showPlace").show();
      $(".showPlace h2").text(newPlace.fullPlace());
      $(".location").text(newPlace.location);
      $(".landmark").text(newPlace.landmark);
      $(".when").text(newPlace.when);
      $(".who").text(newPlace.withWho);
    });

  });
});
