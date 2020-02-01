import clock from "clock";
import { today } from "user-activity";
import document from "document";
import * as util from "../common/utils";

clock.granularity = "minutes";

// Time digit positions
let pos1 = { x: -4, y: 10 };
let pos2 = { x: 27, y: 4 };
let pos3 = { x: 51, y: 4 };
let pos4 = { x: 76, y: 2 };
let pos5 = { x: 109, y: 0 };
let pos1b = { x: 12, y: 4 };
let pos2b = { x: 36, y: 4 };
let pos3b = { x: 61, y: 2 };
let pos4b = { x: 94, y: 0 };

let day = document.getElementById("day");

let dateDigits = [
  document.getElementById("date-1"),
  document.getElementById("date-2"),
  document.getElementById("date-3"),
  document.getElementById("date-4"),
  document.getElementById("date-5")
];

let stepDigits = [
  document.getElementById("steps-1"),
  document.getElementById("steps-2"),
  document.getElementById("steps-3"),
  document.getElementById("steps-4"),
  document.getElementById("steps-5"),
  document.getElementById("steps-6")
];

let colon = document.getElementById("colon");
let hourLeft = document.getElementById("hour-left");
let hourRight = document.getElementById("hour-right");
let minuteLeft = document.getElementById("minute-left");
let minuteRight = document.getElementById("minute-right");

clock.ontick = (evt) => {
  let date = evt.date;
  let curDay = date.getDay();
  let curHour = util.zeroPad(date.getHours() % 12 || 12);
  let curMinute = util.zeroPad(date.getMinutes());

  util.setDayValue(day, curDay);
  util.drawDate(dateDigits, date.getMonth(), date.getDate());
  util.drawSteps(stepDigits, today.local.steps || 0);

  if (curHour > 9) {
    hourLeft.style.visibility = "visible";
    util.setLargeDigitValue(hourLeft, ("" + curHour)[0]);

    util.setDigitPosition(hourLeft, pos1);
    util.setDigitPosition(hourRight, pos2);
    util.setDigitPosition(colon, pos3);
    util.setDigitPosition(minuteLeft, pos4);
    util.setDigitPosition(minuteRight, pos5);
  } else {
    hourLeft.style.visibility = "hidden";

    util.setDigitPosition(hourRight, pos1b);
    util.setDigitPosition(colon, pos2b);
    util.setDigitPosition(minuteLeft, pos3b);
    util.setDigitPosition(minuteRight, pos4b);
  }

  util.setLargeDigitValue(hourRight, ("" + curHour)[1]);

  util.setLargeDigitValue(minuteLeft, ("" + curMinute)[0]);
  util.setLargeDigitValue(minuteRight, ("" + curMinute)[1]);
}
