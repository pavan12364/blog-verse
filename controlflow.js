let marks=85;

if(marks>=90){
    console.log("Grade:A")
}else if(marks>=80){
    console.log("Grade :B")
}else if(marks>=70){
    console.log("Grade:c")

}else
{
    console.log("fail")
}

let day=3;
switch(day){

    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Tursday");
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("saturday")
        break;
        
}

// array of strings
let colors=["green","red","blue","yellow"]
for(let i=0;i<colors.length;i++){
    console.log(color(i))
}
for(let color of colors ){
    console.log(color);
}

let person={
    name:"pavan",
    age: 18,
    college:"JNTU-GV"
}
for(let key in person){
    console.log(`${key}: ${person[key]}`)
}
for(let i=5;i>=0;i--){
    if(i===3){
        continue;
    }else if(i===2){
        break;
    }
    console.log(i)
}
