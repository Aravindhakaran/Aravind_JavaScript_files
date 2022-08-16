

//---------AJAX EX:

// function myfunction(){
//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function(){
//         document.getElementById("demo").innerHTML = this.responseText;
//     }
//     xhttp.open("GET","ara.txt");
//     xhttp.send();
// }

//------------------------------------------

// function myfunction(){
//    const xhttp = new XMLHttpRequest();
//     xhttp.onload = function(){
//         document.getElementById("demo").innerHTML = this.responseText;
//     }
//     xhttp.open("GET","ara.txt");
//     xhttp.send();
// }
//----------------------------------------------
// function myfunction(){
//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function(){
//         document.getElementById("demo").innerHTML = this.responseText;
//     }
//     xhttp.open("GET","ara.txt");
//     xhttp.send();
// }
//-----------------------------------------------

// function myfunction(){
//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function(){
//         document.getElementById("demo").innerHTML = this.responseText;
//     }
//     xhttp.open("GET","ara.txt");
//     xhttp.send();
// }

//-------------------------------------------

function myfunction(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            document.getElementById("demo").innerHTML = this.responseText;
        }
    }
    xhttp.open("GET","ara.txt");
    xhttp.send();
}

// function loadDoc() {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         document.getElementById("demo").innerHTML =
//         this.responseText;
//       }
//     };
//     xhttp.open("GET", "ajax_info.txt");
//     xhttp.send();
//   }