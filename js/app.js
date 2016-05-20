/**
 * Created by ThangTheMan on 5/13/16.
 */
$(document).ready(function(){

    $(".banner").slick({
        centerMode: true,
        dots:true,
        centerPadding: '0px',

        accessibility:true,
        autoplay: true,
        autoplaySpeed:3000,
        infinite: true,
        prevArrow: '<a href="@" class="arrows left"><i class="fa fa-chevron-left" aria-hidden="true"></i></a>',
        nextArrow: '<a href="@" class="arrows right"><i class="fa fa-chevron-right" aria-hidden="true"></i></a>',
        slidesToShow: 1,
        slidesToScroll: 1
    });


    $(".banner").prepend("<div class='banner-wrapper'></div>");
    function changebannerbg(){
        imgpath=($(".banner .slick-active").children("img").attr("src"));
        $(".banner .banner-wrapper").css({'height':$(".slick-slide").height(),'width':$(".slick-slide").width(),'background-image':'url('+imgpath+')'});
    }
    changebannerbg();

    $(".banner .arrows").click(function(){
        changebannerbg();
    });

    $('.centerList').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows:true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '50px',
                    slidesToShow: 2,

                }
            }
        ]
    });

});




