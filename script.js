function trailingZeros(n) {
  let count = 0;
  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
}

function handleTrailingZeros() {
  const input = document.getElementById("numberInput").value;
  const num = parseInt(input, 10);

  const resultDiv = document.getElementById("result");

  if (isNaN(num) || num < 0) {
    resultDiv.textContent = "Please enter a valid non-negative integer.";
    resultDiv.style.color = "#d63031"; // red for error
    return;
  }

  const result = trailingZeros(num);
  resultDiv.textContent = `Number of trailing zeros in ${num}! is ${result}`;
  resultDiv.style.color = "#2d3436"; // dark text for result
}
