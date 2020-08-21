
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let number = $("#number").val();
    let array = [];
    for (i=0; i<=number; i++) {
      array.push(' ' + i);
      console.log(array[i]);
    }
    for(i = 0; i < array.length; i++) {
        array[i] = array[i].replace(/3/g, "Won't you be my neighbor?");
        array[i] = array[i].replace(/1/g, "Beep!");
        array[i] = array[i].replace(/2/g, "Boop!");
    }
    $("#show").text(array);
    console.log(array);
  });
});