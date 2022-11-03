// Написать функцию которая из всех строковых параметров удаляет первый символ

let obj = {
    name: "Test",
    fullName: "Test Test",
    age: 20,
    city: "Merefa"
}

function happened(obj) {
    for (let item in obj) {
        if (typeof obj[item] === "string") {
            obj[item] = obj[item].substr(1);

        }
    }
    return obj;
}

console.log(happened(obj));