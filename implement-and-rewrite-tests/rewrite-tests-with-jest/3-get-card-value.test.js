import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests in Jest syntax to cover all possible outcomes.

// Case 1: Ace (A)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});

// Suggestion: Group the remaining test data into these categories:
//   Number Cards (2-10)
test(`Should return number value when given an numbered card`, () => {
  expect(getCardValue("2♠")).toEqual(2);
  expect(getCardValue("7♥")).toEqual(7);
  expect(getCardValue("9♦")).toEqual(9);
  expect(getCardValue("5♠")).toEqual(5);
});

//   Face Cards (J, Q, K)
test(`Should return 10 when given a J, Q, K`, () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♥")).toEqual(10);
  expect(getCardValue("K♦")).toEqual(10);
  expect(getCardValue("J♠")).toEqual(10);
});

//   Invalid Cards

// To learn how to test whether a function throws an error as expected in Jest,
// please refer to the Jest documentation:
// https://jestjs.io/docs/expect#tothrowerror
