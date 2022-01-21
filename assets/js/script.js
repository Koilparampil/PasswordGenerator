// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(){
  //Asking for length of the password
  numChar=window.prompt('How many Characters do you want your Password to be?');
  //converting to a Number instead of a string
  numChar=parseInt(numChar);
  //Checking if a valid number has been entered
  console.log(typeof numChar);
  if (isNaN(numChar)){
    window.alert("You have not entered a Number")
    return
  }
//Asking if the user wants symbols in their passwords
  SymbolC=window.confirm("Do you want Symbols in your Password?")
  if (SymbolC){
    //add code for password with Symbols
    console.log("They want Symbols")
   
  }
  else{
    //Add code for passsword without symbols 
    console.log("They don't want Symbols")
  
  }
}




function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
