$(function(){

    $(document).on('scroll', function(){
        var windowSize = $(window).scrollTop();
        console.log(windowSize);
  
        // Menu Drop Animation Start
  
        if(windowSize > 650){
           $('#navigationbar').addClass('scroll_bg');
           $('#navigationbar a').addClass('scroll_bg_color');
        }
        else{
           $('#navigationbar').removeClass('scroll_bg');
           $('#navigationbar a').removeClass('scroll_bg_color');
        };
  
        // Menu Drop Animation End
  
  
     });
  
});