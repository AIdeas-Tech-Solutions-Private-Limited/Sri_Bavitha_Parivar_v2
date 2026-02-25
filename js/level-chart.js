(function () {
  "use strict";

  var canvas = document.getElementById("levelIncomesChart");
  if (!canvas) return;

  if (typeof ChartDataLabels !== "undefined") {
    Chart.register(ChartDataLabels);
  }

  var ctx = canvas.getContext("2d");

  var labels = [
    "L-1",
    "L-2",
    "L-3",
    "L-4",
    "L-5",
    "L-6",
    "L-7",
    "L-8",
    "L-9",
    "L-10",
  ];
  var data = [12, 9, 7, 6, 5, 4, 3, 2, 1, 1];
  var gold = "rgba(108, 0, 176, 0.9)";
  var goldBorder = "rgba(180, 40, 253, 0.6)";
  var silver = "rgba(180, 40, 253, 0.15)";
  var silverBorder = "rgba(180, 40, 253, 0.3)";
  var backgroundColors = [];
  var borderColors = [];
  for (var i = 0; i < data.length; i++) {
    backgroundColors.push(i % 2 === 0 ? gold : silver);
    borderColors.push(i % 2 === 0 ? goldBorder : silverBorder);
  }

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Percentage (%)",
          data: data,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
          barPercentage: 0.7,
          categoryPercentage: 0.85,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2,
      layout: {
        padding: { top: 12, right: 12, bottom: 4, left: 4 },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 12,
          grid: {
            color: "rgba(108, 0, 176, 0.1)",
            drawBorder: false,
          },
          ticks: {
            stepSize: 3,
            color: "#1a1a2e",
            font: { size: 11, weight: "600" },
            callback: function (value) {
              return value + "%";
            },
          },
        },
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: "#1a1a2e",
            font: { size: 12, weight: "600" },
            maxRotation: 0,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "rgba(18, 18, 18, 0.92)",
          titleColor: "#B428FD",
          bodyColor: "#ffffff",
          borderColor: "rgba(180, 40, 253, 0.4)",
          borderWidth: 1,
          padding: 10,
          callbacks: {
            label: function (context) {
              return "Level income: " + context.parsed.y + "%";
            },
          },
        },
        datalabels: {
          display: false,
        },
      },
      animation: {
        duration: 600,
      },
    },
  });
})();
