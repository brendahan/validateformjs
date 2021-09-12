//Defining function
function formValidation() {
    var firstName = document.regform.fname;
    var lastName = document.regform.lname;
    var email = document.regform.email;
    var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+&/;
    var email = document.regform.email;
    var tel = document.regform.tele;
    var origin = document.regform.origin;
    var age = document.regform.age;
    var sex =document.regform.gender;
    if (fname_validation(firstName, 3, 10)) {
    }
    if (lname_validation(lastName, 3, 10)) {
    }
    if (! filter.test(email.value)){
    }
     if (allnumeric(tel)){
    }
    if (countryselect(origin)){
    }
    if(numeric(age)){
    }
    if (genderselect(sex)){
    }
    return false;
  }
  console.log("almost getting it")
  

  function fname_validation(firstName, mx, my) {
    var firstName_len = firstName.value.length;
    if (firstName_len == 0 || firstName_len >= my || firstName_len < mx) {
      alert("Firstname has error" + " " + mx + " to " + my );
      firstName.style.border = '3px solid red';
      firstName.focus();
    }
    return true;
}

  function lname_validation(lastName, mx, my) {
    var lastName_len = lastName.value.length;
    if (lastName_len == 0 || lastName_len >= my || lastName_len < mx) {
      alert("Lastname has error" + " " + mx + " to " + my);
      lastName.style.border = '3px solid red';
      lastName.focus();
    }
    return true;
}

function email_validation(email){
  if (! filter.test(email.value)){
      alert("Please provide a valid email address");
      email.focus();
      return false;
    }
}

  function allnumeric(tel) {
    var numbers = /^[0-9]+$/;
    if (tel.value.match(numbers)) {
      return true;
    } else {
      alert("Please enter a number");
      return false;
    }
  }
  function numeric(age) {
    var numbers = /^[0-9]+$/;
    if (age.value.match(numbers)) {
      return true;
    } else {
      alert("Please enter a number");
      return false;
    }
  }

  function origin_validation(origin){
      if (formValidation.origin.value == 'Default'){
          alert('Please make a selection');
          formValidation.origin.focus();
          return false;
      } else {
        return true;
      }
  } 
