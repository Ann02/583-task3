var arr = [];
    for(var i=0; i < 4; i++) {
      arr[i] = prompt('Введіть '); 
    }
function lastElem(){
  var y = arr.slice (- 1);
  console.log(y);
}
lastElem()
