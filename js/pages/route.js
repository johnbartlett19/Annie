var page_name = 'route';

var text_string_02 = "https://mapsengine.google.com/map/edit?mid=z-ZbHxEJfSd4.kyUAUWnJPOwA";

var text_string_01 = "These icons show maps of the adventurer's route by day.  Click on each one to get a larger" +
    "view, or  <a href='" + text_string_02 + "'><b>CLICK HERE</b></a> to get an interactive Google map with the whole route";

/* The outbound route and the inbound route are now being shown on separate layers, so you can see the routes separately.
The markers for the outbound route are red, and the markers for the inbound route are green.  The outbound path is
blue and the inbound path is black.  You can turn off the layers on the left side menu to see the different pieces.

 */

var row_data = [
    ['text', [
        [text_string_01]
    ]],
    ['text', [
        ["The outbound route and the inbound route are now being shown on separate layers, so you can see the routes " +
            "separately. The markers for the outbound route are red drops, and the markers for the inbound route are " +
            "green stars.  The outbound path is blue and the inbound path is black.  You can turn off the layers " +
            "by clicking on the menu icon in the upper left corner of the Google map and then unchecking the box " +
            " next to the layer you want to turn off.  There are separate layers for the markers and for the " +
            "route."]
    ]],
    ['picblk', [
        [page_name, '#one', "route_140604.jpg", "Wed 4-June-2014, Alexandria Bay, NY"],
        [page_name, '#one', "route_140605.jpg", "Thu 5-June-2014, Espanola, ON"],
        [page_name, '#one', "route_140606.jpg", "Fri 6-June-2014, Ishpeming, MI"],
        [page_name, '#one', "route_140607.jpg", "Sat 7-June-2014, Bagley, MN"]
    ]],
    ['picblk', [
        [page_name, '#one', "route_140608.jpg", "Sun 8-June-2014, Minot, ND"],
        [page_name, '#one', "route_140609.jpg", "Mon 9-June-2014, Swift Current, SK"],
        [page_name, '#one', "route_140610.jpg", "Tue 10-June-2014, Calgary, AB"],
        [page_name, '#one', "route_140611.jpg", "Wed 11-June-2014, Jasper, AB"]
    ]],
    ['picblk', [
        [page_name, '#one', "route_140612.jpg", "Thu 12-June-2014, Fort St. John, BC"],
        [page_name, '#one', "route_140613.jpg", "Fri 13-June-2014, Fort Nelson, BC"],
        [page_name, '#one', "route_140614.jpg", "Sat 14-June-2014, Watson Lake, YK"],
        [page_name, '#one', "route_140615.jpg", "Sun 15-June-2014, Whitehorse, YK"]
    ]],
    ['picblk', [
        [page_name, '#one', "route_140616.jpg", "Mon 16-June-2014, Skagway, AK !!!"]
    ]]
];

update_row_data(row_data);

