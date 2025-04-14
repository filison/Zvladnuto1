import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAcg0qqzWJwkxmopkTgzfasMqd3siQNxIU",
  authDomain: "zvladnuto-4e6cb.firebaseapp.com",
  projectId: "zvladnuto-4e6cb",
  storageBucket: "zvladnuto-4e6cb.appspot.com",
  messagingSenderId: "299881468872",
  appId: "1:299881468872:web:8c36e215cf40a91748e6fd",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Ověření přihlášení
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  }
});

// ✅ Odhlášení
document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      signOut(auth).then(() => {
        window.location.href = "login.html";
      });
    });
  }

  // ✅ Rozbalovací tipy
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

  // ✅ Vykreslení grafu
  const chartCanvas = document.getElementById('myChart');
  if (chartCanvas) {
    const ctx = chartCanvas.getContext('2d');
    const myChart = new Chart(ctx, {
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
            ticks: {
              stepSize: 1000
            }
          }
        }
      }
    });
  }
});