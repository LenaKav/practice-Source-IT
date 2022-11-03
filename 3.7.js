// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
//     Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
//     Если объект salaries пуст, то результат должен быть 0.
//
// Например:
//
//     let salaries = {
//         "John": 100,
//         "Pete": 300,
//         "Mary": 250
//     };
//
// alert( sumSalaries(salaries) ); // 650


let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250,
    };

    function sumSalaries(salaries) {
        let total = 0;
        for (let set of Object.values(salaries)) {

        if (typeof set === "number") {
            total += set;
        }

        }
        return total;
    }

    console.log(sumSalaries(salaries));
