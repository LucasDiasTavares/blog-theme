$(document).ready(function () {
    $nav = $('.nav');

    $('.toggle-collapse').click(function () {
        $nav.toggleClass('collapse');
    })
    /* Owl Carousel Section */
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        nav: true,
        navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>']
    });
});