/**
 1. Inline Event Handling:
adv:
    1. simple and small projects
    2. Easy to unsdestand for beginners

Dis Adva:
    1. Mixing HTML & JS--->not clean
    2. hard to maintain when project grows

 2. Event Property

 adv:
    1. JS is seperated fro HTML
    2. cleaner code than inline
dis adv:
    1. can attach only one handler--->last one overwrites the previous
    3. addEventListener

 adv:
    1. can attach multiple handlers



    1. Mouse Events: 




 */

 function sayHello(){
    alert("Hello")
 }

//  document.getElementById("btn").onclick = function (){
//     console.log("Hello Event Property")
//  }
//  document.getElementById("btn").onclick = function (){
//    console.log("Welcome")
//  }


let btn =  document.getElementById("btn");
btn.addEventListener("click",function(){
    console.log("Hello from AddEventListener")
})
btn.addEventListener("click",function(){
    console.log("Second handler also works");
})


document.getElementById("clickBtn").addEventListener("click",() =>{
    console.log("Click EVent");
})

document.getElementById("dblClickBtn").addEventListener("dblclick",() =>{
    console.log("DBL Click EVent");
})

document.getElementById("hoverBox").addEventListener("mouseover",() =>{
    document.getElementById("hoverBox").style.background = "yellow";
})

document.getElementById("hoverBox").addEventListener("mouseout",() =>{
    document.getElementById("hoverBox").style.background = "white";
})

document.getElementById("mouseMoveBox").addEventListener("mousemove",() =>{
    console.log("Mouse is Moving inside the box");
})

document.getElementById("mouseDownBtn").addEventListener("mousedown",() =>{
    console.log("mouse button Pressed Down");
})

document.getElementById("mouseUpBtn").addEventListener("mouseup",() =>{
    console.log("mouse button Realesed");
})

