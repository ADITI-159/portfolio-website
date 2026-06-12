console.log("Portfolio Website Loaded Successfully!");

const form = document.querySelector("form");

if(form){

form.addEventListener("submit", function(event){

event.preventDefault();

alert("Message Sent Successfully!");

});

}