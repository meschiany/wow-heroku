$(document).ready(function(){
    //build clickTag object
    function TagObject(pageX, pageY,counter){
        this.id = counter;
        this.pageX = pageX;
        this.pageY = pageY;
        this.GetPage = function () {
            return "hello" + pageX + "  " + pageY;
        };
        

    };
    function s(string){
        var string = string + "px";
        return string;
    }
    //build tag in the dom
    function TagOnDom(arr,counter){
        
        $("#Tag").append('<section></section>');
        $("section").last().attr('id', arr[counter].id.toString());
        $("section").last().css({ "position": "relative","left":s(arr[counter].pageX),"top": s(arr[counter].pageY)});
        $("section").offset({ left: arr.pageX, top: arr.pageY });

    };
    var counter = 0;
    var arr = new Array();

    document.getElementById("canvas").addEventListener("click", function () {
        alert("click in canves");
        document.getElementById("canvas").setAttribute("class", "democlass");
        
    });
});