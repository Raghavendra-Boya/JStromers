/*
1. function declaration:


*/

function functionName(age,name){
    console.log(`Hello iam ${name}, my age is ${age}`);
}
functionName(23,"Raghava")

console.log("Step-1:add oil");
console.log("Step-2: add spices");
console.log("Step-3: add potato");
console.log("step-4: cook for 20 min");

console.log("Step-1:add oil");
console.log("Step-2: add spices");
console.log("Step-3: add panner");
console.log("step-4: cook for 20 min");

function curry(item){
    console.log("Step-1:add oil");
console.log("Step-2: add spices");
console.log(`step-3: add ${item}`);
console.log("step-4: cook for 20 min");
}
curry("panner")
curry("potato")


function greet(a,b){
    return a+b;
}

console.log(greet(2,3));
let result = greet(3,5);
console.log(result);



function getTotal(price,qty){
    return price*qty;
}

function showBill(){
    let p = Number(document.getElementById("price").value);
    let q = Number(document.getElementById("qty").value);
    let total = getTotal(p,q);
    document.getElementById("bill").innerText = "Total Bill" + total;
}


function greet1(name = "Dear"){
    console.log("good Morning" + name);
}
greet1("Raghava")
greet1();


function getBill(price,tax=0.18,discount=0){
    return price+(price*tax)-discount;
}

function clcBill(){
    let price = Number(document.getElementById("hotelPrice").value);
    let discount = Number(document.getElementById("discount").value)
    let total = getBill(price,undefined,discount)
    document.getElementById("result").innerText = "FInal Bill: " + total;
}


//function expressions:

let func = function(){
    console.log("Hello");
}
func()

//Use cases:
//1. Used in Event handling
//2. show pop up messages
//3. adding items to wishlist

let popup = function(){
    alert("Buy 1 get 1 free on fashion items")
}

//Anonymous Function

setTimeout(function(){
    console.log("Anonymous Function");
},1000)

function greet2(name){
    console.log("Hello" + name);
}


setTimeout(() => greet2("Ravi"),2000)

function processingOrder(callback){
    document.getElementById("orderStatus").innerText = "Processing your Order...."
    // setTimeout(callback,2000)
    callback();
}

function conformOrder(){
    document.getElementById("orderStatus").innerText = "Order conformed!"
}

processingOrder(conformOrder)



