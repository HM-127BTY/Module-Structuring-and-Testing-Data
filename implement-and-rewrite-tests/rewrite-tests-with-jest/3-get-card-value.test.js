import { getCardValue } from "../implement/3-get-card-value.js";

// //   Invalid Cards

// });
// // To learn how to test whether a function throws an error as expected in Jest,
// // please refer to the Jest documentation:
// // https://jestjs.io/docs/expect#tothrowerror

// test(`Should throw error "Incorrect suit given" when given wrong letter"`, () => {
//   expect(() => getCardValue("2K")).toThrow(new Error("Incorrect suit given"));
// });

// test(`Should throw error "Incorrect face given" when given wrong 2 digit number"`, () => {
//   expect(() => getCardValue("25♠")).toThrow(new Error("Incorrect face given"));
// });

// test(`Should throw error "Incorrect face given" when given negative number"`, () => {
//   expect(() => getCardValue("-2♠")).toThrow(new Error("Incorrect face given"));
// });

// test(`Should throw error "Incorrect face given" when given a lower case Royal"`, () => {
//   expect(() => getCardValue("k♠")).toThrow(new Error("Incorrect face given"));
// });

// test(`Should throw error "Incorrect face given" when given a lower case Ace"`, () => {
//   expect(() => getCardValue("a♠")).toThrow(new Error("Incorrect face given"));
// });

// test(`Should throw error "Incorrect face given" when given a letter"`, () => {
//   expect(() => getCardValue("I♠")).toThrow(new Error("Incorrect face given"));
// });

// test(`Should throw error "Incorrect face given" when given symbol"`, () => {
//   expect(() => getCardValue("🐱♠")).toThrow(new Error("Incorrect face given"));
// });

// test(`Should throw error "Input needed" if no imput given`, () => {
//   expect(() => getCardValue("")).toThrow(new Error("Input needed"));
// });

// for valid case:

// any of 2-9 (single digit number) with valid suit
test(`Should return 1-9 value when given 1-9 face card`, () => {
  expect(getCardValue("2♠")).toEqual(2);
  expect(getCardValue("7♥")).toEqual(7);
  expect(getCardValue("9♦")).toEqual(9);
  expect(getCardValue("5♠")).toEqual(5);
});

// number 10 (double digit number) with valid suit
test(`Should return 10 value when given an 10 face card`, () => {
  expect(getCardValue("2♠")).toEqual(2);
});

// J/Q/K with valid suit (because they should return 10)
test(`Should return 10 when given a J, Q, K face card`, () => {
  expect(getCardValue("J♠")).toEqual(10);
  expect(getCardValue("Q♥")).toEqual(10);
  expect(getCardValue("K♦")).toEqual(10);
  expect(getCardValue("J♠")).toEqual(10);
});

// A with valid suit (because it should specially return 11)
test(`Should return 11 when given an ace card`, () => {
  expect(getCardValue("A♠")).toEqual(11);
});
// for invalid case:

// 1 (single digit number) with valid suit
test(`Should throw error "Incorrect face given" for face value 1`, () => {
  expect(() => getCardValue("1♥")).toThrow(new Error("Incorrect face given"));
});

// 11 (special double digit number) with valid suit
test(`Should throw error "Incorrect face given" for face value 11`, () => {
  expect(() => getCardValue("11♥")).toThrow(new Error("Incorrect face given"));
});

// any of 12-99 (double digit number) with valid suit
test(`Should throw error "Incorrect face given" for face value from 12-99`, () => {
  expect(() => getCardValue("19♥")).toThrow(new Error("Incorrect face given"));
  expect(() => getCardValue("56♥")).toThrow(new Error("Incorrect face given"));
  expect(() => getCardValue("77♥")).toThrow(new Error("Incorrect face given"));
  expect(() => getCardValue("98♥")).toThrow(new Error("Incorrect face given"));
});

// any B-Z except J/Q/K with valid suit
test(`Should throw error "Incorrect face given" for face value from B-Z expect J/Q/K`, () => {
  expect(() => getCardValue("B♥")).toThrow(new Error("Incorrect face given"));
  expect(() => getCardValue("G♥")).toThrow(new Error("Incorrect face given"));
  expect(() => getCardValue("L♥")).toThrow(new Error("Incorrect face given"));
  expect(() => getCardValue("O♥")).toThrow(new Error("Incorrect face given"));
});

// any invalid face with valid suit
test(`Should throw error "Incorrect face given" for any invalid face value with valid suit`, () => {
  expect(() => getCardValue("1♥")).toThrow(new Error("Incorrect face given"));
  expect(() => getCardValue("G♥")).toThrow(new Error("Incorrect face given"));
  expect(() => getCardValue("66♥")).toThrow(new Error("Incorrect face given"));
  expect(() => getCardValue("O♥")).toThrow(new Error("Incorrect face given"));
});

// valid suit with valid face (e.g. "♠9")
test(`Should throw error "Incorrect suit given" when suit and face are in wrong order, eg: ♠9`, () => {
  expect(() => getCardValue("♠9")).toThrow(new Error("Incorrect suit given"));
  expect(() => getCardValue("♦4")).toThrow(new Error("Incorrect suit given"));
  expect(() => getCardValue("♠K")).toThrow(new Error("Incorrect suit given"));
  expect(() => getCardValue("♥A")).toThrow(new Error("Incorrect suit given"));
});

// any invalid face with any invalid suit
test(`Should throw error "Incorrect suit given" when invalid suit and face are given`, () => {
  expect(() => getCardValue("19J")).toThrow(new Error("Incorrect suit given"));
  expect(() => getCardValue("14@")).toThrow(new Error("Incorrect suit given"));
  expect(() => getCardValue("L$*")).toThrow(new Error("Incorrect suit given"));
  expect(() => getCardValue("1B")).toThrow(new Error("Incorrect suit given"));
});

// any of 2-9 (valid single digit number) with invalid suit
test(`Should throw error "Incorrect suit given" when given wrong suit with correct face between 2-9"`, () => {
  expect(() => getCardValue("2☺")).toThrow(new Error("Incorrect suit given"));
  expect(() => getCardValue("4☺")).toThrow(new Error("Incorrect suit given"));
  expect(() => getCardValue("6☺")).toThrow(new Error("Incorrect suit given"));
  expect(() => getCardValue("9☺")).toThrow(new Error("Incorrect suit given"));
});

// number 10 (valid double digit number) with invalid suit
test(`Should throw error "Incorrect suit given" when given wrong suit with correct face 10"`, () => {
  expect(() => getCardValue("10☺")).toThrow(new Error("Incorrect suit given"));
});
// J/Q/K with invalid suit
test(`Should throw error "Incorrect suit given" when given wrong suit with correct face royals J/Q/K"`, () => {
  expect(() => getCardValue("J☺")).toThrow(new Error("Incorrect suit given"));
  expect(() => getCardValue("Q☺")).toThrow(new Error("Incorrect suit given"));
  expect(() => getCardValue("K☺")).toThrow(new Error("Incorrect suit given"));
});

// A with invalid suit
test(`Should throw error "Incorrect suit given" when given wrong suit with correct face Ace"`, () => {
  expect(() => getCardValue("A☺")).toThrow(new Error("Incorrect suit given"));
});
