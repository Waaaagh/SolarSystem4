var trueUsername;
var trueFirstName;
var trueLastName;
var truePass;
var trueSex;
var trueEmail;
var truePhone;

function $(id) {
	var element = document.getElementById(id);
	if (element == null)
		alert("Programmer error: " + id + " does not exist.");
	return element;
}

function testUsername(id){
    var username = profileName.value;
    if(username == ""){
        trueUsername = false;
        document.getElementById("user_Section").className = "false";
    }else{
        document.getElementById("user_Section").className = "true";
        trueUsername = true;
        return ($(id))
    }
}

function testPassword(id){
    var password = profilePass.value;
    if(password == ""){
        document.getElementById("pass_Section").className = "false";
        truePass = false;
    }else{
        document.getElementById("pass_Section").className = "true";
        truePass = true;
        return ($(id))
    }
}

function testGender(id){
    if(genderMale.value == 1 || genderFemale.value == 1){
        document.getElementById("gender_Section").className = "false";
        trueSex = false;
    }else{
        document.getElementById("gender_Section").className = "true";
        trueSex = true;
        return ($(id))
    }
}

function testFirstName(id){
    var firstName = firstNameInput.value;
    if(firstName == ""){
        trueName = false;
        document.getElementById("first_Name_Input").className = "false";
    }else{
        document.getElementById("first_Name_Input").className = "true";
        trueFirstName = true;
        return firstNameInput.value;
    }
}

function testLastName(id){
    var lastName = lastNameInput.value;
    if(lastName == ""){
        trueName = false;
            document.getElementById("last_Name_Input").className = "false";
    }else{
        document.getElementById("last_Name_Input").className = "true";
        trueLastName = true;
        return lastNameInput.value;
    }
}

function testEmail(id){
    var email = (emailInput.value.substring(emailInput.value.length - 2));
    if(email == "ca" || email == "om" || email == "rg" || email == "uk"){
        document.getElementById("email_Section").className = "true";
        trueEmail = true;
        return ($(id))
    }else{
        document.getElementById("email_Section").className = "false";
        trueEmail = false;
    }
}

function testNumber(id) {
	var firstThree = areaCodeInput;
	var middleThree = firstThreeInput;
	var lastFour = lastFourInput;
	var number;
	if (firstThree >= 100 && firstThree <= 999 && middleThree >= 100 && middleThree <= 999 && lastFour >= 1000 && lastFour <= 9999) {
        document.getElementById("phone_Section").className = "true";
        truePhone =  true;
	    number = firstThree + middleThree + lastFour;
	    return ($(id));
	}else{
        truePhone = false;
        document.getElementById("phone_Section").className = "true";
	}
}

function formvalidate(id){
    if(trueFirstName == false || trueLastName == false || trueUsername == false || trueEmail == false || trueSex == false || truePass == false){
        alert("Please properly fill out the required forms.");
        return false;
    }else{
        return true;
    }
}