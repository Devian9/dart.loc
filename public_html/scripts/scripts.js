// navigation
$(document).ready(function () {
    var url = window.location;
    $('nav').find('.active').removeClass('active');
    $('nav a').each(function () {
        if (this.href == url) {
            $(this).addClass('active');
        }
    }); 
});

//promoVideo
function promoPlay() {  
            $('#promoPlay').click(function() {
	    		$('#promoPlay').css({
	        		'display' : 'none',
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
			    $('video').css({
	        		'display' : 'inline',
	        		'opacity' : '0.4',
	    		});
	    		$('#promo_video').trigger('pause');
			}); 
}

//signupForm
function signupOpen() {
  document.getElementById("signupForm").style.display = "block";
}

function signupClose() {
  document.getElementById("signupForm").style.display = "none";
}

//servicesContent
function Statistics() {
  var x = document.getElementById("onclickStat");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}
function Inbox() {
  var x = document.getElementById("onclickInbox");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}
function Team() {
  var x = document.getElementById("onclickTeam");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}
function Settings() {
  var x = document.getElementById("onclickSet");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}
function Feed() {
  var x = document.getElementById("onclickFeed");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}