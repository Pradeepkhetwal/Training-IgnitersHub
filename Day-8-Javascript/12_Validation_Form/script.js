const handleForm = () => {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("mobile").value;
  var password = document.getElementById("password").value;
  var confirm = document.getElementById("confirmpass").value

  if (name == "" || email == "" || number == "" || password == "") {
    alert("All fields are mandatory");
    return false;
  } else if (number.length > 10 || number.length < 10) {
    alert("Please enter valid 10 digit number");
    return false;
  }
  else if(!email.includes("@")){
    alert("email must have @");
    return false;
  }
  else if (isNaN(number)) {
    alert("Only numbers are allowed")
    return false;
  }
  else if(password != confirm){
    alert("Password does not match");
    return false;
    }
  else {
    document.getElementById(myform).reset();
    return true;
  }




}