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
let promoPlay = document.getElementById('promoPlay');
promoPlay.onclick = function() { 
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
let promoPause = document.getElementById('promoPause'); 
promoPause.onclick = function() { 
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
let signupOpen = document.getElementById('signupOpen');
signupOpen.onclick = function() {
  $('#signupForm').css({
    'display' : 'block',
  })
  // document.getElementById("signupForm").style.display = "block";
}
let signupClose = document.getElementById('signupClose');
signupClose.onclick = function() {
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

//teamphotoSelecting
let button1 = document.getElementById('buttonTeam1');
let button2 = document.getElementById('buttonTeam2');
let button3 = document.getElementById('buttonTeam3');
button1.onclick = function() {
  if(button1.className !== 'teamphotoActive') {
    $('.teamContent').find('.teamphotoActive').removeClass('teamphotoActive');
    button1.classList.add('teamphotoActive');

    $('#teamInside').find('.teamtextActive').removeClass('teamtextActive');
    document.getElementById('team1').classList.add('teamtextActive');
  }
}
button2.onclick = function() {
  if(button2.className !== 'teamphotoActive') {
    $('.teamContent').find('.teamphotoActive').removeClass('teamphotoActive');
    button2.classList.add('teamphotoActive');

    $('#teamInside').find('.teamtextActive').removeClass('teamtextActive');
    document.getElementById('team2').classList.add('teamtextActive');
  }
}
button3.onclick = function() {
  if(button3.className !== 'teamphotoActive') {
    $('.teamContent').find('.teamphotoActive').removeClass('teamphotoActive');
    button3.classList.add('teamphotoActive');

    $('#teamInside').find('.teamtextActive').removeClass('teamtextActive');
    document.getElementById('team3').classList.add('teamtextActive');
  }
}