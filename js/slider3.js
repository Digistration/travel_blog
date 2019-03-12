$('#s3_btn_next').click(function(){
  var currentSlide = $('.active');
  var nextSlide = currentSlide.next();
  var firstSlide = currentSlide.siblings('.first');

  if(nextSlide.length){
    currentSlide.removeClass('active').css("z-index", -10);
    nextSlide.addClass('active').css("z-index", 10);
  } else{
    currentSlide.removeClass('active').css("z-index", -10);
    firstSlide.addClass('active').css("z-index", 10);
  }
});

$('#s3_btn_prev').click(function(){
  var currentSlide = $('.active');
  var prevSlide = currentSlide.prev();
  var lastSlide = currentSlide.siblings('.last');

  if(prevSlide.length){
    currentSlide.removeClass('active').css("z-index", -10);
    prevSlide.addClass('active').css("z-index", 10);
  } else{
    currentSlide.removeClass('active').css("z-index", -10);
    lastSlide.addClass('active').css("z-index", 10);
  }
});
