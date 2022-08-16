//Arrow Function--------

//Ex-1-------------------------------

// let myfunction = (a,b) => a*b;

// document.getElementById('demo').innerHTML = myfunction(4,5);

// let myfunction2 =(a,b)=> a/b;
// document.getElementById("demo").innerHTML=myfunction2(10,5);

//Before arrow function:--------------

// let hello;

// hello = function(){
//   return "hello world";
// }
// document.getElementById("demo").innerHTML=hello();

//After arrow function;--------------

// let hello;
// hello=()=>{
//     return "hello world";
// }
// document.getElementById("demo").innerHTML=hello();

// let hello = () => "hello world";
// document.getElementById("demo").innerHTML=hello();

// let hello;
// hello = (val) => "hai " + val;
// document.getElementById("demo").innerHTML= hello("universe");

// let hello;
// hello = (val) => "aravindh "+val;
// document.getElementById("demo").innerHTML = hello("akaran");

// let hello;
// hello = val => "aravindh "+val;
// document.getElementById("demo").innerHTML = hello("akaran");


//------LOCAL STORAGE-----------

//set item and get;
// localStorage.setItem("lastname","Aravindh");

// document.getElementById("demo").innerHTML = localStorage.getItem("lastname");

//Ex:3-------------------

// clickcounts();
// function clickcounts(){
//     if(localStorage.clickcounts){
//         localStorage.clickcounts = Number(localStorage.clickcounts)+1;
//     }
//     else{
//         localStorage.clickcounts = 1;
//     }
//     document.getElementById("demo").innerHTML = localStorage.clickcounts;
// }

//Ex:4----------------------

// clickcounts();

// function clickcounts(){
//     if(localStorage.clickcounts){
//         localStorage.clickcounts = Number(localStorage.clickcounts)+1;
//     }
//     else{
//         localStorage.clickcounts = 1;
//     }
//     document.getElementById("demo").innerHTML = localStorage.clickcounts;
// }

//Ex-5;-------------------------------

// sessionStorage.setItem("fname","Karthika");
// let personStorage = sessionStorage.getItem("fname");
// document.getElementById("demo").innerHTML = personStorage;

//Ex-5 Repeat;-----------------------------

// sessionStorage.setItem("lname","Akaran");
// let people = sessionStorage.getItem("lname");
// document.getElementById("demo").innerHTML = people;


//     let inputkey = document.getElementById("inputkey");
//     let inputvalue = document.getElementById("inputvalue");
//     let result = document.getElementById("result");
//     let button = document.getElementById("btninsert");

//     btninsert.onclick = function(){
// key = inputkey.value;
// value = inputvalue.value;

// if(key && value){
//     localStorage.setItem(key,value);
//     location.reload();
// }
//     }

//     for(i = 0; i < localStorage.length; i++){
//         let key = localStorage.key(i);
//         let value = localStorage.getItem(key);
//     }
//     document.getElementById("result") = 'inputkey = document.getElementById("inputkey"):inputvalue = document.getElementById("inputvalue")';

    function localstg(){
        let key = document.getElementById("inputkey").value;
        let value = document.getElementById("inputvalue").value;
        key = inputkey.value;
        value = inputvalue.value;

        if(key && value){
            localStorage.setItem(key,value);

        }

for(i=0; i< localStorage.length; i++){
    let key = localStorage.key(i);   
    let value = localStorage.getItem(key);  
}
document.getElementById("result").innerHTML =key+":"+value;
} 


