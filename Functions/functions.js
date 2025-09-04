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



