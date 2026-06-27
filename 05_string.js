const name = "jyoti";
const age = 22;
const message = `Hello, my name is ${name} and I am ${age} years old.`;


const newMessage = new String(message);
//console.log(newMessage);
//console.log(newMessage.toUpperCase());
//console.log(newMessage.toLowerCase());
//console.log(newMessage.length);
//console.log(newMessage[36]);
console.log(newMessage);

const jyoti =  '33Helloworld';
newJyoti = Number(jyoti);
console.log(typeof jyoti);
console.log(newMessage.substring(2, 5));
console.log(message.length);
// substring mai agar start bada ho end se to ye apne aap swap kar leta hai
// aur agar negative value dete ho to usko 0 maan leta hai


let practice="mynamejyotiprakashsethi";
let practices = practice.slice(-8, 18);
console.log(practices);
//when we give a negative value first it will minus from the length
// and if the end value is greater than the start then the result will show, otherwise it will show empty string.

let stringone = "   Hello  ";
console.log(stringone);
console.log(stringone.trim());

const jyotips="Rmoti"
const newjyotips=jyotips.replace('Rm','Jy')
console.log(jyotips);
console.log(newjyotips);
//to replace a character we use replace.filename

console.log(newjyotips.includes('y'));

let gamename="jyoti&prakash&sethi"
console.log(gamename)
console.log(gamename.split('&'))