function findUnique(arr)
{   
    var n = arr.length;
    for (var i = 0; i < n-1; i++){
      for (var j = i+1; j < n; j++){
        if (arr[ i ] === arr[j]){
          return false;
        }
        }
     }
    return true;
}
//findUnique([1, 2, 3, 5, 3]);  // => false
//findUnique([1, 2, 3, 5, 11]); // => true

