
function validateForm(){
  var firstName = document.forms["regForm"]["fname"].value;
  var lastName = document.forms["regForm"]["lname"].value;
var email = document.forms["regForm"]["email"].value;
var tel= document.forms["regForm"]["phone"].value;
var origin = document.forms["regForm"]["origin"].value;
  var age = document.forms["regForm"]["age"].value;
var gender= document.forms["regForm"]["gender"].value;


if (firstName.length<1) {
      document.getElementById('errorFirstName').innerHTML = " Please Enter Your first name *";
      errorFirstName.style.color = 'red';
  }
  if (lastName.length<1) {
      document.getElementById('errorLastName').innerHTML = " Please Enter Your last name *";
      errorLastName.style.color = 'red';
  }
  if (email.length<1) {
      document.getElementById('errorEmail').innerHTML = " Please Enter Your last name *";
      errorEmail.style.color = 'red';
  }
  if (tel.length<1) {
      document.getElementById('errorPhone').innerHTML = " Please Enter Your Phonenumber *";   
      errorPhone.style.color = 'red';   
  }
  if (age.length<1) {
      document.getElementById('errorAge').innerHTML = " Please Enter Your age *"; 
      errorAge.style.color = 'red';     
  }
  if (origin.length<1) {
      document.getElementById('errorOrigin').innerHTML = " Please select Your origin *";
      errorOrigin.style.color = 'red';
  }          
  if (gender.length<1) {
      document.getElementById('errorGender').innerHTML = " Please Select your gender *"; 
      errorGender.style.color = 'red';     
  }
  if(firstName.length<1 || lastName.length<1 || email.length<1 || tel.length<1 || origin.length<1 || age.length<1 || gender.length<1 ){
       return false;
  }            
}
console.log("almost there");
