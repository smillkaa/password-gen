// Targets the button
var generateBtn = document.querySelector("#generate");

// Main function to generate password
function generatePassword(){

  // Prompts to select criteria
  var charLength = function(){
    var charLengthValue = prompt("Choose the length of characters from 8 to 128")
    // While loop for user to select correct length
    while(charLengthValue < 8 || charLengthValue > 128 || charLengthValue === "" || charLengthValue === null){
    alert("You need to choose a number between 8 and 128")
    var charLengthValue = prompt("Choose the length of characters from 8 to 128")
    }
  }
    // When selected correctly, other prompts
    var charSymbol = confirm("Include symbols?")
    var charLower = confirm("Include lowercase letters?")
    var charUpper = confirm("Include uppercase letters?")
    var charNum = confirm("Include numbers?")

    // Functions to generate the password
    function getRandomLower(){
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    }

    function getRandomUpper(){
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    }

    function getRandomNumber(){
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
    }
    function getRandomSymbol(){
      var symbols = '!@#$%^&*(){}[]=<>/,.'

      return symbols [Math.floor(Math.random() * symbols.length)]
    }
 
    return (charLength + charLower + charUpper + charSymbol + charNum)

}

    // 2. validate the input if at least one was selected
    // 3. generate the password

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);