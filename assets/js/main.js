/* =========================================================
   MKCL Arabic - Electronic Exam System
   Main JavaScript
   - Bootstrap is loaded from CDN.
   - Chart.js is loaded from CDN.
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initializeCharts();
});

function initializeCharts() {
  if (typeof Chart === "undefined") return;

  Chart.defaults.font.family = "'Cairo', sans-serif";
  Chart.defaults.color = "#334155";

  const questionTypesCanvas = document.getElementById("questionTypes");
  const difficultyCanvas = document.getElementById("difficultyChart");
  const reportsCanvas = document.getElementById("reportsChart");

  if (questionTypesCanvas) {
    new Chart(questionTypesCanvas, {
      type: "doughnut",
      data: {
        labels: ["اختيار من متعدد", "اختيار متعدد", "صح/خطأ", "مطابقة", "مقالي", "وسائط"],
        datasets: [{
          data: [35, 20, 15, 10, 10, 10],
          backgroundColor: ["#0ea5e9", "#f97316", "#10b981", "#6366f1", "#ef4444", "#22d3ee"],
          borderColor: "#ffffff",
          borderWidth: 3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            position: "bottom"
          },
          tooltip: {
            rtl: true,
            textDirection: "rtl"
          }
        }
      }
    });
  }

  if (difficultyCanvas) {
    new Chart(difficultyCanvas, {
      type: "bar",
      data: {
        labels: ["سهل", "متوسط", "صعب"],
        datasets: [{
          label: "نسبة التوزيع",
          data: [25, 55, 20],
          backgroundColor: ["#22d3ee", "#f97316", "#0d2b4f"],
          borderRadius: 12
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            rtl: true,
            textDirection: "rtl"
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              callback: value => `${value}%`
            }
          }
        }
      }
    });
  }

  if (reportsCanvas) {
    new Chart(reportsCanvas, {
      type: "radar",
      data: {
        labels: ["Student", "Class", "Exam", "Topic", "CLO", "Audit"],
        datasets: [{
          label: "Report Coverage",
          data: [92, 86, 90, 84, 94, 82],
          borderColor: "#0ea5e9",
          backgroundColor: "rgba(14,165,233,.18)",
          pointBackgroundColor: "#f97316"
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            rtl: true,
            textDirection: "rtl"
          }
        },
        scales: {
          r: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  }
}
