/*
WHat are they:
to process or transform data effiquentlyly
1. map():
creates a new array by applying a function to each element of the original array.
SYnatx:
    array.map(function(currentValue,index){
        //code block to be executed
    }   

    Parameters:
    currentValue: The current element being processed in the array.
    index (Optional): The index of the current element being processed in the array.
    RETURNS THE NEW Array

2. filter():
creates a new array with all elements that pass the test implemented by the provided function.
SYnatx:
    array.filter(function(currentValue,index){
        //code block to be executed
    }
    Parameters:
    currentValue: The current element being processed in the array.
    index (Optional): The index of the current element being processed in the array.
    RETURNS THE NEW Array

3. reduce():
executes a reducer function on each element of the array, resulting in a single output value.
SYnatx:
    array.reduce(function(accumulator,currentValue,index){
        //code block to be executed
    }
    Parameters:
    accumulator: The accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
    currentValue: The current element being processed in the array.
    index (Optional): The index of the current element being processed in the array.
    RETURNS THE SINGLE VALUE


*/

let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(function (num) {
    return num * num;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

let prices = [100, 200, 300];
let discountedPrices = prices.map(price => 100-price*0.1);
console.log(discountedPrices); // Output: [90, 180, 270]


let ages = [12, 17, 22, 25, 30, 15];
let adults = ages.filter(function (age) {
    return age >= 18;
});
console.log(adults); // Output: [22, 25, 30]

let users = [
    {name: "John", acttive: true},
    {name: "Alice", acttive: false},
    {name: "Bob", acttive: true}
];

let activeUsers = users.filter(user => user.acttive);
console.log(activeUsers); // Output: [{name: "John", acttive: true}, {name: "Bob", acttive: true}]

let numbers1 = [1, 2, 3, 4, 5];
let sum = numbers1.reduce(function (accumulator, num) {
    return accumulator + num;
}, 0);
console.log(sum); // Output: 15

let cart = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
];
let totalPrice = cart.reduce((total, item) => total + item.price, 0);
console.log(totalPrice); // Output: 1800