// algorithm for determining the CSS applied to the play button
	$(window).load(function() {
	
		$(".checkbox").attr('checked', false);
		var counter=0
		$(".checkbox").change(function() {
					
			if ((this).checked) {
				counter=counter+1;
			} else if (counter>0) {
				counter=counter-1;
			}
			
			if (counter>0) {
				$(".play").removeClass("disabled");
			} else {
				$(".play").addClass("disabled");
			}				
					
		});
		
	});
