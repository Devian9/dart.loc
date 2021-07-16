function promoPlay() {  
            $('#promoPlay').click(function() {
	    		$('#promoPlay').css({
	        		'display' : 'none',
	    		});
	    		$('#promoPause').css({
	        		'display' : 'inline',
	        		'opacity' : '0.5'
	    		});
	    		$('#promoPreview').css({
	        		'display' : 'none',
	    		});
	    		$('video').css({
	        		'display' : 'inline',
	        		'opacity' : '1',
	    		});
	    		$('#promo_video').trigger('play');
			});
} 
function promoPause() { 
            $('#promoPause').click(function() {
			    $('#promoPlay').css({
	        		'display' : 'inline',
			    });
			    $('#promoPause').css({
	        		'display' : 'none',
			    });
			    $('video').css({
	        		'display' : 'inline',
	        		'opacity' : '0.4',
	    		});
	    		$('#promo_video').trigger('pause');
			}); 
} 
