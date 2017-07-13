export default alertMessage

/**
 * This method will show an alert message box.
 *
 * @param {String} txt - alert message
 */

function alertMessage() {
    var txt;
    if (confirm("Click a button!") == true) {
        txt = "You clicked ok!";
    } else {
        txt = "You clicked Cancel!";
    }
	
	return true;
}