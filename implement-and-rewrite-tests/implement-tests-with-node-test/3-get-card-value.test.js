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
    /Expected a number followed by a suit, but got "invalid"/,
    "Incorrect suit"
  );
});
//Incorrect value

//Incorrect order
