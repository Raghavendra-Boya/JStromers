/* 
What is Scope:
defines where a variable can accesed in your code
types of Scope:
1. Global Scope
2. Local Scope
4. Block Scope


1. Global Scope:
Variables declared outside of any function or block are in global scope.
Variables in global scope can be accessed from anywhere in the code.
life span: exista untill the page is closed

2. Function Scope/Local Scope:
Variables declared inside a function are in function scope.
Variables in function scope can be accessed only within that function.
life span: exista untill the function is closed.


//Difference B/w Function scope and Block Scope

3. block scope:
Variables declared inside a block of code (like if, while, for, switch) are in block
scope.
Variables in block scope can be accessed only within that block of code.
life span: exista untill the block of code is closed.




*/





let globalScope = "i am GLovbal Scope";
console.log(globalScope);
function functionName(){
    console.log(globalScope);
    function function1(){
        console.log(globalScope);
    }
    function1();
    console.log(" i am children");
    function1()
    
}
console.log("Hello");
functionName()

// function1();



{
    let b = 20;
    console.log("i am outside b;lock");
    {
        var a = 10;
        console.log("i am inside block");
        console.log(a);
    }
    console.log(a);
}
 console.log(a);


function function2(){
    var name1 = "Ravi";
    console.log(name1);
}
function2();
// console.log(name1);


if(true){
    let c = 30;
    console.log(c);
    if(true){
        console.log(c);
        var d = 100;
        console.log(d);
        }
        console.log(c);
        console.log(d);
}

var gv = "I am Global";
let gl = "i am Global Let";
console.log(gv);//1
console.log(gl);//2

function outerFunction(){
    console.log(gv);//3
    console.log(gl);//4

    var innerVar = "i am Function Scoped Var";
    let innerLet = "i am Function Scoped Let";
    if(true){
        console.log(innerVar);//5
        var ifVar = "i am var inside IF";
        let ifLet = "i am let inside IF";
        const ifConst = "o am const inside IF"
        console.log(ifVar);//6
        console.log(ifLet);//7
        console.log(ifConst);//8
    }
    console.log(ifVar);//9
    // console.log(ifLet);

    function innerFunction(){
        var innerVar = "i amm var from innerFunction";
        console.log(innerVar);
    }
    var ousideFynction = " i am declared out side the innerfunction";
    innerFunction();
    console.log(ousideFynction);
}
outerFunction();
console.log(hoistedVar);
var hoistedVar = "Hoisted Var"
console.log(hoistLet);
let hoistLet = "hoisted Let";