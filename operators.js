//arithematic operators
let  x=7
let y=8
console.log(x+y);
console.log(x*y);
console.log(x%y);
console.log(x/y);
console.log(x**y);


let z=5;
z+=4






//comparison operators
let a=10,b="10";
console.log(a==b)
console.log(a!=b)
console.log(a===b) // to check datatype
console.log(a!==b)
console.log(a<b)
console.log(a<=b)
console.log(a>=b)
console.log(--a)

//logiocal operators
let age=18;
console.log(age<=18 && age>=30)
console.log(age>30 && age==18)
//string operators
let firstName="bankuru"
let MiddleName="pavan"
let lastName="sai"
let fullName=firstName +""+MiddleName+""+lastName
let correctName=`Hello ${firstName} ${MiddleName} ${lastName}, welcome`          
console.log(correctName)

let MyAge=26

if(MyAge>=18){
    console.log("Eligeble to vote")
}else{
    console.log("you cannot vote")
}
let result= MyAge>=18?"Eligble to vote" : "you cannot vote"
 console.log(result)
 let count=5;
console.log(count++)
console.log(count)
console.log(++count)
//typedef operators

console.log(typeof count)
console.log(typeof "pavan")
console.log(typeof 26)

