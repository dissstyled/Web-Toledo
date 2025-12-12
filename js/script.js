/*global $*/

function openMenu() {
    "use strict";
    $("#menu ul").css("top", "170px");
    $("#menu .fa-bars").hide();
    $("#menu .fa-xmark").show();
}

function closeMenu() {
    "use strict";
    $("#menu ul").css("top", "calc(100% + 170px)");
    $("#menu .fa-xmark").hide();
    $("#menu .fa-bars").show();
}