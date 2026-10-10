import assert from "node:assert";
import test from "node:test";

import { getAngleType } from "../implement/1-get-angle-type.js";

// TODO: Write tests to cover all cases, including boundary and invalid cases.
// Example: Identify Right Angles

test("Classifies right angles", () => {
  const right = getAngleType(90);
  assert.equal(right, "Right angle");
});
// "Acute angle" for angles greater than 0° and less than 90°
test("Classifies Acute angles", () => {
  const right = getAngleType(45);
  assert.equal(right, "Acute angle");
});
// - "Obtuse angle" for angles greater than 90° and less than 180°
test("Classifies Obtuse angles", () => {
  const right = getAngleType(135);
  assert.equal(right, "Obtuse angle");
});
// - "Straight angle" for exactly 180°
test("Classifies Straight angles", () => {
  const right = getAngleType(180);
  assert.equal(right, "Straight angle");
});
// - "Reflex angle" for angles greater than 180° and less than 360°
test("Classifies Reflex angles", () => {
  const right = getAngleType(225);
  assert.equal(right, "Reflex angle");
});
// - "Invalid angle" for angles outside the valid range.
test("Classifies Invalid angles", () => {
  const right = getAngleType(361);
  assert.equal(right, "Invalid angle");
  const right = getAngleType(-361);
  assert.equal(right, "Invalid angle");
});
// - "Zero angle" for angles that are at 0°
test("Classifies Zero angles", () => {
  const right = getAngleType(0);
  assert.equal(right, "Zero angle");
});
// - "Full angle" for angles that are at 360°
test("Classifies Full angles", () => {
  const right = getAngleType(360);
  assert.equal(right, "Full angle");
});
