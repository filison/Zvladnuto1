document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("userLoggedIn");
  window.location.href = "login.html";
});
