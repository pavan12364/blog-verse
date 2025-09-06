let person={
    name:"pavan",
    age:18,
    college:"JNTU-GV"
}
console.log(person.name)
console.log(person.age)
console.log(person.college)




let flowers=["jasmine","marigold","lily"]
console.log(flowers[1])

let num=[1,2,3,45,6]
let square=num.map((num)=>num*num) //.map used to transform every element
console.log(square)

let even=num.filter((num)=>num%2==0);//.filter used to 
console.log(even)

let sum=num.reduce((present,num)=>present+num,0)
console.log(sum)
//array of objects
let arr =[{name:"pavan",age:18,marks:75},{name:"siva",age:25,marks:85},{name:"raju",age:21,marks:100}]
console.log(arr)
let maxmarks=0;
let topper="";
for(let person of arr){
    if(person.marks>maxmarks){
        maxmarks=person.marks;
        topper=person.name;
    }
}
console.log(`Topper is ${topper} and his/her marks ${maxmarks}`)
