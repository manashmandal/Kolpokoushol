var chart = AmCharts.makeChart( "chartdiv", {
  "type": "pie",
  "theme": "light",
  "dataProvider": [ {
    "country": "Australia",
    "value": 11
  }, {
    "country": "Ireland",
    "value": 201
  }, {
    "country": "Germany",
    "value": 65
  }, {
    "country": "Australia",
    "value": 39
  }, {
    "country": "UK",
    "value": 19
  }, {
    "country": "Latvia",
    "value": 10
  } ],
  "valueField": "value",
  "titleField": "country",
  "outlineAlpha": 0.4,
  "depth3D": 15,
  "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
  "angle": 30,
  "export": {
    "enabled": true
  }
} );
jQuery( '.chart-input' ).off().on( 'input change', function() {
  var property = jQuery( this ).data( 'property' );
  var target = chart;
  var value = Number( this.value );
  chart.startDuration = 0;

  if ( property == 'innerRadius' ) {
    value += "%";
  }

  target[ property ] = value;
  chart.validateNow();
} );