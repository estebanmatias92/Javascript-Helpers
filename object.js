/*
  The function will receive 2 parameters, the first is the array with objects to search
  and the second is the object with the properties to find.
  
  It will first iterate the array of objects and filter based on if every key (and value) of the source
  is present in any object of the array.
  
  If there is any object that match the source, they will be returned has an array of objects.
  @param1: Array of objects
  @param2: Object
*/

function findObject(collection, source) {
  return collection.filter(object => 
      Object.keys(source)
            .every(key => key in object && source[key] === object[key]));
}
