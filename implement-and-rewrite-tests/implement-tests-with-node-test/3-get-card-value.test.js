import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.

test("Arbitrary non-card string", () => {
  assert.throws(
    () => getCardValue("invalid"),
    /Invalid/,
    "Arbitary non-card string gives: Invalid"
  );
});

// TODO: What other invalid card cases can you think of?
//Incorrect suit as symbol
// test("Incorrect suit", () => {
//   assert.throws(
//     () => getCardValue("2☺"),
//     /Incorrect suit given/,
//     "Incorrect suit"
//   );
// });
// //Incorrect suit as letter
// //Incorrect card value to high

// //Incorrect card value when negative
// test("Incorrect card number: Negative Number", () => {
//   assert.throws(
//     () => getCardValue("-2♦"),
//     /Incorrect card number given/,
//     "Incorrect card number given"
//   );
// });

// //Incorrect card value when symbol
// //Incorrect card value when letter
// test("Incorrect card number: Letter", () => {
//   assert.throws(
//     () => getCardValue("H♦"),
//     /Incorrect card number given/,
//     "Incorrect card number given"
//   );
// });

// //Incorrect card value when lower case Royal
// test("Incorrect card number: lower case Royal", () => {
//   assert.throws(
//     () => getCardValue("k♦"),
//     /Incorrect card number given/,
//     "Incorrect card number given"
//   );
// });

// //Incorrect card value when lower case Ace
// test("Incorrect card number: lower case Ace", () => {
//   assert.throws(
//     () => getCardValue("a♦"),
//     /Incorrect card number given/,
//     "Incorrect card number given"
//   );
// });

// for valid case:
// any of 2-9 (single digit number) with valid suit
test("Valid single-digit face card", () => {
  assert.equal(getCardValue("9♠"), 9);
});

// // number 10 (double digit number) with valid suit
test("Valid double-digit face card", () => {
  assert.equal(getCardValue("10♠"), 10);
});

// // J/Q/K with valid suit (because they should return 10)
test("Valid Royal face card", () => {
  assert.equal(getCardValue("Q♠"), 10);
});

// // A with valid suit (because it should specially return 11)
test("Valid Ace face card", () => {
  assert.equal(getCardValue("A♠"), 11);
});

// // for invalid case:

// // 1 (single digit number) with valid suit
// test("Incorrect face valuev of 1: 1♦ ", () => {
//   assert.throws(
//     () => getCardValue("1♦"),
//     /Incorrect card number given/,
//     "Incorrect card number given"
//   );
// });

// // 11 (special double digit number) with valid suit
// test("Incorrect face value of 11: 11♦", () => {
//   assert.throws(
//     () => getCardValue("11♦"),
//     /Incorrect card number given/,
//     "Incorrect card number given"
//   );
// });

// // any of 12-99 (double digit number) with valid suit
// test("Incorrect face value given: 11-99♦", () => {
//   assert.throws(
//     () => getCardValue("20♦"),
//     /Incorrect card number given/,
//     "Incorrect card number given"
//   );
// });

// // any B-Z except J/Q/K with valid suit
// test("Incorrect royal face given: 7L", () => {
//   assert.throws(
//     () => getCardValue("7L"),
//     /Incorrect suit given/,
//     "Incorrect suit"
//   );
// });

// // any invalid face with valid suit
// test("Incorrect face given: 🐱♦", () => {
//   assert.throws(
//     () => getCardValue("🐱♦"),
//     /Incorrect card number given/,
//     "Incorrect card number given"
//   );
// });

// // valid suit with valid face (e.g. "♦6")
// test("Incorrect order of face and suit: ", () => {
//   assert.throws(
//     () => getCardValue("♦6"),
//     /Incorrect card number given/,
//     "Incorrect card number given"
//   );
// });
// // any invalid face with any invalid suit
// test("Invalid face and suit: 🐱🐱", () => {
//   assert.throws(
//     () => getCardValue("🐱🐱"),
//     /Incorrect card number given/,
//     "Incorrect card number given"
//   );
// });

// // any of 2-9 (valid single digit number) with invalid suit
// test("Incorrect 2-9 card suit: 2🐱", () => {
//   assert.throws(
//     () => getCardValue("2🐱"),
//     /Incorrect card number given/,
//     "Incorrect card number given"
//   );
// });

// // number 10 (valid double digit number) with invalid suit
// test("Incorrect 10 card suit: 10🐱", () => {
//   assert.throws(
//     () => getCardValue("10🐱"),
//     /Incorrect card number given/,
//     "Incorrect card number given"
//   );
// });

// // J/Q/K with invalid suit
// test("Incorrect J/Q/K card suit: K🐱", () => {
//   assert.throws(
//     () => getCardValue("K🐱"),
//     /Incorrect card number given/,
//     "Incorrect card number given"
//   );
// });

// // A with invalid suit
// test("Incorrect A card suit: A🐱", () => {
//   assert.throws(
//     () => getCardValue("A🐱"),
//     /Incorrect card number given/,
//     "Incorrect card number given"
//   );
// });
