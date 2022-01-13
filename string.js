/*
  Converts ANY string to "spinal-case"
*/

function spinalCase(str) {
  str = str.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
  
  return str.replace(/\s+|_+/g, "-").toLowerCase()
}
