// import $ from 'jquery';
$(document).ready(function () {
    // jQuery code goes here
    var metric = $(".metric-radio-btn");
    var imperial = $(".imperial-radio-btn");
    var inputHeight = $(".height-input-value");
    var inputWeight = $(".weight-input-value");
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
    });
    imperial.click(function () {
        imperial.addClass("activated-btn");
        imperial.removeClass("radio-btn");
        metric.addClass("radio-btn");
        metric.removeClass("activated-btn");
    });
    //
    // InputHeight Text Input
    inputHeight.on("input", function () {
        var content = $(this).text();
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
        var content = $(this).text();
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
    //
});
