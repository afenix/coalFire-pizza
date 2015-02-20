var Pizza = { size: 0,
              flavor: "",
              slices: function() {
                var numberSlice = this.size - 4;
                return numberSlice;
              }
};

$(document).ready(function() {
  $("form#pizza").submit(function(event) {
   event.preventDefault();

   var inputtedSize = parseInt($("input#size").val());
   var inputtedFlavor = $("input#flavor").val();
   var newPizza = Object.create(Pizza);
   newPizza.size = inputtedSize;
   newPizza.flavor = inputtedFlavor;
   newPizza.slices(inputtedSize);

   $("input#size").val("");
   $("input#flavor").val("");

  });
});
