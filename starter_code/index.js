

var main = function (e)
{
	
		
		$("#submit-btn").click(function(e){
			e.preventDefault();
			var search = $("#city-type").val().toLowerCase();
			var nycCities = ["new york city", "new york", "nyc"];
			var nycFound = $.inArray(search, nycCities);
			var sfCities = ["san francisco", "sf", "bay area"];
			var sfFound = $.inArray(search, sfCities);
			var laCities = ["los angeles", "la", "lax"];
			var laFound = $.inArray(search, laCities);
			var sydCities = ["sydney", "syd"];
			var sydFound = $.inArray(search, sydCities);
			var ausCities = ["austin", "atx"];
			var ausFound = $.inArray(search, ausCities);
			if(nycFound > -1) {
				$("body").css('background-image', 'url(images/nyc.jpg)');
			} else if (sfFound > -1){
				$("body").css('background-image', 'url(images/sf.jpg)');
			} else if (laFound > -1) {
				$("body").css('background-image', 'url(images/la.jpg)');
			} else if (sydFound > -1) {
				$("body").css('background-image', 'url(images/sydney.jpg)');
			} else if (ausFound > -1) {
				$("body").css('background-image', 'url(images/austin.jpg');
			} else {
				alert ("not found")
			};
		});
};
$(document).ready(main)


	
