import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests in Jest syntax to cover all combinations of positives, negatives, zeros, and other categories.

// Special case: numerator is zero
test(`should return false when numerator is zero`, () => {
  expect(isProperFraction(1, 0)).toEqual(false);
});

// Special case: denominator is zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(0, 1)).toEqual(false);
});

// Special case: both are zero
test(`should return false when denominator is zero`, () => {
  expect(isProperFraction(0, 0)).toEqual(false);
});

// Special case: Basic proper fraction: Numerator < Denominator
test(`should return true when: Numerator < Denominator`, () => {
  expect(isProperFraction(1, 2)).toEqual(true);
  expect(isProperFraction(3, 6)).toEqual(true);
  expect(isProperFraction(45, 60)).toEqual(true);
});

// Special case: Basic proper negative fraction: -Numerator < Denominator
test(`should return true when: Numerator < Denominator`, () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
  expect(isProperFraction(-3, 6)).toEqual(true);
  expect(isProperFraction(-45, 60)).toEqual(true);
});

// Special case: Basic proper negative fraction: Numerator < -Denominator
test(`should return true when: Numerator < Denominator`, () => {
  expect(isProperFraction(1, -2)).toEqual(true);
  expect(isProperFraction(3, -6)).toEqual(true);
  expect(isProperFraction(45, -60)).toEqual(true);
});

// Special case: Improper fraction: Numerator = Denominator
test(`should return false when: Numerator = Denominator`, () => {
  expect(isProperFraction(1, 1)).toEqual(false);
  expect(isProperFraction(12, 12)).toEqual(false);
  expect(isProperFraction(56, 56)).toEqual(false);
});

// Special case: Improper negative fraction: -Numerator = -Denominator
test(`should return false when: Numerator = Denominator`, () => {
  expect(isProperFraction(-1, -1)).toEqual(false);
  expect(isProperFraction(-12, -12)).toEqual(false);
  expect(isProperFraction(-56, -56)).toEqual(false);
});

// Special case: Improper fraction: Numerator > Denominator
test(`should return false when: Numerator > Denominator`, () => {
  expect(isProperFraction(3, 2)).toEqual(false);
  expect(isProperFraction(7, 4)).toEqual(false);
  expect(isProperFraction(30, 20)).toEqual(false);
});

// Special case: Proper fraction with negative number: -Numerator < Denominator
test(`should return true when: -Numerator < Denominator`, () => {
  expect(isProperFraction(-1, 2)).toEqual(true);
  expect(isProperFraction(-6, 8)).toEqual(true);
  expect(isProperFraction(-10, 20)).toEqual(true);
});

// Special case: Proper fraction with both negative number: -Numerator < -Denominator
test(`should return true when: -Numerator < -Denominator`, () => {
  expect(isProperFraction(-1, -2)).toEqual(true);
  expect(isProperFraction(-6, -8)).toEqual(true);
  expect(isProperFraction(-10, -20)).toEqual(true);
});

// Special case: Improper fraction with negative number: Numerator > -Denominator
test(`should return false when: -Numerator > Denominator`, () => {
  expect(isProperFraction(2, -1)).toEqual(false);
  expect(isProperFraction(5, -4)).toEqual(false);
  expect(isProperFraction(20, -10)).toEqual(false);
});

// Special case: Improper fraction with negative number: Numerator > -Denominator
test(`should return false when: -Numerator > Denominator`, () => {
  expect(isProperFraction(-2, 1)).toEqual(false);
  expect(isProperFraction(-5, 4)).toEqual(false);
  expect(isProperFraction(-20, 10)).toEqual(false);
});

// Special case: Improper fraction with both negative: -Numerator > -Denominator
test(`should return false when: -Numerator > Denominator`, () => {
  expect(isProperFraction(-2, -1)).toEqual(false);
  expect(isProperFraction(-5, -4)).toEqual(false);
  expect(isProperFraction(-20, -10)).toEqual(false);
});

// Special case: Improper fraction with negative Numerator and 0: -Numerator > 0
test(`should return false when: -Numerator > Denominator`, () => {
  expect(isProperFraction(-2, 0)).toEqual(false);
  expect(isProperFraction(-5, 0)).toEqual(false);
  expect(isProperFraction(-20, 0)).toEqual(false);
});

// Special case: Improper fraction with 0 and negative Denominator: 0 > -Denominator
test(`should return false when: -Numerator > Denominator`, () => {
  expect(isProperFraction(0, -1)).toEqual(false);
  expect(isProperFraction(0, -4)).toEqual(false);
  expect(isProperFraction(0, -10)).toEqual(false);
});
