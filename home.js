// Po načtení stránky
document.addEventListener("DOMContentLoaded", function () {
  // Odhlášení uživatele
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("userLoggedIn");
      window.location.href = "login.html";
    });
  }

  // Rozbalovací tipy
  const buttons = document.querySelectorAll(".tip-toggle");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      const isVisible = content.style.display === "block";

      // Zavřít všechny ostatní
      document.querySelectorAll(".tip-content").forEach(el => {
        if (el !== content) el.style.display = "none";
      });

      // Přepnout viditelnost u kliknutého
      content.style.display = isVisible ? "none" : "block";
    });
  });
});