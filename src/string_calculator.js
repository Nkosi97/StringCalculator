function add(str) {
  let sum = 0;
  let nums = str.match(/\d{1,}/gm);
  let myString = "";

  if (str == "") {
    return 0;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-" && !isNaN(str[i + 1])) {
      myString += "-" + str[i + 1] + " ";
    }
  }
  if (myString != "") {
    throw Error("negatives not allowed" + " " + myString);
  }

  for (let i = 0; i < nums.length; i++) {
    let num = parseInt(nums[i]);

    if (num > 1000) {
      continue;
    } else {
      sum += num;
    }
    if (num >= 1000) {
      throw Error("ERROR: invalid input");
    }
  }
  return sum;
}

module.exports = { add };
