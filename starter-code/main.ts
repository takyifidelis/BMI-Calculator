// import $ from 'jquery';
$(document).ready(function () {
  // jQuery code goes here
  const metric = $(".metric-radio-btn");
  const imperial = $(".imperial-radio-btn");
  const useMetric = $(".use-metric");
  const useImperial = $(".use-imperial");
  const inputHeight = $(".cm-value");
  const inputWeight = $(".kg-value");
  // VARIABLE FOR IMPERIAL INPUT
  const inputHeightInFt = $(".ft-value");
  const inputHeightInIn = $(".in-value");
  const inputWeightInSt = $(".st-value");
  const inputWeightInIbs = $(".ibs-value");
  const resultDisplay = $(".bmi-result-display");
  const weightClassification = $(".weight-classification");
  const weightRange = $(".weight-range");
  const maximumIdealWeight = $(".maximum-ideal-weight");
  const minimumIdealWeight = $(".minimum-ideal-weight");
  const idealWeightStatement = $(".your-ideal-weight-is");
  const clickBtn = $(".logo");

  // VARIABLES
  clickBtn.click(function () {
    BMIimperial();
    // resultDisplay.text("99.9");
  });

  function numericInputFunction(event: any): boolean {
    // Get the character code of the pressed key
    const charCode = event.which || event.keyCode;

    // Allow only numeric keys (48-57), backspace (8), and delete (46)
    if (
      (charCode >= 48 && charCode <= 57) || // 0-9
      charCode === 8 || // Backspace
      charCode === 46 // Delete
    ) {
      // Allow the key to be entered
      return true;
    } else {
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
    useImperial.hide();
    useMetric.show();
    // resultDisplay.text("99.9");
  });

  imperial.click(function () {
    imperial.addClass("activated-btn");
    imperial.removeClass("radio-btn");
    metric.addClass("radio-btn");
    metric.removeClass("activated-btn");
    useImperial.show();
    useMetric.hide();
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

  // Calculate BMI for metric

  const updateBMI = () => {
    //CALCULATING THE BMI in kg and cm

    const heightMetric: number = parseFloat(inputHeight.text());
    const weightMetric: number = parseFloat(inputWeight.text());

    if (isNaN(heightMetric) || isNaN(weightMetric)) {
      resultDisplay.text("");
      return;
    }

    // Convert height to meters (BMI formula requires height in meters)
    const heightInMeters = heightMetric / 100;

    // Calculate BMI using the formula: BMI = weight (kg) / (height (m) * height (m))
    const bmi = weightMetric / (heightInMeters * heightInMeters);

    // Display the result

    resultDisplay.text(`${bmi.toFixed(2)}`);

    //Underweight: BMI less than 18.5
    // Healthy weight: BMI 18.5 to 24.9
    // Overweight: BMI 25 to 29.9
    // Obese: BMI 30 or greater

    let maximumWeight: number;
    let minimumWeight: number;
    if (bmi < 18.5) {
      minimumWeight = 18.5 * Math.pow(heightInMeters, 2);
      weightClassification.text("underweight");
      idealWeightStatement.text(
        `Your ideal weight is less than ${minimumWeight.toFixed(2)}`
      );
    } else if (bmi >= 18.5 && bmi < 25) {
      minimumWeight = 18.5 * Math.pow(heightInMeters, 2);
      maximumWeight = 24.9 * Math.pow(heightInMeters, 2);
      weightClassification.text("a healthy weight");
      minimumIdealWeight.text(`${minimumWeight.toFixed(2)}`);
      maximumIdealWeight.text(`${maximumWeight.toFixed(2)}`);
    } else if (bmi >= 25 && bmi <= 29.9) {
      minimumWeight = 25 * Math.pow(heightInMeters, 2);
      maximumWeight = 29.9 * Math.pow(heightInMeters, 2);
      weightClassification.text("overweight");
      minimumIdealWeight.text(`${minimumWeight.toFixed(2)}`);
      maximumIdealWeight.text(`${maximumWeight.toFixed(2)}`);
    } else if (bmi >= 30) {
      weightClassification.text("obese");
      maximumWeight = 30 * Math.pow(heightInMeters, 2);
      idealWeightStatement.text(
        `Your ideal weight is greater than ${maximumWeight.toFixed(2)}`
      );
    }
  };
  
  // Calculate BMI for Imperial
  function BMIimperial() {
    let feet = parseFloat(inputHeightInFt.text());
    let inches = parseFloat(inputHeightInIn.text());
    let stones = parseFloat(inputWeightInSt.text());
    let pounds = parseFloat(inputWeightInIbs.text());
  
    const heightInInches = feet * 12 + inches;
    const weightInPounds = stones * 14 + pounds;
    const heightInMeters = feetAndInchesToMeters(feet, inches);
  
    // Calculate BMI
    const bmi = (weightInPounds / (heightInInches * heightInInches)) * 703;
    resultDisplay.text(`${bmi.toFixed(1)}`);
  
    let weightClassificationMsg:string = "";
    let weightRangeMsg:string= "";
  
    if (bmi < 18.5) {
      weightClassificationMsg = "underweight";
      weightRangeMsg = `Your ideal weight is less than ${getWeightInStonesAndPounds(18.5, heightInMeters)}`;
    } else if (bmi >= 18.5 && bmi < 25) {
      weightClassificationMsg = "a healthy weight";
      weightRangeMsg = `Ideal Weight Range: ${getWeightInStonesAndPounds(18.5, heightInMeters)} - ${getWeightInStonesAndPounds(25, heightInMeters)}`;
    } else if (bmi >= 25 && bmi <= 29.9) {
      weightClassificationMsg = "overweight";
      weightRangeMsg = `Ideal Weight Range: ${getWeightInStonesAndPounds(25, heightInMeters)} - ${getWeightInStonesAndPounds(29.9, heightInMeters)}`;
    } else if (bmi >= 30) {
      weightClassificationMsg = "obese";
      weightRangeMsg = `Your ideal weight is greater than ${getWeightInStonesAndPounds(30, heightInMeters)}`;
    }
  
    weightClassification.text(weightClassificationMsg);
    weightRange.text(weightRangeMsg);
  }
  
  function getWeightInStonesAndPounds(bmiValue:number, heightInMeters:number) {
    const weightInKg = bmiValue * heightInMeters ** 2;
    const weightInStones = Math.floor(weightInKg / 6.35029);
    const weightInPounds = Math.round((weightInKg % 6.35029) / 0.453592);
    return `${weightInStones}st ${weightInPounds}Ibs`;
  }
  

  // Convert FEET & INCHES to meters
  function feetAndInchesToMeters(feet: number, inches: number) {
    const totalInches = feet * 12 + inches;
    const meters = totalInches * 0.0254;
    return meters;
  }
  //
});
