$(document).ready(function() {
    //loading effect
    setTimeout(() => {
        $('nav').addClass("now");
        $('main').addClass("now");
    }, 1000);
    $('.perload').addClass("remove");
    //On scroll change header background 
    var header = $("nav");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            header.addClass("darkHeader");
        } else {
            header.removeClass("darkHeader");
        }
    });

    $("#header-menu-link").on("click", function() {
        $(this).toggleClass("active");
        $("body").toggleClass("open");
    });
    $(".colse_btn").on("click", function() {
        $("body").toggleClass("open");
        $('#header-menu-link').toggleClass("active");
    })
    $('.mini_blog_block').hover(function() {
        $('.mini_blog_block').each(function() {
            $(this).removeClass("active");
        })
        $(this).addClass("active");
    });



    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        // offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1300, // values from 0 to 3000, with step 50ms
        easing: 'ease-in-out', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: true, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
    //Should check if fade mode will work
    var swiper2 = new Swiper(".secondSwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper = new Swiper(".firstSwiper", {
        loop: true,
        spaceBetween: 10,
        thumbs: {
            swiper: swiper2,
        },
    });
});