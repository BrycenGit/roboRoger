function createNumberArray(parameter) {
  let array = [];
  for (i = 0; i <= parameter; i++) {
    array.push(" " + i);
  } return array;
}

function translateToRobot(arrayParameter) {
  let finalArray = [];
  arrayParameter.forEach(function (item) {
    if (item) {
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
    console.log(roboArray);
  });
});
