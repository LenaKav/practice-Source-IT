// Возможно ли создать функции A и B в примере ниже, где объекты равны new A()==new B()?
//
//     function A() { ... }
//     function B() { ... }
//
// let a = new A;
// let b = new B;
//
// alert( a == b ); // true

function A(){
    let met = 5;
    let cam = 2;
   let s = met + cam;
   return s
}

// console.log(A())

function B(){
    let met = 2;
    let cam = 5;
   let z = met + cam;
   return z
}

// console.log(B())

let a = new A();
let b = new B();

if ( A() === B() ){
    console.log("All Okay")
} else  {
    console.log("Error")
}
// console.log("All Okay")
