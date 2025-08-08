/* 
What is Variable:
A variable is a name given to a value. It is a way to store a value in a
program so that it can be used later. Variables are used to store data in a
program.

Why:
1. Stores user name/inputs data
2. perform calculations
3. reuse values 
4. reduce the repetition

//Syntax:
var_kryword varible_Name = value;


types odf Variable:
1. var
2. let
3. const


1. Var:

1. Re-declaration is possible
2. re-assignment is also possible
3. functional scope
4. hoisting is possible and value assigned

2. Let:
1. re-declaration is not possible
2. re-assignment is possible
3. block scope
4. Hoisting is possible bu value is not assigned

3. const:
1. re-declaration is not possible
2. re-assignment is not possible
3. block scope
4. Hoisting is possible but value is not assigned

Variable name Rules:
1. Must start with a letter, underscore, or dollar sign.
2. Must be followed by letters, numbers, underscores, or dollar signs.
3. Cannot start with a number.
4. Cannot contain spaces or special characters.

*/




// user_name;
// user-name;
// userName;

let age = 19;
age = 20;
age = 40;


let balance = 3000;
let withdraw = 1000;
balance = balance - withdraw;
console.log(balance);
balance = balance-1500;
console.log(balance);


var userName = "sai Kuar";//Declaration
console.log( "user Name");
var userName = "Ashok";//Re-Declaration
var name ;
name = "JS";
name = "CSS"//reassign
userName = "Kumar";//Assign


var email = "ABC@gmail.com";
console.log(email);
var email = "DEF@gmail.com";//Re-declaration
console.log(email);//
email = "XYZ@gmail.com";
console.log(email);

var password;

console.log(password);


let num = 10;
// let num = 20;//Re-declaration is not possible
num = 20;
console.log(num);//20


{
    const num = 300;
   {
     const num = 40;
     console.log(num);//40
     var a = 100;
   }
   console.log(num);//300
   console.log(a);//
}
console.log(num);//20



// console.log(b);
// let b = 20;


let c;
console.log(c);
// let b;
// console.log(b);
// b = 20;

// var b;
// console.log(b);
// b = 20;


// var b;
// b= 20;
// console.log(b);


const pi = 3.144;
pi = 300;

console.log(s);
var s = 30;






