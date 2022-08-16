// function date1(){
//     document.getElementById("result").innerHTML = Date();
// }

// function text1(){
//     document.getElementById("result1").innerHTML = "hello world";
// }

// function size(){
//     document.getElementById('font-size').style.fontSize='40px';
// }
// function paragraph(){
//     document.getElementById("para").innerHTML = "Second Paragraph";
// }

// function counter(){
//     let a,b,c;
//     a=5;
//     b=5;
//     c=a+b;
//     document.getElementById("count").innerHTML = c;
// }

// function combains(){
//     document.getElementById("combain").innerHTML = "aravindh"+ " "+ "akaran";
// }
// let x = 10;
// // let y = 10;
// // let z = 15;

// // document.getElementById("valuetf").innerHTML =(x==y)+"<br>"+(y==z);

// // const names= ["aravindh", "akaran", "Karthika"];
// // document.getElementById("arrayy").innerHTML=names[1];

// let person = {
//     "name"  : "Aravindh",
//     "Age"   : "30",
//     "last"  : "Akaran"
// }
//     document.getElementById("objectss").innerHTML = person.name + " is "+ person.last + " like " + person.Age;

//     function myfunction(a,b){
//         return a*b;
//     }
//     document.getElementById("demo").innerHTML = myfunction(5,5);

//     let x = "abcdefghijklmnopqrstuvwxyz";
//     document.getElementById("demo1").innerHTML = x.length;

//     let fruits = "Apple, Banana, Orange";

//     document.getElementById("demo2").innerHTML = fruits.slice(15,21);

//     let fruit = "Apple, Banana, Orange";
//     document.getElementById("demo3").innerHTML = fruit.slice(7);
//  function myFunction(){
//   let text = document.getElementById("repl").innerHTML;
//   document.getElementById("repl").innerHTML = text.replace("Aravindh", "Akaran");
//  }
//  function myFunction(){
//     let text = document.getElementById("upper").innerHTML;
//     document.getElementById("upper").innerHTML = text.toUpperCase();
//  }

//  let text = "a, b, c, d, e";
//  const myArray = text.split(",")
//  document.getElementById("demo4").innerHTML= myArray[0];

//  let text2 = "this is my dear";
//  document.getElementById("demo5").innerHTML = text2.indexOf("my"); 

//  let school = ["apple", "orange", "banana"];
//  document.getElementById("demo6").innerHTML = school;

//     school.push("gowa");
//     document.getElementById("demo7").innerHTML = school;

//     let school1 = ["apple", "orange", "banana"];
//     document.getElementById("demo6").innerHTML = school1;
   
//        school1.pop();
//        document.getElementById("demo7").innerHTML = school1;


//        let car = ["bmw", "maruti", "suzu", "kivi"];
//        document.getElementById("demo6").innerHTML = car;
//        car.shift();
//        document.getElementById("demo7").innerHTML =car;

    //    let car1 = ["bmw", "maruti", "suzu", "kivi"];
    //    document.getElementById("demo6").innerHTML = car1;
    //    car1.unshift("ISUZU");
    //    document.getElementById("demo7").innerHTML =car1;

       
    //    let car1 = ["bmw", "maruti", "suzu", "kivi"];
    //    document.getElementById("demo6").innerHTML = car1;
    //    car1[0]="isuzu";
    //    document.getElementById("demo7").innerHTML =car1;


    //    let palam = ["mango", "banana","mik","melon"];
    //    document.getElementById("demo6").innerHTML ="Original: " + palam;

    //    let removed = palam.splice(2, 2, "gulun", "malan");

    //    document.getElementById("demo7").innerHTML = "new array: " + palam;
    //    document.getElementById("demo8").innerHTML = "removed array: " + removed;
    // let value = 5.6
  
    // document.getElementById("demo8").innerHTML = Math.round(value);

    // document.getElementById("demo8").innerHTML = Boolean(7>10);

    // let x=10;
    // let y=15;
    // document.getElementById("demo8").innerHTML=
    // (x<10) || (y>10);

//   function myFunction(){
//     let age = document.getElementById("voter").value;
//     let votable = (age<18) ? "too young cant vote": "old enough to vote";
//     document.getElementById("demo8").innerHTML=votable;
//   }

// this is the voter -election;

// function myFunction(){
//     let votable;
//     let age = document.getElementById("voter").value;
//     if(isNaN(age)){
//         votable = "give the valid input";
//     } else{
//         votable = (age<18) ? "too young no vote": "old enough to vote";
//     }
//     document.getElementById("demo8").innerHTML=votable;
// // }

// function myFunction(){
//     let votable;
//     let age = document.getElementById("voter").value;
//     if(isNaN(age)){
//         votable = "give valid input";
//     }else{
// votable = (age<18) ? "too yong":"can vote";
//     }
//     document.getElementById("demo8").innerHTML=votable;
// }

// if(new Date().getHours()<23){
//     document.getElementById("demo8").innerHTML = "Good day";
// }

// const hour = new Date().getHours();
// let greeting;

// if(hour<18){
// greeting = "Good night"
// }
// else{
//     greeting = "good Morning";
// }

// document.getElementById("demo8").innerHTML = greeting;

// const hour = new Date().getHours();
// let greeting;
// if(hour<10){
//     greeting = "good morning";
// }
// else if(hour<19){
// greeting = "good evening";
// }
// else{
//     greeting = "good night";
// }
// document.getElementById("demo8").innerHTML= greeting;

// let day;
// switch(new Date().getDay()){
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
        
//         document.getElementById("demo8").innerHTML = day;
// }
// let day;
// switch(new Date().getDay()){
//     case 0:
//         day = "Sunday";
//         break;
//     case 6:
//         day = "Saturday";
//         break;
//     default:
//         day = "looking for another";
//     }
//         document.getElementById("demo8").innerHTML ="today is "+ day;   

// let cars = ["bmw", "mnv", "ytr", "wer"];

// let text = "";
// for(i=0; i<cars.length;i++){
//     text = text+ " "+cars[i]+ "<br>";
// }
// document.getElementById("demo8").innerHTML = text;

// let text = "";

// for( let i=0;i<5; i++){
//     text = text+"the number is "+i+"<br>";
// }
// document.getElementById("demo8").innerHTML = text;

// let person = {fname:"aravindh", lname:"akaran", age:"30"};
// let text = "";
// for(let a in person){
//     text = text+" " +" " +person[a];
// }
// document.getElementById("demo8").innerHTML = text;

let i = 0;
let text="";

while (i<10){
    text = text+"the number is " + i+ "<br>";
     i++;
}
document.getElementById("demo8").innerHTML=text;