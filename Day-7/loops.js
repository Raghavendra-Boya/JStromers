/*
WHat is Loops:
to execute a block of code multoiple times until a condition is met

why:
1. reduce the code
2. to aumate the tasks
3. perfomance increemnet, more efficient and readdable

use cases:
1.iterating over arrays
2. reapetedly asking for user logins
3. countdowns


types of loops:
1. for loop
2. while 
3. do while

1. for loop:

syntax:
for(initialization;condition;increament/decrement){
//block of code
}

flow of execution:
1. intialization
2. condition(true)-->enter into block  (false)---->came out of the block
3. block of code
4. increment/decreament
5. condition
6. block of code



*/

let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

let months = ["Jan","Feb","Mar","APr","may","jun","july","aug","sep","oct","nov","dec"]
console.log(months.length);




for(let i = 1; i<=31;i++){
 //select
 //<option>i</
day.innerHTML +=  `<option>${i}</option>`;

}

for(let i = 0; i<months.length;i++){
    month.innerHTML += `<option>${months[i]}</option>`;
}

for(let i = 1905;i<=2025;i++){
    year.innerHTML += `<option>${i}</option>`;
}


let i = 100;

for(console.log("Hello....");i<=100;console.log("Hello")){
 console.log(i);
 i++;
}





// Hello...
// 100
// Hello

   
    // console.log(i);



    for(let i =3;i<=3;i++)
        console.log(i);
        console.log(i);


        for(let i =3;i<=3;i++){
            console.log(i);
        }
        console.log(i);


        // for(let i = 5; ; ) {
        //     console.log("Will this run?");
        // }
        // console.log("Loop ended");

//         for(let i = 0; ; i++) {
//             console.log(i);
//             if(i > 5) break;
//             }

//             for(let i = 0; true; i++) {
//             console.log(i);//0 1 2 3 4 5 6
//             if(i > 5){
//                  break;
//             }
//             }

//             let i = 5;
//             while(i < 5) {
//             console.log("This will never run");
//              i++;
//             }
//             console.log("Done");

//             let i = 0;
// while(++i < 3) {
//     console.log("Value of i:", i);
// }

// let i = 10;
// do {
//     console.log(i);
//     i++;
// } while(i < 5);

// let i = 1;
// while(i) {
//     console.log( i); 
// }

// let i = 1;
// do {
//     console.log("i:", i);
//     --i;
// } while(i <= 3);

/*



While:

SYntax:

while(condition){
//code
increament/decreament
}

*/

let d = 5;
while(d>=1){
    console.log(d);
    d--;
}

//5 4 3 2 1 0 -1
//d--->4 3 2 1 0 -1

let stockItems = 5;
let purachedItems = 5;
while(stockItems>=purachedItems){
    stockItems -= purachedItems;
    console.log(`${purachedItems} items successfully purchesed`);
    console.log(`remaining items ${stockItems}`);
}

console.log(`available items ${stockItems} and your purcyhased ${purachedItems} try to remove ${purachedItems-stockItems}` );


let count = 1;
let pin = 1234;

do{
    console.log("Welcome to ICICI bank");
    if(pin == 1234){
        console.log("transaction succes");
    }
    else if(count == 3)
    else{
        console.log("ENter valid pin");
    }

    count++;

}while(count<=3);

if(count == 3){
    console.log("last attempt");
}
else if(count>3){
console.log("your card is blocked");
}