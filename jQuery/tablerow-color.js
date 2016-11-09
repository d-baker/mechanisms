$(document).ready(function() {
	$.each($("tr"), function(index, val) {
		if (index % 2 == 0) {
			$(val).css("background", "#ddd");
		}
	});
})