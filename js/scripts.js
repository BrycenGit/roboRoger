function createNumberArray(parameter) {
  let array = [];
  for (i = 0; i <= parameter; i++) {
    array.push(" " + i);
  }
  console.log(array);
  return array;

}

function translateToRobot(array) {

  array.forEach(function (item) {
    if (item.includes(3)) {
      finalArray.push("Will you be my neighbor?");
    } else if (item.includes(2)) {
      finalArray.push("boop!");
    } else if (item.includes(1)) {
      finalArray.push("beep!");
    } else {
      finalArray.push(item);
    }
    
  });
  console.log(finalArray);
}

function finalOutPut(parameter) {
  createNumberArray(parameter);
  translateToRobot();
  console.log(array);
  console.log(finalArray);
}

// let array = [];
// let finalArray = [];

$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    let number = $("#number").val();
    let numberArray = createNumberArray(number);
    
    console.log(numberArray);
    

    // if (array.length > 0) {
    //   array.length = 0;
    //   finalArray.length = 0;
    //   finalOutPut(number);
    // } else {
    //   finalOutPut(number);
    // }
    // $("#show").text(finalArray);
  });
});
