// Task 1. Takes the username from the input field and shows it on the page.
function showUsername() {
  const name = document.getElementById("username").value.trim();
  const result = document.getElementById("task1-result");

  if (name === "") {
    result.textContent = "Please enter a username.";
  } else {
    result.textContent = "Username: " + name;
  }
}


// Task 2. Calculates payment = hours * rate.
function showWage() {
  const hours = parseFloat(document.getElementById("task2-hours").value.replace(",", "."));
  const rate = parseFloat(document.getElementById("task2-rate").value.replace(",", "."));
  const result = document.getElementById("task2-result");

  if (isNaN(hours) || isNaN(rate)) {
    result.textContent = "Error: please enter numbers.";
    return;
  }

  const payment = hours * rate;
  result.textContent = "Payment: " + payment.toFixed(2);
}


// Task 3. Converts Celsius to Fahrenheit.
function showFahrenheit() {
  const celsius = parseFloat(document.getElementById("task3-celsius").value.replace(",", "."));
  const result = document.getElementById("task3-result");

  if (isNaN(celsius)) {
    result.textContent = "Error: please enter a number.";
    return;
  }

  let fahrenheit = celsius * 9 / 5 + 32;
  fahrenheit = Math.round(fahrenheit * 100) / 100;
  result.textContent = celsius + " °C = " + fahrenheit + " °F";
}

// Task 4. Calculates pay with overtime:
function showOvertimeWage() {
  const hours = parseFloat(document.getElementById("task4-hours").value.replace(",", "."));
  const rate = parseFloat(document.getElementById("task4-rate").value.replace(",", "."));
  const result = document.getElementById("task4-result");

  if (isNaN(hours) || isNaN(rate)) {
    result.textContent = "Error: please enter numbers.";
    return;
  }

  let pay;
  if (hours <= 40) {
    pay = hours * rate;
  } else if (hours <= 60) {
    pay = 40 * rate + (hours - 40) * rate * 1.5;
  } else {
    pay = 40 * rate + 20 * rate * 1.5 + (hours - 60) * rate * 2;
  }

  result.textContent = "Pay: " + pay.toFixed(2);
}


// Task 5. Sum of odd numbers from 1 to 100 using while.
function sumOddNumbers() {
  let sum = 0;
  let i = 1;

  while (i <= 100) {
    sum = sum + i;
    i = i + 2;
  }

  document.getElementById("task5-result").textContent = "Sum of odd numbers: " + sum;
}

// Task 6. Sum of even numbers from 1 to 100 using for.
function sumEvenNumbers() {
  let sum = 0;
  for (let i = 2; i <= 100; i = i + 2) {
    sum = sum + i;
  }

  document.getElementById("task6-result").textContent = "Sum of even numbers: " + sum;
}

// Task 7. Finds max, min and average of the array and shows them with alert().
function showArrayResults() {
  const numbers = [10, 20, 30, 40, 50];
  let max = numbers[0];
  let min = numbers[0];
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
    if (numbers[i] < min) {
      min = numbers[i];
    }
    sum = sum + numbers[i];
  }
  const average = sum / numbers.length;
  alert("Maximum: " + max + "\nMinimum: " + min + "\nAverage: " + average);
}

// Task 8. Finds unique words in the text, sorts them and shows the list.
function showUniqueWords() {
  const lines = [
    "But soft what light through yonder window breaks",
    "It is the east and Juliet is the sun",
    "Arise fair sun and kill the envious moon",
    "Who is already sick and pale with grief"
  ];

  const words = [];

  for (let i = 0; i < lines.length; i++) {
    const lineWords = lines[i].split(" ");
    for (let j = 0; j < lineWords.length; j++) {
      const word = lineWords[j].toLowerCase();
      if (!words.includes(word)) {
        words.push(word);
      }
    }
  }

  words.sort();
  document.getElementById("task8-result").textContent = "['" + words.join("', '") + "']";
}
