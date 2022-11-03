// Написать функцию изменение имени в объекте


let obj = {
    name: "Lena",
    age: 21
}

function changeName(testObj, name) {
    testObj.name = name;
    return testObj
}

console.log(changeName( obj, "Vlad"));

