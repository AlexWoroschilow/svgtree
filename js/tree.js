/**
 * Created by sensey on 9/9/14.
 */

(function ($) {

    function Tree(selector) {

        this.init(selector);
    }


    $.extend(Tree.prototype, {

        snap: undefined,

        fields: function (percent) {

            var fields = this.snap.selectAll('circle[class=field]');
            if (typeof(fields) != 'null') {
                fields.forEach(function (element) {
                    element.remove();
                });
            }

            for (var i = 0; i < (percent / 2); i++) {

                var x = 0;
                // get x-coordinate [50, 370]
                while (x < 50 || x > 370) {
                    // calculate random x-coordinate from 1 to 250
                    x = Math.floor((Math.random() * 250) + 1);
                }

                var y = 0;
                // get y-coordinate [20, 300]
                while (y < 20 || y > 300) {
                    // calculate random y-coordinate from 1 to 250
                    y = Math.floor((Math.random() * 220) + 1);
                }

                // calculate probability for color
                var colorProbability = Math.floor((Math.random() * 100) + 1)

                var colorGreen1 = '#00b400';
                var colorGreen2 = '#005800';

                var colorYellow1 = "#ddf622";
                var colorYellow2 = "#dd6c22";

                var colorGreen = colorGreen1;
                var colorYellow = colorYellow1;
                // Change colors for right bottom...
                if (x > 170 && y > 100) {
                    colorGreen = colorGreen2;
                    colorYellow = colorYellow2;
                }

                // Calculate correct color with respect
                // to color probability
                var color = colorGreen;
                if (colorProbability < (100 - percent)) {
                    color = colorYellow;
                }

                // Draw a circle on position x, y
                // with radius 12
                this.snap.circle(x, y, 12)
                    .attr({
                        fill: color,
                        class: 'field',
                        stroke: "#000000"
                    })


            }
        },

        init: function (selector) {

            // get svg block by id='svgbaum'
            this.snap = Snap(selector);
        }
    })


    $.fn.tree = function (selector) {

        var tree = $(this).data('tree');
        if (typeof(tree) == 'undefined') {
            tree = new Tree(selector);
            $(this).data('tree', tree);
        }

        return tree;
    };

})($);


$(function () {

    var svgDocument = $('#svgbaum');

    var svgTree = $(document)
        .tree("#svgbaum");


    svgDocument.bind('percent', function (event) {
        // Store percent value
        // into local variable
        svgTree.fields(event.percent);
    });


    // hier wird die Anzahl der Procente uebergeben
    svgDocument.trigger({
        type: 'percent',
        percent: 100
    })

    console.info('Hallo, hier bin ich :)');
});