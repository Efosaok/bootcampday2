var file = {}

file.reverseString =  function(str) {
    if (str == ''){
        return null
    }
 var re = /[^A-Za-z0-9]/g;
 str = str.toLowerCase().replace(re, '');
 var len = str.length;
 for (var i = 0; i < len/2; i++) {
   if (str[i] == str[len - 1 - i]) {
       return true;
   }else{
     var newString = "";
     for (var x = str.length-1;x >= 0;x--){
       newString += str[x];
     }
     return newString
   }
 }
}

module.exports = file