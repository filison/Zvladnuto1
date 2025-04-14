document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("userLoggedIn");
  window.location.href = "login.html";
  document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.tip-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });
});
});
