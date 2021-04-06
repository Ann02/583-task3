/*var arr = [];
    for(var i=0; i < 4; i++) {
      arr[i] = prompt('Введіть '); 
    }
function lastElem(){
  var y = arr.slice (- 1);
  console.log(y);
}
lastElem()*/
function lastElem(arr, count){
    if (count == null){
        console.log(arr.pop());
    }else{
        console.log(arr.slice(-count));
    }
}
console.log(lastElem([3, 4, 10, -5]));
console.log(lastElem([3, 4, 10, -5], 2));

