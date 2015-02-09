var queenAttack = function(pos1, pos2) {
  var x1 = pos1[0]
  var y1 = pos1[1]
  var x2 = pos2[0]
  var y2 = pos2[1]

  if ((y1 === y2) || (x1 === x2) || (Math.abs(x1 - x2) === Math.abs(y1 - y2))) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#queen-attack").submit(function(event){
    var startingX = parseInt($("input#posX1").val());
    var startingY = parseInt($("input#posY1").val());
    var endingX = parseInt($("input#posX2").val());
    var endingY = parseInt($("input#posY2").val());

    var startingPos = [startingX, startingY]
    var endingPos = [endingX, endingY]

    var result = queenAttack(startingPos, endingPos);

    if (result) {
      $(".message").text("This is a valid move.");
    } else {
      $(".message").text("That move isn't valid!");
    }

    $("#result").show();
    event.preventDefault();
  });
});
