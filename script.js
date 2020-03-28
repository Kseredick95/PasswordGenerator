// Assignment Code

var generateBtn = document.querySelector("#generate");
// var numChar = document.querySelector("#numChar");
// var specialChar = document.querySelector("#specialChar").checked;
// var capLetters = document.querySelector("#capLetters").checked;


function writePassword() {
  //debugger;

  
  var password = generatePassword(numChar, capLetters, specialChar);


    var passwordText = document.querySelector("#password");

    function generatePassword(numChar, capLetters, specialChar){

      var numChar = document.querySelector("#numChar").value;
      var specialChar = document.querySelector("#specialChar").checked;
      var capLetters = document.querySelector("#capLetters").checked;

      //Alert of invalid numbers
      if (numChar < 8 || numChar > 128){
        window.alert("Invalid number. Must enter between 8 and 128.")
      }


      //Capital and special characters
      if (capLetters == true && specialChar == true){
        var charSet = "abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
        var retVal = ""
        
        for (var i = 0, l = charSet.length; i < numChar; i++){
          retVal += charSet.charAt(Math.floor(Math.random()*l));

        }

      }
      //Only special characters
      else if (capLetters == true && specialChar == false){
        var charSet = "abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        var retVal = ""
        
        for (var i = 0, l = charSet.length; i < numChar; i++){
          retVal += charSet.charAt(Math.floor(Math.random()*l));

        }

      }
      //Only capital letters
      else if (capLetters == false && specialChar == true){
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
generateBtn.addEventListener("click", writePassword);