let YearsInput = document.getElementById("yearinputs");
let MonthsInput = document.getElementById("monthinputs");
let DaysInput = document.getElementById("daysinputs");

let YearsResult = document.getElementById("outY");
let MonthsResult = document.getElementById("outMo");
let DaysResult = document.getElementById("outDay");

function Calc() {
  let day = DaysInput.value;
  let month = MonthsInput.value;
  let year = YearsInput.value;

  let date = new Date();
  let currentDay = date.getDate();
  let currentMonth = date.getMonth() + 1;
  let currentYear = date.getFullYear();
  let All_Moths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (day > currentDay) {
    currentDay = currentDay + All_Moths[currentMonth - 1];
    currentMonth = currentMonth + 12;
  }
  if (month > currentMonth) {
    currentMonth = currentMonth + 12;
    currentYear = currentYear - 1;
  }

  let dd = currentDay - day;
  let mm = currentMonth - month;
  let yy = currentYear - year;

  YearsResult.innerHTML = yy;
  MonthsResult.innerHTML = mm;
  DaysResult.innerHTML = dd;
}
