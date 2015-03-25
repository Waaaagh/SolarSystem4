
function $(id) {
	var element = document.getElementById(id);
	if (element == null)
		alert("Programmer error:" + id + "does not exist.");
	return element;
}

function testUsername(id){
    var username = profileName.value;
    if(username == ""){
        alert("Please Enter a Username.");
    }
}

function testName(id){
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;
    if(firstName == "" || lastName == ""){
        alert("Whoopie Goldberg!");
    }
}

function testEmail(id){
    var email = (emailInput.value.substring(emailInput.value.length - 2));
    if(email == "ca" || email == "om" || email == "rg" || email == "uk"){
        alert("Yeah. " + email);
    }else{
        alert("Nope. " + email);
    }
}

function testNumber(id) {
	var firstThree = areaCodeInput;
	var middleThree = firstThreeInput;
	var lastFour = lastFourInput;
	if (firstThree.value >= 100 && firstThree.value <= 999 && middleThree.value >= 100 && middleThree.value <= 999 && lastFour.value >= 1000 && lastFour.value <= 9999) {
	    alert("Yeah!");
	    return true;
	}else{
	    alert("No!");
        return true;
	}
}