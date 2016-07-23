/**
 * Created by Manash on 7/23/2016.
 */

function initMap(){
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center : {lat: 23.6850, lng: 90.3563},
        zoom: 8
    });
}
