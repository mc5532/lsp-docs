/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 *
 * Author: Sujatha Chintalapati.
 */

// If the length of the element's string is 0 then display helper message
function notEmpty(elem, helperMsg){
	if(elem.value.length == 0){
		alert(helperMsg);
		elem.focus(); // set the focus to this input
		return false;
	}
	return true;
}
// If the element's string matches the regular expression it is all letters
function isAlphabet(elem, helperMsg){
	var alphaExp = /^[a-zA-Z]+$/;
	if(elem.value.match(alphaExp)){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}
function emailValidator(elem, helperMsg){
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if(elem.value.match(emailExp)){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}

function checkPhoneNumber(elem, helperMsg) {
 if(elem.value.search(/\d{3}\-\d{3}\-\d{4}/)==-1)
   {
      alert(helperMsg);
      elem.focus();
      return false;
   }
 return true;
}

function isNumeric(elem, helperMsg){
	var numericExpression = /^[0-9]+$/;
	if(elem.value.match(numericExpression)){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}

function lengthRestriction(elem, min, max){
	var uInput = elem.value;
	if(uInput.length >= min && uInput.length <= max){
		return true;
	}else{
		alert("Please enter between " +min+ " and " +max+ " characters");
		elem.focus();
		return false;
	}
}

function madeSelection(elem, helperMsg){
	if(elem.value == "Please Choose"){
		alert(helperMsg);
		elem.focus();
		return false;
	}else{
		return true;
	}
}

// the event handler function for registration form validation
function checkRegistrationFormInput () {
    // All fields should be filled and all names must be in letters
    var fn = document.getElementById("fn");
    var result = notEmpty(document.getElementById("fn"), "You did not enter a first name \n" + "Please enter one now");
    if (result == false)
        return false;

    var ln = document.getElementById("ln");
    result = notEmpty(fn, "You did not enter a last name \n" + "Please enter one now");
    if (result == false)
        return false;

    // likewise other fields to be validated here

    // Names should be in letters (upper and/or lower case)
 	result =isAlphabet(document.getElementById("fn"), "All names should be in letters only.");
    if (result == false)
        return false;

 	result =isAlphabet(document.getElementById("ln"), "All names should be in letters only.");
    if (result == false)
        return false;

    // Phone number, email address, date and time should be of correct format
    result = checkPhoneNumber(document.getElementById("tn"),
        "The phone number you entered is not valid.\n\
        Please enter a phone number with the format xxx-xxx-xxxx.");
    if (result == false)
        return false;

    var email = document.getElementById("em");
    result = emailValidator(email, "Email address should be in user@domain format");
    if (result == false)
        return false;

    // Compute the member code: jsd@scu.edu => jsd<random numner>_yy
    var name = email.value.split("@")[0];

    conf_msg += "Name of the Attendee: " + document.getElementById("ln").value + "," +
                    document.getElementById("fn").value + "\n\n";
    conf_msg += "Phone Number:" + document.getElementById("tn").value + "\n\n";
    conf_msg += "Signing up for one of our meditation gathering.";
    result = confirm(conf_msg);

    return result;
}

document.getElementById("myForm").onsubmit = checkRegistrationFormInput;