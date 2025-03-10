const textInput = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const divResult = document.getElementById("result");

function limpiarString(string) {
  return string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}

function verificarPalindrome() {
  const inputValue = textInput.value.trim();

  if (inputValue === "") {
    alert("Please input a value");
    return;
  }

  const result = limpiarString(inputValue);
  const reversed = result.split("").reverse().join("");

  const esPalindromo = result === reversed;

  // Corregido: usar inputValue en lugar de una variable no definida
  divResult.textContent = `${inputValue} is ${
    esPalindromo ? "" : "not "
  }a palindrome`;
}

// Evento de clic para el botón
button.addEventListener("click", verificarPalindrome);
