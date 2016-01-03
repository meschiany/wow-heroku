///Main javascript 

//page1

$("#StartApp").on("click", function (event) {
    $.mobile.changePage("#page2", { transition: "slideup", changeHash: false });
});

//page2

$("#AddFridge").on("click", function (event) {
    $.mobile.changePage("#page3", { transition: "slideup", changeHash: false });
});



//page3

$(function () {

    $("#SubmitToGraphs").on("click", function (event) {
        $.mobile.changePage("#page4", { transition: "slideup", changeHash: false });
    });


});