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
*/


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
