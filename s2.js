function avg (arg1, arg2){
  var sum = arg1 + arg2
  var x = sum / 2
  return x
}

function avgOfThree (arg1, arg2, arg3){
  var sum = arg1 + arg2 + arg3
  var x = sum / 3
  return x
}

function isOdd (arg1){
  var x = arg1 % 2
  var returnvar = ""
  if (x == 1){
    returnvar = "Odd"
  } else if (x == 0) {
    returnvar = "Even"
  }else {
    returnvar = "Unexpected Error"
  }
  return returnvar
}
