// У нас есть объект, в котором хранятся зарплаты нашей команды:
//
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
//
// Если объект salaries пуст, то результат должен быть 0.


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    Lena: 500
}


function sum (obj){
    let sum = 0;

    if (isEmptySchedule(obj)) {
        return 0;
    }

    for (let a in obj){
        console.log(obj[a]);
        sum = sum + obj[a];
    }

    return sum;
}

function isEmptySchedule(obj) {
    for ( i in obj ) {
        if (obj.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
}


console.log(sum(salaries))


