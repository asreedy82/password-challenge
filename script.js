// Assignment Code
var generateBtn = document.querySelector("#generate");
//funtion to generate the final password
function generatePassword () {
  // first prompt after clicking Generate Password button, 
  // asks for password length and ensures user enters a number between 8 and 128
  let passwordLength = Number(window.prompt("What length do you want your password? (Must be between 8 and 128 characters)"), "");
  if (passwordLength >= 8 && passwordLength <= 128){
    console.log(passwordLength); //logging password length
    lowerResponse = window.prompt("Do you want lowercase letters? Enter 'yes' or 'no'"); //window prompt to ask to include lowercase letters
    passwordLower = lowerResponse.toLowerCase(); //convert to lowercase to prevent capitalization issues
    console.log(passwordLower);
    upperResponse = window.prompt("Do you want uppercase letters? Enter 'yes' or 'no'"); //window prompt to ask to include uppercase letters
    passwordUpper = upperResponse.toLowerCase(); //convert to lowercase to prevent capitalization issues
    console.log(passwordUpper);
    numberResponse = window.prompt("Do you want to use numbers? Enter 'yes' or 'no'"); //window prompt to ask to include numbers
    passwordNumber = numberResponse.toLowerCase(); //convert to lowercase to prevent capitalization issues
    console.log(passwordNumber);
    charResponse = window.prompt("Do you want to use special characters? Enter 'yes' or 'no'"); //window prompt to ask to include special characters
    passwordChar = charResponse.toLowerCase(); //convert to lowercase to prevent capitalization issues
    console.log(passwordChar);
    //below puts responses in array and checks to ensure at least 1 'yes' before proceeding
    passwordResponses = [passwordLower, passwordUpper, passwordNumber, passwordChar];
    console.log(passwordResponses);
    if (passwordResponses.includes("yes")) {
      if (passwordLower == 'yes') {
        //if lowercase is selected, create an array of all lowercase letters
        var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      } else {
        lowerAlpha = [];
      }
      if (passwordUpper == 'yes') {
        //if uppercase is selected, create an array of all uppercase letters
        var upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      } else {
        upperAlpha = [];
      }
      if (passwordNumber == 'yes') {
        //if numbers are selected, create an array of all numbers 0-9
        var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      } else {
        numbers = [];
      }
      if (passwordChar == 'yes') {
        //if special characters are selected, create an array of all special characters. used \ to escape out the \ character
        var characters = [" ","!","”","#","$","%","&","’","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
      } else {
        characters = [];
      }
      //create an array concatenating all selected arrays from above
      var totalCombinedChar = lowerAlpha.concat(upperAlpha, numbers, characters);
      console.log(totalCombinedChar);
      console.log(totalCombinedChar.length);
      var finalPassword = "";
      //for loop to iterate as many times as the chose password length and chooses a character from the combined array based on a random number
      for (i = 0; i < passwordLength; i ++) {
        function getRandomNumber(max) {
          return Math.floor(Math.random() * (max))
          }
        var randomNumber = getRandomNumber(totalCombinedChar.length);
        console.log(totalCombinedChar[randomNumber]);
        finalPassword = finalPassword + totalCombinedChar[randomNumber]; //builds the password in a single string through each iteration
      }
      console.log(finalPassword);
      return finalPassword;
    } else {
      //if there isn't at least one 'yes' from the character prompts this message shows and the user has to start again
      window.alert("Password must include at least one of lowercase letters, uppercase letters, numbers, or special characters. Please start over.");
    }
  }
  else {
    //if the user enters something other than a number between 8 and 128 or hits 'cancel', this prompt appears and they have to start over
    window.alert("Please enter a number between 8 and 128.");
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
