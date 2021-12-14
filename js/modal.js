$(function(){
    $('.pop-up').css('display','block');
    $('.modal').css('display','none');
    // $('body').addClass('fixed');
    scrLock();
    // 바디 스크롤 락
    function scrLock(){        
        fullpage_api.setAllowScrolling(false);
        fullpage_api.setKeyboardScrolling(false);
       
    }
    // 바디 스크롤 언락
    function scrUnLock(){
        fullpage_api.setAllowScrolling(true);
        fullpage_api.setKeyboardScrolling(true);
    }

    
  
    $('#btn3').on({'click':function(){
        $('#pop-up').hide();
        $('#pop-up').empty(); 
        scrUnLock();
        }
    });
    
    $(".md_btn").click(function(){
        $(".modal").fadeIn();
    });
        
    $('#btn4').on({'click':function(){
        $('.modal').fadeOut();
        }
        
    });

    $(".md_btn1").click(function(){
        $(".modal1").fadeIn();
    });
        
    $('#btn5').click(function(){
        $(".modal1").fadeOut();
    });
    $(".md_btn2").click(function(){
        $(".modal2").fadeIn();
    });
        
    $('#btn6').click(function(){
        $(".modal2").fadeOut();
    });

    $(".md_btn3").click(function(){
        $(".modal3").fadeIn();
    });
        
    $('#btn7').click(function(){
        $(".modal3").fadeOut();
    });
    $(".md_btn4").click(function(){
        $(".modal4").fadeIn();
    });
        
    $('#btn8').click(function(){
        $(".modal4").fadeOut();
    });
    $(".md_btn5").click(function(){
        $(".modal5").fadeIn();
    });
        
    $('#btn9').click(function(){
        $(".modal5").fadeOut();
    });
    $(".md_btn6").click(function(){
        $(".modal6").fadeIn();
    });
        
    $('#btn10').click(function(){
        $(".modal6").fadeOut();
    });
    $(".md_btn7").click(function(){
        $(".modal7").fadeIn();
    });
        
    $('#btn11').click(function(){
        $(".modal7").fadeOut();
    });
    $(".md_btn8").click(function(){
        $(".modal8").fadeIn();
    });
        
    $('#btn12').click(function(){
        $(".modal8").fadeOut();
    });
});


