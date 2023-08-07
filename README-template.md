#  - Body Mass Index Calculator solution

This is a solution to the [Body Mass Index Calculator](https://www.frontendmentor.io/challenges/body-mass-index-calculator-brrBkfSz1T). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview
![Design preview for the Body Mass Index Calculator coding challenge](./preview.jpg)

### The challenge

Users should be able to:

- Select whether they want to use metric or imperial units
- Enter their height and weight
- See their BMI result, with their weight classification and healthy weight range
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)
**-Desktop View Metric-**
<figure>
    <img src="./starter-code/assets/images/markdown/desktopViewMetric.png"
         alt="Desktop View Metric">
   
</figure>


**-Desktop View Imperial.-**
<figure>
    <img src="./starter-code/assets/images/markdown/desktopViewImperial.png"
         alt="Desktop View Imperial">
    
</figure>



### Links

- Solution URL: [BMI-Calculator](https://bmi-calculator-fidelis.netlify.app/)
- GitHub Repo: [Link to the GitHub Repo](https://github.com/fidelismensah/BMI-Calculator)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [jQuery](https://reactjs.org/) - JS library
- [TypeScript](https://nextjs.org/) - JS Compiler


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
<input type="number" class="height-input-value ft-value" placeholder="0" min="0" required/>
```
```css
/* Ways to remove the arrows in an input field*/
/* For WebKit-based browsers */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* For Mozilla Firefox */
input[type="number"]::-moz-number-spin-box {
  -moz-appearance: textfield;
}

```
```js
const updateBMI = () => {
  console.log('...🎉')
}
 const updateBMI = () => {
    //Calculate THE BMI in kg and cm

    const heightInCm: number = parseFloat(inputHeight.val() as string);
    const weightInKg: number = parseFloat(inputWeight.val() as string);

    if (isNaN(heightInCm) || isNaN(weightInKg)) {
      welcomeBlock.show();
      resultBlock.hide();

      return;
    }
```


### Useful resources

- [jQuery](https://jquery.com/) - This helped me with the transition. I really liked how I was switching betweeen *Metric* and *Imperial* easily.
- [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) - This is an amazing article which helped me finally understand TypeScript. I'd recommend it to anyone still learning this concept. A reader who completes the walkthrough should be able to:
  - Read and understand commonly-used TypeScript syntax and patterns
  - Explain the effects of important compiler options
  - Correctly predict type system behavior in most cases


## Author

- Name - [Fidelis Takyi Mensah](https://www.your-site.com)
- Twitter - [@fidelistakyi](https://www.twitter.com/fidelistakyi)
- LinkedIn - [@fidelistakyi](https://www.linkedin.com/in/fidelis-mensah-3b13291a3?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bhdp%2BtdxsTjakElRy4MDVTg%3D%3D)




