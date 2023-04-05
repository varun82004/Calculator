const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn-number, .btn-operator');
const equalBtn = document.getElementById('equal');
const clearBtn = document.getElementById('clear');
const backspaceBtn = document.getElementById('backspace');

let expression = '';

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const value = e.target.id;
    expression += value;
    display.textContent = expression;
  });
});

equalBtn.addEventListener('click', () => {
  try {
    const result = eval(expression);
    display.textContent = result;
    expression = result.toString();
  } catch (error) {
    display.textContent = 'Error';
    expression = '';
  }
});

clearBtn.addEventListener('click', () => {
  expression = '';
  display.textContent = '';
});

backspaceBtn.addEventListener('click', () => {
  expression = expression.slice(0, -1);
  display.textContent = expression;
});
