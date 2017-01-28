$(document).ready(function() {
    $('.carousel-responsive').slick({
        dots: true,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
