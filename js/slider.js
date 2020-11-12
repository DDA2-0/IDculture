var appendNumber = 4;
var prependNumber = 1;
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 5,
  centeredSlides: true,
  paginationClickable: true,
  spaceBetween: 30,
});

(function($){
  $(document).ready(function () {
    
    $('.movie_click').click(function(){
      $('.movie_click .gif').css({
        'display' : 'block'
      });
      $('.movie_click .click_thum').css({
        'opacity' : '0'
      });
      setTimeout(function(){
        $('.movie_click .gif').css({
          'opacity' : '1'
        });
      },300)
    });

    $('.book_click').click(function(){
      $('.book_click .gif').css({
        'display' : 'block'
      });
      $('.book_click .click_thum').css({
        'opacity' : '0'
      });
      setTimeout(function(){
        $('.book_click .gif').css({
          'opacity' : '1'
        });
      },300)
    });

    $('.meet_click').click(function(){
      $('.meet_click .gif').css({
        'display' : 'block'
      });
      $('.meet_click .click_thum').css({
        'opacity' : '0'
      });
      setTimeout(function(){
        $('.meet_click .gif').css({
          'opacity' : '1'
        });
      },300)
    });

    $('.fund_click').click(function(){
      $('.fund_click .gif').css({
        'display' : 'block'
      });
      $('.fund_click .click_thum').css({
        'opacity' : '0'
      });
      setTimeout(function(){
        $('.fund_click .gif').css({
          'opacity' : '1'
        });
      },300)
    });
  });
})(jQuery);