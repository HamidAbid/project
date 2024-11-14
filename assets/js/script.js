/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */
'use strict';
{  const header = document.querySelector("nav");
 

  window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
  header.classList.add("active");

  } else {  
  header.classList.remove("active");
  }
  })}



/* form validation*/ 
const form = document.getElementById('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  var name = document.getElementById('name');
  var business = document.getElementById('business');
  var email = document.getElementById('email');
  
  var number = document.getElementById('number');
  var message = document.getElementById('message');

 var nameError= document.getElementById('nameError'); 
 var businessError= document.getElementById('businessError');
 var emailError= document.getElementById('emailError');
 var numberError = document.getElementById('numberError');

 var messageError= document.getElementById('messageError');

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  
if (name.value == '' || !regex.test(email.value) || email.value == '' ||  business.value == '' ||  number.value == '' || message.value == '') {
  
  
    (name.value == '')? nameError.innerText='This Field is Required':nameError.innerText='';
    (business.value == '')? businessError.innerText='This Field is Required':businessError.innerText=''; 
    (number.value == '')? numberError.innerText='This Field is Required':numberError.innerText='';
    (message.value == '')? messageError.innerText='This Field is Required':messageError.innerText='';
    if (email.value == '') {
      emailError.innerText='This Field is Required'
    } 
    else if (!regex.test(email.value)) {
      emailError.innerText='Enter valid Email ID'
    }  
    else{
      emailError.innerText=''
    }
   
}
else{
 
 console.log('hello');
}

   

})


// google translate function

   

function loadGoogleTranslate() {
   new google.translate.TranslateElement("google-element");
}