// Assignment Code
var generateBtn = document.querySelector("#generate");
//funtion to generate the final password
function generatePassword () {
  var passwordLength = '';
  var totalCombinedChar = '';
  var finalPassword = '';

  // function to get password length using window.prompt, using an if statement later to validate a proper entry 
  function getPasswordLength () {
    passwordLength = window.prompt("What length do you want your password? (Must be between 8 and 128 characters)");
    console.log(passwordLength); //logging password length
    return passwordLength;
  }
  
  // function to build an array of all possible characters to use in the password based on user confirmations
  function getCombinedChar () {
    let passwordLower = window.confirm("Do you want to include lowercase letters?");
    console.log(passwordLower);
    let passwordUpper = window.confirm("Do you want to include uppercase letters?");
    console.log(passwordUpper);
    let passwordNumber = window.confirm("Do you want to include numbers?");
    console.log(passwordNumber);
    let passwordChar = window.confirm("Do you want to include special characters?");
    console.log(passwordChar);
    if (passwordLower == true) {
      //if lowercase is confirmed, create an array of all lowercase letters
      var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    } else {
      lowerAlpha = [];
    }
    if (passwordUpper == true) {
      //if uppercase is confirmed, create an array of all uppercase letters
      var upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    } else {
      upperAlpha = [];
    }
    if (passwordNumber == true) {
      //if numbers are confirmed, create an array of all numbers 0-9
      var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    } else {
      numbers = [];
    }
    if (passwordChar == true) {
      //if special characters are confirmed, create an array of all special characters. used \ to escape out the \ character
      var characters = [" ","!","”","#","$","%","&","’","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
    } else {
      characters = [];
    }
    let combinedResponses = [passwordLower, passwordUpper, passwordNumber, passwordChar];
    //create an array concatenating all selected arrays from above
    totalCombinedChar = lowerAlpha.concat(upperAlpha, numbers, characters);
    console.log(totalCombinedChar);
    console.log(totalCombinedChar.length);
    if (!combinedResponses.includes(true)) {
      window.alert("You must choose at least one character type. Please start over.");
    }
    return totalCombinedChar;
  }

  // function to build the password using a for loop and random number generator
  function getFinalPassword () {
    for (i = 0; i < passwordLength; i ++) {
      function getRandomNumber(max) {
        return Math.floor(Math.random() * (max))
        }
      var randomNumber = getRandomNumber(totalCombinedChar.length);
      console.log(totalCombinedChar[randomNumber]);
      // building the password in a single string through each iteration
      finalPassword = finalPassword + totalCombinedChar[randomNumber]; 
    }
    console.log(finalPassword);
    return finalPassword;
  }
  
  // declaring functions and using if statement to ensure a proper number is entered between 8 and 128
    getPasswordLength();
    if (passwordLength >= 8 && passwordLength <= 128) {
      getCombinedChar();
      getFinalPassword();
      console.log(finalPassword.length)
    } else {
      window.alert("Please enter a number between 8 and 128");
    }
  

  return finalPassword;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
