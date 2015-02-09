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
