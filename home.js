document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("userLoggedIn");
  window.location.href = "login.html";
  document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.tip-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
      document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.tip-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const isVisible = content.style.display === 'block';

      // Skryj ostatní rozbalené tipy
      document.querySelectorAll('.tip-content').forEach(tc => tc.style.display = 'none');

      // Zobraz nebo skryj aktuální
      content.style.display = isVisible ? 'none' : 'block';
      document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".tip-toggle");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;

      // Zavřít všechny ostatní
      document.querySelectorAll(".tip-content").forEach(el => {
        if (el !== content) el.style.display = "none";
      });

      // Přepnout viditelnost u kliknutého
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });
});
    });
  });
});
    });
  });
});
});
