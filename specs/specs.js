describe("Pizza", function() {
  describe("slices", function() {
    it("returns the style of pizza", function() {
      var testSlice = Object.create(Pizza);
      testSlice.style = "Deep Dish";
      expect(testSlice.style).to.equal("Deep Dish");
    });
  });
  describe("slices", function() {
    it("returns the size of pizza", function() {
      var testSlice = Object.create(Pizza);
      testSlice.size = 16;
      expect(testSlice.size).to.equal(16);
    });
  });
  describe("slices", function() {
    it("calculates how many slices of pizza based off the given perimeter and style", function() {
      var testSlice = Object.create(Pizza);
      testSlice.style = "Deep Dish";
      testSlice.size = 12;
      expect(testSlice.slices()).to.equal(6);
    });
  });
});
