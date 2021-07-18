// navigation
$(document).ready(function () {
    var url = window.location.href;
    $('nav').find('.active').removeClass('active');
    $('nav a').each(function () {
        if (this.href == url) {
            $(this).addClass('active');
        }
    }); 
});

//promoVideo
function promoPlay() { 
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
} 
function promoPause() { 
			    $('#promoPlay').css({
	        		'display' : 'inline',
			    });
			    $('video').css({
	        		'display' : 'inline',
	        		'opacity' : '0.4',
	    		});
	    		$('#promo_video').trigger('pause');
}

//signupForm
function signupOpen() {
  $('#signupForm').css({
    'display' : 'block',
  })
  // document.getElementById("signupForm").style.display = "block";
}

function signupClose() {
  $('#signupForm').css({
    'display' : 'none',
  })
  // document.getElementById("signupForm").style.display = "none";
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

//feedbackSlider
$(function(){
  $('.feedbackSlider').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 2,
    autoplay: true,
    prevArrow: '<img src="../images/keyboard_arrow_up.png">',
    nextArrow: '<img src="../images/keyboard_arrow_down.png">',
  });
});

//teamphotoSlider
