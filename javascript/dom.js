
    //.getElementById("content")
  //.textContent = message;

document.getElementById('submit').onclick = compare;

function compare() {
  
  // Get the value stored in #a
  var a = document.getElementById('a').value;
  a = parseFloat(a);
  
  // Get the value stored in #b
  var b = document.getElementById('b').value;
  b = parseFloat(b);
  
  // Set up a variable to store the comparison operator
  var comparison;
  
  // TODO: Set `comparison` string based on relationship between a and b
  if(a > b) {
    comparison = ' is greater than';
    
  } else if(a < b) {
    comparison = ' is lesser than';
     
  } else {
    comparison = 'equal to';
     
  }
  
  // Print `comparison` string on the page
  document.getElementById('comparison').innerHTML = comparison;
  
}