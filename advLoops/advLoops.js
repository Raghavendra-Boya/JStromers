/*

1. for in loop: 
    1. used to iterate over the properties of an object
    2. returns keys
    3. not used for arrays (but can be used)
    4. best for Objects

    //[1,2,3,4,5]--->index position 3 remove
    //[1,2,empty value,4,5]

    5. syntax:
        for(let key in object){
            //code block to be executed
        }

2. for of loop:
    1. used to iterate over iterable objects (like arrays.)
    2. returns values
    3. best for arrays
    4. not suitable for objects

    5. syntax:
        for(let value of iterable){
            //code block to be executed
        }

3. for each loop:
    1. used to iterate over arrays
    2. executes a provided function once for each array element
    3. cannot be used for objects
    4. cannot be broken out of (no break/continue)
    5.

    sysntax:
        array.forEach(function(currentValue,index,array){
            //code block to be executed
        });

*/

let person = {
    name : "John",
    age : 30,
    city : "New York"
};

for(let key in person){
    console.log(key + ": " + person[key]);
}

let array1 = [10,20,30,40,50];
for(let index in array1){
    console.log(index + ": " + array1[index]);
}
//Output: 0:10,1:20,2:30,3:40,4:50
//not recommended for arrays
//if we delete any index position--->it will show empty value
delete array1[2];
console.log(array1);//[10,20,empty,40,50]
for(let index in array1){
    console.log(index + ": " + array1[index]);
}
//Output: 0:10,1:20,3:40,4:50
//index 2 is missing




let array2 = [100,200,300,400,500];
for(let value of array2){
    console.log(value);
}
//Output: 100,200,300,400,500

//delete a value from array
array2.splice(2,1);
console.log(array2);//[100,200,400,500]
for(let value of array2){
    console.log(value);
}
//Output: 100,200,400,500
//value 300 is missing

//for of loop is not suitable for objects
// for(let value of person){
//     console.log(value);
// }
//TypeError: person is not iterable


let array3 = [1000,2000,3000,4000,5000];
array3.forEach(function(value,index,array){
    console.log(index + ": " + value);
})
//Output: 0:1000,1:2000,2:3000,3:4000,4:5000
//delete a value from array
array3.splice(2,1);
console.log(array3);
//[1000,2000,4000,5000]
array3.forEach(function(value,index){
    console.log(index + ": " + value);
})
//Output: 0:1000,1:2000,2:4000,3:5000
//value 3000 is missing