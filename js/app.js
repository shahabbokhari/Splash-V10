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
		$("img.activeimg").removeClass("activeimg");
		$(".banner .slick-active img").addClass("activeimg");
        imgpath=($(".banner img.activeimg").attr("src"));
		if($(window).width()>767){
        	$(".banner .banner-wrapper").css({'height':$(".slick-slide").height(),'width':$(".slick-slide").width(),'background-image':'url('+imgpath+')'});
		}else{
			$(".banner .banner-wrapper").css({'height':$(".slick-slide img").height()+34,'width':$(".slick-slide").width(),'background-image':'url('+imgpath+')'});
		}
    }
    changebannerbg();

	$(".banner").on('beforeChange',function(){ changebannerbg(); });
	

    

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





