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
  var comparison, display;
  
  // TODO: Set `comparison` string based on relationship between a and b
  if(a > b) {
    comparison = ' >';
    display =  "<h4> " +a+  " is greater than " + b +  "</h4>"; 
    document.getElementById("result").innerHTML = display;
    
  } else if(a < b) {
    comparison = ' <';
    display =  "<h4>" +a+  " is lesser than " + b +  "</h4>"; 
    document.getElementById("result").innerHTML = display;
     
  } else {
    comparison = '=';
    display =  "<h4>" +a+  " is equal to " + b +  "</h4>"; 
    document.getElementById("result").innerHTML = display;
     
  }
  
  // Print `comparison` string on the page
  document.getElementById('comparison').innerHTML = comparison;
  
}
    
