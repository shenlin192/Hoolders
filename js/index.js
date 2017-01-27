$(document).ready(function() {
        $('.carousel-responsive').slick({
            infinite: true,
            speed: 700,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            mobileFirst: true,
            responsive: [{
                    breakpoint: 991,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });
});
