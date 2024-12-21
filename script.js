let currentInput = "";

function appendValue(value) {
  currentInput += value;
  document.getElementById("result").value = currentInput;
}

function clearResult() {
  currentInput = "";
  document.getElementById("result").value = currentInput;
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString(); // Evaluate the input
    document.getElementById("result").value = currentInput;
  } catch {
    document.getElementById("result").value = "Error";
    currentInput = "";
  }
}
