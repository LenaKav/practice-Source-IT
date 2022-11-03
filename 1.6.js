// Написать функцию если возраст больше 18 нужно выводить "Можно гулять", если нет "Запрещено"

let obj = {
    name: "John",
    age: "bhh"
}

// console.log(obj)

// function years(obj) {
//     if (obj.age > 18) {
//         console.log("Можно гулять");
//
//     } else  {
//         console.log("Запрeщено");
//     }
// }

// function years(obj){
//     obj.age > 18 ? console.log("Можно гулять") : console.log("Запрощено");
// }

function years(obj){
    switch (obj.age > 18) {
        case true:
            console.log("Можно гулять");
            break;

        default:
            console.log("Запрeщено");
    }
}

years(obj);