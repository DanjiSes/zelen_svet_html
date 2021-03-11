$(document).ready(function () {
    // var carouselSlider = $('#carousel1');
    //     carouselSlider.owlCarousel({

    //     nav: false,
    //     loop: true,
    //     margin: 30,
    //     autoWidth: true,
    //     center: true,
    //     autoplay: true,
    //     dots: false,
    //     responsive:{
    //         0:{
    //             items: 1,
    //             margin: 0,
    //             center: true,
    //         },
    //         1280:{
    //             items: 2,
    //             autoWidth: false,
    //             center: false,
    //             dots: false

    //         },
    //         1750:{
    //             items: 3
    //         }
    //     }
    // });

    //     $('#prices-next-btn').click(function() {
    //         carouselSlider.trigger('next.owl.carousel');
    //     });

    //     $('#prices-prev-btn').click(function() {
    //         carouselSlider.trigger('prev.owl.carousel');
    //     });
    $('.card-wrap').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('#prices-prev-btn'),
        nextArrow: $('#prices-next-btn'),
        dots: true,
        responsive: [
            {
                breakpoint: 1750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    });
});
$(document).ready(function () {
    var carouselSlider = $('#carousel2');
    carouselSlider.owlCarousel({

        nav: false,
        loop: true,
        margin: 30,
        dots: false,
        // autoWidth: true,
        // center: true,
        // dots: false,
        responsive: {
            0: {
                items: 1
            },
            1280: {
                items: 2
            },
            1600: {
                items: 3
            }
        }
    });

    $('#stock-next-btn').click(function () {
        carouselSlider.trigger('next.owl.carousel');
    });

    $('#stock-prev-btn ').click(function () {
        carouselSlider.trigger('prev.owl.carousel');
    });
});
$(document).ready(function () {

    $('.toggle').click(function (e) {
        e.preventDefault();

        $('.question-block-wrap').on('click', function () {
            $(this).addClass('active').siblings().removeClass('active');
        });
        var $this = $(this);


        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.next().slideUp(350);

            $this.next().slideUp(350);
        } else {
            $this.parent().parent().find('li .inner').removeClass('show');
            $this.parent().parent().find('li .inner').slideUp(350);
            $this.next().toggleClass('show');
            $this.next().slideToggle(350);
        }
    });
    /*
    *
    * ***************** СКРИПТЫ КОНТРОЛЛОВ ФОРМ  *****************
    *
    */

    /*Вешаем валидацию на чекбокс, радио и тугл*/
    $('.inputCheck input:required, .inputToggle input:required').change(function (event) {
        if ($(this).not('checked'))
            $(this).addClass('validate');
    });

    $('.inputRadio input:required').change(function (event) {
        if ($(this).not('checked'))
            $('.inputRadio input[name="' + $(this).attr('name') + '"]')
                .addClass('validate');
    });
    $('.inputCheck input:required, .inputToggle input:required').focusout(function (event) {
        if ($(this).not('checked'))
            $(this).addClass('validate');
    });

    $('.inputRadio input:required').focusout(function (event) {
        if ($(this).not('checked'))
            $('.inputRadio input[name="' + $(this).attr('name') + '"]')
                .addClass('validate');
    });


    /*Вешаем валидацию на инпут и текстэриа*/
    $('.inputText input:required, .inputTextArea textarea:required').change(function (event) {
        $(this).addClass('validate');
    });
    $('.inputText input:required, .inputTextArea textarea:required').focusout(function (event) {
        $(this).addClass('validate');
    });

    $('.inputText .showPassword').click(function (event) {
        var input = $(this).closest('.inputText').find('input'),
            type = input.attr('type') == "text" ? "password" : 'text';
        input.prop('type', type);
    });

    $('.inputText input, .inputTextArea textarea').each(function (index, el) {
        if ($(el).val() != '')
            $(el).addClass('filled')
        else
            $(el).removeClass('filled');
    });

    $('.inputText input, .inputTextArea textarea').change(function (event) {
        if ($(this).val() != '')
            $(this).addClass('filled')
        else
            $(this).removeClass('filled');
    });
    $('.inputText input, .inputTextArea textarea').focusout(function (event) {
        if ($(this).val() != '')
            $(this).addClass('filled')
        else
            $(this).removeClass('filled');
    });

    $('.inputTextArea textarea').each(function (index, el) {
        toggleTextAreaPlaceholder(el);
    });
    $('.inputTextArea textarea').scroll(function (event) {
        toggleTextAreaPlaceholder(this);
    });

    function toggleTextAreaPlaceholder(textarea) {
        var placeholder = $(textarea).closest('.inputTextArea').find('.placeholder');
        if ($(textarea).scrollTop() > placeholder.height()) {
            placeholder.css('opacity', 0);
        }
        else {
            placeholder.css('opacity', 1);
        }
    }


    /*
    *
    * ////////////////// СКРИПТЫ КОНТРОЛЛОВ ФОРМ  //////////////////
    *
    */
    /* Табы */
    $(function () {
        var menuLink = $('.menu-link');
        var menu = $('.navbar-2');
        var close = $('.close-btn');
        var navLink = $('.navbar-2 li a');

        menuLink.click(function () {
            menu.toggleClass('active-menu');
        });
        close.click(function () {
            menu.toggleClass('active-menu');
        });

        navLink.on('click', function (event) {
            event.preventDefault();
            var target = $(this).attr('href');
            var top = $(target).offset().top;
            menu.toggleClass('active-menu');
            $('html,body').animate({ scrollTop: top }, 500)
        });
    });
    $('.slider-feedback').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('#review-prev-btn'),
        nextArrow: $('#review-next-btn'),
        // fade: true,
        // centerMode: true,
        asNavFor: '.slider-nav-feedback'
    });
    $('.slider-nav-feedback').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.slider-feedback',
        dots: true,
        centerMode: true,
        centerPadding: '30px',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1750,
                settings: {
                    slidesToShow: 5,
                    infinite: false
                }

            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    infinite: false,
                    centerMode: true,

                }
            },
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 3,
                    infinite: false,
                    centerMode: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                    infinite: false,
                    // centerMode: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    infinite: false,
                    // centerMode: true,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 4,
                    infinite: false,
                    centerMode: false,
                    dots: false,
                    arrows: false
                }
            }
        ]
    });
});


$(document).ready(function () {
    $('nav > .topmenu li > a.g').on('click', function () {
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp();
        }
        else {
            element.addClass('open');
            element.children('ul').slideDown();
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp();
        }
    });

    $('#cssmenu>ul>li.has-sub>a').append('<span class="holder"></span>');

});
