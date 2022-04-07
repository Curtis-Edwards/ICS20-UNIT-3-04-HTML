'use strict'
/**
 * This function calculates area of a circle.
 */
function calculate () {
  // input
  const fahrenheit = parseInt(document.getElementById('fahrenheit').value)

  // process
  const celsius = (fahrenheit - 32) * 5 / 9

  // output
  document.getElementById('celsius').innerHTML = 'Celsius is: ' + celsius.toFixed(0) + '°'
}
