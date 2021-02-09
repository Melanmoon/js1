// Задание 3:

var a = +(Math.random() * 10 - 5).toFixed(0);
var b = +(Math.random() * 10 - 5).toFixed(0);
// или так
// var a = +prompt("Введите первое число");
// var b = +prompt("Введите второе число");
var c;

if (a >= 0 && b >= 0) {
    c = a - b;
    alert(c);
}

else if (a < 0 && b < 0) {
    c = a * b;
    alert(c);
}

else {
    c = a + b;
    alert(c);
}

// Задание 4:

var a = +prompt("Введите число от 0 до 15");

if (a < 0 && a > 15) {
    alert("Нужно ввести число только от 0 до 15")
}

else {
    switch (a) {
        case 0:
            ++a
            console.log(a);
        case 1:
            ++a
            console.log(a);
        case 2:
            ++a
            console.log(a);
        case 3:
            ++a
            console.log(a);
        case 4:
            ++a
            console.log(a);
        case 5:
            ++a
            console.log(a);
        case 6:
            ++a
            console.log(a);
        case 7:
            ++a
            console.log(a);
        case 8:
            ++a
            console.log(a);
        case 9:
            ++a
            console.log(a);
        case 10:
            ++a
            console.log(a);
        case 11:
            ++a
            console.log(a);
        case 12:
            ++a
            console.log(a);
        case 13:
            ++a
            console.log(a);
        case 14:
            ++a
            console.log(a);
    }
}

// Задание 5:

function calc(a, sym, b) {
    var c;
    if (sym == "+") {
        c = a + b;
        alert(c);
    }
    else if (sym == "-") {
        c = a - b;
        alert(c);
    }
    else if (sym == "*") {
        c = a * b;
        alert(c);
    }
    else if (sym == ":") {
        c = a / b;
        alert(c);
    }
    else {
        alert("Введите корректный арифметический символ (+, -, *, :)")
    }
}

calc(+prompt("Введите первое число"), prompt("Введите арифметический символ (+, -, *, :)"), +prompt("Введите второе число"));