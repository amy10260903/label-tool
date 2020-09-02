var selection = {
	'location': document.getElementById('select-location'),
	'place': document.getElementById('select-place'),
	'soundsource': document.getElementById('select-soundsource'),
};

$(document).ready(function () {
	$.get('/assets/data/location.yaml', function( text ) {
		var obj = jsyaml.load( text );
		for(var key in obj){
			for (i=0; i<obj[key].length; i++) {
				var option = document.createElement("option");
				if (key == 'location') {
					option.text = obj[key][i].country + ' / ' + obj[key][i].city;
				} else {
					option.text = i + ' : ' + obj[key][i];
				}
				selection[key].add(option);	
			}
		}
		prepareSelection();
	});
});