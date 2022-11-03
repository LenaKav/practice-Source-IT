// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
//
// Например:
//
// // до вызова функции
//     let menu = {
//         width: 200,
//         height: 300,
//         title: "My menu"
//     };
//
// multiplyNumeric(menu);
//
// // после вызова функции
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
//
//     P.S. Используйте typeof для проверки, что значение свойства числовое.


    let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

let multiplyNumeric = function () {
    for (let a in menu) {
        if (typeof menu[a] === "number") {
            menu[a] = menu[a] * 2

        }
    }
}

multiplyNumeric();
console.log(menu)
