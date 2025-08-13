/*
WHat is Operator:
Operator is a symbol that is used to perform operations on operands. It is a binary or unary operator
that takes one or two operands and produces a result.

let s = a+b;

why:
1. mathemetical calculation
2. to make decisions
3. to perform operations
4. manipulate the data

real-world analogy:
just imagine a tool kit:
+ is ad screwdriver
- is a cutter
&& 

types of Operators:
1. Arithmetic Operators
+,-,*,/,**,%
2. Assignments Operator
what: Assign values to a varoiable
why: shortcut for updating variable values
where: Updating Scores
=,+=,-+,*=,/=,%=,**=
3. Comparison Operators
What: compare the values, returns true or false
why: to make decisions
where: if statements(logic control or access controls)
==,!=,>,<,>=,<=,===,!==
==    : check only values
===    : checks value and data type
!=   :  check value
!==   :strictly not equal


let a = 10;
a = a+20;
a +=20;


*/

let a = 2**3;
console.log(a);


console.log(5+"5");
console.log(5-"6");
console.log(40%"3");

console.log("16"+10+20-3+"5");

console.log(10%4*2);
console.log(2**3**2);
console.log(10/0);


let value = 10;
value += 20;
value -=20;//value = value-20

let num = 5;
num += num *=2;//num = num+num*2
console.log(num);

let x = 10;
x -=x/=2;//x = x-x/2
console.log(x);


let num1 = 10;
let num2 = "10";
console.log(num1!==num2);


console.log(0 == false);
console.log(0 === false);
console.log(null == undefined);
console.log(null === undefined);
console.log("5">2);
console.log("abc">"aea");


// console.log(2-A);

console.log("16"+10+20-3+"5");