// Assignment Code
var generateBtn = document.querySelector("#generate");
var UpperCaseLetters=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U","V", "W", "X", "Y", "Z"]
var LowerCaseLetters=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z"]
var Numbers=['1','2','3','4','5','6','7','8','9','0']
var Symbols=['!','@','#','$','%','&','*','(',')','[',']',';',',','.','/','`','_','-','=','+','{','}','~','"','|']

function actualPassword(numofPass,pool){
//empty string to throw password in temporarily
SymbolPassNS=""
//For as many charactrers as requested, add a random character from the array above to the string
for(var i=0; i<=numofPass; i++){
  SymbolPassNS=SymbolPassNS+pool[Math.floor(Math.random() * pool.length) ]
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
    window.alert("Thats not enough Characters :( \nChoose a length between 8 and 128 characters")
    return
  }
  //Checking if the Number is too High
  if(numChar>128){
    window.alert("Thats too many Characters :( \nChoose a length between 8 and 128 characters")
    return
  }
//this is the array that will contain the characters the user wants in their password
poolofChars=[]

LowerC=window.confirm("Do you want lowercase Letters in your Password?");
//checking if the user wants this character type
if (LowerC){
  //if yes then adding the chracter type too the pool of characters that will be used to make the password
  poolofChars=poolofChars.concat(LowerCaseLetters);
  //console.log(poolofChars);
}
UpperC=window.confirm("Do you want uppercase Letters in your Password?");
if(UpperC){
  //if yes then adding the chracter type too the pool of characters that will be used to make the password
  poolofChars=poolofChars.concat(UpperCaseLetters);
  //console.log(poolofChars);
}
NumC=window.confirm("Do you want numbers in your Password?");
if (NumC){
  //if yes then adding the chracter type too the pool of characters that will be used to make the password
  poolofChars=poolofChars.concat(Numbers);
  //console.log(poolofChars);
}
SymbolC=window.confirm("Do you want Symbols in your Password?");
if (SymbolC){
  //if yes then adding the chracter type too the pool of characters that will be used to make the password
  poolofChars=poolofChars.concat(Symbols);
  //console.log(poolofChars);
}
//Validation... if they pick nothing for the character types. this fires and returns an undefined
if(!LowerC&&!UpperC&&!NumC&&!SymbolC){
  window.alert("You cannot have a pasword without contents");
  return;
}
 return actualPassword(numChar,poolofChars);

}

function writePassword() {
  var password = generatePassword();
  //made passwordText the #password object in the html, in this specific case its the textarea
  var passwordText = document.querySelector("#password");
  //console.log(password);
  //Validation, if something happened along the way, the password variable would be undefined, so this catches that
  if(password===undefined){
    passwordText.value="A condition exists that prevents me from making a password for you. Please correct the condition and try again."
  //if nothing bad happens along the way then the text on the page changes to the requested password
  }else{
  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


///copy the password
function CopythePassword(){
  var passwordText = document.querySelector("#password");
  //select the text
  passwordText.select()
  //select the text but on phones
  passwordText.setSelectionRange(0, 99999);
  //takes the selected text and writes it to the computer clipboard
  navigator.clipboard.writeText(passwordText.value)
  //alert 
  window.alert("Copied the text")
}