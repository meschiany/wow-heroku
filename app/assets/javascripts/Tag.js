//Array of Tag Object
var TagObjectArr = new Array();

//value for tracking number of objects
var counterClickTags = 0

//object from database by word
var objectFromDataBase = new Array();

//clear Array
Array.prototype.clear = function () {
    
    this.splice(0, this.length);
}

var clearcounterClickTags = function () {
    counterClickTags = 0;

};

function getItemsByWord(word) {
    $.ajax({
        method: "GET",
        url: "/main/search_items",
        data: { "word": word },
        dataType: "json"
    }).done(function (data) {
        console.log(data);
    });
    
}

function getNamesByWord(word) {
    $.ajax({
        method: "GET",
        url: "/main/search_items",
        data: { "word": word },
        dataType: "json"
    }).done(function (data) {
        items = data;
        names = [];
        for (i = 0; i < items.length; i++) {
            names.push(items[i].name);
        }
        console.log(names);
    });
}

//Take name of product from database and put it in Input - for tag the product
function dataProduct() {
    var nameProduct = new Array();
    for (i = 0; i < items.data.length; i++) {
        nameProduct[i] = items.data[i].name;
        console.log(nameProduct[i]);
        TagObjectArr[counterClickTags] = new TagObject(items.data[i].name, items.data[i].companyName, items.data[i].price);//create the object from database
        
        $("#myTags").tagit({
            availableTags: [],
            autocomplete: {
                source: function (request, response) {
                    return console.log(getNamesByWord(request.term));
                //availableTags.push(getItemsByWord(request.term)); daniel here the req for search in database
                }, minLength: 2
 }, 
            beforeTagAdded: function (event, ui) {
                //objectFromDataBase = getNamesByWord(ui.tagLabel);
                //TagObjectArr[counterClickTags] = new TagObject(objectFromDataBase.data[i].name, objectFromDataBase.data[i].companyName, objectFromDataBase.data[i].price);//search in database by name of tag  and create the object . 
            }
        });

    }
    
   // nameProduct.clear();
}


$("#ok").on("click", function (event) {
    var ArrayTags = $("#myTags").tagit("assignedTags");// array of tags that client put
    //ForLoop validate tags/objects
    for (var i = 0; i < TagObjectArr.length; i++) {
        console.log(TagObjectArr[i].name);
        for (var j = 0; j < ArrayTags.length; j++) {
            if (TagObjectArr[i].name == ArrayTags[j]) {
                ///here you pass TagObjectArr.price ,TagObjectArr.company to the next page -graphs! 
            }
        }
    }
    //here daniel you  need to send the object to the database and save him in array.
    
    clearcounterClickTags();
    objectFromDataBase.clear();

});



//build Object 

function TagObject(name, company, price) {
    var self = this;
    this.price = price;
    this.name = name;
    this.company = company;
    this.getFull = function () {
        return self.pageX + "" + self.pageY;
        this
    }
    
    counterClickTags++;
}



TagObject.prototype = {
    FullName: function () {
        return this.pageX + " " + pageY;
    }

};