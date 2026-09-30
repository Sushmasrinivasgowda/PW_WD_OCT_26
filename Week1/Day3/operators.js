//Arthmetic Operator +-*/%

//addtion
console.log(10+7);

//subtraction
console.log(8-2);

//multiplication
console.log(9*4);

//division
console.log(10/5);

//modulus return the reminder
console.log(10%3);

//Assignment operator 

//a+=1  -> a=a+1

a = 10
console.log(a+=5);
console.log(a-=10);
console.log(a*=2);
console.log(a/=6);

//Comparision operator

//losse equlity(--) -> compare only the value
//type coerction -> conversion
console.log(2=='2'); //true
console.log(2==true); //false
console.log(1==false); //false
console.log(1==true); //true

//strict equality(===) -> compare both value and datatype

console.log(2==='2'); //false
console.log(null === undefined) //false

// note: alwaysrecomended to use strict equlity

//logical operator
console.log(a>b && b>a); //(false && true)