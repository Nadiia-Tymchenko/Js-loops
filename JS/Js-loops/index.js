// завдання 1
let i =  1;
    while (i <= 10){
    let square = i * i;
    console.log ("Квадрат числа " + i +
    " дорівнює: " + square);
    i++;
}

// або

for (let y = 1; y <= 10; y++){
    let square = y * y;
    console.log("Квадрат числа " + y +
    " дорівнює: " + square);
}

// завдання 2
const password = "mysecretpassword";
let userpassword;
do {
    userpassword = prompt("Будь ласка, введіть пароль");
} while (userpassword !== password);
console.log("Ви успішно увійшли в систему");

// завдання 3
let k = 1;
let sum = 0;
while (k <= 100){
    sum = sum +k;
    k++;
    console.log(sum);
}

// завдання 4
let currentNumber = 10;
while (currentNumber<=50){
    if (currentNumber % 5 === 0){
        console.log (currentNumber);}
    currentNumber++
}

// або

for (let x = 10; x <= 50; x++){
if(x % 5 === 0){
console.log(x)}
}

// завдання 5
let triangleSize = prompt("Введіть розмір трикутника");
for (let z = 1; z <= triangleSize; z++){
let row = "";
for (let j = 1; j <= z; j++)
row += "*";
console.log(row);
}

// завдання 6
const squareSize = 5;
let result = "";
for (let n = 0; n < squareSize; n++){
    for (let m = 0; m < squareSize; m++){
        if (n === 0 || n === squareSize - 1 || m === 0 || m === squareSize - 1 || n === m) {
            result += '_ ';
        }
        else{
            result += '  ';
        }
    }
    result += "\n";
}
console.log(result);

// завдання 7
let size = 5;
let totalResult = "";
for (let d = 0; d < size; d++){
    for (let f = 0; f < size; f++){
        if (d === 0 || d === size - 1 || f === 0 || f === size - 1 || d + f === size - 1)
            totalResult += '_ ';
        else{
            totalResult += '  ';
        }
    }
    totalResult += "\n";
}
console.log(totalResult);