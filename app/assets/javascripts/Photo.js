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
    $('img').css("width", "100%");
    $('img').css("height", "100%");
    $("#myTags").css("display", "block");
    dataProduct();

   

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
    TagObjectArr.clear();
   


});

// Converts canvas to an image
function convertCanvasToImage(canvas) {
    var can = document.getElementById('canvas');
    var image = new Image();
    image.src = can.toDataURL();
    return image;
}