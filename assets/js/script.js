// Select the generate password button
var generateBtn = document.querySelector("#generate")

// Create keys, set their value to the functions that generate random characters
var randomCharacters = {
	charLower: getRandomLower, 
	charUpper: getRandomUpper,
	charNum: getRandomNumber,
	charSymbol: getRandomSymbol
}

// Functions that generate random characters
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

// Function to create password
function generatePassword(charLower, charUpper, charNum, charSymbol, length) {

  // Prompts to select criteria
  var charLength = prompt("Choose the length of characters from 8 to 128")

  // Keeps looping prompt until user selects correct length
  while(charLength < 8 || charLength > 128 || charLength === ""){
    alert("You need to choose a number between 8 and 128")
    var charLength = prompt("Choose the length of characters from 8 to 128")
  }

  // When selected correctly, other prompts
  var charSymbol = confirm("Include symbols?")
  var charLower = confirm("Include lowercase letters?")
  var charUpper = confirm("Include uppercase letters?")
  var charNum = confirm("Include numbers?")
    

  // Variable to determine how many types selected
  var typesCount =  charLower + charUpper + charSymbol + charNum 
  console.log("typesCount:", typesCount)

  // Variable that's filtered out of not selected criteria
  var typesArr = [{charLower}, {charUpper}, {charSymbol},  {charNum}].filter(item => Object.values(item)[0])
  console.log("typesArr: ", typesArr)

  // If no criteria selected, displays message
  if(typesCount === 0){
    alert('You need to include at least one criteria. Try again.')
  }

  // Loop the random characters over the amount of characters user selected
  var generatedPassword = ''
  for(let i = 0; i < charLength; i+=typesCount) {
    typesArr.forEach(type => {
      const finalPassword = generatedPassword.slice(0, length)
      var funcName = Object.keys(type)[0];
      generatedPassword += randomCharacters[funcName]();
    });
  }
   return generatedPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)