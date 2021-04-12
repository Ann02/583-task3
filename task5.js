function findMin() {
let min = arguments[0];
for (let index = 0; index < arguments.length; index++) {
    if (min > arguments[index]) {
        min = arguments[index];
    }
}
return min;
}
console.log(findMin(0, -1, 5, -2, 3));
