(function () {
  "use strict";

  var canvas = document.getElementById("bonanzaPieChart");
  if (!canvas) return;

  if (typeof ChartDataLabels !== "undefined") {
    Chart.register(ChartDataLabels);
  }

  var ctx = canvas.getContext("2d");

  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Primary Leg", "Secondary Leg", "Tertiary Leg"],
      datasets: [
        {
          data: [40, 30, 30],
          backgroundColor: [
            "#6C00B0" /* Dark Purple */,
            "#B428FD" /* Light Purple */,
            "#9010E0" /* Mid Purple */,
          ],
          borderColor: "rgba(255, 255, 255, 0.3)",
          borderWidth: 1,
          hoverOffset: 8,
          hoverBorderColor: "rgba(180, 40, 253, 0.8)",
          hoverBorderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 1,
      layout: {
        padding: 8,
      },
      rotation: -90,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: true,
          callbacks: {
            label: function (context) {
              var label = context.label || "";
              var value = context.parsed || 0;
              return label + ": " + value + "% of Business Volume";
            },
          },
        },
        datalabels: {
          color: "#fff",
          font: {
            size: 18,
            weight: "bold",
          },
          formatter: function (value) {
            return value + "%";
          },
          textShadowColor: "rgba(0, 0, 0, 0.5)",
          textShadowBlur: 4,
          anchor: "center",
          align: "center",
        },
      },
      animation: {
        animateRotate: true,
        animateScale: true,
        duration: 800,
      },
    },
  });
})();
