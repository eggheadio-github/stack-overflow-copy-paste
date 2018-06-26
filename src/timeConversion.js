export default timeConversions

/**
 *
 * This method will convert time in 12 hours format to 24 hours format
 *
 * @param {String} time - time in 12 hours format example 01:12:45AM or 06:48:56PM
 * @return {String} - converted time in 24 hours example 01:12:45 or 18:48:56
 */

function timeConversions(time) {
   
  let convertedTime= time.substr(2, 6)
  if(time.charAt(8)==='A'){
  if(time.charAt(0)==='1' && time.charAt(1)==='2'){
	convertedTime= '00'+convertedTime
  }
	else
	convertedTime= time.substr(0, 2)+convertedTime
  }
  else{
	if(time.charAt(0)==='1' && time.charAt(1)==='2'){
	convertedTime= '12'+convertedTime
	}
	else{     
	let a = time.substr(0, 2)
	let b = Number(a)
	let c = (b+12)+''
	convertedTime= c+convertedTime        
	}
  } 
  return convertedTime
  }