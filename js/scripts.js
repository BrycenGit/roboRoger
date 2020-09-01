function createNumberArray(parameter) {
  let array = [];
  for (i = 0; i <= parameter; i++) {
    array.push(" " + i);
  } return array;
}

function translateToRobot(arrayParameter) {
  let finalArray = [];
  arrayParameter.forEach(function (item) {
    if (item.includes(3)) {
      finalArray.push("will you be my neighbor?");
    } else if (item.includes(2)) {
      finalArray.push("boop")
    } else if (item.includes(1)) {
      finalArray.push("beep")
    } else {
      finalArray.push(item);
    }
  });
  return finalArray;
}

$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    let number = $("#number").val();
    let numberArray = createNumberArray(number);
    let roboArray = translateToRobot(numberArray);
    $("#show").text(roboArray);
  });
});
