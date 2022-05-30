// Targets the button
var generateBtn = document.querySelector("#generate")

// Creates keys
var randomFunc = {
	charLower: getRandomLower,
	charUpper: getRandomUpper,
	charNum: getRandomNumber,
	charSymbol: getRandomSymbol
}

// Main function to generate password
function generatePassword(charLower, charUpper, charNum, charSymbol, length) {

  // Prompts to select criteria
  var charLength = prompt("Choose the length of characters from 8 to 128")

    // Keeps looping until user selects correct length
    while(charLength < 8 || charLength > 128 || charLength === "" || charLength === null){
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

   // Variable that's filtered out of not selected criteria
   var typesArr = [{charLower}, {charUpper}, {charSymbol},  {charNum}].filter(item => Object.values(item)[0])

   // If no criteria selected, displays message
   if(typesCount === 0){
     return 'You need to include at least one criteria. Try again.'
   }

   // Create a loop
   var generatedPassword = ''
   for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}
    
  
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

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // this is the main funct, it brings everything i just wrote into the result
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
	
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);