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

4. Logical Operators:
What: perform logical operations and reverse a boolean result
why: to make decisions
where: form Validations and Access
&&,||,! 
&&--->must both condition will gets true then only it will returns the true
||--->if any one condition will gets true then it will returns the true
!---->it will reverse the boolean result

5. Unary Operator:
What: perform operations on a single operand
why: Quick transformation
where: delting or updating the data
+   converts to Number
-   converts to negative number
++(increment)
  1. pre-increment(++value)--->first value is increased and then prints the value
  2. post-increment(value++)--->first prints the value and then value is increased
  --(decrement)
  1. pre-decrement(--value)--->first value is decreased and then prints the valu
  2. post-decrement(value--)--->first prints the value and then value is decreased

  typeof---->gets the Data type

  6. ternary operator:
  what: short if---else
  why: consise decitions making
  where: form Validations and Access
  Syntax:
  condition ? value_if_true : value_if_false


  7. bitwise Operator:
  what: perform operations on binary numbers
  why: low level programming
  where: form Validations and Access
  &   : bitwise AND  //
  // 5&1
  0101
  0001
  0001--->1
  |   : bitwise OR  //
  // 5|1
  0101
  0001
  0101--->5
  ^   : bitwise XOR  //
  // 5^1
  0101
  0001
  0100--->4
  ~   : bitwise NOT  //(-(N+1))
~5  ----->-(5+1)-->-6
~-4---->-(-4+1)-->3
<<   : left shift  //2*2^i
// 5<<2
01010

>> right shift
// 5>>2
01 |0 1


let a = +5;
clg(a)
let b = +"5";
clg(b)
let c = +"Hello"
clg(c)


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

let userName = "admin";

let password = 123456789;

if(userName==="admin"&&password === "123456789"){
    console.log("Welcome Admin");
}
else{
    console.log("Invalid User");
    }

    if(true || false){
        console.log("True");
    }
    else{
        console.log("False");
        }

        if(!true && true){
            console.log("True");
        }
        else{
            console.log("False");
            }


            console.log(true && false || true);
            console.log(false || false && true);
            console.log(!true);
            console.log(!" ");
            console.log(!null);
            console.log(!undefined);
            console.log(!4);
            console.log("Hello" && 5);
            console.log(false || 3  );


            let s = +5;
            console.log(s);
            let s1 = "5";
            console.log(s1);
            let s2 = +"5";
            console.log(s2);
            let s3 = +"Hello"
            console.log(s3);

            let n = -5;
            console.log(n);
            let n1 = -"5";
            console.log(n1);
            let n2 = -"Hello";
            console.log(n2);


            let i = 10;
            //i++;//10--->11
            console.log(i++);//a=11
            console.log(++i);//12
            console.log(i--);//12--->11
            console.log(--i);//10


            console.log(+"10" + 1);
            console.log(typeof typeof 5);
            console.log(typeof typeof "5");


            let i1 = 1
            console.log(i1++ + ++i1 + --i1 + --i1 - i1-- );
            console.log(--i1);


            //i1=1->2->3->2->1->0
            //1+3+2+1-1

            let age =  18;
            let nationality = "indian";
            if(age>=18){
                console.log("eligible for Vote");
                if(nationality == "indian"){
                    console.log("eligible for Indian Vote");
                }

            }
            else{
                console.log("not eligible for vote");
                }

            // let result = (age>17) ? "eligible for Vote" (nationality == "indian") ? "eligible for Indian Vote" : "not eligible for Vote"
            // console.log(result);

console.log(age>18 ? "Adult" : age === 18 ? "just Adult":"Miinor");

let b3 = 5;
let b4 = -4;
console.log(~b3);
console.log(~b4);
console.log(5>>2);


 console.log(!" ");
            console.log(!null);
            console.log(!undefined);
            console.log(!4);
            console.log( 5 && "Hello");
            console.log(false || 3 || true );


console.log(Boolean("false"));