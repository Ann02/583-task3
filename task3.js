let min = 1;
let max = 500;

let array = [];

function randArray(k) {
  for (let index = 0; index < k; index++) {
    array[index] = (function (x, y) {
      return Math.floor(Math.random() * x) + y;
    })(max, min);
  }
}

const size = prompt("Enter the array size");

randArray(size);

for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}

