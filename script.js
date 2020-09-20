// Assignment Code
var generateBtn = document.querySelector("#generate");


function randomizer(arr){
    var randoIdx = Math.floor(Math.random() * arr.length);
    var randoEl = arr[randoIdx];
    return randoEl;
 }

function generatePassword(){
    var select = []
    var newChars = []
    var newpassword = []

    var pLength = prompt("What is the desired length of the password?")

    if (pLength < 8 || pLength > 128){ 
        alert("Must choose between 8 and 128 characters."); 
    }

    else {

    var pLower = confirm("Would you like lowercase characters included in the password")
    var pUpper = confirm("Would you like uppercase characters included in the password?")
    var pNumber = confirm("Would you like numeric characters included in the password?")
    var pSpecial = confirm("Would you like special characters included in the password?")
    
    
    lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    specials = ["!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];

    if (!pLower && !pUpper && !pNumber && !pSpecial){
        alert("Must choose atleast one character type.");
    }

    if (pLower){  
        select.push(lowers.join(""));
    }

    if (pUpper){ 
        select.push(uppers.join(""));
    }

    if (pNumber){  
        select.push(numbers.join(""));
    }

    if (pSpecial){ 
        select.push(specials.join(""));
    }

    for (var i = 0; i < select.length; i++) {  
        newChars.push(randomizer(select));

    }
        
    for (var i = 0; i < pLength; i++) {    
        newpassword[i] = newChars[i];
    }
}

    return newpassword
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword(){

    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}










// // Assignment Code
// var generateBtn = document.querySelector("#generate");



// function randomizer(){
//     var randoIdx = Math.floor(Math.random() * arr.length);
//     var randoEl = arr[randoIdx];
//     console.log(randoEl)
//  }


// function generatePassword(){
//     var selected = []
//     var newChars = []
//     var newPword = []
//     // var newpassword = []

//     var pLength = prompt("What is the desired length of the password?")

//     if (pLength < 8 || pLength > 128){ 
//         alert("Must choose between 8 and 128 characters."); 
//     }

//     else {

//     var pLower = confirm("Would you like lowercase characters included in the password")
//     var pUpper = confirm("Would you like uppercase characters included in the password?")
//     var pNumber = confirm("Would you like numeric characters included in the password?")
//     var pSpecial = confirm("Would you like special characters included in the password?")
    
    
//     lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//     uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//     numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//     specials = ["!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];

//     if (!pLower && !pUpper && !pNumber && !pSpecial){
//         alert("Must choose atleast one character type.");
//     }

//     if (pLower){
//         selected.push(...lowers);
//     }

//     if (pUpper){ 
//         selected.push(...uppers);
//     }

//     if (pNumber){
//         selected.push(...numbers);
//     }

//     if (pSpecial){ 
//         selected.push(...specials);
//     }

// }
//     for (var i = 0; i < 79; i++){
//         var selected = randomizer(selected);
//     }
    
//     for (var i = 0; i < pLength; i++){
//         newChars.push(selected);
//     }

//     for (var i = 0; i < pLength; i++){
//         newPword.push(newChars);
//         console.log(newPword);
//     }

//     // newPword.push(newchars);

//     // newpword[i] = selected[i]
// }



//     // for (var i = 0; i < pLength; i++) {    
//     //     var randos = randomizer(randos);
//     //     newpassword.push(randos);
//     // }

//     // for (var i = 0; i < selected.length; i++) {    
//     //     newpassword[i] = selected[i];
//     // }

//     // return newpassword.join("")



// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // Write password to the #password input
// function writePassword(){

//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");
//     passwordText.value = password;
// }
















// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword(){

//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");
//     passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// function generatePassword(){
//     var randos = [] 
//     var selected = []
//     var newpassword = []

//     var pLength = prompt("What is the desired length of the password?")

//     if (pLength < 8 || pLength > 128){ 
//         alert("Must choose between 8 and 128 characters."); 
//     }

//     else {

//     var pLower = confirm("Would you like lowercase characters included in the password")
//     var pUpper = confirm("Would you like uppercase characters included in the password?")
//     var pNumber = confirm("Would you like numeric characters included in the password?")
//     var pSpecial = confirm("Would you like special characters included in the password?")
    
    
//     lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//     uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//     numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//     specials = ["!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];

//     if (!pLower && !pUpper && !pNumber && !pSpecial){
//         alert("Must choose atleast one character type.");
//     }

//     if (pLower){
//         for (var i = 0; i <= pLength; i++) {  
//         randos.push(...lowers)
//         }
//     }

//     if (pUpper){
//         for (var i = 0; i <= pLength; i++) {  
//         randos.push(...uppers)
//         }
//     }

//     if (pNumber){
//         for (var i = 0; i <= pLength; i++) {  
//         randos.push(...numbers)
//         }
//     }

//     if (pSpecial){
//         for (var i = 0; i <= pLength; i++) {  
//         randos.push(...specials);
//         }
//     }

// }
//     return newpassword.join("")