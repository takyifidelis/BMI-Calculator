"use strict";
// import $ from 'jquery';
$(document).ready(function () {
    // jQuery code goes here
    const metric = $(".metric-radio-btn");
    const imperial = $(".imperial-radio-btn");
    const inputHeight = $(".height-input-value");
    const inputWeight = $(".weight-input-value");
    const resultDisplay = $(".bmi-result-display");
    // VARIABLES
    function numericInputFunction(event) {
        // Get the character code of the pressed key
        const charCode = event.which || event.keyCode;
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
    inputHeight.on("input", function () {
        let content = $(this).text();
        inputHeight.css("opacity", "1");
        // Truncate content to the maximum allowed characters
        if (content.length > 8) {
            content = content.slice(0, 8);
            $(this).text(content);
        }
    });
    // Click event for inputHeight
    inputHeight.click(function () {
        if ($(this).text().trim() === "") {
            $(this).text("0");
        }
        else {
            $(this).text("");
        }
    });
    // Keypress event for inputHeight
    inputHeight.on("keypress", function (event) {
        numericInputFunction(event);
    });
    // InputWeight Text Input
    inputWeight.on("input", function () {
        let content = $(this).text();
        inputWeight.css("opacity", "1");
        // Truncate content to the maximum allowed characters
        if (content.length > 8) {
            content = content.slice(0, 8);
            $(this).text(content);
        }
    });
    // Click event for inputWeight
    inputWeight.click(function () {
        if ($(this).text().trim() === "") {
            $(this).text("0");
        }
        else {
            $(this).text("");
        }
    });
    // Keypress event for inputWeight
    inputWeight.on("keypress", function (event) {
        numericInputFunction(event);
    });
    const updateBMI = () => {
        //CALCULATING THE BMI in Kg and cm
        const heightMetric = parseFloat(inputHeight.val());
        const weightMetric = parseFloat(inputWeight.val());
        if (isNaN(heightMetric) || isNaN(weightMetric)) {
            return;
        }
        // Convert height to meters (BMI formula requires height in meters)
        const heightInMeters = heightMetric / 100;
        // Calculate BMI using the formula: BMI = weight (kg) / (height (m) * height (m))
        const bmi = weightMetric / (heightInMeters * heightInMeters);
        // Display the result
        resultDisplay.text(`${bmi}`);
    };
});
