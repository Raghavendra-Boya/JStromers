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


let keyboardInput = document.getElementById("inputBox");
keyboardInput.addEventListener("keydown",(e) =>{
    console.log(`Key "${e.key}" pressed  down`);
})

// keyboardInput.addEventListener("keyup",(e) =>{
//     console.log(`Key "${e.key}" released`);
// })

// keyboardInput.addEventListener("keypress",(e) =>{
//     console.log(`Key "${e.key}" pressed`);
// })

document.getElementById("myLink").addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("Link Clicked, but default action prevented");
})

document.getElementById("myForm").addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("Form Submitted");
})

document.getElementById("colorSelect").addEventListener("change",(e)=>{
    alert("Color Selected: "+ e.target.value);
})

document.getElementById("name").addEventListener("input",(e)=>{
    console.log("Current Input: "+ e.target.value);
})

document.getElementById("name").addEventListener("focus",(e)=>{
    e.target.style.background = "lightblue";
})

document.getElementById("name").addEventListener("blur",(e)=>{
    e.target.style.background = "white";
})


window.addEventListener("load",() =>{
    console.log("Page fully loaded");
})

window.addEventListener("resize",() =>{
    console.log("Window resized to "+ window.innerWidth + "x" + window.innerHeight);
})

window.addEventListener("scroll",() =>{
    console.log("Window scrolled to "+ window.scrollY);
})

let input = document.getElementById("copyInput");
input.addEventListener("copy",() =>{
    alert("Content Copied from input");
})

input.addEventListener("paste",() =>{
    alert("Content pasted to input");
})

input.addEventListener("cut",() =>{
    alert("Content cut from input");
})


//Media events
let video = document.getElementById("myVideo");
video.addEventListener("play",() =>{
    console.log("Video Started Playing");
})
video.addEventListener("pause",() =>{
    console.log("Video Paused");
})
video.addEventListener("ended",() =>{
    console.log("Video Ended");
})

document.getElementById("grandParent").addEventListener("click",() =>{
    console.log("GrandParent Clicked");
},)
document.getElementById("parent").addEventListener("click",(e) =>{
    e.stopPropagation();
    console.log("Parent Clicked");
})
document.getElementById("child").addEventListener("click",(e) =>{
    // e.stopPropagation();
    console.log("Child Clicked");
})


document.getElementById("grandParent").addEventListener("click",() =>{
    console.log("GrandParent Clicked");
},true)
document.getElementById("parent").addEventListener("click",(e) =>{
    // e.stopPropagation();
    console.log("Parent Clicked");
},true)
document.getElementById("child").addEventListener("click",(e) =>{
    // e.stopPropagation();
    console.log("Child Clicked");
},true)