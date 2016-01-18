//Array of Tag Object
// var TagObjectArr = new Array();

//value for tracking number of objects
var counterClickTags = 0

//object from database by word
var objectFromDataBase = new Array();

//clear Array
Array.prototype.clear = function () {  
    this.splice(0, this.length);
};

var clearcounterClickTags = function () {
    counterClickTags = 0;

};

// function getItemsByWord(word) {
//     $.ajax({
//         method: "GET",
//         url: "/main/search_items",
//         data: { "word": word },
//         dataType: "json"
//     }).done(function (data) {
//         console.log(data);
//     });
    
// }

function getItemsData(data) {
    $.ajax({
        method: "GET",
        url: "/main/search_items",
        data: { "word": data },
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


//Take name of product from database and put it in Input - for tag the product
// window.myCurrentTags = [];
function dataProduct() {
    var nameProduct = new Array();
    $("#myTags").tagit({
        availableTags: myData,
        autocomplete: { delay: 0, minLength: 2 },
        beforeTagAdded: function (event, ui) {

        }
    });
}

$(document).ready(function(){
    $("#SubmitToGraphs").click(function (event) {
        window.ArrayTags = $("#myTags").tagit("assignedTags");// array of tags that client put
        console.log(ArrayTags);
        getItemsData(ArrayTags);
        clearcounterClickTags();
    });
});



//build Object 

// function TagObject(name, company, price) {
//     var self = this;
//     this.price = price;
//     this.name = name;
//     this.company = company;
//     this.getFull = function () {
//         return self.pageX + "" + self.pageY;
//         // this
//     }
//     counterClickTags++;
// }



// TagObject.prototype = {
//     FullName: function () {
//         return this.pageX + " " + pageY;
//     }

// };