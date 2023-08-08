document.addEventListener("DOMContentLoaded", function(){
const getDiv = document.getElementById("buttonDiv");
const mybutton = getDiv.querySelector("button");

mybutton.addEventListener("click", function(event){
    event.stopPropagation();
});

getDiv.addEventListener("click", function(){
    alert("Hola! Soy el div");
});
});