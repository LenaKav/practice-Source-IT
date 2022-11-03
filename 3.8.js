// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
//
//     Например:
//
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте два варианта решения:
//
//     С использованием цикла.
//     Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.


 function sumTo(n) {
    let sum = 0;

    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
 }

console.log(sumTo(4));


function sumToTwo (n) {
    return (n === 1) ? n : (n + sumToTwo(n - 1));
}

console.log(sumToTwo(4));



