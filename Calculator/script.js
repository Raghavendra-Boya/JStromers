const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const toggleBtn = document.getElementById("toggle-btn");
let darkMode = false;

// Attach event using for loop
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    let value = buttons[i].textContent;

    if (buttons[i].classList.contains("clear")) {
      display.value = "";
    } else if (buttons[i].classList.contains("equal")) {
      try {
        display.value = eval(display.value); // evaluate expression
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += value;
    }
  });
}

// Dark/Light toggle
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkMode = !darkMode;
  toggleBtn.textContent = darkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
});
