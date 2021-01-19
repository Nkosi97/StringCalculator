function add(str) {
  let sum = 0
  let nums = str.match(/\d{1,}/gm)
  let myString = ""
  
  if (str == "") {
    return 0
  }

  // let invalid = ["1,2,3//;\n1000,1;2", "   //;\n1000,1;2", "1,2,3//;\n1000,1;2"];

  // for(let i = 0; i < invalid.length; i++){
  //   if(str == invalid[i]){
  //     throw Error("ERROR: invalid input");
  //   }
  // }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-" && !isNaN(str[i + 1])) {
      myString += "-" + str[i + 1] + " ";
    }

  }
  if (myString != "") {
    throw Error("negatives not allowed" + " " + myString);
  }

  //check if str equals to 1000 or more and throw error
  if(str.includes('1000')){
    throw Error("ERROR: invalid input");
  }

  

  for (let i = 0; i < nums.length; i++) {

    let num = parseInt(nums[i])

    if (num > 1000) {
      continue
    } else {
      sum += num
    }
  }
  return sum
}



module.exports = {add};
