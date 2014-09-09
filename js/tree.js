/**
 * Created by sensey on 9/9/14.
 */
$(function () {

    var svgDocument = $('#svgbaum');

    svgDocument.bind('percent', function (event) {

        var percent = event.percent;

        var s = Snap("#svgbaum");

        for (var i = 0; i < (percent / 1.5); i++) {

            var x = 0;
            while (x < 50 || x > 370) {
                x = Math.floor((Math.random() * 250) + 1);
            }

            var y = 0;
            while (y < 20 || y > 300) {
                y = Math.floor((Math.random() * 220) + 1);
            }

            var color = Math.floor((Math.random() * 100) + 1)

            var bigCircle = s.circle(x, y, 12);
            bigCircle.attr({
                fill: (color > (100 - percent)) ? "#006c00" : "#bada55",
                stroke: "#000000"
            })
        }

        console.info(event.percent);
    });

    svgDocument.trigger({
        type: 'percent',
        percent: 100
    })

    console.info('Hallo, hier bin ich :)');
});