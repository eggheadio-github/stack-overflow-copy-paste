export default ageCalculator

/**
* Original Source: https://stackoverflow.com/a/7091965
*
* This method will calculate your today's age from
* your date of birth
*
* @param {String} dateString - The birthdate String in the form (dd/mm/yyyy)
* @return {String} - today's age String
*/

//is valid date format
function ageCalculator (dateString) {
	if (!isDate(dateString))
		return "Not a valid date";
	var birthDate = parseDate(dateString);
	var today = new Date();
  var age = today.getFullYear() - birthDate.getFullYear();
  var age_months =  today.getMonth() - birthDate.getMonth();
  var age_days = today.getDate() - birthDate.getDate();
  if (age_months < 0 || (age_months == 0 && age_days < 0)) {
      age = parseInt(age) - 1;
  }
  return age;
}


//convert the date string in the format of dd/mm/yyyy into a JS date object
function parseDate(dateString) {
  var dateParts = dateString.split("/");
  return new Date(dateParts[2], (dateParts[1] - 1), dateParts[0]);
}

function isDate(txtDate) {
  var currVal = txtDate;
  if (currVal == '')
    return true;

  //Declare Regex
  var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
  var dtArray = currVal.match(rxDatePattern); // is format OK?

  if (dtArray == null)
    return false;

  //Checks for dd/mm/yyyy format.
  var dtDay = dtArray[1];
  var dtMonth = dtArray[3];
  var dtYear = dtArray[5];

  if (dtMonth < 1 || dtMonth > 12)
    return false;
  else if (dtDay < 1 || dtDay > 31)
    return false;
  else if ((dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31)
    return false;
  else if (dtMonth == 2) {
    var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
    if (dtDay > 29 || (dtDay == 29 && !isleap))
      return false;
  }

  return true;
}
