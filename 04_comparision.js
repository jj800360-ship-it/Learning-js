//console.log(2>1);
//console.log(2<1);
//console.log(2>=1);
//console.log(2<=1);
//console.log(2==1);
//console.log(2!=1);


//console.log("2">1);
//console.log("02"<1);


//console.log("null">0); // false
//console.log("null"<0); // false
//console.log(null>=0); // true because it 1st converts null to 0 and then compares 0>=0 which is true
//console.log("null">=0); // false because it 1st converts "null" to NaN and then compares NaN>=0 which is false

// In JavaScript, relational operators (>, <, >=, <=) first convert values to numbers.
// Since Number(null) is 0, comparisons treat null as 0.
// That’s why (null >= 0) is true and (null > 0) is false.
// Equality checks (==), however, follow different rules:
// null is only loosely equal to undefined, not to 0.


//console.log(null == 0);   // false (special rule, null only equals undefined)
//console.log(null === 0);  // false (different types)
//console.log(Number(null)); // 0 (explicit conversion)


console.log(undefined == 0);   // false (undefined is not equal to any number)
console.log(undefined>= 0);  // false (undefined is not comparable to numbers)
console.log(undefined<= 0);  // false (undefined is not comparable to numbers)  