const { add, subtract, multiply, divide } = require('./calculation');
const rph = 300;
const hours = 4;
const days = 6;

var gross = multiply(rph, multiply(hours, days))
var tax = divide(gross, 10);
var sss = 1200
var pagibig = 300;
var philHealth = 400;
var totalDeductions = add(add(add(pagibig, philHealth), sss), tax);

console.log("Gross Income: " + gross);
console.log("Tax: " + tax);
console.log("SSS: " + sss);
console.log("Pag-Ibig Fund: " + pagibig);
console.log("PhilHealth: " + philHealth);
console.log("Total Deductions: " + totalDeductions);
console.log("Net Salary: " + subtract(gross, totalDeductions));
