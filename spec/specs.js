describe('places', function() {
  it("creates a new place visited with given properties", function() {
    var testPlace = new Place("France", "Eiffel Tower", "March 3rd, 2014", "David Bowie")
    expect(testPlace.location).to.equal("France");
    expect(testPlace.landmark).to.equal("Eiffel Tower");
    expect(testPlace.when).to.equal("March 3rd, 2014");
    expect(testPlace.withWho).to.equal("David Bowie");
  });
  it("adds full place method to all places", function () {
    var testPlace = new Place("France", "Eiffel Tower");
    expect(testPlace.fullPlace()).to.equal("France, Eiffel Tower");
  });
});
