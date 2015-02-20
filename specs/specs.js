describe("Pizza", function() {
  describe("slices", function() {
    it("calculates how many slices of pizza based off the given perimeter and style", function() {
      var testSlice = Object.create(Pizza);
      testSlice.style = "Deep Dish"
      testSlice.size = 12;
      expect(testSlice.slices()).to.equal(6);
    });
  });
});
