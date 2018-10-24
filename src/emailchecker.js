export default checker

/**
 * This method checks whether the given string is valid email ID or not
 * @param {String} val - imput email id
 * @return {Boolean} - return true if the input string is valid email ID otherwise false
 */
 function checker(val){
     var reg=/^([A-Za-z0-9_\.\-]{1,})\@([A-Za-z0-9]{1,})\.([A-Za-z]{2,4})$/;
     if (reg.test(val)==false){
       return false
     }
     else{
       return true
     }
   }
