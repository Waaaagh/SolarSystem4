
function $(id) {
	var element = document.getElementById(id);
	if (element == null)
		alert("Programmer error:" + id + "does not exist.");
	return element;
}

function testPassValid(id) {
	if (radPassedWeb_0.checked == true){
	return ($(id));
	error = false;
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