/*global $, Chart*/

function openMenu() {
    "use strict";
    $("#menu ul").css("top", "4.75rem");
    $("#menu .fa-bars").hide();
    $("#menu .fa-xmark").show();
}

function closeMenu() {
    "use strict";
    $("#menu ul").css("top", "-20rem");
    $("#menu .fa-xmark").hide();
    $("#menu .fa-bars").show();
}

$(document).ready(function () {
    "use strict";
    var canvas = document.getElementById("graficoTemperatura");
    var estilos = getComputedStyle(document.documentElement);
    var colorGranate = estilos.getPropertyValue("--color-granate");
    var colorGranateOscuro = estilos.getPropertyValue("--color-granate-oscuro");

    if (canvas !== null) {
        new Chart(canvas, {
            type: "line",
            data: {
                labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
                datasets: [{
                    label: "Temperatura media",
                    data: [6, 8, 11, 14, 18, 24, 28, 27, 22, 16, 10, 7],
                    borderColor: colorGranate,
                    backgroundColor: colorGranateOscuro,
                    pointBackgroundColor: colorGranateOscuro,
                    pointBorderColor: colorGranateOscuro,
                    tension: 0.35
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function (value) {
                                return value + "º";
                            }
                        }
                    }
                }
            }
        });
    }
});
