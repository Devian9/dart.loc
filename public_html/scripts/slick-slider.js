var slickSLider  = $("#feedbackSlider");

if (slickSLider.length) {

  slickSLider.slick({
    acenterMode: false,
    variableWidth: false,
    autoplay: false,
    arrows: true,
    dots: false,
    slidesToShow: 2,
    initialSlide: 2,
    centerPadding: "10px",
    infinite: false,
    swipe: false,
    touchMove: false,
    vertical: true,
    speed: 1000,
    useTransform: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    adaptiveHeight: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });


 //   add item on first position
  $('.prev').on("click", function(e){
    console.log("click");
    var indexMinus = 0;
        var cloneHTML =  '<div class="slide-content">prev slide Added</div>';
  });
//   add item on last position
$('.next').on("click", function(e){
    console.log("click");
    slickSLider.slick('slickAdd', cloneHTML);
    ar cloneHTML =  '<div class="slide-content">prev slide Added</div>';
  });

};
