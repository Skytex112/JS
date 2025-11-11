// Завдання 1
let a = Number(prompt("Введіть початок діапазону:"));
let b = Number(prompt("Введіть кінець діапазону:"));
let sum = 0;

for (let i = a; i <= b; i++) {
    sum += i;
}

alert("Сума чисел у діапазоні: " + sum);

// Завдання 2
let x = Number(prompt("Введіть перше число:"));
let y = Number(prompt("Введіть друге число:"));

while (x !== y) {
    if (x > y) x -= y;
    else y -= x;
}

alert("НСД = " + x);
// Завдання 3
let n = Number(prompt("Введіть число:"));
let result = "";

for (let i = 1; i <= n; i++) {
    if (n % i === 0) result += i + " ";
}

alert("Дільники: " + result);

// Завдання 4
let num = prompt("Введіть число:");
let count = 0;

while (num != 0) {
    num = Math.floor(num / 10);
    count++;
}

alert("Кількість цифр: " + count);

// Завдання 5
let positive = 0, negative = 0, zero = 0;
let even = 0, odd = 0;

for (let i = 1; i <= 10; i++) {
    let num = Number(prompt("Введіть число №" + i + ":"));

    if (num > 0) positive++;
    else if (num < 0) negative++;
    else zero++;

    if (num % 2 === 0) even++;
    else odd++;
}

alert(`Позитивні: ${positive}
Негативні: ${negative}
Нулі: ${zero}
Парні: ${even}
Непарні: ${odd}`);

// Завдання 6
do {
    let a = Number(prompt("Введіть перше число:"));
    let b = Number(prompt("Введіть друге число:"));
    let sign = prompt("Введіть знак (+ - * /):");

    let result;
    switch (sign) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result = b !== 0 ? a / b : "Ділення на 0!"; break;
        default: result = "Невідомий оператор!";
    }

    alert("Результат: " + result);

} while (confirm("Хочете ще один приклад?"));

// Завдання 7
let number = prompt("Введіть число:");
let shift = Number(prompt("На скільки цифр змістити?"));

let arr = number.split("");

for (let i = 0; i < shift; i++) {
    arr.push(arr.shift());
}

alert("Результат: " + arr.join(""));

// Завдання 8
let days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця", "Субота", "Неділя"];
let i = 0;

do {
    alert(days[i]);
    i = (i + 1) % days.length;
} while (confirm("Показати наступний день?"));

// Завдання 9
for (let i = 2; i <= 9; i++) {
    document.write(`<b>Таблиця для ${i}</b><br>`);
    for (let j = 1; j <= 10; j++) {
        document.write(`${i} * ${j} = ${i * j}<br>`);
    }
    document.write("<br>");
}

// Завдання 10
let min = 0;
let max = 100;
let guess;

while (true) {
    guess = Math.floor((min + max) / 2);
    let answer = prompt(`Ваше число > ${guess}, < ${guess} або == ${guess}?`);

    if (answer === ">") min = guess + 1;
    else if (answer === "<") max = guess - 1;
    else if (answer === "==") {
        alert("Ви загадали число: " + guess);
        break;
    } else {
        alert("Введіть >, < або ==");
    }
}
