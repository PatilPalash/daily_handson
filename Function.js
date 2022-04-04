// Problem 1

// Create one function with zero parameter having a console statement;

function withoutparameret(){
    console.log("Hello");
}
withoutparameret();


// Problem 2

// Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

function sum(a,b){
    console.log(a+b);
}
sum(3,4);


// Problem 3
// Create one function which takes three parameter as first name and last name and age and return the statement as "A is 99 years old"

function threepara(firstname,lastname,age){
    console.log(firstname+" "+lastname+" "+"is"+" "+age+" "+"years"+" "+"old");
}
threepara("Palash","Patil" , 18);


// Problem 4

// Create one arrow function

let greets=()=>console.log("wamique");

greets();


// "Print output: 
// output
// undefined

var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();



// "Print output: 
// output
// 21

var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};


// "Print output:
// output
// 20,40
// ƒ a() {
//     x = 20;
//    console.log(x);
// }

var x = 21;
a();
b();
console.log(a);
function a() {
   x = 20;
  console.log(x);
};

function b() {
    x = 40;
   console.log(x);
};


// Problem 5
// Write a function that accepts parameter n and returns factorial of n

function factorial(n){
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
}
result=factorial(4);
console.log(result);