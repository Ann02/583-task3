let str = "i love java script";

function changeReg(string) {
  const strArray = string.split(" ");
  const arr = [];
  for (let index = 0; index < strArray.length; index++) {
    arr[index] =
      strArray[index].charAt(0).toUpperCase() + strArray[index].slice(1);
  }
  let resStr = "";
  for (let index = 0; index < arr.length; index++) {
    resStr += arr[index] + " ";
  }
  return resStr;
}

console.log(changeReg(str));
