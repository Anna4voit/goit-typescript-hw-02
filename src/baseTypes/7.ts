/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}
function isWeekend(day: Day): boolean {
  return day === Day.SATURDAY || day === Day.SUNDAY;
}

if (isWeekend(Day.FRIDAY)) {
  console.log("Today is weekend");
} else {
  console.log("Today is a working day");
}
