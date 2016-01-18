// Put event listeners into place
$(document).ready(function(){
    $("#iphoneSnap").on("change",gotPic);

    // Grab elements, create settings, etc.
    window.canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        video = document.getElementById("video"),
        videoObj = { "video": true },
        errBack = function (error) {
            console.log("Video capture error: ", error.code);
    };
   

    // Put video listeners into place
    if (navigator.getUserMedia) { // Standard
        navigator.getUserMedia(videoObj, function (stream) {
            video.src = stream;
            video.play();
        }, errBack);
    } else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
        navigator.webkitGetUserMedia(videoObj, function (stream) {
            video.src = window.URL.createObjectURL(stream);
            video.play();
        }, errBack);
    }
    else if (navigator.mozGetUserMedia) { // Firefox-prefixed
        navigator.mozGetUserMedia(videoObj, function (stream) {
            video.src = window.URL.createObjectURL(stream);
            video.play();
        }, errBack);
    }
//Definitions-photo-css

    $("#canvas").css("display", "none");
    $("#SubmitToGraphs").css("display", "none");

    // Get-Save Snapshot - image 
    document.getElementById("snap").addEventListener("click", function () {

        context.drawImage(video, 0, 0, 640, 480);
        $("#video").fadeOut("slow");

    // document.getElementById("CamreShoot").appendChild(img);
    

    //some settings for photo
        // $("CamreShoot").find(img).css("position", "relative");
        $('img').css("width", "100%");
        $('img').css("height", "100%");
        $("#myTags").css("display", "block");
        dataProduct();
        $("#SubmitToGraphs").css("display", "block");
        $("#snap").hide();
        
    });

    // reset - clear - to Capture New Photo
    document.getElementById("snapAgain").addEventListener("click", function () {
        $("#video").fadeIn("slow");
        $("img").remove();
        $("#canvas").fadeOut("slow");
        $("#snap").show();
        $("#snapAgain").show();
        $("#myTags").tagit("removeAll");
        $("#myTags").css("display", "none");
        $("#SubmitToGraphs").css("display", "none");
        TagObjectArr.clear();
    });


    //page3
    

    $("#SubmitToGraphs").on("click", function (event) {
        $.mobile.changePage("#page4", { transition: "slideup", changeHash: false });
    });

    $("#firdgefamliychange").on("click", function (event) {
        $.mobile.changePage("#page5", { transition: "slideup", changeHash: false });

    });

}, false);


// Converts canvas to an image
function convertCanvasToImage(canvas) {
    
    window.lastFrig = Date.now();
    var can = document.getElementById('canvas');
    $.ajax({
        type: "POST",
        url: "/main/save_img",
        data: {"imgBase64": can.toDataURL(),"name":lastFrig}
    }).done(function(o) {
        var img = $('<img id="dynamic">'); //Equivalent: $(document.createElement('img'))
        img.attr('src', "/assets/"+lastFrig+".png");
        img.appendTo('#CamreShoot');
        console.log('saved');
    });
}

function gotPic(event) {
    context.drawImage(video, 0, 0, 640, 480);
    convertCanvasToImage();
    $("#video").fadeOut("slow");
}