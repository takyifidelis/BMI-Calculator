// import $ from 'jquery';
$(document).ready(function () {
    // jQuery code goes here
    var metric = $(".metric-radio-btn");
    var imperial = $(".imperial-radio-btn");
    var inputHeight = $(".height-input-value");
    var inputWeight = $(".weight-input-value");
    var resultDisplay = $(".bmi-result-display");
    // VARIABLES
    function numericInputFunction(event) {
        // Get the character code of the pressed key
        var charCode = event.which || event.keyCode;
        // Allow only numeric keys (48-57), backspace (8), and delete (46)
        if ((charCode >= 48 && charCode <= 57) || // 0-9
            charCode === 8 || // Backspace
            charCode === 46 // Delete
        ) {
            // Allow the key to be entered
            return true;
        }
        else {
            // Block the key from being entered
            event.preventDefault();
            return false;
        }
    }
    // Toggle between the Radio Buttons
    metric.click(function () {
        metric.addClass("activated-btn");
        metric.removeClass("radio-btn");
        imperial.addClass("radio-btn");
        imperial.removeClass("activated-btn");
        // resultDisplay.text("99.9");
    });
    imperial.click(function () {
        imperial.addClass("activated-btn");
        imperial.removeClass("radio-btn");
        metric.addClass("radio-btn");
        metric.removeClass("activated-btn");
        updateBMI();
    });
    //
    // InputHeight Text Input
    // inputHeight.on("input", function () {
    //   let content = $(this).text();
    //   inputHeight.css("opacity", "1");
    //   // Truncate content to the maximum allowed characters
    //   if (content.length > 8) {
    //     content = content.slice(0, 8);
    //     $(this).text(content);
    //   }
    // });
    // Click event for inputHeight
    // inputHeight.click(function () {
    //   if ($(this).text().trim() === "") {
    //     $(this).text("0");
    //   } else {
    //     $(this).text("");
    //   }
    // });
    // // Keypress event for inputHeight
    inputHeight.on("keypress", function (event) {
        numericInputFunction(event);
    });
    // // InputWeight Text Input
    // inputWeight.on("input", function () {
    //   let content = $(this).text();
    //   inputWeight.css("opacity", "1");
    //   // Truncate content to the maximum allowed characters
    //   if (content.length > 8) {
    //     content = content.slice(0, 8);
    //     $(this).text(content);
    //   }
    // });
    // // Click event for inputWeight
    // inputWeight.click(function () {
    //   if ($(this).text().trim() === "") {
    //     $(this).text("0");
    //   } else {
    //     $(this).text("");
    //   }
    // });
    // Keypress event for inputWeight
    inputWeight.on("keypress", function (event) {
        numericInputFunction(event);
    });
    var updateBMI = function () {
        //CALCULATING THE BMI in Kg and cm
        var heightMetric = parseFloat(inputHeight.text());
        var weightMetric = parseFloat(inputWeight.text());
        if (isNaN(heightMetric) || isNaN(weightMetric)) {
            resultDisplay.text('');
            return;
        }
        // Convert height to meters (BMI formula requires height in meters)
        var heightInMeters = heightMetric / 100;
        // Calculate BMI using the formula: BMI = weight (kg) / (height (m) * height (m))
        var bmi = weightMetric / (heightInMeters * heightInMeters);
        // Display the result
        resultDisplay.text("".concat(bmi.toFixed(2)));
    };
});
