// Assignment Code
var generateBtn = document.querySelector("#generate");


function randomizer(arr){
    var randoIdx = Math.floor(Math.random() * arr.length);
    var randoEl = arr[randoIdx];
    return randoEl;
 }

function generatePassword(){
    var randos = [] 
    var selected = []
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
        randos = randos.concat(lowers);  
        selected.push(randomizer(lowers));
    }

    if (pUpper){
        randos = randos.concat(uppers);  
        selected.push(randomizer(uppers));
    }

    if (pNumber){
        randos = randos.concat(numbers);  
        selected.push(randomizer(numbers));
    }

    if (pSpecial){
        randos = randos.concat(specials);  
        selected.push(randomizer(specials));
    }

    for (var i = 0; i < pLength; i++) {    
        var randos = randomizer(randos);
        newpassword.push(randos);
    }

    for (var i = 0; i < selected.length; i++) {    
        newpassword[i] = selected[i];
    }
}
    return newpassword.join("")
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
//     // selected = []
//     // for (var i = 0; i <= pLength; i++) {    
//     // var selected = randos[Math.floor(Math.random() * pLength)];
//     // console.log(selected)

//     } 
//     return newpassword.join("")

// }