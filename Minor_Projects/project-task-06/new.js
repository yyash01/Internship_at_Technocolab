var kelvin = 293;
var celsius =(kelvin-273.15); 
var fahrenheit = Math.floor(celsius*(9/5)+32);//to round off the answer to nearest integer
var newton = Math.floor(celsius*(33/100));
//string interpolation-->
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The Celsius tempreature is changed into newton scale ${newton}`)