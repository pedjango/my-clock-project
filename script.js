const HourHand = document.querySelector("#hour");
const MinuteHand = document.querySelector("#minute");
const SecondHand = document.querySelector("#second");
const clock = document.querySelector("#clock");
const day = document.querySelector("#day");

let dateAnalog = new Date();
let hours = dateAnalog.getHours();
let minutes = dateAnalog.getMinutes();
let seconds = dateAnalog.getSeconds();

let HourPosition = (hours * 360) / 12 + (minutes * (360 / 60)) / 12;
let MinutePosition = (minutes * 360) / 60 + (seconds * (360 / 60)) / 60;
let SecondPosition = (seconds * 360) / 60;

const timeFormat = (Q) => {
  if (Q < 10) Q = "0" + Q;
  return Q;
}

const dayOfTheWeek = (D) => {
  switch (D) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
}

const theTime = () => {
  let date = new Date();
  let D = date.getDay();
  let H = date.getHours();
  let M = date.getMinutes();
  let S = date.getSeconds();
  
  HourPosition += 3 / 360;
  MinutePosition += 6 / 60;
  SecondPosition += 6;
  
  HourHand.style.transform = `rotate(${HourPosition}deg)`;
  MinuteHand.style.transform = `rotate(${MinutePosition}deg)`;
  SecondHand.style.transform = `rotate(${SecondPosition}deg)`;
  
  clock.innerHTML = `${timeFormat(H)} : ${timeFormat(M)} : ${timeFormat(S)}`;
  
  day.innerHTML = `${dayOfTheWeek(D)}`;
}

let interval = setInterval(theTime, 1000);
