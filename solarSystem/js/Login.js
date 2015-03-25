
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

function testNumber(id){
    var firstThree = areaCodeInput.value;
    var middleThree = firstThreeInput.value;
    var lastFour = lastFourInput.value;
    if((1000 < firstThree > 99) && (1000 < middleThree >= 0) && (10000 < lastFour >= 0)){
        alert("Yep.");
    }else{
        alert("No.");
    }
}
