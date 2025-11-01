/*

what is Control statements:
to control the flow of execution

1. Conditional Statements:
1. if()
2. if-else:

Syntax:
if(condition){
//if condtion gets true
}
else{
//CONDITION GETS false
}

Why:
based on the condtion our code executed

Use case:
1. Login credentials
2. applying discount only if cart total exeeds a certain ammount
3. Showing message if product is avilable, if it is not availbel show out of stock

How it Works?
1. condtion inside the if()
2. if the condition gets true--->executes if block
4. if condition gets false --->executes else block



2. Else if ladder:
used to check multiple conditions one after onether untion condition gets true

Why:
it helps you have more than two conditions

Use Cases:
1. Grading system based on Marks
2. ticket price based on the passenger age group
3. Reservation

How it works:
1. condtion ,if()
2. 2nd condition, else if()

...
3. else


syntax:
if(condition1){
// code if condition1 is tru
}
else if{
//code if condition2 is true
}
else{
//code if none are true
}
\\
3. Switch statement

for many options based on the value

why:

syntax:
switch(expression){
case value1:
    //code
    //break;
case value2:
    //code
    //break;
default:
    //code
    }

how it works:
1. the switch ebaluates the expression once
2. it compare the result with case values
3. if it matches--->executes that case block until a break is found
4. if no match---> executes default block


use cases:
1. TV remore
2. menu selection in applicatipn
3. performing action based on day of the week


Typecasting:
converting one data type to onether dat type
Example: converting string into a number

Explicit type convertion:

Number(),String(),Boolean(),parseInt(),parseFloat()


*/

// const { Children } = require("react");


let cartValue = 500;//prompt("Enter amount:");
console.log(typeof cartValue);
if(cartValue>500){
    console.log(":Delivery chrages not applied");
}
else{
     console.log(":Delivery chrages  applied");
}

if(cartValue === 500){
    console.log("Both values are equal");
}
else{
    console.log("Both values are not equal");
}

let num = prompt("ENter a number:");



if(num > 0){
    if(num%2 === 0){
        console.log("Positive EVen Number");
    }
    else{
        console.log("Positive Odd Number");
    }
}
else{
    if(num%2 === -0){
        console.log("Negative EVen Number");
    }
    else{
        console.log("Negative Odd Number");
    }
}


let marks = 75;

if(marks>90){
    console.log("Grade: A");
}
else if(marks>80){
    console.log("Grade: B");
}
else if(marks>70){
    console.log("Grade: C");
}
else if(marks>60){
    console.log("Grade: D");
}
else{
    console.log("Grade: E");
}

let age = 11;

if(age<=10){
    console.log("50%");
}
else if( age<=60){
    console.log("100%");
}
else{
    console.log("75%");
}


console.log(-4%2);


let day = "sat";

switch(day){
    case "mon":
        console.log("Day-1");
        break;
        case "tue":
        console.log("Day-2");
        break;
        case "wed":
        console.log("Day-3");
        break;
        case "thur":
        console.log("Day-4");
        break;
        case "fri":
        console.log("Day-5");
        break;
        case "sat":
        console.log("Day-6");
        break;
        case "sun":
            console.log("day-7");
            break;
        default:
            console.log("enter valid day");
    
}


// let item = ;
// switch(item){
//     case 1:
//         console.log("starters are getting ready");
//         break;
    
//     case 2:
//         console.log("main course");
//         break;
//     case 3:
//         console.log("desserts");
//         break;
//         default:
//         console.log("select item accornding to menu");  
    
// }

console.log(Boolean("ww"));


{
    var a = 10;
    let b = 20;
    const c = 30;
}
// console.log(a,b,c);

console.log(Boolean());


/*------------------------------- */

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Weekend coming!");
    break;
  default:
    console.log("Mid-week day");
}



/*----------------------- */

let item = "Pizza";

switch (item) {
  case "Burger":
    console.log("You selected a Burger 🍔");
    break;
  case "Pizza":
    console.log("You selected a Pizza 🍕");
    break;
  case "Pasta":
    console.log("You selected a Pasta 🍝");
    break;
  default:
    console.log("Item not available");
}


/*---------------------------------- */

let seatType = "Premium";

switch (seatType) {
  case "Standard":
    console.log("Price: ₹150");
    break;
  case "Premium":
    console.log("Price: ₹250");
    break;
  case "VIP":
    console.log("Price: ₹400");
    break;
  default:
    console.log("Invalid seat selection");
}
