/**
 * Created by Manash on 7/23/2016.
 */
function initialize () {

    var mapOptions = {
        center: new google.maps.LatLng(0, 0),
        zoom: 1,
        minZoom: 1
    };

    var worldmap = new google.maps.Map(document.getElementById('worldmap'),mapOptions );

    var allowedBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(85, -180),	// top left corner of map
        new google.maps.LatLng(-85, 180)	// bottom right corner
    );

    var k = 5.0;
    var n = allowedBounds .getNorthEast().lat() - k;
    var e = allowedBounds .getNorthEast().lng() - k;
    var s = allowedBounds .getSouthWest().lat() + k;
    var w = allowedBounds .getSouthWest().lng() + k;
    var neNew = new google.maps.LatLng( n, e );
    var swNew = new google.maps.LatLng( s, w );
    boundsNew = new google.maps.LatLngBounds( swNew, neNew );
    worldmap.fitBounds(boundsNew);

}

google.maps.event.addDomListener(window, 'load', initialize);