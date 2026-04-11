/**
 * Financial Reports - Monthly Revenue Chart
 * Chart.js configuration and initialization
 */

(function () {
  "use strict";

  // Dynamically load Chart.js if not already loaded
  function loadChartJS() {
    return new Promise(function (resolve, reject) {
      if (typeof Chart !== "undefined") {
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js";
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  // Wait for DOM to be ready
  document.addEventListener("DOMContentLoaded", function () {
    loadChartJS()
      .then(function () {
        initRevenueChart();
      })
      .catch(function (err) {
        console.error("Failed to load Chart.js:", err);
      });
  });

  /**
   * Initialize the Monthly Revenue Bar Chart
   */
  function initRevenueChart() {
    const canvas = document.getElementById("revenueChart");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // Chart data - Full year monthly revenue vs expenses
    const monthlyData = {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Revenue",
          data: [
            32500, 38200, 45800, 41200, 48900, 52300, 42300, 48500, 62800,
            78200, 68900, 74150,
          ],
          backgroundColor: "rgba(192, 193, 255, 0.9)",
          borderColor: "rgba(192, 193, 255, 1)",
          borderWidth: 1,
          borderRadius: 8,
          borderSkipped: false,
          barThickness: 20,
        },
        {
          label: "Expenses",
          data: [
            12400, 14200, 17800, 15600, 18200, 19500, 15800, 18200, 22400,
            28600, 24100, 21850,
          ],
          backgroundColor: "rgba(255, 183, 131, 0.6)",
          borderColor: "rgba(255, 183, 131, 0.9)",
          borderWidth: 1,
          borderRadius: 8,
          borderSkipped: false,
          barThickness: 20,
        },
      ],
    };

    // Chart configuration
    const chartConfig = {
      type: "bar",
      data: monthlyData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 1200,
          easing: "easeOutQuart",
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: "rgba(30, 30, 40, 0.95)",
            titleColor: "#FFFFFF",
            bodyColor: "#B8B6D0",
            padding: 12,
            cornerRadius: 8,
            displayColors: true,
            titleFont: {
              family: "Outfit",
              size: 13,
              weight: 600,
            },
            bodyFont: {
              family: "Outfit",
              size: 12,
            },
            callbacks: {
              label: function (context) {
                const value = context.raw;
                return `${context.dataset.label}: $${value.toLocaleString()}`;
              },
              title: function (tooltipItems) {
                return `Month: ${tooltipItems[0].label} 2023`;
              },
            },
          },
        },
        scales: {
          x: {
            stacked: false,
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              color: "#9492A2",
              font: {
                family: "Outfit",
                size: 11,
                weight: 600,
              },
              padding: 12,
            },
          },
          y: {
            stacked: false,
            grid: {
              color: "rgba(148, 146, 162, 0.1)",
              drawBorder: false,
              tickLength: 0,
            },
            ticks: {
              color: "#9492A2",
              font: {
                family: "Outfit",
                size: 11,
                weight: 500,
              },
              padding: 8,
              callback: function (value) {
                return "$" + value / 1000 + "k";
              },
            },
            beginAtZero: true,
          },
        },
        onHover: (event, chartElement) => {
          const canvas = event.native.target;
          canvas.style.cursor = chartElement[0] ? "pointer" : "default";
        },
      },
    };

    // Initialize and store chart reference
    window.revenueChart = new Chart(ctx, chartConfig);
  }
})();
