function calculateBMI() {
    var height = document.getElementById('inp_height').value;
    var weight = document.getElementById('inp_weight').value;
    var captionElement = document.getElementById('caption');
    var rangeElement = document.getElementById('range');


    if (height === '' || weight === '') {
        document.querySelector('.result img').src = 'assets/calc.jpg';
        document.getElementById('val').textContent = '';
        captionElement.innerHTML = 'Fill the required fields';
        return; 
    }


    var heightInMeters = height / 100;
    var bmi = weight / (heightInMeters * heightInMeters);


    if (bmi < 18.5) {
        rangeElement.textContent = 'Underweight';
        document.querySelector('.result img').src = "assets/underweight.jpg";
        document.getElementById("weightGain").style.display="block";
        document.getElementById("weightLoss").style.display="none";

    } else if (bmi >= 18.5 && bmi <= 24.99) {
        rangeElement.textContent = 'Healthy';
        document.querySelector('.result img').src = "assets/normal.jpg";
        document.getElementById("weightGain").style.display="none";
        document.getElementById("weightLoss").style.display="none";

    } else if (bmi >= 25 && bmi <= 29.99) {
        rangeElement.textContent = 'OverWeight';
        document.querySelector('.result img').src = "assets/overweight.jpg";
        document.getElementById("weightLoss").style.display="block";
        document.getElementById("weightGain").style.display="none";

    } else if (bmi >= 30 && bmi <= 34.99) {
        rangeElement.textContent = 'Obese';
        document.querySelector('.result img').src = "assets/obese.jpg";
        document.getElementById("weightLoss").style.display="block";
        document.getElementById("weightGain").style.display="none";


    } else if (bmi >= 35 ) {
        rangeElement.textContent = 'Extremely Obese';
        document.querySelector('.result img').src = "assets/extreme.jpg";
        document.getElementById("weightLoss").style.display="block";
        document.getElementById("weightGain").style.display="none";


    }
    else {
        rangeElement.textContent = '';

        document.querySelector('.result img').src = "calc.jpg";
    }

    document.getElementById("text").innerHTML= ("Your BMI Value Is");
    document.getElementById("val").textContent = bmi.toFixed(2);
    captionElement.innerHTML = '';
}

function reloadPage(){
    window.location.reload();
}


