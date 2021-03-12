exports.min = function min (array) {
  let num = 0;

    if(array == undefined || array.length == 0 ){
      return num;
    }else{
      num = array[0];
      for(let i of array){
          num = Math.min(num, i);
      }
    }

  return num;
}

exports.max = function max (array) {
  let num = 0;

  if(array == undefined || array.length == 0 ){
    return num;
  }else{
    num = array[0];
    for(let i of array){
      num = Math.max(num, i);
    }
  }

  return num;
}

exports.avg = function avg (array) {
  let sum = 0;

  if(array == undefined || array.length == 0 ){
    return sum;
  }else{
    for(let i of array){
      sum += i;
  }
  }
  
  return sum / array.length;
}

