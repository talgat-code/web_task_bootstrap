function showMessage(id, text, isError) {
    const element = document.getElementById(id);
    element.innerText = text;

    if (isError) {
        element.className = "mt-3 mb-0 fw-bold text-break text-danger";
    } else {
        element.className = "mt-3 mb-0 fw-bold text-break text-success-emphasis";
    }
}

function readNumber(id) {
    const text = document.getElementById(id).value.trim().replace(",", ".");
    const number = Number(text);

    if (text === "" || !isFinite(number)) {
        return NaN;
    }
    return number;
}

// Task 1

function showUsername() {
    const username = document.getElementById("username").value.trim();

    if (username === "") {
        showMessage("task1-result", "Please enter a username.", true);
    } else {
        showMessage("task1-result", `Username: ${username}`, false);
    }
}

// Task 2

function calculateWage(hours, rate) {
    return hours * rate;
}

function showWage() {
    const hours = readNumber("task2-hours");
    const rate = readNumber("task2-rate");

    if (isNaN(hours) || isNaN(rate)) {
        showMessage("task2-result", "Please enter valid numbers for hours and rate.", true);
    } else if (hours < 0 || rate < 0) {
        showMessage("task2-result", "Hours and rate cannot be negative.", true);
    } else {
        const payment = calculateWage(hours, rate);
        showMessage("task2-result", `Payment: ${payment.toFixed(2)}`, false);
    }
}

// Task 3

function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

function showFahrenheit() {
    const celsius = readNumber("task3-celsius");

    if (isNaN(celsius)) {
        showMessage("task3-result", "Please enter a valid temperature.", true);
    } else if (celsius < -273.15) {
        showMessage("task3-result", "Temperature cannot be below absolute zero (-273.15 °C).", true);
    } else {
        const fahrenheit = celsiusToFahrenheit(celsius);
        const rounded = Math.round(fahrenheit * 100) / 100;
        showMessage("task3-result", `Fahrenheit: ${rounded}`, false);
    }
}

// Task 4

function calculateOvertimeWage(hours, rate) {
    let payment;

    if (hours <= 40) {
        payment = hours * rate;
    } else if (hours <= 60) {
        payment = 40 * rate + (hours - 40) * rate * 1.5;
    } else {
        payment = 40 * rate + 20 * rate * 1.5 + (hours - 60) * rate * 2;
    }

    return payment;
}

function showOvertimeWage() {
    const hours = readNumber("task4-hours");
    const rate = readNumber("task4-rate");

    if (isNaN(hours) || isNaN(rate)) {
        showMessage("task4-result", "Please enter valid numbers for hours and rate.", true);
    } else if (hours < 0 || rate < 0) {
        showMessage("task4-result", "Hours and rate cannot be negative.", true);
    } else {
        const payment = calculateOvertimeWage(hours, rate);
        showMessage("task4-result", `Pay: ${payment.toFixed(2)}`, false);
    }
}

// Task 5

function sumOddNumbers() {
    let sum = 0;
    let number = 1;

    while (number <= 100) {
        sum = sum + number;
        number = number + 2;
    }

    showMessage("task5-result", `Sum of odd numbers from 1 to 100: ${sum}`, false);
}

// Task 6

function sumEvenNumbers() {
    let sum = 0;

    for (let i = 2; i <= 100; i = i + 2) {
        sum = sum + i;
    }

    showMessage("task6-result", `Sum of even numbers from 1 to 100: ${sum}`, false);
}

// Task 7

function showArrayResults() {
    const numbers = [10, 20, 30, 40, 50];

    let max = numbers[0];
    let min = numbers[0];
    let sum = 0;

    for (let number of numbers) {
        if (number > max) {
            max = number;
        }
        if (number < min) {
            min = number;
        }
        sum = sum + number;
    }

    const average = sum / numbers.length;

    alert(`Maximum: ${max}\nMinimum: ${min}\nAverage: ${average}`);
}

// Task 8

function showUniqueWords() {
    const lines = [
        "But soft what light through yonder window breaks",
        "It is the east and Juliet is the sun",
        "Arise fair sun and kill the envious moon",
        "Who is already sick and pale with grief"
    ];

    const uniqueWords = [];

    for (let line of lines) {
        const words = line.split(" ");

        for (let word of words) {
            const lowerWord = word.toLowerCase();

            if (!uniqueWords.includes(lowerWord)) {
                uniqueWords.push(lowerWord);
            }
        }
    }

    uniqueWords.sort();

    let output = "[";
    for (let i = 0; i < uniqueWords.length; i++) {
        output = output + `'${uniqueWords[i]}'`;
        if (i < uniqueWords.length - 1) {
            output = output + ", ";
        }
    }
    output = output + "]";

    showMessage("task8-result", output, false);
}
