var a = 100;
console.log(a);
console.log(this.a);
console.log(window);

let user = {
    name: "John",
    age: 30,
    location: "USA",
    greet: function(){
        console.log("Hello " + user.name);
        // console.log(this);
    }
}

console.log(user.name);
console.log(user.greet);


let user1 = {
    name: "Abhi",
    age: 40,
    location: "KPHB",
    greet: user.greet
}

user.greet();
user1.greet();
console.log(user);

function aab(){
    console.log(this);
}
aab();
// this.aab();
// window.aab();


let user2 = {
    name: "Alice",
    age: 25,
    showProfile : function(elementId){
        document.getElementById(elementId).innerHTML = `
        <h2>${this.name}</h2>
        <p>Age: ${this.age}</p>
      
        `;
    }
}

let user3 = {
    name: "Bob",
    age: 28,
    showProfile : user2.showProfile
}
    

user2.showProfile("card1");
user3.showProfile("card2");


/*
this KeyWord in Arrow Functions:
In arrow functions, 'this' does not refer to the object that called the function. Instead, it inherits 'this' from the surrounding lexical context.

*/


let user4 = {
    name: "Charlie",
    age: 35,
    greet1 : function(){
        function innerFunc(){
            console.log("Hello " + this.name); // 'this' here refers to the global object (window in browsers)
        }

        // let innerFunc = () => {
        //     console.log("Hello " + this.name); // 'this' here refers to user4 object
        // }
        innerFunc();
    },
}
user4.greet1(); 