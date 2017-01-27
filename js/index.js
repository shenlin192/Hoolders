$(document).ready(function() {
    $('.carousel-responsive').slick({
        // dots: true,
        // infinite: false,
        // speed: 300,
        // slidesToShow: 4,
        // slidesToScroll: 4,
        infinite: true,
        speed: 700,
        // autoplay: true,
        // autoplaySpeed: 2000,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoWidth: true,
        responsive: [{
                breakpoint: 1024,
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
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});
