var a = [];
var cout = prompt('a');
function getRandomArbitary(min, max){
  return Math.random()*(max - min) + min;
}
function searchRandom(){
  var rdm = Math.floor(getRandomArbitary(1, 500));
  for (var i = 0; i < a.length; i++){
      if(rdm == a[i]){
      searchRandom();
      }
}
a.push(rdm);
}for (var i = 0; i < count; i++){
  searchRandom();
}
console.log(a);
