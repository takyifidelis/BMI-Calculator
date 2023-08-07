// import $ from 'jquery';
$(document).ready(function () {
    // jQuery code goes here
    var metric = $(".metric-radio-btn");
    var imperial = $(".imperial-radio-btn");
    var useMetric = $(".use-metric");
    var useImperial = $(".use-imperial");
    var inputHeight = $(".cm-value");
    var inputWeight = $(".kg-value");
    // VARIABLE FOR IMPERIAL INPUT
    var inputHeightInFt = $(".ft-value");
    var inputHeightInIn = $(".in-value");
    var inputWeightInSt = $(".st-value");
    var inputWeightInIbs = $(".ibs-value");
    var resultDisplay = $(".bmi-result-display");
    var weightClassification = $(".weight-classification");
    var weightRange = $(".weight-range");
    var idealWeightStatement = $(".your-ideal-weight-is");
    var welcomeBlock = $(".result-block");
    var resultBlock = $(".result-display-block");
    // Toggle between the Radio Buttons
    metric.click(function () {
        metric.addClass("activated-btn");
        metric.removeClass("radio-btn");
        imperial.addClass("radio-btn");
        imperial.removeClass("activated-btn");
        useImperial.hide();
        useMetric.show();
        welcomeBlock.show();
        resultBlock.hide();
    });
    imperial.click(function () {
        imperial.addClass("activated-btn");
        imperial.removeClass("radio-btn");
        metric.addClass("radio-btn");
        metric.removeClass("activated-btn");
        useImperial.show();
        useMetric.hide();
        welcomeBlock.show();
        resultBlock.hide();
    });
    // Event handlers with specified type for the 'event' parameter
    inputWeight.on("keyup", handleKeyUp);
    inputHeight.on("keyup", handleKeyUp);
    inputHeightInFt.on("keyup", handleKeyUpImeprial);
    inputHeightInIn.on("keyup", handleKeyUpImeprial);
    inputWeightInSt.on("keyup", handleKeyUpImeprial);
    inputWeightInIbs.on("keyup", handleKeyUpImeprial);
    // The handleKeyUp function with specified type for the 'event' parameter
    function handleKeyUp(event) {
        if (event.which === 13) {
            updateBMI();
        }
    }
    function handleKeyUpImeprial(event) {
        if (event.which === 13) {
            BMIimperial();
        }
    }
    // Calculate BMI for metric
    var updateBMI = function () {
        //Calculate THE BMI in kg and cm
        var heightInCm = parseFloat(inputHeight.val());
        var weightInKg = parseFloat(inputWeight.val());
        if (isNaN(heightInCm) || isNaN(weightInKg)) {
            welcomeBlock.show();
            resultBlock.hide();
            return;
        }
        // Convert height to meters (BMI formula requires height in meters)
        var heightInMeters = heightInCm / 100;
        // Calculate BMI using the formula: BMI = weight (kg) / (height (m) * height (m))
        var bmi = weightInKg / (heightInMeters * heightInMeters);
        // Display the result
        resultDisplay.text("".concat(bmi.toFixed(1)));
        //Underweight: BMI less than 18.5
        // Healthy weight: BMI 18.5 to 24.9
        // Overweight: BMI 25 to 29.9
        // Obese: BMI 30 or greater
        var maximumWeight;
        var minimumWeight;
        if (bmi < 18.5) {
            minimumWeight = 18.5 * Math.pow(heightInMeters, 2);
            weightClassification.text("underweight.");
            idealWeightStatement.text("Your ideal weight is less than ".concat(minimumWeight.toFixed(2), "kgs."));
        }
        else if (bmi >= 18.5 && bmi < 25) {
            minimumWeight = 18.5 * Math.pow(heightInMeters, 2);
            maximumWeight = 24.9 * Math.pow(heightInMeters, 2);
            weightClassification.text("a healthy weight.");
            idealWeightStatement.text("Your ideal weight is between than ".concat(minimumWeight.toFixed(2), "kgs - ").concat(maximumWeight.toFixed(2), "kgs."));
        }
        else if (bmi >= 25 && bmi <= 29.9) {
            minimumWeight = 25 * Math.pow(heightInMeters, 2);
            maximumWeight = 29.9 * Math.pow(heightInMeters, 2);
            weightClassification.text("overweight.");
            idealWeightStatement.text("Your ideal weight is between than ".concat(minimumWeight.toFixed(2), "kgs - ").concat(maximumWeight.toFixed(2), "kgs."));
        }
        else if (bmi >= 30) {
            weightClassification.text("obese.");
            maximumWeight = 30 * Math.pow(heightInMeters, 2);
            idealWeightStatement.text("Your ideal weight is greater than ".concat(maximumWeight.toFixed(2), "kgs."));
        }
        welcomeBlock.hide();
        resultBlock.show();
    };
    // Calculate BMI for Imperial
    function BMIimperial() {
        var feet = parseFloat(inputHeightInFt.val());
        var inches = parseFloat(inputHeightInIn.val());
        var stones = parseFloat(inputWeightInSt.val());
        var pounds = parseFloat(inputWeightInIbs.val());
        if ((isNaN(feet) &&
            isNaN(inches)) || (isNaN(stones) &&
            isNaN(pounds))) {
            welcomeBlock.show();
            resultBlock.hide();
            return;
        }
        if ((!isNaN(feet) &&
            isNaN(inches)) && (isNaN(stones) &&
            !isNaN(pounds))) {
            inches = 0;
            stones = 0;
        }
        else if ((isNaN(feet) &&
            !isNaN(inches)) && (!isNaN(stones) &&
            isNaN(pounds))) {
            feet = 0;
            pounds = 0;
        }
        else if ((!isNaN(feet) &&
            isNaN(inches)) && (!isNaN(stones) &&
            isNaN(pounds))) {
            inches = 0;
            pounds = 0;
        }
        else if ((isNaN(feet) &&
            !isNaN(inches)) && (isNaN(stones) &&
            !isNaN(pounds))) {
            feet = 0;
            stones = 0;
        }
        else if ((!isNaN(feet) &&
            !isNaN(inches)) && (!isNaN(stones) &&
            isNaN(pounds))) {
            pounds = 0;
        }
        else if ((!isNaN(feet) &&
            !isNaN(inches)) && (isNaN(stones) &&
            !isNaN(pounds))) {
            stones = 0;
        }
        else if ((!isNaN(feet) &&
            isNaN(inches)) && (!isNaN(stones) &&
            !isNaN(pounds))) {
            inches = 0;
        }
        else if ((isNaN(feet) &&
            !isNaN(inches)) && (!isNaN(stones) &&
            !isNaN(pounds))) {
            feet = 0;
        }
        console.log("Feet is ".concat(feet, " /Inches is ").concat(inches, "  /Stones is ").concat(stones, "/Pounds is ").concat(pounds));
        var heightInInches = feet * 12 + inches;
        var weightInPounds = stones * 14 + pounds;
        var heightInMeters = feetAndInchesToMeters(feet, inches);
        // Calculate BMI
        var bmi = (weightInPounds / (heightInInches * heightInInches)) * 703;
        resultDisplay.text("".concat(bmi.toFixed(1)));
        var weightClassificationMsg = "";
        var weightRangeMsg = "";
        if (bmi < 18.5) {
            weightClassificationMsg = "underweight.";
            weightRangeMsg = "Your ideal weight is less than ".concat(getWeightInStonesAndPounds(18.5, heightInMeters), ".");
        }
        else if (bmi >= 18.5 && bmi < 25) {
            weightClassificationMsg = "a healthy weight.";
            weightRangeMsg = "Your ideal weight is between ".concat(getWeightInStonesAndPounds(18.5, heightInMeters), " - ").concat(getWeightInStonesAndPounds(25, heightInMeters), ".");
        }
        else if (bmi >= 25 && bmi <= 29.9) {
            weightClassificationMsg = "overweight.";
            weightRangeMsg = "Your ideal weight is between ".concat(getWeightInStonesAndPounds(25, heightInMeters), " - ").concat(getWeightInStonesAndPounds(29.9, heightInMeters), ".");
        }
        else if (bmi >= 30) {
            weightClassificationMsg = "obese.";
            weightRangeMsg = "Your ideal weight is greater than ".concat(getWeightInStonesAndPounds(30, heightInMeters), ".");
        }
        weightClassification.text(weightClassificationMsg);
        weightRange.text(weightRangeMsg);
        welcomeBlock.hide();
        resultBlock.show();
    }
    function getWeightInStonesAndPounds(bmiValue, heightInMeters) {
        var weightInKg = bmiValue * Math.pow(heightInMeters, 2);
        var weightInStones = Math.floor(weightInKg / 6.35029);
        var weightInPounds = Math.round((weightInKg % 6.35029) / 0.453592);
        return "".concat(weightInStones, "st ").concat(weightInPounds, "Ibs");
    }
    // Convert FEET & INCHES to meters
    function feetAndInchesToMeters(feet, inches) {
        var totalInches = feet * 12 + inches;
        var meters = totalInches * 0.0254;
        return meters;
    }
    //
});
