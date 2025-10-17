/* 
 //alert(3+3);           this will show error because alert is not defined
//                       in node js while it works in browser with popup
//Remember: JavaScript engine is embedded in browsers, while Node.js provides a different runtime en-vironment
 console.log(3+3); //this will work in both browser and node js

  */
 "use strict"; // it is just a directive to use strict mode of js.no need to write in every file but it is a good practice
 let naam ="Simit";
 let age = 21;
 let issmart = true;
 let height; //undefined
 let weight = null; //null
 let id=Symbol("id"); //symbol.It is used to create unique identifiers
 let bigNumber=123456789012345678904831n; //bigint

console.log(typeof age);
console.log(typeof naam);
console.log(typeof issmart);
console.log(typeof height);
console.log(typeof weight);
console.log(typeof id);
console.log(typeof bigNumber);

console.table([naam, age, issmart, height, weight, id, bigNumber]);
height=1.75;
console.log("Updated height:", height);
console.table([naam, age, issmart, height, weight, id, bigNumber]);
//  Creating a Symbol
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1);          // Symbol(id)
console.log(id2);          // Symbol(id)
console.log(id1 === id2);  // false → Symbols are always unique

