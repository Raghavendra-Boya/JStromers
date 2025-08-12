/*

WHat is Dat type?
Dat type definre the kind of data stored in varuable

let x = 100;
x = 200;
let y = "100";

types:
1. primitive data type(stores single values--->immutable)
    1. NUmber
    what: represents both integer and floating points
    why:used for mathemetical calculations, condtion
    where: age,rating,price etc
    2. String
    what: represents sequence of characters and enclosed with ("",'',``)
    why: used for text data, names, messages etc
    where: name, message, email etc
    3. Boolean
    what: represents true or false value
    why: used for condition
    where: login status, is admin etc
    4. undefined
    what: represents value is not assigned
    why: used for variable declaration
    where: variable declaration
    5. null
    what: represents intentiallt absence of value
    why: used for database, api etc
    where: database, api etc
    6. Symbol:
    what: represents unique and immutable primitive value
    why: used for object property
    where: object property


2. non primitive data type
1. Array
what: represents collection of values with hetirogenioud data types
why: used for storing multiple values
where: list of items, shopping cart etc
accessbility: through indexes(0,1,2,3) and Size of the array starts from 1
2. Object
what: represents collection of key value pairs
why: used for storing multiple values
where: user data, product data etc
accessbility: through keys
3. array of object




*/


let age = 25;
console.log( age);
console.log(typeof age);

let num1 = 0.1;
let num2 = 0.2;
let num3 = num1+num2;
console.log(num3);//0.3

let name = "Raghava";
console.log("Hello" +" "+ name);
console.log(typeof name);

let age1 = 30;
console.log(typeof age1);
let result = age>18;
console.log(typeof result);
console.log(result);
if(age>18){
    console.log("you are adult");
}
else{
    console.log("you are minor");
    }



    let a = null;
    console.log(a);
    console.log(typeof a);

    let b = undefined;
    console.log(b);
    console.log(typeof b);

    //is null and undefined both are same?


    let value1 = 10;
    let value2 = 10;
    console.log(value1==value2);

    let value3 = Symbol(10);
    value3 = Symbol(20);
    console.log(value3);
    let value4 = Symbol(10);
    console.log(value3==value4);


    let fruits = ["Apple","Banana","Mango","Orange"];
    console.log(fruits);
    console.log(fruits.length);
    console.log(fruits[0]);
    console.log(fruits[1]);
    console.log(typeof fruits);


    // let onbject = {
    //     key:value1,
    //     key:value2,
    //     key:valu3
    // }

    let student = {
        name:"Jeevan",
        age:25,
        fee:30000
    }

    console.log(student);
    console.log(student.name);


    let array = [
        {
            name:"jeeven",
            age:25,
            fee:30000
        },
        {
            name:"Harsha",
            age:23,
            fee:25000
        },
        {
            name:"Venkat",
            age:27,
            fee:230000
        }
    ]

    console.log(array[1].fee);