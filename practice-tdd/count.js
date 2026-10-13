export function countChar(str, char) {
  let charMatch = str.match(new RegExp(char, "g"));
  if (charMatch === null) {
    return 0;
  }
  return charMatch.length;
}
