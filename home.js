// Odhlášení
document.addEventListener("DOMContentLoaded", function () {
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("userLoggedIn");
      window.location.href = "login.html";
    });
  }

  // Funkce pro rozbalování tipů
  const buttons = document.querySelectorAll(".tip-toggle");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;

      // Zavřít ostatní
      document.querySelectorAll(".tip-content").forEach(el => {
        if (el !== content) el.style.display = "none";
      });

      // Přepnout aktuální
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });
});