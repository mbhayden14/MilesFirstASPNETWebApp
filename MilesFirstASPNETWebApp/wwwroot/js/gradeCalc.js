$("#gradeButton").click(function () {
	//calculate the numeric grade
	var numericGrade = ($("#Assignments").val() * 0.5 +
						$("#GroupProject").val() * 0.1 +
						$("#Quizzes").val() * 0.1 +
						$("#Exams").val() * 0.2 +
						$("#Intex").val() * 0.1);

	//calculate the letter grade
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


	//check if error message needs to be displayed
	if ($("#Assignments").val() <= 100 && $("#Assignments").val() >= 0 && $("#Assignments").val() !== null && $("#Assignments").val() !== '' && 
		$("#GroupProject").val() <= 100 && $("#GroupProject").val() >= 0 && $("#GroupProject").val() !== null && $("#GroupProject").val() !== '' && 
		$("#Quizzes").val() <= 100 && $("#Quizzes").val() >= 0 && $("#Quizzes").val() !== null && $("#Quizzes").val() !== '' && 
		$("#Exams").val() <= 100 && $("#Exams").val() >= 0 && $("#Exams").val() !== null && $("#Exams").val() !== '' && 
		$("#Intex").val() <= 100 && $("#Intex").val() >= 0 && $("#Intex").val() !== null && $("#Intex").val() !== '') {
		alert("Numeric Grade: " + numericGrade + "\nLetter Grade: " + letterGrade)
	}
	else {
		alert("Invalid number entry. Please see error message below.")
    }
});