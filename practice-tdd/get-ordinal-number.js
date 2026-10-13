export function getOrdinalNumber(num) {
  let number = num.toString();

  if (number.slice(-1) === "1") {
    return number + "st";
  }
}
