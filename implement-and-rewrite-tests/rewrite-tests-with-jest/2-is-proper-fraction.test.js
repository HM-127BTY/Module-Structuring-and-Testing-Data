import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Special case: Basic proper fraction: Numerator < Denominator
test(`should return true when: Numerator < Denominator`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(3, 6)).toEqual(true);
  expect(isProperFraction(45, 60)).toEqual(true);
});

// Special case: Improper fraction: Numerator = Denominator
test(`should return false when: Numerator = Denominator`, () => {
  expect(isProperFraction(1, 1)).toEqual(false);
  expect(isProperFraction(12, 12)).toEqual(false);
  expect(isProperFraction(56, 56)).toEqual(false);
});

// Special case: improper fraction: Numerator > Denominator
// test(`should return false when denominator is zero`, () => {
//   expect(isProperFraction(1, 0)).toEqual(false);
// });

// Special case: Improper fraction: Denominator = 0
// test(`should return false when denominator is zero`, () => {
//   expect(isProperFraction(1, 0)).toEqual(false);
// });

// Special case: Proper fraction with negative number: -Numerator < Denominator
// test(`should return false when denominator is zero`, () => {
//   expect(isProperFraction(1, 0)).toEqual(false);
// });

// Special case: Improper fraction with negative number: -Numerator > Denominator
// test(`should return false when denominator is zero`, () => {
//   expect(isProperFraction(1, 0)).toEqual(false);
// });
