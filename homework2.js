// Завдання 1
function compare(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

console.log(compare(9, 9)); // 0
// Завдання 2
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); // 120
// Завдання 3
function makeNumber(a, b, c) {
  return Number(String(a) + String(b) + String(c));
}

console.log(makeNumber(1, 4, 9)); // 149
// Завдання 4
function area(width, height) {
  if (height === undefined) {
    return width * width; // квадрат
  }
  return width * height; // прямокутник
}

console.log(area(4, 6)); // 24
console.log(area(5)); // 25
// Завдання 5
function isPerfect(num) {
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
}

console.log(isPerfect(7)); // false
console.log(isPerfect(28)); // true
// Завдання 6
function perfectInRange(min, max) {
  for (let i = min; i <= max; i++) {
    if (isPerfect(i)) console.log(i);
  }
}

perfectInRange(1, 10000); // 6, 28, 496, 8128 ...
// Завдання 7
function formatTime(h, m = 0, s = 0) {
  function pad(n) {
    return n < 10 ? "0" + n : n;
  }
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

console.log(formatTime(5, 7, 9)); // 05:07:09
console.log(formatTime(10)); // 10:00:00
// Завдання 8
function toSeconds(h, m, s) {
  return h * 3600 + m * 60 + s;
}

console.log(toSeconds(1, 1, 1)); // 3661
// Завдання 9
function fromSeconds(sec) {
  let h = Math.floor(sec / 3600);
  sec -= h * 3600;

  let m = Math.floor(sec / 60);
  sec -= m * 60;

  return formatTime(h, m, sec);
}

console.log(fromSeconds(2751)); // 00:45:51
// Завдання 10
function dateToSeconds(h, m, s) {
  return toSeconds(h, m, s); // перевикористовуємо функцію з попереднього завдання
}

function timeDifference(h1, m1, s1, h2, m2, s2) {
  let t1 = dateToSeconds(h1, m1, s1);
  let t2 = dateToSeconds(h2, m2, s2);

  let diff = Math.abs(t1 - t2);
  return fromSeconds(diff);
}

console.log(timeDifference(12, 30, 0, 14, 10, 20)); // 01:40:20