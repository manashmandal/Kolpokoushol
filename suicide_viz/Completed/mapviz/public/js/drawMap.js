var Districts=[];
var width = 500,
    height = 700;
var scal = 5000;
var projection = d3.geo.mercator()
    .scale(scal)
    .translate([-76.5/50.0 * scal, scal/2-scal/55]);

var path = d3.geo.path()
    .projection(projection);

var svg = d3.select(".viewer")
	.append("svg")
    .attr("width", width)
    .attr("height", height);
	
function redrawMap()
{
	  svg.selectAll(".subunit")
		.style('fill',function(d){
			amount = Districts[d.id];
			if(amount == 0 || amount== undefined)
				return 'rgba(0,0,0,0.05)';
			
			return 'rgba(255,0,0,'+amount*1.0/89.0+')';
		});

}
/*
d3.json("./data/bd.json", function(error, bd) {
  svg.selectAll(".subunit")
      .data(topojson.feature(bd, bd.objects.subunits).features)
    .enter().append("path")
      .attr("class", function(d) { return "subunit " + d.id; })
      .attr("d", path);
	  
	redrawMap();
});
*/
