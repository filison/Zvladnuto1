
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("navbar");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("hidden");
    });
  }

  const buttons = document.querySelectorAll(".tip-toggle");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      document.querySelectorAll(".tip-content").forEach(el => {
        if (el !== content) el.style.display = "none";
      });
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });

  const chartCanvas = document.getElementById('myChart');
  if (chartCanvas) {
    new Chart(chartCanvas.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Příjmy', 'Výdaje'],
        datasets: [{
          label: 'Přehled (Kč)',
          data: [12000, 7800],
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
            ticks: { stepSize: 1000 }
          }
        }
      }
    });
  }
});
