
function getItemsData() {
    $.ajax({
        method: "GET",
        url: "/main/search_items",
        data: { "word": wow.myTags },
        dataType: "json"
    }).done(function (data) {
        console.log(data);
        taggedItems = data;
        for (i = 0; i < taggedItems.length; i++) {
            names.push(taggedItems[i][0].price);
        }
        console.log(names);
    });
}
function setTags(){
    var options = {
        edit: true,
        align: {y: 'top'},
        offset: {top: 10},
        handlers: {click: 'toggle'}
    };
    var data = [];
    wow.taggd = $('.taggd').taggd( options, data );

    wow.taggd.on('change', function() {
        resetMyTags();
    });
}

function resetMyTags(){
    wow.myTags = [];
    for (var i = 0; i < wow.taggd.data.length; i++) {
        if (wow.taggd.data[i].text!==""){
            wow.myTags.push(wow.taggd.data[i].text);
        }
    }
    if (wow.myTags.length){
        console.log(wow.myTags);
    }
}

function changeFridge(page,destPage){
    $.mobile.changePage("#"+page, { transition: "slideup", changeHash: false });
    $(page).ready(function(){
        setTimeout(function(){ createTags(page,destPage); }, 250);
    });
}
$(document).ready(function(){
    $("#startApp").click(function (event) {
        $.mobile.changePage("#page2", { transition: "slideup", changeHash: false });
    });

    $("#addFridge").on("click", function (event) {
        // startCamera();
        setTimeout(function(){
            setTags();
            $("#myFridge").append(wow.datalist);
        }, 500);
        $.mobile.changePage("#myFridge", { transition: "slideup", changeHash: false });
        // $.mobile.changePage("#page3", { transition: "slideup", changeHash: false });
    });

    $("#fridgeFamliy").on("click", function (event) {
        changeFridge("family","fridgeFamliyTags");
    });

    $("#fridgeStudent").on("click", function (event) {
        changeFridge("student","fridgeStudentTags");
    });

    $("#fridgeCouple").on("click", function (event) {
        changeFridge("couple","fridgeCoupleTags");
    });

    $("#SubmitToGraphs").on("click", function (event) {
        setTimeout(function(){
            initGraph();
        }, 500);
        $.mobile.changePage("#page4", { transition: "slideup", changeHash: false });
    });


    // -----------------------------------
    //listen to iphone
    // $("#iphoneSnap").on("change",gotPic);
});




