/*

DOM:
DOM is a tree like structure that represents the all HTML Elements as a JS objcets


Why DOM:
1. Dynamically change content
2. add/remove elemts
3. Handle the User Interaction(events)

1. DOM Selectors:

    1. getElementById("ID name")
    selects the only one element by its ID

    2. getELementsByClassName("Class NAme")
    selects the multiple elements with specific class(returns the collection)


    3. getElementsByTagName("div")

    4. querySelector();
    5.querySelectorAll();


2. DOM Manipulations:
    1. create element;
    2. remove element
    3. replace Element:

3. atrribute manipulation:
    getAttribte();
    setAttribute:

4. Class MAnipulation with ClassList


d







*/

// let paras = document.getElementsByClassName("info");
// paras.style.fontWeight = "bold";

let paras = document.querySelector(".info");
paras.style.textDecoration= "underline";


let newDiv = document.createElement("h1");
newDiv.innerText = "Hello i am DIv from JS";
document.body.appendChild(newDiv)


document.getElementById('toRemove').remove();

let para = document.getElementById('para');
let newElm = document.createElement("h3");

newElm.textContent = "i'm replacing the para";
para.replaceWith(newElm);

let img = document.getElementById("mainImg");
console.log(img.getAttribute("src"));
img.setAttribute("src","new.png");

console.log(img.hasAttribute("src"));


let box = document.querySelector(".box");

box.classList.add("active");
box.classList.add("active");
box.classList.remove("inactive");
box.classList.toggle("toggleClass")