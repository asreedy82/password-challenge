// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword () {
  passwordLength = window.prompt("What length do you want your password?");
  if (passwordLength >= 8 && passwordLength <= 128){
    console.log(passwordLength);
    lowerResponse = window.prompt("Do you want lowercase letters?");
    passwordLower = lowerResponse.toLowerCase();
    console.log(passwordLower);
    upperResponse = window.prompt("Do you want uppercase letters?");
    passwordUpper = upperResponse.toLowerCase();
    console.log(passwordUpper);
    numberResponse = window.prompt("Do you want to use numbers?");
    passwordNumber = numberResponse.toLowerCase();
    console.log(passwordNumber);
    charResponse = window.prompt("Do you want to use special characters?");
    passwordChar = charResponse.toLowerCase();
    console.log(passwordChar);
    passwordResponses = [passwordLower, passwordUpper, passwordNumber, passwordChar];
    console.log(passwordResponses);
    if (passwordResponses.includes("yes")) {
      if (passwordLower == 'yes') {
        var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      } else {
        lowerAlpha = [];
      }
      if (passwordUpper == 'yes') {
        var upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      } else {
        upperAlpha = [];
      }
      if (passwordNumber == 'yes') {
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      } else {
        numbers = [];
      }
      if (passwordChar == 'yes') {
        var characters = [" ","!","”","#","$","%","&","’","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
      } else {
        characters = [];
      }
      var totalCombinedChar = lowerAlpha.concat(upperAlpha, numbers, characters);
      console.log(totalCombinedChar);
      console.log(totalCombinedChar.length);
      var finalPassword = "";
      for (i = 0; i < passwordLength; i ++) {
        function getRandomNumber(max) {
          return Math.floor(Math.random() * (max))
          }
        var randomNumber = getRandomNumber(totalCombinedChar.length);
        console.log(totalCombinedChar[randomNumber]);
        finalPassword = finalPassword + totalCombinedChar[randomNumber];
      }
      console.log(finalPassword);
      return finalPassword;
    } else {
      window.alert("Password must include at least one of lowercase letters, uppercase letters, numbers, or special characters. Please start over.");
    }
  }
  else {
    window.alert("Passwords must be between 8 and 128 characters.");
  }
} 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
