// Put event listeners into place
window.addEventListener("DOMContentLoaded", function () {
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
            video.src = window.webkitURL.createObjectURL(stream);
            video.play();
        }, errBack);
    }
    else if (navigator.mozGetUserMedia) { // Firefox-prefixed
        navigator.mozGetUserMedia(videoObj, function (stream) {
            video.src = window.URL.createObjectURL(stream);
            video.play();
        }, errBack);
    }
}, false);

//Definitions-photo-css

$("#canvas").css("display", "none");



    // Get-Save Snapshot - image 
    document.getElementById("snap").addEventListener("click", function () {
    context.drawImage(video, 0, 0, 640, 480);
    var img = convertCanvasToImage();
    // the fade only works on firefox?
    $("#video").fadeOut("slow");
    document.getElementById("CamreShoot").appendChild(img);
    

    //some settings for photo
    $("CamreShoot").find(img).css("position", "relative");
    $('img').css("width", "320");
    $('img').css("height", "480");
   

    $("#tags").append("<div class=tag1 style=display:none>Tag1</div>");
    $("#tags").append("<div class=tag2 style=display:none>Tag2</div>");
    $("#tags").append("<div class=tag3 style=display:none>Tag3</div>");
    $("#tags").append("<div class=tag4 style=display:none>Tag4</div>");
    $("#tags").append("<div class=tag5 style=display:none>Tag5</div>");
    $("#tags").append("<div class=tag6 style=display:none>Tag6</div>");
    $("#tags").append("<div class=tag7 style=display:none>Tag7</div>");
    $("#tags").append("<div class=tag8 style=display:none>Tag8</div>");
    $("#tags").append("<div class=tag9 style=display:none>Tag9</div>");
    $("#tags").append("<div class=tag10 style=display:none>Tag10</div>");
    $("#snap").hide(); 
        
    });

// reset - clear - to Capture New Photo
document.getElementById("snapAgain").addEventListener("click", function () {
   
    $('.tag1').remove();
    $('.tag2').remove();
    $('.tag3').remove();
    $('.tag4').remove();
    $('.tag5').remove();
    $('.tag6').remove();
    $('.tag7').remove();
    $('.tag8').remove();
    $('.tag9').remove();
    $('.tag10').remove();
    $("#video").fadeIn("slow");
    $("img").remove();
    $("#canvas").fadeOut("slow");
    $("#snap").show();
    $("#snapAgain").show();
    SetUpCounter();


});

// Converts canvas to an image
function convertCanvasToImage(canvas) {
    var can = document.getElementById('canvas');
    var image = new Image();
    image.src = can.toDataURL();
    return image;
}