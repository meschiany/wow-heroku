//clear Array
Array.prototype.clear = function () {

    this.splice(0, this.length);
}

//Take name of product from database and put it in Input - for tag the product
function dataProduct() {
    var nameProduct = new Array();
    for (i = 0; i < items.data.length; i++) {
        nameProduct[i] = items.data[i].name;
        console.log(nameProduct[i]);
        
        
        $("#myTags").tagit({
            availableTags: ["ביסלי","במבה"],
            autocomplete: { delay: 0, minLength: 2 }
        });

    }
    
   // nameProduct.clear();
}

//value for tracking the tag
var counter1 = 0;
var counter2 = 0
var counter3 = 0;
var counter4 = 0;
var counter5 = 0;
var counter6 = 0;
var counter7 = 0;
var counter8 = 0;
var counter9 = 0;
var counter10 = 0;

//Array of Tag Object
var TagObjectArr = new Array();

//value for tracking number of objects
var counterClickTags = 0



//Restart tracking tag
function SetUpCounter() {

     counterClickTags = 0
     counter1 = 0;
     counter2 = 0
     counter3 = 0;
     counter4 = 0;
     counter5 = 0;
     counter6 = 0;
     counter7 = 0;
     counter8 = 0;
     counter9 = 0;
     counter10 = 0;
}

//build object when you Click for tag,this object need to connect with database 

function TagObject (pageX, pageY, counter) {
    var self = this;
    this.id = counter;
    this.pageX = pageX;
    this.pageY = pageY;
    this.getFull = function () {
        return self.pageX + "" + self.pageY;
    }
    

}



TagObject.prototype = {
    FullName: function (){
        return this.pageX + " " + pageY;
    }

};



$("#tags").on("click", function (event) {
    
    var thisEvent = event;
    console.log(thisEvent);
    console.log(thisEvent.pageX);
    console.log(thisEvent.pageY);
    if (counter1 == 0) {
        
        
        
        if (event.pageX <= 40 && event.pageY <= 480) {
            counter = counter + 1;
            var pageX = event.pageX;
            var pageY = event.pageY; 
            TagObjectArr[counterClickTags]=new TagObject(pageX, pageY, counterClickTags);
            $(".tag1").css("position", "fixed");
            $(".tag1").css("left", event.pageX);
            $(".tag1").css("top", event.pageY);
            $(".tag1").css("color", "red");
            $(".tag1").css("display", "block");
            $(".tag1").css("width", "64px");
            dataProduct();
           /* $("#myTags").tagit({
                availableTags: ["c++", "java", "php", "javascript", "ruby", "python", "c"],
                autocomplete: { delay: 0, minLength: 2 }
            });*/
            counterClickTags++;
		
        }
	

    }
    
    if (counter2 == 0) {
        
        
        
        if (event.pageX <= 80 && event.pageX > 40 && event.pageY <= 480) {
            counter2 = counter2 + 1;
            var pageX = event.pageX;
            var pageY = event.pageY;
            TagObjectArr[counterClickTags] = new TagObject(pageX, pageY, counterClickTags);
            $(".tag2").css("position", "fixed");
            $(".tag2").css("left", event.pageX);
            $(".tag2").css("top", event.pageY);
         
            $(".tag2").css("color", "red");
            $(".tag2").css("display", "block");
            counterClickTags++;
		
        }
	

    }
    
    if (counter3 == 0) {
        
        
        
        if (event.pageX <= 120 && event.pageX > 80 && event.pageY <= 480) {
            counter3 = counter3 + 1;
            var pageX = event.pageX;
            var pageY = event.pageY;
            TagObjectArr[counterClickTags] = new TagObject(pageX, pageY, counterClickTags);
            $(".tag3").css("position", "fixed");
            $(".tag3").css("left", event.pageX);
            $(".tag3").css("top", event.pageY);
            
            $(".tag3").css("color", "red");
            $(".tag3").css("display", "block");
            counterClickTags++;
		
        }
	

    }
    
    if (counter4 == 0) {
        
        
        
        if (event.pageX <= 160 && event.pageX > 120 && event.pageY <= 480) {
            counter4 = counter4 + 1;
            var pageX = event.pageX;
            var pageY = event.pageY;
            TagObjectArr[counterClickTags] = new TagObject(pageX, pageY, counterClickTags);
            $(".tag4").css("position", "fixed");
            $(".tag4").css("left", event.pageX);
            $(".tag4").css("top", event.pageY);
         
            $(".tag4").css("color", "red");
            $(".tag4").css("display", "block");
            counterClickTags++;
		
        }
	

    }
    
    if (counter5 == 0) {
        
        
        
        if (event.pageX <= 200 && event.pageX > 160 && event.pageY <= 480) {
            counter5 = counter5 + 1;
            var pageX = event.pageX;
            var pageY = event.pageY;
            TagObjectArr[counterClickTags] = new TagObject(pageX, pageY, counterClickTags); 
            $(".tag5").css("position", "fixed");
            $(".tag5").css("left", event.pageX);
            $(".tag5").css("top", event.pageY);
         
            $(".tag5").css("color", "red");
            $(".tag5").css("display", "block");
            counterClickTags++;
		
        }
	

    }
    if (counter6 == 0) {
        
        
        
        if (event.pageX <= 240 && event.pageX > 200 && event.pageY <= 480) {
            counter6 = counter6 + 1;
            var pageX = event.pageX;
            var pageY = event.pageY;
            TagObjectArr[counterClickTags] = new TagObject(pageX, pageY, counterClickTags);
            $(".tag6").css("position", "fixed");
            $(".tag6").css("left", event.pageX);
            $(".tag6").css("top", event.pageY);
        
            $(".tag6").css("color", "red");
            $(".tag6").css("display", "block");
            counterClickTags++;
		
        }
	

    }

    if (counter7 == 0) {
        
        
        
        if (event.pageX <= 280 && event.pageX > 240 && event.pageY <= 480) {
            counter7 = counter7 + 1;
            var pageX = event.pageX;
            var pageY = event.pageY;
            TagObjectArr[counterClickTags] = new TagObject(pageX, pageY, counterClickTags); 
            $(".tag7").css("position", "fixed");
            $(".tag7").css("left", event.pageX);
            $(".tag7").css("top", event.pageY);
           
            $(".tag7").css("color", "red");
            $(".tag7").css("display", "block");
            counterClickTags++;
		
        }
	

    }

    if (counter8 == 0) {
        
        
        
        if (event.pageX <= 300 && event.pageX > 280 && event.pageY <= 480) {
            counter8 = counter8 + 1;
            var pageX = event.pageX;
            var pageY = event.pageY;
            TagObjectArr[counterClickTags] = new TagObject(pageX, pageY, counterClickTags);
            $(".tag8").css("position", "fixed");
            $(".tag8").css("left", event.pageX);
            $(".tag8").css("top", event.pageY);
          
            $(".tag8").css("color", "red");
            $(".tag8").css("display", "block");
            counterClickTags++;
		
        }
	

    }

    if (counter9 == 0) {
        
        
        
        if (event.pageX <= 320 && event.pageX > 300 && event.pageY <= 480) {
            counter9 = counter9 + 1;
            var pageX = event.pageX;
            var pageY = event.pageY;
            TagObjectArr[counterClickTags] = new TagObject(pageX, pageY, counterClickTags);
            $(".tag9").css("position", "fixed");
            $(".tag9").css("left", event.pageX);
            $(".tag9").css("top", event.pageY);
         
            $(".tag9").css("color", "red");
            $(".tag9").css("display", "block");
            counterClickTags++;
		
        }
	

    
    }

    if (counter10 == 0) {
        
        
        
        if (event.pageX <= 280 && event.pageX > 240 && event.pageY <= 480) {
            counter10 = counter10 + 1;
            var pageX = event.pageX;
            var pageY = event.pageY;
            TagObjectArr[counterClickTags] = new TagObject(pageX, pageY, counterClickTags);
            $(".tag10").css("position", "fixed");
            $(".tag10").css("left", event.pageX);
            $(".tag10").css("top", event.pageY);
         
            $(".tag10").css("color", "red");
            $(".tag10").css("display", "block");
            counterClickTags++;
		
        }
	

    }

});