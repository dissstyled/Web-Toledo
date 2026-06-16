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

<<<<<<< HEAD


function abrirModalEvento(idModal) {
    "use strict";
    $("#fondo-modal-eventos").show();
    $(idModal).show();
    setTimeout(function () {
        $(idModal).addClass("activa");
    }, 20);
}

function cerrarModalEvento() {
    "use strict";
    $(".modal-evento").removeClass("activa");
    setTimeout(function () {
        $(".modal-evento").hide();
        $("#fondo-modal-eventos").hide();
    }, 350);
}

=======
>>>>>>> f1f6c7e034f1424887b553288add4f145d25f811
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
<<<<<<< HEAD

    $("#evento-semana-santa").click(function () {
        abrirModalEvento("#modal-semana-santa");
    });

    $("#evento-corpus").click(function () {
        abrirModalEvento("#modal-corpus");
    });

    $("#evento-musica-el-greco").click(function () {
        abrirModalEvento("#modal-musica-el-greco");
    });

    $(".cerrar-modal-evento").click(function () {
        cerrarModalEvento();
    });

    $("#fondo-modal-eventos").click(function () {
        cerrarModalEvento();
    });

=======
>>>>>>> f1f6c7e034f1424887b553288add4f145d25f811
});
