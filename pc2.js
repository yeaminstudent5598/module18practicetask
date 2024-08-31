const weight = 61;
const height = 5.4;

var bmi = weight / (height * height);


if (bmi < 18.5) {
    console.log('Underweight');
} else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log('normal')
}
else if (bmi >= 25 && bmi <= 29.9) {
    console.log ('overweight')

} else {
    console.log('obese')
}