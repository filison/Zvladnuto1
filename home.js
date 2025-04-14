// Ověření přihlášení
document.addEventListener("DOMContentLoaded", () => {
  const userLoggedIn = localStorage.getItem("userLoggedIn");
  if (!userLoggedIn) {
    window.location.href = "login.html";
  }
});

// Odhlášení
document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("userLoggedIn");
      window.location.href = "login.html";
    });
  }
});

// Rozbalovací tipy
document.addEventListener("DOMContentLoaded", () => {
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

// Vykreslení grafu
document.addEventListener("DOMContentLoaded", function () {
  const chartCanvas = document.getElementById('myChart');
  if (chartCanvas) {
    const ctx = chartCanvas.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Příjmy', 'Výdaje'],
        datasets: [{
          label: 'Přehled (Kč)',
          data: [12000, 7800], // Zde můžeš dynamicky měnit hodnoty
          backgroundColor: ['#4CAF50', '#F44336'],
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1000
            }
          }
        }
      }
    });
  }
});