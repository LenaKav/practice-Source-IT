// Написать ф-ю которая удаляет свойство fistName из объекта и дописывает новое свойство.
// let i = {
//     fistName: "Lena",
//     lastName: "Kaverdii"
// }
//
// ===
//
//     let obj = {
//     fullName: " Lena Demochka"
// }




//1
// let i = {
//     fistName: "Lena",
//     lastName: "Kaverdii"
// }
//
// delete i;
//
//
// let obj =
//     {fullName: "Lena Demochka"}
//
// console.log(obj)




// 2
let i = {
    fistName: "Lena",
    lastName: "Kaverdii"
}
// console.log(i)

function obj (test) {
    return {
        fullName: test.fistName + " " + test.lastName
    }
}

console.log(obj(i))