	//if
function findbmi () {
	var height = document.getElementById('height').value;
	var weight = document.getElementById('weight').value;
	var bmi = weight/Math.pow(height,2);
	var roundbmi = Math.round(bmi);

	if (roundbmi < 18.5) { 
		window.alert("Your BMI is " + roundbmi + ". You are underweight, please work on your health.");
	}
	
	else if (roundbmi >= 18.5 && roundbmi <= 24.9) { 
		window.alert("Your BMI is " + roundbmi + ". You are in the normal range of weight, nice work!"); 
	}
	
	else if (roundbmi >= 25 && roundbmi <= 29.9) { 
		window.alert("Your BMI is" + roundbmi + ". You are overweight, please work on your health") 
	}
	
	else { 
		window.alert("Your BMI is " + roundbmi + ". You are obese, please work on your health") }
	}



