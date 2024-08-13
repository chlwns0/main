$(function () {
    /*스크롤*/
    $("html").easeScroll();

    /*메인애니메이션*/
    $("#main .watch,#main .txt").addClass('on');
    $("#main_mb .watch,#main_mb .txt").addClass('on');


    /* nav a태그 클릭 이벤트처리*/
    // $('a').click(function(e){
    //     // e.preventDefault();
    //     $("html,body").stop().animate({'scrollTop': $(this.hash).offset().top }, 1000, "easeOutExpo");

    // });

    /*보석 애니메이션*/
    function gem() {
        $(".gem").animate({ "top": 0 }, 1000).animate({ 'top': 20 }, 1000, null, gem);
    }

    gem();
    /*영상팝업창*/

    $('.video .btn').on('click', function () {

        $(this).parent().next().show();
        $(this).parent().next().animate({ 'opacity': '1' }, 1000, "easeOutExpo");
        $('.popup').transition({
            'translate': '-50%, -50%',
            'scale': 1
        }, 1000, "easeOutExpo");
    });


    $('#sub4 #bgarea').on('click', function () {
        $(this).animate({ 'opacity': '0' }, 1000, 'easeOutExpo').removeClass('on');
        $(this).find('.popup').transition({
            'translate': '-50%, -50%',
            'scale': '0'
        }, 1000, "easeOutExpo").removeClass('on');

    });





    /*숫자*/
    $(document).ready(function () {

        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });

    });


    /*nav애니*/
    $(window).scroll(function () {
        let scr_top = $(this).scrollTop();
        let header_position = $('#head').offset().top + $('#head').outerHeight();
    
        // Check if scroll position is at the top (0)
        if (scr_top === 0) {
            // Hide the aside if at the top
            $('aside').fadeOut();
        } else {
            // Show the aside if not at the top
            $('aside').fadeIn();
        }
    
        // Animate aside position based on scroll
        $('aside').stop().animate({ 'top': scr_top + 50 }, 1000, "easeOutExpo");
    
        // Add or remove class based on scroll position
        if (scr_top >= header_position - 100) {
            $('.up_btn').addClass('on');
        } else {
            $('.up_btn').removeClass('on');
        }
    });


    var timeline;
    var isFn = false;



    /*캔버스*/

    $(window).scroll(function () {

        if (isFn) { return; }

        var scrPos = $(this).scrollTop();
        if (scrPos >= $("#sub5").position().top - 400 && scrPos <= $("#sub5").position().top + 50) {

            //캔버스준비
            var canv1 = $(".canvas1")[0].getContext("2d");

            var deg1 = 0;

            timeline = setInterval(Ani1, 60);

            function Ani1() {


                isFn = true;
                //현재값 += 속도+(도착값-현재값);
                deg1 += 0.02 * (2 - deg1);
                canv1.clearRect(0, 0, 280, 280); //캔버스지움
                canv1.lineWidth = "30";
                canv1.lineCap = "round";
                canv1.strokeStyle = "#5b5293";
                canv1.beginPath();
                canv1.arc(140, 140, 120, Math.PI * deg1, -1.5, true);
                canv1.stroke();

            }



            //캔버스준비
            var canv2 = $(".canvas2")[0].getContext("2d");

            var deg2 = 0;

            timeline = setInterval(Ani2, 60);

            function Ani2() {


                isFn = true;
                //현재값 += 속도+(도착값-현재값);
                deg2 += 0.02 * (2 - deg2);
                canv2.clearRect(0, 0, 280, 280); //캔버스지움
                canv2.lineWidth = "30";
                canv2.lineCap = "round";
                canv2.strokeStyle = "#5b5293";
                canv2.beginPath();
                canv2.arc(140, 140, 120, Math.PI * deg2, -1.5, true);
                canv2.stroke();

            }

            //캔버스준비
            var canv3 = $(".canvas3")[0].getContext("2d");

            var deg3 = 0;

            timeline = setInterval(Ani3, 60);

            function Ani3() {


                isFn = true;
                //현재값 += 속도+(도착값-현재값);
                deg3 += 0.02 * (2 - deg3);
                canv3.clearRect(0, 0, 280, 280); //캔버스지움
                canv3.lineWidth = "30";
                canv3.lineCap = "round";
                canv3.strokeStyle = "#5b5293";
                canv3.beginPath();
                canv3.arc(140, 140, 120, Math.PI * deg3, -1.5, true);
                canv3.stroke();

            }






        }

    });


    //마우스휠이벤트
    //마우스휠이벤트
    // $(window).on('mousewheel disableScroll', function(e){
    //     e.preventDefault();
    //     //return false;

    // });

    // $(window).mousewheel(function(e, delta){

    // //  html,body가 애니메이션 중이면 함수 강제 종료
    // if($('html,body').is(':animated')){return;}

    // //현재 페이지의 높이를 page_h라는 변수에 할당
    // var page_h = $(this).height();

    // if(delta<0){

    //     $('html,body').stop().animate({ scrollTop :'+='+page_h }, 1000, 'easeOutExpo');

    // }else{

    //     $('html,body').stop().animate({ scrollTop :'-='+page_h }, 1000, 'easeOutExpo');
    // }

    // });


    
});