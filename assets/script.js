
// When character arrays were declared OUTSIDE of gen pass function the charBank would populate with certain arrays even if confirm returned false. 
//For instance if i chose no lower case, no upper case, yes numbers, yes specials - the character array would still populate with lowercase letters - why? 
//This stopped when I moved the arrays into the scope of the gen pass function

function generatePassword() {

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var spec = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']
var charBank = [];
var passwordArray = [];

  let passLength = prompt('Please enter a number between 8 and 128');

  if (passLength === null) {

    return passwordArray = 'Try again'
    
  }

  if (isNaN(passLength) || passLength == '' || passLength < 8 || passLength > 128) { //ADD CHECK FOR WHITEPSACE

    console.log(passLength)
    alert('I said enter a number between 8 and 128 stupid idiot')
    return generatePassword()
    

  } 
  
  var lowerCase = confirm('Lower Case?');

  console.log(lowerCase)

  var upperCase = confirm('Upper Case?');

  console.log(upperCase)

  var numNum = confirm('Numbers?');

  console.log(numNum)

  var specialChar = confirm('Special Characters?');

  console.log(specialChar)

  if (!lowerCase && !upperCase && !numNum && !specialChar) {

    alert('How am I supposed to do my job if you give me nothing to work with you fool?')
    return generatePassword()

  };
  
  if (lowerCase){

    charBank = charBank.concat(lower)

  };

  console.log(charBank)

  if (upperCase) {

    charBank = charBank.concat(upper)

  };

  console.log(charBank)

  if (numNum) {

    charBank = charBank.concat(num)

  };

  console.log(charBank)

  if (specialChar) {

    charBank = charBank.concat(spec)

  };

  console.log(charBank)
  console.log(passLength)

  for (let i = 0; i < passLength; i++) {

    let passValue = Math.floor(Math.random() * charBank.length);

    passwordArray.push(charBank[passValue]);
    console.log(passwordArray);

  }

  return passwordArray.join('');
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



