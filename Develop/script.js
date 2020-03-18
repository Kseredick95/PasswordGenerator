// Assignment Code

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var numChar = window.prompt("How many characters would you like in your password? Must enter between 8 and 128.")

  while (numChar < 8 || numChar > 128){
    numChar = window.prompt("Invalid number. How many characters would you like in your password? Must enter between 8 and 128.")
  }

  var capLetter = window.confirm("Would you like to include capital letters?")

  var specialChar = window.confirm("Would you like to include special characters?")
  
  var password = generatePassword(numChar, capLetter, specialChar);


    var passwordText = document.querySelector("#password");

    function generatePassword(numChar, capLetter, specialChar){
      //Capital and special characters
      if (capLetter == true && specialChar == true){
        var charSet = "abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
        var retVal = ""
        
        for (var i = 0, l = charSet.length; i < numChar; i++){
          retVal += charSet.charAt(Math.floor(Math.random()*l));

        }

      }
      //Only special characters
      else if (capLetter == true && specialChar == false){
        var charSet = "abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        var retVal = ""
        
        for (var i = 0, l = charSet.length; i < numChar; i++){
          retVal += charSet.charAt(Math.floor(Math.random()*l));

        }

      }
      //Only capital letters
      else if (capLetter == false && specialChar == true){
        var charSet = "abcdefghijklmnopqurstuvwxyz0123456789!@#$%^&*()"
        var retVal = ""
        
        for (var i = 0, l = charSet.length; i < numChar; i++){
          retVal += charSet.charAt(Math.floor(Math.random()*l));

        }

      }
      //Only lowercase and numbers
      else{
        var charSet = "abcdefghijklmnopqurstuvwxyz0123456789"
        var retVal = ""
        
        for (var i = 0, l = charSet.length; i < numChar; i++){
          retVal += charSet.charAt(Math.floor(Math.random()*l));

        }

      }

      return retVal;
    }
    
    passwordText.value = password;

  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());