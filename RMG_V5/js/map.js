/**
 * Created by Manash on 7/23/2016.
 */

// function initMap(){
//     var mapDiv = document.getElementById('map');
//     var map = new google.maps.Map(mapDiv, {
//         center : {lat: 23.6850, lng: 90.3563},
//         zoom: 8
//     });
// }

function initMap(){
var locations = [
      ['Fashions LTD', 23.794692, 90.4251181, 1],
      ['Garments and Hosiery', 23.7390861, 90.3872868, 2],
      ['Star Fashions', 23.7593507, 90.4188967, 3],
      ['Ably Garments', 22.338529, 90.8136073, 4],
      ['Accord Knit', 23.6226398, 90.4997973, 5],
      ['Aba Garments', 23.8851485, 90.3999147, 6],
      ['Adorn Knitwear', 23.8481267, 90.2582635, 7]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(23.6850, 90.3563),
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
}