
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
    var firstThree = 1;
    var middleThree = 1;
    var lastFour = 1;
}



function testPassValid(id) {
	if (radPassedWeb_0.checked == true){
	return ($(id));
}
}

function testDateRangeValid(id) {
	var day = txtStartDate_0;
	var month = txtStartDate_1;
	var year = txtStartDate_2;
	if (day.value >= 1 && day.value <= 31 && month.value >= 1 && month.value <= 12 && year.value >= 2013 && year.value <= 2999){
	return ($(id));
	error = false;
}
}



// Yeah, we slacked off on this part.