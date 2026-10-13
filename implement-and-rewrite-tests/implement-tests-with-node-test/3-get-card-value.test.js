import assert from "node:assert";
import test from "node:test";

import { getCardValue } from "../implement/3-get-card-value.js";

// TODO: Write tests to cover all outcomes, including throwing errors for invalid cards.

test("Valid single-digit card", () => {
  assert.equal(getCardValue("9♠"), 9);
});

test("Arbitrary non-card string", () => {
  assert.throws(
    () => getCardValue("invalid"),
    /Expected a number followed by a suit, but got "invalid"/,
    "Expected clear error"
  );
});

// TODO: What other invalid card cases can you think of?
//Incorrect suit
test("Incorrect suit", () => {
  assert.throws(
    () => getCardValue("2☺"),
    /Incorrect suit given/,
    "Incorrect suit"
  );
});

//Incorrect card value to high
test("Incorrect card number: High value", () => {
  assert.throws(
    () => getCardValue("20♦"),
    /Incorrect card number given/,
    "Incorrect card number given"
  );
});
//Incorrect card value when negative
test("Incorrect card number: Negative Number", () => {
  assert.throws(
    () => getCardValue("-2♦"),
    /Incorrect card number given/,
    "Incorrect card number given"
  );
});
//Incorrect card value when symbol
test("Incorrect card number: Symbol", () => {
  assert.throws(
    () => getCardValue("🐱♦"),
    /Incorrect card number given/,
    "Incorrect card number given"
  );
});
//Incorrect card value when letter
test("Incorrect card number: Letter", () => {
  assert.throws(
    () => getCardValue("H♦"),
    /Incorrect card number given/,
    "Incorrect card number given"
  );
});
