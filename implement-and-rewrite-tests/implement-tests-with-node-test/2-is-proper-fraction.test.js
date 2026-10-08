import assert from "node:assert";
import test from "node:test";

import { isProperFraction } from "../implement/2-is-proper-fraction.js";

// TODO: Write tests to cover all cases.
// What combinations of numerators and denominators should you test?

test("Basic proper fraction: Numerator < Denominator", () => {
  // Example: 1/2 is a proper fraction
  assert.equal(isProperFraction(1, 2), true);
});

test("Improper fraction: Numerator = Denominator", () => {
  assert.equal(isProperFraction(2, 2), false);
});

test("improper fraction: Numerator > Denominator", () => {
  assert.equal(isProperFraction(2, 1), false);
});

test("Improper fraction: Denominator = 0", () => {
  assert.equal(isProperFraction(1, 0), false);
});

test("Proper fraction with negative number: -Numerator < Denominator", () => {
  assert.equal(isProperFraction(-1, 2), true);
});

test("Improper fraction with negative number: -Numerator > Denominator", () => {
  assert.equal(isProperFraction(-2, 1), false);
});
