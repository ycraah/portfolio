/* 날짜 노드 */
const now = new Date();
const fullYear = now.getFullYear();
const twoDigitYear = fullYear.toString().slice(-2);
const month = now.getMonth();
const monthArr = [
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
  "Dec",
];
const day = now.getDate();

const calendar = document.querySelector(".desc__calendar");
const calendarNode = document.createTextNode(
  `${twoDigitYear} ${monthArr[month]} ${day}`
);
calendar.appendChild(calendarNode);

/* 시간 노드 */
const hour = String(now.getHours()).padStart(2, "0");
const minute = String(now.getMinutes()).padStart(2, "0");
const second = String(now.getSeconds()).padStart(2, "0");
const clock = document.querySelector(".desc__clock");
clock.textContent = `${hour} : ${minute} : ${second}`;

setInterval(() => {
  const now = new Date();
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");
  const clock = document.querySelector(".desc__clock");
  clock.textContent = `${hour} : ${minute} : ${second}`;
}, 1000);
