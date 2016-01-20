function createTags(fridgeType,destPage){
    var options = {
        align: {x: 'center', y: 'center'},
        offset: {left: 0,top: 12},
        handlers: {
            click: function (e) {
                this; // the DOM Node
                e;    // the Event
            },
            mouseenter: 'show',
            mouseleave: 'hide'
        }
    };
    var pos;
    switch (fridgeType){
        case "family":
            pos = [
                {x:0.5,y:0.1},
                {x:0.5,y:0.4},
                {x:0.5,y:0.8},
                {x:0.6,y:0.1},
                {x:0.6,y:0.4},
                {x:0.6,y:0.8},
                {x:0.7,y:0.1},
                {x:0.7,y:0.4},
                {x:0.7,y:0.8},
            ];
        break;
        case "couple":
            pos = [
                {x:0.2,y:0.1},
                {x:0.2,y:0.4},
                {x:0.2,y:0.8},
                {x:0.1,y:0.1},
                {x:0.1,y:0.4},
                {x:0.1,y:0.8},
                {x:0.3,y:0.1},
                {x:0.3,y:0.4},
                {x:0.3,y:0.8},
            ];
        break;
        case "student":
            pos = [
                {x:0.4,y:0.1},
                {x:0.4,y:0.4},
                {x:0.4,y:0.8},
                {x:0.1,y:0.1},
                {x:0.1,y:0.4},
                {x:0.1,y:0.8},
                {x:0.7,y:0.1},
                {x:0.7,y:0.4},
                {x:0.7,y:0.8},
            ];
        break;
    }
    var data = [];
    for (var i = 0; i < wow[fridgeType].length; i++) {
        obj = {
            x:pos[i].x,
            y:pos[i].y,
            text: wow[fridgeType][i].name,
            attributes:{
                price: wow[fridgeType][i].price,
                companyName: wow[fridgeType][i].name
            }
        };
        data.push(obj);
    }
    $("#"+destPage).taggd(options, data);
}