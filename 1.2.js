// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
//
//     Должно работать так:
 let schedule = {
    obj: "1"
 };
//
// alert( isEmpty(schedule) ); // true
//
// schedule["8:30"] = "get up";
//
// alert( isEmpty(schedule) ); // false
// console.log(schedule)

 function isEmptySchedule(obj) {
    for ( i in obj ) {
        if (obj.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
}


console.log(isEmptySchedule(schedule))