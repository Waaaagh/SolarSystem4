
function $(id) {
	var element = document.getElementById(id);
	if (element == null)
		alert("Programmer error:" + id + "does not exist.");
	return element;
}

<<<<<<< HEAD
=======
function testUsername(id){
    var username = profileName.value;
    if(username == ""){
        alert("Please Enter a Username.");
    }
}
>>>>>>> f32764a135ff25fb89e204d145eb810afd6c6b7f

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


//Password
function testPassword(id){
    var password = profilePass.value;
    if(password == ""){
        alert("Please enter a Password.");
    }
}
    

// Yeah, we slacked off on this part.