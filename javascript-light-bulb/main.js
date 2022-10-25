// Create a query selector for the div element
// Add an eventlistener for the div element using click
// Create a function that sets the class property of light and background to switch off or on
// Use an if statement to detect if light is on or off then set the opposite value in the conditional

var $light = document.querySelector('.light');
var $background = document.querySelector('.background');
$light.addEventListener('click', lightSwitch);
var isLightOn = true;
function lightSwitch(event) {

  if (isLightOn) {
    $light.className = 'light light-off';
    $background.className = 'background background-off';
    isLightOn = false;
  } else {
    $light.className = 'light light-on';
    $background.className = 'background background-on';
    isLightOn = true;
  }
}
