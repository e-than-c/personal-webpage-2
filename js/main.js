/* Toggle switch */

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded");

  const themeToggle = document.querySelector("input");
  const body = document.body;

  // Check the saved theme state in localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    themeToggle.checked = true;
    body.classList.add("dark-mode");
    document.querySelector(".toggle-switch").style.backgroundPosition = "5% 100%";
    document.querySelector(".toggle-switch").style.boxShadow = "0 0 15px 10px hsl(0, 0%, 0%, 0.1) inset";
  } else {
    themeToggle.checked = false;
    body.classList.remove("dark-mode");
    document.querySelector(".toggle-switch").style.backgroundPosition = "100% 100%";
    document.querySelector(".toggle-switch").style.boxShadow = "0 0 15px 10px hsl(0, 0%, 0%, 0.1) inset";
  }

  // Toggle dark mode and save the state in localStorage
  themeToggle.addEventListener("click", function () {
    if (themeToggle.checked) {
      body.classList.add("dark-mode");
      document.querySelector(".toggle-switch").style.backgroundPosition = "5% 100%";
      document.querySelector(".toggle-switch").style.boxShadow = "0 0 15px 10px hsl(0, 0%, 0%, 0.1) inset";
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-mode");
      document.querySelector(".toggle-switch").style.backgroundPosition = "100% 100%";
      document.querySelector(".toggle-switch").style.boxShadow = "0 0 15px 10px hsl(0, 0%, 0%, 0.1) inset";
      localStorage.setItem("theme", "light");
    }
  });
});