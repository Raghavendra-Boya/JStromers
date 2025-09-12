/*


*/

//storageType.setItem(Key,value)

localStorage.setItem("userName","Jeevan");
localStorage.setItem("ID",10);

let userName = localStorage.getItem("userName")
console.log(userName);
localStorage.setItem("Id",10);

let ID = localStorage.getItem("ID")
console.log(typeof ID);

let fruits = ["Apple","Banana","Mango"]
let r1 =
localStorage.setItem("Froots",JSON.stringify(fruits))
let Array1 = (localStorage.getItem("Froots"))
console.log(Array1);

let Array2 = JSON.parse(localStorage.getItem("Froots"))
console.log(Array2);


function saveName(){
    let name = document.getElementById("userName").value;
    localStorage.setItem("UN",name);
    alert("Name saved in Local Storage")
}

function showName(){
    let name = localStorage.getItem("UN");
    document.getElementById("displyName").innerText = name ? "Welcom" + name : "Name Not found"
}