export function getOrdinalNumber(num) {
  let numString = num.toString();
  if (11 <= Number(numString.slice(-2)) && 19 >= Number(numString.slice(-2))) {
    return numString + "th";
  } else if (numString.slice(-1) === "1") {
    return numString + "st";
  } else if (numString.slice(-1) === "2") {
    return numString + "nd";
  }
}
