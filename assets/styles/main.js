$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu') .toggleClass(`active`);
        $('body') .toggleClass(`                                           lock`);
    })
});

$('.slider').slick({
    slidesToScroll: 1,
    slidesToShow: 4,
    dots: false,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: '<img src="/assets/images/see_also_images/arrow_r.svg" alt="">',
    prevArrow: '<img src="/assets/images/see_also_images/arrow_l.svg" alt="">',
    responsive: [
        {
        breakpoint: 930,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
    });

