"use strict";
// import $ from 'jquery';
$(document).ready(function () {
    // jQuery code goes here
    const metric = $(".metric-radio-btn");
    const imperial = $(".imperial-radio-btn");
    const inputHeight = $(".height-input-value");
    let numericInputFunction = () => {
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
    };
    metric.click(function () {
        metric.toggleClass("radio-btn");
        metric.toggleClass("activated-btn");
    });
    inputHeight.click(function () {
        $(this).text('');
    });
    inputHeight.on('keypress', function (event) {
        numericInputFunction();
    });
});
