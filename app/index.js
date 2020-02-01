import clock from "clock";
import document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";
import { today } from "user-activity";

// Update the clock every minute
clock.granularity = "minutes";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

// Get a handle on the <text> element
const hoursLabel = document.getElementById("hoursLabel");
const minutesLabel = document.getElementById("minutesLabel");
const stepsLabel = document.getElementById("stepsLabel");
const dateLabel = document.getElementById("dateLabel");

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let date = evt.date;
  let hours = date.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(date.getMinutes());

  hoursLabel.text = `${hours}`;
  minutesLabel.text = `${mins}`;
  dateLabel.text = monthNames[date.getMonth()] + " " + date.getDate();
  stepsLabel.text = today.local.steps || 0;
}
