/* Toggle switch */

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded");
    document.querySelector("input").addEventListener("click", function () {
      if (document.querySelector("input").checked) {
        document.body.classList.add("dark-mode");
        document.querySelector(".toggle-switch").style.backgroundPosition = "5% 100%";
        document.querySelector(".toggle-switch").style.boxShadow = "0 0 15px 10px hsl(0, 0%, 0%, 0.1) inset";
      } else {
        document.body.classList.remove("dark-mode");
        document.querySelector(".toggle-switch").style.backgroundPosition = "100% 100%";
        document.querySelector(".toggle-switch").style.boxShadow = "0 0 15px 10px hsl(0, 0%, 0%, 0.1) inset";
      }
    });
  });