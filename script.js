// Assignment code here

// presents length prompt
var length = function() {
  var promptLength = window.prompt('How many characters long will your password be? Enter a value between 8 and 128.');
  if (promptLength < 8 || promptlength > 128) {
    window.prompt('Please enter a value between 8 and 128.');
  }
}

length();


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
