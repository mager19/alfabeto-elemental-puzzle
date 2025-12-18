import "./style.css";

// Puzzle logic
const puzzleInput = document.getElementById("puzzleInput");
const checkButton = document.getElementById("checkButton");
const messageBox = document.getElementById("messageBox");
const messageText = messageBox.querySelector(".message-text");
const messageClue = messageBox.querySelector(".message-clue");

const correctAnswer = "cueros-v";
const errorMessage = "❌ Estás equivocado";
const clueMessage =
  "A veces, comprender de qué están hechas las cosas es la clave para descifrar su lenguaje.";

// Check answer function
function checkAnswer() {
  const userInput = puzzleInput.value.trim();

  if (userInput === "") {
    showMessage("⚠️ Por favor, ingresa una respuesta", "");
    return;
  }

  if (userInput === correctAnswer) {
    showSuccessMessage();
  } else {
    showErrorMessage();
  }
}

function showMessage(text, clue) {
  messageText.textContent = text;
  messageClue.textContent = clue;
  messageBox.classList.remove("hidden");

  // Add animation
  messageBox.style.animation = "none";
  setTimeout(() => {
    messageBox.style.animation = "slideDown 0.4s ease-out";
  }, 10);
}

function showErrorMessage() {
  messageBox.style.background = "rgba(120, 0, 0, 0.3)";
  messageBox.style.borderColor = "#c1121f";
  showMessage(errorMessage, clueMessage);
}

function showSuccessMessage() {
  messageBox.style.background = "rgba(0, 120, 0, 0.3)";
  messageBox.style.borderColor = "#4ade80";
  showMessage(
    "🎉 ¡Correcto! Has descifrado el acertijo.",
    "¡Felicitaciones! Has comprendido el lenguaje oculto."
  );
  
  // Redirect to success page after a short delay
  setTimeout(() => {
    window.location.href = 'success.html'; // Relative path for GitHub Pages
  }, 1500);
}

// Event listeners
checkButton.addEventListener("click", checkAnswer);

puzzleInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkAnswer();
  }
});

// Focus input on load
puzzleInput.focus();
