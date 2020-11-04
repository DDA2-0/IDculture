(function($){
      $(document).ready(function () {
            $('#fullpage').fullpage({
                  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
                  autoScrolling:true,
                  scrollHorizontally: true,
                  'css3': true,
                  'sectionsColor': ['#111', '#999', '#666', '#aaa'], 
                  'navigation': true, 'navigationPosition': 'right', 
                  'scrollOverflow': true, anchors: ['firstPage', 'secondPage', '3rdPage', 'lastPage'], 
                  'menu': '#gnb', 
                  // 'scrollingSpeed': 1700, 
                  'onLeave': function(anchorLink, index){ 
                        if(index == 1){ $('#gnb a').removeClass('on'); 
                        $('#gnb a').eq(0).addClass('on'); 
                  }else if(index == 2){ 
                        $('#gnb a').removeClass('on'); 
                        $('#gnb a').eq(1).addClass('on'); 
                  }else if(index == 3){ 
                        $('#gnb a').removeClass('on'); 
                        $('#gnb a').eq(2).addClass('on'); 
                  }else if(index == 4){ 
                        $('#gnb a').removeClass('on'); 
                        $('#gnb a').eq(3).addClass('on'); } 
                  }
            });
      });
})(jQuery);