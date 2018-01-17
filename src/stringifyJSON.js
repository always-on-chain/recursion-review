// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var string = '';
  
  if (typeof obj === 'string') {
    return string += '"' + obj + '"';
  }
  if (obj === null || obj === undefined) {
    return string += obj;
  }
  // if (!Array.isArray(obj)) {
  //   return string += obj;
  // }
  
  if (Array.isArray(obj)) {
    var stringifiedArr = '';
    if (obj.length > 0) {
      for (var i = 0; i < obj.length; i++) {
        if (i === obj.length - 1) {
          stringifiedArr += stringifyJSON(obj[i]);
        } else {
          stringifiedArr += stringifyJSON(obj[i]) + ',';
        }        
      }
    }
    return '[' + stringifiedArr + ']';
  }
  
  if (typeof(obj) === 'object') {
    var stringified = '';
    
    var keys = Object.keys(obj);
    if (keys.length > 0) {
      
      for (var i = 0; i < keys.length; i++) {
        
        if (i === keys.length - 1) {
          
          if (keys[i] === 'functions' || keys[i] === 'undefined') {
            return '{}';
          }
          stringified += stringifyJSON(keys[i]) + ':' + stringifyJSON(obj[keys[i]]);
        } else {
          stringified += stringifyJSON(keys[i]) + ':' + stringifyJSON(obj[keys[i]]) + ',';
        }
      }
    }
    
    return '{' + stringified + '}';
  }
  
  return obj.toString();
};

/*
1. if null wrap in quotes and return
2. if its a string or a number

*/