
var a = 3;
var b = 4;
var c = 5;

var R = 5;

if (!isTriangle(a, b, c)) {
  // Check if it is triangle
  console.log('it isn`t triangle');
} else if (getRadiusOfCircumscribedCircle(a, b, c) <= R) {
  console.log('true');
} else {
  console.log('false');
}

function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  }
  return false;
}
 
function getRadiusOfCircumscribedCircle(a, b, c) {
  var p = (a + b + c) / 2;
  var radius = a * b * c / (4 * Math.sqrt(p * (p - a) * (p - b) * (p - c)));
  return radius;
}
