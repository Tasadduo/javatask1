var username=prompt("Enter Your Name: ");
var phoneNumber=+prompt("Enter Phone Number: ");
var email=prompt("Enter Your Email: ");
var password=prompt("Enter Your Password: ");
var ConfirmPassword=prompt("Confirm Password  Password: ");
if(username=="" ||phoneNumber=="" || email=="" || password=="" || ConfirmPassword=="" ){
    alert("Enter the value this cannot be empty");
}
else{
    if(password===ConfirmPassword){
        alert("Alert: You are successfully registered!");
    }
    else{
        alert("Error: Passwords do not match.");
    }
}
