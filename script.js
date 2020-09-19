// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(){
    var pLength = prompt("What is the desired length of the password?")


    if (pLength < 8 || pLength > 128){ 
        alert("Must choose between 8 and 128 characters."); 
    }

    var pLower = confirm("Would you like lowercase characters included in the password")
    var pUpper = confirm("Would you like uppercase characters included in the password?")
    var pNumber = confirm("Would you like numeric characters included in the password?")
    var pSpecial = confirm("Would you like special characters included in the password?")

    if (!pLower && !pUpper && !pNumber && !pSpecial){
        alert("Must choose atleast one character type.");
    }

    var password = generatePassword();


    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword(){
}



