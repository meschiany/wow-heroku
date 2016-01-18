$(document).ready(function(){
	$("#startApp").click(function (event) {
        $.mobile.changePage("#page2", { transition: "slideup", changeHash: false });
    });

    $("#addFridge").on("click", function (event) {
        $.mobile.changePage("#page3", { transition: "slideup", changeHash: false });
    });

    $("#firdgeFamliy").on("click", function (event) {
        $.mobile.changePage("#page5", { transition: "slideup", changeHash: false });

    });
});