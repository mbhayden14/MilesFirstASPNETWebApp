


$("#submitButton"),click( function () {
	//calculate the numeric grade
	alert("Numeric Grade: " + 
	($("assignments").val * 0.5 +
		$("groupProject").val * 0.1 +
		$("quizzes").val * 0.1 +
		$("exams").val * 0.2 +
		$("intex").val * 0.1);
		
		});
		var letterGrade = "";
	//determine letter grade
	if (numericGrade >= 94) {
		var letterGrade = "A";
	}
	else if (numericGrade >= 90) {
		var letterGrade = "A-";
	}
	else if (numericGrade >= 87) {
		var letterGrade = "B+";
	}
	else if (numericGrade >= 84) {
		var letterGrade = "B";
	}
	else if (numericGrade >= 80) {
		var letterGrade = "B-";
	}
	else if (numericGrade >= 77) {
		var letterGrade = "C+";
	}
	else if (numericGrade >= 74) {
		var letterGrade = "C";
	}
	else if (numericGrade >= 70) {
		var letterGrade = "C-";
	}
	else if (numericGrade >= 67) {
		var letterGrade = "D+";
	}
	else if (numericGrade >= 64) {
		var letterGrade = "D";
	}
	else if (numericGrade >= 60) {
		var letterGrade = "D-";
	}
	else {
		var letterGrade = "E";
	}
	//show results
	document.getElementById("numericGrade").innerHTML = "Your Numeric Grade is:   " + numericGrade;
	document.getElementById("letterGrade").innerHTML =  "Your Letter Grade is:    " + letterGrade;

