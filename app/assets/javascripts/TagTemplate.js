$(document).ready(function(){
    var options = { 
        // Aligning the text popups
        align: {
            x: 'center', // left, center or right
            y: 'center'  // top,  center or bottom
        },
        // The (relative) offset of the popups in pixels
        offset: {
            left: 0, // horizontal offset
            top: 12  // vertical offset
        },
        // event handlers of the tags
        handlers: {
            
            // Any vanilla JavaScript event is a valid key
            click: function (e) {
                this; // the DOM Node
                e;    // the Event
            },
            // For convenience, you can use strings to
            // show, hide and toggle the popups
            mouseenter: 'show',
            mouseleave: 'hide'
        }

    };

    var data = [
      // x and y values can be decimals (0-1)
        {
            x: 0.4938313449023861,
            y: 0.2872712742504409,
            
            // (Optional) Set the text of the popup.
            // If omitted, no popup window will appear.
            text: 'לחם-קל',
            
            // (Optional) Set the element’s attributes.
            attributes: {
                id: 'my-id',
                class: 'my-class'
            }
        }, {

            x: 0.4482781995661605,
            y: 0.6038497574955908,
            
            // (Optional) Set the text of the popup.
            // If omitted, no popup window will appear.
            text: 'חסה עמק יזרעאל',
            
            // (Optional) Set the element’s attributes.
            attributes: {
                id: 'my-id',
                class: 'my-class'
            }



        }, {

            x: 0.46454718004338397,
            y: 0.5218391754850088,
            
            // (Optional) Set the text of the popup.
            // If omitted, no popup window will appear.
            text: 'ביצים ממזרע -חבילה*12',
            
            // (Optional) Set the element’s attributes.
            attributes: {
                id: 'my-id',
                class: 'my-class'
            }

        }
    ];

    $('#Fridgefamliy').taggd(options, data);

});