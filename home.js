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
    });
  });
});
    });
  });
});
});
