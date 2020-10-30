(function($){
      $(document).ready(function () {
            $('.main_color').css({
                  'opacity':'0'
            });
            $('.color_circle1').mouseenter(function(){
                  $('.main_color').css({
                        'opacity':'1',
                        'transition':'opacity .5s ease-in-out'
                  });
            });
            $('.color_circle1').mouseleave(function(){
                  $('.main_color').css({
                        'opacity':'0',
                        'transition':'opacity .5s ease-in-out'
                  });
            });

            $('.color_circle2').mouseenter(function(){
                  $('.main_color').css({
                        'opacity':'1',
                        'transition':'opacity .5s ease-in-out'
                  });
            });
            $('.color_circle2').mouseleave(function(){
                  $('.main_color').css({
                        'opacity':'0',
                        'transition':'opacity .5s ease-in-out'
                  });
            });

            $('.color_circle3').mouseenter(function(){
                  $('.sub_color').css({
                        'opacity':'1',
                        'transition':'opacity .5s ease-in-out'
                  });
            });
            $('.color_circle3').mouseleave(function(){
                  $('.sub_color').css({
                        'opacity':'0',
                        'transition':'opacity .5s ease-in-out'
                  });
            });

            $('.color_circle4').mouseenter(function(){
                  $('.sub_color').css({
                        'opacity':'1',
                        'transition':'opacity .5s ease-in-out'
                  });
            });
            $('.color_circle4').mouseleave(function(){
                  $('.sub_color').css({
                        'opacity':'0',
                        'transition':'opacity .5s ease-in-out'
                  });
            });
      });
})(jQuery);