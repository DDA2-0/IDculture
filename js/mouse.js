(function($){

      $(window).mousedown(function (e) {
            $('.click_pop').remove();
            $('body').append('<span class="click_pop" style="left:' + e.pageX + 'px;top:' + e.pageY +'px;"><span/><span/><span/><span/></span>');
        });
})(jQuery);