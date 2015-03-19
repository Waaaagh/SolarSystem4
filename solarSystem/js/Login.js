
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

function testGender(id){
    var male = genderMale.value;
    var female = genderFemale.value;
    if((male == false) && (female == false)){
        alert("Salt Levels At Maximum!");
    }else{
        alert("Salt Levels At Normal Heights.");
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
        alert("Nope. " + email)
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




// Yeah, we slacked off on this part.