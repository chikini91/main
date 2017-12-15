
"use scrict";

$(document).ready(function() {

    // preloader

    $(window).on('load', function () {
        var $preloader = $('#p_prldr'),
            $svg_anm   = $preloader.find('.svg_anm');
        $preloader.delay(2000).fadeOut('slow');
    });
    $('#callback').click(function (event) {

        event.preventDefault();
        $('#overlay').fadeIn(400,
            function () {
                $('#modal_form')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('#modal_close').click(function () {
        $('#modal_form')
            .animate({opacity: 0, top: '45%'}, 200,
                function () {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });

    // End of preloader
    // Dropdown menu

    $('.leftblock__list > li').click(function () {
        var target = this;
        $('.leftblock__list > li').each(function () {
            if (target !== this) {
                $(this).find('.inner').slideUp({duration: 500, easing: 'linear'})
            } else {
                $(target).find('.inner').slideToggle({duration: 500, easing: 'linear'})
            }
        })
    });

    //End of Dropdown menu
    // SetInterval slider //


    var timerId = setInterval(function() {

        var width = $(".sliderContainer").width();

        $(".sliderContainer__slides>li").width(width);
        $(".sliderContainer__slides").width(width * $(".sliderContainer__slides>li").length);

        $(".sliderContainer__slides").css("left", -width);
        $(".sliderContainer__slides>li:last-child").prependTo('.sliderContainer__slides');

        function nextSlide() {
            $(".sliderContainer__slides").stop(true, true).animate({
                "margin-left": -width
            }, 800, function() {
                $(".sliderContainer__slides>li:first-child").appendTo('.sliderContainer__slides');
                $(".sliderContainer__slides").css("margin-left", 0);

            });
        }


        function prevSlide() {
            $(".sliderContainer__slides").stop(true, true).animate({
                "margin-left": width
            }, 800, function() {
                $(".sliderContainer__slides>li:last-child").prependTo('.sliderContainer__slides');
                $(".sliderContainer__slides").css("margin-left", 0);
            });
        }

        $(".sliderContainer__buttons_next").click(nextSlide);
        console.log(nextSlide())
        $(".sliderContainer__buttons_prev").click(prevSlide);

    // });

    }, 4000);

    //End of SetInterval slider //
    // checked input value


    $('.input').blur(checkInput);

         function checkInput() {

             $('#callbackform').find('.input').each(function () {
                 if ($(this).val() !== '') {

                     $(this).removeClass('js_empty_field');
                 } else {
                      $(this).addClass('js_empty_field').attr("placeholder", " поле необходимо заполнить!");
                   }
             });
         }

    //End of checked input value

});




