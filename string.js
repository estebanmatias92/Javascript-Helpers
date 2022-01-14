/*
  Converts ANY string to "spinal-case"
*/
function spinalCase(str) {
  str = str.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
  
  return str.replace(/\s+|_+/g, "-").toLowerCase()
}

/*
  Case-sensitive word replacer
*/
function sensitiveReplace(str, before, after) {
  let capitalChar = /^[A-Z]/;

  return str.replace(before, replace => {
      replace = after.split("");
      replace[0] = capitalChar.test(before) ? replace[0].toUpperCase() : replace[0].toLowerCase();      
      return replace.join("");
  });
}


/*
  Find the missing char in an ordered alphabet string, returnns the first consecutive missing value from alphabet
*/
function missingChar(str) {
  
  for (let i = 0; i < str.length; i++) {    
    let current = str.charCodeAt(i);
    let actualChar = str.charCodeAt(0) + i;
    if (current !== actualChar)
      return String.fromCharCode(actualChar);
  }
  
  return undefined;
}
