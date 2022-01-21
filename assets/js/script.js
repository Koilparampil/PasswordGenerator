// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function actualPasswordS(numofPass){
  //Array with all possible characters and symbols
  CharsS=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", 
  "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
   "r", "s", "t", "u", "v", "w", "x", "y", "z",'1','2','3','4','5','6','7','8','9','0','!','@','#','$','%','&',
   '*','(',')','[',']',';',',','.','/','`','_','-','=','+','{','}','~','"','|']
   //empty string to throw password in temporarily
SymbolPassS=""
//For as many charactrers as requested, add a random character/symbol from the array above to the string 
for(var i=0; i<=numofPass; i++){
  SymbolPassS=SymbolPassS+CharsS[Math.floor(Math.random() * CharsS.length) ]
}
return SymbolPassS;
}

function actualPasswordNS(numofPass){
   //Array with all possible characters
  CharsNS=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", 
  "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
   "r", "s", "t", "u", "v", "w", "x", "y", "z",'1','2','3','4','5','6','7','8','9','0']
    //empty string to throw password in temporarily
SymbolPassNS=""
//For as many charactrers as requested, add a random character from the array above to the string
for(var i=0; i<=numofPass; i++){
  SymbolPassNS=SymbolPassNS+CharsNS[Math.floor(Math.random() * CharsNS.length) ]
}
return SymbolPassNS;
}

function generatePassword(){
  //Asking for length of the password
  numChar=window.prompt('How many Characters do you want your Password to be?');
  //converting to a Number instead of a string
  numChar=parseInt(numChar);
  //Checking if a valid number has been entered
  if (isNaN(numChar)){
    window.alert("You have not entered a Number")
    return
  }
  //Checking if the Number is too low
  if(numChar<8){
    window.alert("Thats not enough Characters :(")
    return
  }
  //Checking if the Number is too High
  if(numChar>128){
    window.alert("Thats too many Characters :(")
    return
  }
//Asking if the user wants symbols in their passwords
  SymbolC=window.confirm("Do you want Symbols in your Password?")
  if (SymbolC){
    //add code for password with Symbols
    console.log("They want Symbols")
    return actualPasswordS(numChar)
  }
  else{
    //Add code for passsword without symbols 
    console.log("They don't want Symbols")
    return actualPasswordNS(numChar)
  }
}




function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


///copy the password
function CopythePassword(){
  var passwordText = document.querySelector("#password");
  passwordText.select()
  passwordText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(passwordText.value)
  alert("Copied the text")
}