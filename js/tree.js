/**
 * Created by sensey on 9/9/14.
 */
$(function () {


    var svgDocument = $('#svgbaum');

    svgDocument.bind('percent', function (event) {

        console.info(event.percent);
    });

    svgDocument.trigger({
        type: 'percent',
        percent: 12
    })

    console.info('Hallo, hier bin ich :)');
});