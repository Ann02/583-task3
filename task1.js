var Array = [2, 3, 4, 5];
var res=1;
for (i = 0; i < Array.length; ++i) {
    res *= Array[i];
}
console.log(res);

var array = [2, 3, 4, 5];
var i = array.length;
var res = 1;
while (i > 0){
  res *= array[--i];
}
console.log(res)
