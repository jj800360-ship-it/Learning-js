 //JavaScript is dynamically typed because the type of a variable
 //  can change depending on the value assigned at runtime.

 const score = Symbol('100');
 const anotherScore = Symbol('100');

 //console.log(score === anotherScore); // false, because each Symbol is unique

//console.log(typeof anotherScore); 

const jyoti=["Jyoti Prakash Sethi", 24, "Hyderabad", "Bangalore", true, null, ];//array 

let myInfo = {
    name: "Jyoti Prakash Sethi",
    age: 24,
    city: "Hyderabad"
};//this is an object 


//console.log(typeof jyoti);


const myfun = function(){
    //console.log("Hello");
}

myfun();

//console.log(typeof myfun);

//******************************************************************* */


let myName = "Jyoti Prakash Sethi";

mynickname = myName;
mynickname = "Jyoti P Sethi";
console.log(mynickname);
console.log(myName);


//stack memory are used for primitive data types and heap memory is used for reference data types.
//stack memory gives a copy of the value to the new variable and heap memory gives a reference to the same object in memory.
//in stack memory if we change the value of the new variable it will not affect the original variable 
//  in heap memory if we change the value of the new variable it will affect the original variable.

let userone={
    name: "Jyoti Prakash Sethi",
    age: 24,
    city: "Hyderabad"
}

let usertwo = userone;
usertwo.age = 25;
console.log(userone.age);//
console.log(usertwo.age);//