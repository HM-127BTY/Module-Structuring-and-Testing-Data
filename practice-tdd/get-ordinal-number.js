export function getOrdinalNumber(num) {
  let numString = num.toString();
  if (11 <= Number(numString) && 19 >= Number(numString)) {
    return numString + "th";
  } else if (numString.slice(-2) === "11") {
    return numString + "st";
  } else if (numString.slice(-1) === "1") {
    return numString + "st";
  }
}
