function validateForm(){
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const gender = document.getElementById('gender');

    let error= false;
       
    if(firstName.value == null || firstName.length.value === 0){
      document.getElementById('firstName_error').innerHTML = "First name is required";
      error = true;
    } else{
        document.getElementById('firstName_error').innerHtml ='';
    }
   
    if(lastName.value == null || lastName.length.value === 0){
        document.getElementById('lastName_error').innerHTML = "Last name is required";
        error = true;
    }else{
        document.getElementById('lastName_error').innerHTML = ''
    }

    if(email.value==null || email.length.value === 0) {
        document.getElementById('email_error').innerHTML = "Email is required";
        error = true;
    } else{
        document.getElementById('email_error').innerHTML = '';
    }

    if (password.value == null || password.length.value === 0){
        document.getElementById(password_error).innerHTML='password is required';
        error = true;

    }else{
        document.getElementById('password_error').innerHTML ='';
    }

    if (gender.value == null || gender.value.length === 0) {
    document.getElementById("gender_error").innerHTML = "Gender is required.";
    error = true;
    } else {
    document.getElementById("gender_error").innerHTML = "";
    }

    if (error === true) {
    return;
  }

}

function reset(){
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let gender = document.getElementById('gender');
    
    firstName.value='';
    lastName.value='';
    email.value='';
    password.value='';
    gender.value='';

    success.style.display = "none";
  error.style.display = "none";
}
