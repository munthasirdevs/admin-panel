/**
 * Activity Logs Charts Optimization
 * XenonOS Premium Dashboard v5.0
 */

document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("activityTrendChart").getContext("2d");

  // Premium Gradient for Primary
  const primaryGradient = ctx.createLinearGradient(0, 0, 0, 300);
  primaryGradient.addColorStop(0, "rgba(99, 102, 241, 0.2)");
  primaryGradient.addColorStop(1, "rgba(99, 102, 241, 0)");

  // Premium Gradient for Tertiary
  const tertiaryGradient = ctx.createLinearGradient(0, 0, 0, 300);
  tertiaryGradient.addColorStop(0, "rgba(255, 183, 131, 0.2)");
  tertiaryGradient.addColorStop(1, "rgba(255, 183, 131, 0)");

  const data = {
    labels: [
      "00:00",
      "02:00",
      "04:00",
      "06:00",
      "08:00",
      "10:00",
      "12:00",
      "14:00",
      "16:00",
      "18:00",
      "20:00",
      "22:00",
    ],
    datasets: [
      {
        label: "System Actions",
        data: [450, 320, 280, 410, 890, 1100, 1450, 1300, 1200, 1100, 950, 600],
        borderColor: "#6366f1",
        backgroundColor: primaryGradient,
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: "#6366f1",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 2,
      },
      {
        label: "Security Flags",
        data: [2, 1, 3, 0, 4, 2, 8, 4, 3, 2, 5, 2],
        borderColor: "#ffb783",
        backgroundColor: tertiaryGradient,
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: "#ffb783",
        pointHoverBorderColor: "#fff",
        pointHoverBorderWidth: 2,
        yAxisID: "y1",
      },
    ],
  };

  new Chart(ctx, {
    type: "line",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "#1c1f2a",
          titleFont: { family: "Syne", size: 13 },
          bodyFont: { family: "Outfit", size: 12 },
          padding: 12,
          cornerRadius: 12,
          displayColors: true,
          borderColor: "rgba(255,255,255,0.05)",
          borderWidth: 1,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            color: "#64748b",
            font: {
              family: "Outfit",
              size: 10,
            },
          },
        },
        y: {
          grid: {
            color: "rgba(100, 116, 139, 0.05)",
            drawBorder: false,
          },
          ticks: {
            color: "#64748b",
            font: {
              family: "Outfit",
              size: 10,
            },
          },
        },
        y1: {
          position: "right",
          grid: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      },
      interaction: {
        intersect: false,
        mode: "index",
      },
    },
  });
});
