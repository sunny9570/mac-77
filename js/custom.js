$(function () {


    const tl = gsap.timeline();

    tl.from('.main_visual .itm:nth-child(1)', {
        scale: 0.5,
        opacity: 0,
        x: 100,
    }).from('.main_visual .itm:nth-child(2)', {
        scale: 0.5,
        opacity: 0,
        x: 100,
    }).from('.main_visual .itm:nth-child(3)', {
        scale: 0.5,
        opacity: 0,
        x: 100,
    }).from('.main_visual .itm:nth-child(4)', {
        scale: 0.5,
        opacity: 0,
        x: 100,
    }).from('.main_visual .itm:nth-child(5)', {
        scale: 0.5,
        opacity: 0,
        x: 100,
    }).from('.main_visual .itm:nth-child(6)', {
        scale: 0.5,
        opacity: 0,
        x: 100,
    }).from('.main_visual .itm:nth-child(7)', {
        scale: 0.5,
        opacity: 0,
        x: 100,
    }).from('.main_visual .itm:nth-child(8)', {
        scale: 0.5,
        opacity: 0,
        x: 100,
    }).from('.main_visual .cover', {
        scale: 0.5,
        opacity: 0,
        x: 100,
    }).from('.main_visual .cover h2', {
        scale: 0.5,
        opacity: 0,
        x: 1000,
    }).from('.main_visual .cover button', {
        scale: 0.5,
        opacity: 0,
        y: -1000,
    })


    // gsap.from('.main_visual .itm:nth-child(1)', {
    //     duration: 1,
    //     scale: 0.5,
    //     opacity: 0,
    // })

    // gsap.from('.main_visual .itm:nth-child(2)', {
    //     duration: 1,
    //     scale: 0.5,
    //     opacity: 0,
    //     delay: 1,
    // })
    // gsap.from('.main_visual .itm:nth-child(3)', {
    //     duration: 1,
    //     scale: 0.5,
    //     opacity: 0,
    //     delay: 2,
    // })
    // gsap.from('.main_visual .itm:nth-child(4)', {
    //     duration: 1,
    //     scale: 0.5,
    //     opacity: 0,
    //     delay: 3,
    // })
    // gsap.from('.main_visual .itm:nth-child(5)', {
    //     duration: 1,
    //     scale: 0.5,
    //     opacity: 0,
    //     delay: 4,
    // })
    // gsap.from('.main_visual .itm:nth-child(6)', {
    //     duration: 1,
    //     scale: 0.5,
    //     opacity: 0,
    //     delay: 5,
    // })
    // gsap.from('.main_visual .itm:nth-child(7)', {
    //     duration: 1,
    //     scale: 0.5,
    //     opacity: 0,
    //     delay: 6,
    // })
    // gsap.from('.main_visual .itm:nth-child(8)', {
    //     duration: 1,
    //     scale: 0.5,
    //     opacity: 0,
    //     delay: 7,
    // })



    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    });

    const headerSlide = new Swiper('.header_slide', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    const mainContentSlide = new Swiper('.main_content .main_content_slide', {
        slidesPerView: 4,
        // spaceBetween: 30,
        loop: true,

        navigation: {
            nextEl: '.main_content .arrows .next',
            prevEl: '.main_content .arrows .prev',

        },
    });


    $('.button_box .play').on('click', function () {
        $('.movie video').trigger('play')
    });

    $('.button_box .pause').on('click', function () {
        $('.movie video').trigger('pause')
    });


    // const mainProductSlide = new Swiper('#main_content .tab_slide01', {
    //     loop: true,
    //     on: {
    //         slideChangeTransitionStart: function () {
    //             $('#main_content .itm01 .line').removeClass('on');
    //         },
    //         slideChangeTransitionEnd: function () {
    //             $('#main_content .tab_con .itm01 .list li')
    //                 .eq(this.realIndex)
    //                 .addClass('on')
    //                 .siblings()
    //                 .removeClass('on');

    //             $('#main_content .line').addClass('on')
    //         }
    //     }
    // });

    const mainProductSlide = new Swiper('.main_product .main_product_slide', {
        slidesPerView: 5,
        // spaceBetween: 30,
        loop: true,

        navigation: {
            nextEl: '.main_product .arrows .next',
            prevEl: '.main_product .arrows .prev',

        },
    });


    $('.main_product .tap_menu button').on('click', function () {
        let idx = $(this).parent().index();//0,1
        $('.main_product .tap_con .ts')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on')

        $(this).parent().addClass('on').siblings().removeClass('on')
    });


    $('.main_tab .inner .tab_menu button').on('click', function () {
        let idx = $(this).parent().index();//0,1
        $('.main_tab  .inner .tab_itm figure')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on')

        $(this).parent().addClass('on').siblings().removeClass('on')
    });

    $('.main_banner .itm').on('click', function () {

        $(this)
            .addClass('on')
            .siblings()
            .removeClass('on')
    })

    AOS.init();
})