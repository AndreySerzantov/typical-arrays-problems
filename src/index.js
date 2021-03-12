let array = [1, 2, 3, 4];

exports.min = function min (array) {
  let num = array[0];

    for(let i of array){
        num = Math.min(num, i);
    }

  return num;
}

exports.max = function max (array) {
  let num = 0;

    for(let i of arr){
        num = Math.max(num, i);
    }

  return num;
}

exports.avg = function avg (array) {
  let sum = 0;

    for(let i of arr){
        sum += i;
    }

  return sum / arr.length;
}
