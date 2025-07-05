// Append a character to the display
function Solve(val) {
   var display = document.getElementById('res');
   display.value += val;
}

// Evaluate the expression and show the result
function Result() {
   var expression = document.getElementById('res').value;
   try {
    // Replace 'x' with '*' for multiplication
      var result = eval(expression.replace(/x/g, '*'));
      document.getElementById('res').value = result;
   } catch {
      document.getElementById('res').value = 'Error';
   }
}

// Clear the entire input
function Clear() {
   document.getElementById('res').value = '';
}

// Remove last character
function Back() {
   var display = document.getElementById('res');
   display.value = display.value.slice(0, -1);
}

// Keyboard support
document.addEventListener('keydown', function (event) {
   const key = event.key;
   const display = document.getElementById('res');
   const validKeys = '0123456789+-*/.%';

   // Prevent default action for Enter key (e.g., form submit)
   if (key === 'Enter') {
      event.preventDefault();
      Result();
   } else if (key === 'Backspace') {
      event.preventDefault();
      Back();
   } else if (key.toLowerCase() === 'c') {
      Clear();
   } else if (validKeys.includes(key)) {
      // Use 'x' for UI consistency but support '*' from keyboard
      if (key === '*') {
         Solve('x');
      } else {
         Solve(key);
      }
   } else if (key === 'x' || key === 'X') {
      // If user types 'x', treat it as multiplication
      Solve('x');
   }
});
