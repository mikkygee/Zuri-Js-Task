function convertFahrToCelsius(F) {

    var C;
  
    if (Array.isArray(F)) {

      return "F is not a valid number but a/an array"

    } else if (typeof F === 'object') {

       return "'F' is not a valid number but a/an object"

    } else {

    C = (F - 32) * 5/9;

    return C.toFixed(4);
    
    }
}
console.log(convertFahrToCelsius('0'))