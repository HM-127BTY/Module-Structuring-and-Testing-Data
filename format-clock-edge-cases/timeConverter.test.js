import {formatAs12HourClock} from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("correctly convert time after 12:00", function(){
    assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});

test("can correctly convert morning time", function() {
    assert.equal(formatAs12HourClock("08:00"), "08:00 am");
    assert.equal(formatAs12HourClock("01:00"), "01:00 am");
});

test("can correctly convert time with minutes for am", function(){
    assert.equal(formatAs12HourClock("08:35"), "08:35 am");
});

test("can correctly convert time with minutes for pm", function(){
    assert.equal(formatAs12HourClock("18:35"), "06:35 pm");
});

test("can correctly convert time with minutes with 0 pad such as 12:04", function(){
    assert.equal(formatAs12HourClock("13:04"), "01:04 pm");
});

test("can correctly convert time with hour being 00 to show as 12 am", function(){
    assert.equal(formatAs12HourClock("00:00"), "12:00 am");
    assert.equal(formatAs12HourClock("00:30"), "12:30 am");
});