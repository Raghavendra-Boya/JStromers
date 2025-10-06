//What is Binding:
//Binding is the process of linking a function to a specific object, allowing
//  
//  the function to access and manipulate the properties and methods of that object. In JavaScript, functions are first-class citizens, meaning they can be treated like any other variable. This allows us to pass functions as arguments, return them from other functions, and assign them to variables.

//implicit Binding:
//IB occurs when a function is called as a method of an object. In this case, the this keyword inside the function refers to the object that the method is called on.

//Explicit Binding:
//EB occurs when we use the call(), apply(), or bind() methods to explicitly set the value of this inside a function. This allows us to control the context in which the function is executed, regardless of how it is called.

//Anology: 

//1. call():
//The call() method calls a function with a given this value and arguments provided individually.
//Syntax:
//functionName.call(thisArg, arg1, arg2, ...);

//Example:
function greet(greeting, punctuation) {
    console.log(greeting + ", " + this.name + punctuation);
}

let user = { name: "John" };
greet.call(user, "Hello", "!"); // Output: Hello, John!

//Example-2:

let product = {
    name: "Laptop",
    price: 10000,
    getPriceWithTax: function(taxRate) {
        console.log(`${this.name} fimal Price :$${this.price+taxRate}
            `);
    }

}

product.getPriceWithTax(0.1); // Output: Laptop Price with tax: $11000
let anotherProduct = { name: "Phone", price: 5000 };
product.getPriceWithTax.call(anotherProduct, 0.1); // Output: Phone Price with tax: $5500   

//2. Apply()
//The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
//Syntax:
//functionName.apply(thisArg, [argsArray]);
//Example:
function greet1(greeting,punctuation) {
    console.log(greeting + ", " + this.name + punctuation);
}
let user1 = { name: "Alice" };
greet1.apply(user1, ["Hi", ".","_"]); // Output: Hi, Alice.

//3. Bind()
//Creates a new Function with permanently bound this value and, optionally, initial arguments.
//Syntax:
//let boundFunction = functionName.bind(thisArg,arg1,agr2,...);
//bounFUncction()
//Example:
function greet2(greeting) {

    console.log(greeting + ", " + this.name);
}
let user2 = { name: "Bob" };
let greetBob = greet2.bind(user2, "Hey");
console.log(greetBob); // Output: [Function: bound greet2]
greetBob(); // Output: Hey, Bob

//Example-2:
const shop = {
    product : "Tablet",
    price : 2000,
   buy : function(){
    console.log(`Buying ${this.product} for $${this.price}`);
   }
}

document.getElementById("btn").addEventListener("click",shop.buy.bind(shop));

shop.buy(); // Output: Buying Tablet for $2000
const anotherShop = { product: "Monitor", price: 3000 };
const buyMonitor = shop.buy.bind(anotherShop);
buyMonitor(); // Output: Buying Monitor for $3000
const shop1 = {product:"Camera",price:4000};
buy.call(shop1); // Output: Buying Camera for $4000
buy.apply(shop1); // Output: Buying Camera for $4000

/*

Feature                 call()                      apply()                     bind()
Executes?                Immediately                 Immediately                 No, returns a new function
Arguments               Individual arguments        Array of arguments          Individual arguments
Return Value            Result of the function      Result of the function      New function with bound this
Use Case                Direct fuction call &       
                        iduvidual args               When args are in an array   When you want to create a new function with a specific this context





*/