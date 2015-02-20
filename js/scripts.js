var Pizza = { size: [10, 12, 18],
              flavor: ["cheese", "pepperoni"],
              slices: function() {
                numberSlice = this.size - 4;
                return numberSlice;
              }
};

$(document).ready(function() {
  $("form#pizza").submit(function(event) {
   event.preventDefault();

});
