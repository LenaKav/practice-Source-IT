
let date = [1, 3, 6, 'not', {}];

function sumInput(sum) {
let total = 0;

for (let item of sum) {

    if (typeof item === "number") {
        total += item
    }
    console.log(item);
}
return total;
}

console.log(sumInput(date));