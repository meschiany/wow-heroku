var App = angular.module('App', ['ngRoute']);

App.config(['$routeProvider', function ($routeProvider) {
        
        $routeProvider.
		when('/myfridge', {
            templateUrl: '../views/myfridge.html',
            controller: 'FridgeController'
        })


    }]);


App.controller('IndexController', function ($scope) {
    
    

    console.log('indexPagecontroller');
    $("#myTags").tagit({
        availableTags: ["c++", "java", "php", "javascript", "ruby", "python", "c"],
        autocomplete: { delay: 0, minLength: 2 }
    });
    $(".ui-loader").css("display", "none"); //t=Tag Result display none
   

});
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

///build the objects -"whereTheMoneyGo"-from the Tag
/*$(document).on("click", function (event) {
  
        
        if (event.pageX < 600 && event.pageY < 600) {
            
            
            arr[counter] = new TagObject(event.pageX, event.pageY, counter);
            TagOnDom(arr, counter);
            counter = counter + 1;

        
        };
    
});*/
$("#snapAgain").on("click", function (event) {
    
    
    alert("sanp agian push");
    
   
    
});

document.getElementById("canvas").addEventListener("click", function () {
    alert("click in canves");
    document.getElementById("canvas").setAttribute("class", "democlass");
    
});



