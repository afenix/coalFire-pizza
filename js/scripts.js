var Pizza = {
    size: 0,
    flavor: "",
    style: "",
    slices: function () {
        var numberSlice;
        if ("Deep Dish" === this.style) {
            var numberSlice = this.size - 6;
        } else {
            var numberSlice = this.size - 4;
        }
        return numberSlice;
    }
};

$(document).ready(function() {
  $("form#pizza").submit(function(event) {
   event.preventDefault();

   var inputtedSize = parseInt($("input#size").val());
   var inputtedFlavor = $("input#flavor").val();
   var inputtedStyle = $('#style-id').val()
      $("#style-id").change(function() {
        inputtedStyle = $(this).val();
      });
   var newPizza = Object.create(Pizza);
   newPizza.size = inputtedSize;
   newPizza.flavor = inputtedFlavor;
   newPizza.style = inputtedStyle;
   newPizza.slices(inputtedSize);

   $("input#size").val("");
   $("input#flavor").val("");
   $("select#style").val("");

   $(".results").show();
    $(".size").text(newPizza.size);
    $(".flavor").text(newPizza.flavor);
    $(".style").text(newPizza.style);
    $(".slices").text(newPizza.slices());

  });
});
