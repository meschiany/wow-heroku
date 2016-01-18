$(document).ready(function(){
	$("#startApp").click(function (event) {
        alert(2);
        $.mobile.changePage("#page2", { transition: "slideup", changeHash: false });
    });
});