/**
 * Created by ThangTheMan on 5/13/16.
 */
$(document).ready(function(){
    $('.hero-image').slick({
        accessibility:true,
        autoplay: true,
        autoplaySpeed:3000,
        arrows:false,
        dots:true,

    });

});
$('.centerList').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows:true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3,

            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2,
            }
        }
    ]
});