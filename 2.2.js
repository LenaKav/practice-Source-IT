// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
//
//     read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств.
//     Например:
//
// let calculator = new Calculator();
// calculator.read();
//
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

function Calculator(firstNumber, secondNumber) {
    this.a = firstNumber;
    this.b = secondNumber;


   this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };
}

let calculator = new Calculator(2, 5);
let calculator2 = new Calculator(5, 18);

console.log(calculator);
console.log(calculator2.sum())
console.log(calculator.sum())

// let arr = ['Nelson', 'Lena'];
//
// for (let item of arr) {
//     console.log(item);
// }
//
// // arr.forEach(item => {
// //     console.log(item);
// // })
//
// // arr.map(item => {
// //     console.log(item);
// // })
