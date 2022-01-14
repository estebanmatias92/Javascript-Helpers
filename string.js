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
