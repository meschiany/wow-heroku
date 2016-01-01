//Array of Tag Object
var TagObjectArr = new Array();

//value for tracking number of objects
var counterClickTags = 0


//clear Array
Array.prototype.clear = function () {
    
    this.splice(0, this.length);
}

var clearcounterClickTags = function () {
    counterClickTags = 0;

};

function getItemsByWord(word){
    $.ajax({
        method: "GET",
        url: "/main/search_items",
        data:{"word":word},
        dataType: "json"
    }).done(function(data){
        console.log(data);
    });
    
}

function getNamesByWord(word){
    $.ajax({
        method: "GET",
        url: "/main/search_items",
        data:{"word":word},
        dataType: "json"
    }).done(function(data){
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
            availableTags: nameProduct,
            autocomplete: { source: function (request, response) {

                }, minLength: 2
            }, //daniel i need here data if he try to do 3 autocomplete
            beforeTagAdded: function (event, ui) { ///when the user put two character You have to take the data from database
                // do something special
                //TagObjectArr[counterClickTags] = new TagObject(items.data[i].name, items.data[i].companyName, items.data[i].price);//create the object from database  /daniel ask me here 

                console.log(ui.tag);
                console.log(ui.tagLabel);
            }
        });

    }
    
   // nameProduct.clear();
}


$("#boom").on("click", function (event) {
    var ArrayTags = $("#myTags").tagit("assignedTags");// array of tags that client put
    //ForLoop validate tags/objects
    for (var i = 0; i < TagObjectArr.length; i++) {
        console.log(TagObjectArr[i].name);
        for (var j = 0; j < ArrayTags.length; j++) {
            if (TagObjectArr[i].name == ArrayTags[j]) {
                console.log("yes boba");
            }
        }
    }
    //TagObjectArr can send this object back to the data base
    
    clearcounterClickTags();
});



//build object when you Click for tag,this object need to connect with database 

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