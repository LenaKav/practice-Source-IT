// Сортировать в порядке по убыванию
// let arr = [5, 2, 1, -10, 8];
//
// // ... ваш код для сортировки по убыванию
//
// alert( arr ); // 8, 5, 2, 1, -10


let arr = [ 3, 9, 1, -5, 14, -15];

function filter (a, b){
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
}

arr.sort(filter);

console.log(arr)
