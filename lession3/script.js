var x = 2;
function one(num) {
    var a = 2;
    while (a < num / 2) {
        if (num % a == 0) {
            return false;
        }
        a++;
    }
    return true
}

while (x <= 100) {
    if (one(x)) {
        console.log(x)
    }
    x++;
}
