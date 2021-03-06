jQuery(document).ready(function() {
    "use strict";

    function i(i) {
        i.each(function() {
            var i = $(this),
                e = i.data("delay"),
                t = "animated " + i.data("animation");
            i.css({
                "animation-delay": e,
                "-webkit-animation-delay": e
            }), i.addClass(t).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                i.removeClass(t)
            })
        })
    }
    setTimeout(function() {
            $("body").addClass("loaded")
        }, 3e3), $(".select-drop").selectbox(), $(window).on("load", function() {
            $("#body").each(function() {
                var i = $(".nav-wrapper"),
                    e = i.find(".navbar");
                $(window).scroll(function() {
                    e.hasClass("navbar-sticky") && ($(this).scrollTop() <= 400 || $(this).width() <= 750) ? e.removeClass("navbar-sticky").appendTo(i) : !e.hasClass("navbar-sticky") && $(this).width() > 750 && $(this).scrollTop() > 400 && (i.css("height", i.height()), e.css({
                        opacity: "0"
                    }).addClass("navbar-sticky"), e.appendTo($("body")).animate({
                        opacity: 1
                    }))
                })
            })
        }), $(".navbar a.dropdown-toggle").on("click", function(i) {
            var e = $(this).parent().parent();
            if (!e.hasClass("nav")) {
                var t = $(this).parent(),
                    a = parseInt(e.css("height").replace("px", "")) / 2,
                    n = parseInt(e.css("width").replace("px", "")) - 10;
                return t.hasClass("open") ? (t.removeClass("open"), $(this).next().css("top", a + "px"), $(this).next().css("left", n + "px")) : t.addClass("open"), !1
            }
        }), $(".navbar").width() > 1007 && $(".nav .dropdown").hover(function() {
            $(this).addClass("open")
        }, function() {
            $(this).removeClass("open")
        }), $('.scrolling  a[href*="#"]').on("click", function(i) {
            i.preventDefault(), i.stopPropagation();
            var e = $(this).attr("href");
            $(e).velocity("scroll", {
                duration: 800,
                offset: -150,
                easing: "easeOutExpo",
                mobileHA: !1
            })
        }), $(".scrolling").click(function() {
            $("html, body").animate({
                scrollTop: $("#message").offset().top - 50
            }, 600)
        }),
        function() {
            $("#thubmnailSlider").carousel({
                interval: 3e3
            })
        }(),
        function() {
            $(".thumbnailCarousel .item").each(function() {
                var i = $(this),
                    e = 1;
                if ($(window).width() <= 767)
                    for (e = 1; e < 1; e++) i = i.next(), i.length || (i = $(this).siblings(":first")), i.children(":first-child").clone().addClass("cloneditem-" + e).appendTo($(this));
                else if ($(window).width() <= 991)
                    for (e = 1; e < 2; e++) i = i.next(), i.length || (i = $(this).siblings(":first")), i.children(":first-child").clone().addClass("cloneditem-" + e).appendTo($(this));
                else
                    for (e = 1; e < 3; e++) i = i.next(), i.length || (i = $(this).siblings(":first")), i.children(":first-child").clone().addClass("cloneditem-" + e).appendTo($(this))
            })
        }(), $(".counter").counterUp({
            delay: 10,
            time: 2e3
        }), $(".datepicker").datepicker({
            startDate: "dateToday",
            autoclose: !0
        }), $(document).on("click", ".browse", function() {
            $(this).parent().parent().parent().find(".file").trigger("click")
        });
    var e = $(".main-slider .inner");
    e.length > 0 && e.each(function() {
        var i = $(this).parent().data("loop"),
            e = $(this).parent().data("autoplay"),
            t = $(this).parent().data("interval") || 3e3;
        $(this).owlCarousel({
            items: 1,
            loop: i,
            margin: 0,
            nav: !0,
            dots: !1,
            navText: [],
            autoplay: e,
            autoplayTimeout: t,
            autoplayHoverPause: !0,
            smartSpeed: 700,
            rtl: !1
        })
    }), $(".owl-carousel.partnersLogoSlider").owlCarousel({
        loop: !0,
        margin: 28,
        autoplay: !0,
        autoplayTimeout: 6e3,
        autoplayHoverPause: !0,
        nav: !0,
        dots: !1,
        smartSpeed: 500,
        rtl: !1,
        responsive: {
            320: {
                slideBy: 1,
                items: 1
            },
            768: {
                slideBy: 1,
                items: 3
            },
            992: {
                slideBy: 1,
                items: 4
            }
        }
    }), $(".testimonial-slider").owlCarousel({
        center: !0,
        loop: !0,
        autoplay: !0,
        autoplayTimeout: 6e3,
        smartSpeed: 1e3,
        responsive: {
            320: {
                slideBy: 1,
                items: 1
            },
            768: {
                slideBy: 1,
                items: 1
            },
            992: {
                slideBy: 1,
                items: 3
            }
        }
    }), $(".quick_view").fancybox({
        baseClass: "quick-view-container",
        infobar: !1,
        buttons: !1,
        thumbs: !1,
        margin: 0,
        touch: {
            vertical: !1
        },
        animationEffect: !1,
        transitionEffect: "slide",
        transitionDuration: 500,
        baseTpl: '<div class="fancybox-container" role="dialog"><div class="quick-view-content"><div class="quick-view-carousel"><div class="fancybox-stage"></div></div><div class="quick-view-aside"></div><button data-fancybox-close class="quick-view-close">X</button></div></div>',
        onInit: function(i) {
            for (var e = '<ul class="quick-view-bullets">', t = 0; t < i.group.length; t++) e += '<li><a data-index="' + t + '" href="javascript:;"><span>' + (t + 1) + "</span></a></li>";
            e += "</ul>", $(e).on("click touchstart", "a", function() {
                var i = $(this).data("index");
                $.fancybox.getInstance(function() {
                    this.jumpTo(i)
                })
            }).appendTo(i.$refs.container.find(".quick-view-carousel"));
            var a = i.group[i.currIndex].opts.$orig,
                n = a.data("qw-form");
            i.$refs.container.find(".quick-view-aside").append($("#" + n).clone(!0).removeClass("hidden"))
        },
        beforeShow: function(i) {
            i.$refs.container.find(".quick-view-bullets").children().removeClass("active").eq(i.currIndex).addClass("active")
        }
    }), $(".close-btn").click(function() {
        $(this).parent().hide()
    }), $("banner-slick-slider .inner").on("init", function(e, t) {
        i($(".slide1").find("[data-animation]"))
    }), $(".banner-slick-slider .inner").on("beforeChange", function(e, t, a, n) {
        i($('div.slide[data-slick-index="' + n + '"]').find("[data-animation]"))
    }), $(".banner-slick-slider .inner").slick({
        autoplay: !0,
        autoplaySpeed: 3e3,
        dots: !1,
        arrows: !0,
        fade: !0,
        responsive: [{
            breakpoint: 1024,
            settings: {
                dots: !1
            }
        }, {
            breakpoint: 768,
            settings: {
                dots: !1,
                arrows: !1,
                autoplay: !0
            }
        }, {
            breakpoint: 480,
            settings: {
                dots: !1
            }
        }]
    });
    var t = $(".gallery_grid");
    t.length && (t.isotope({
        itemSelector: ".element",
        layoutMode: "fitRows"
    }), $("#filters .button").on("click", function() {
        $("#filters .button").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return $(".gallery_grid").isotope({
            filter: i
        }), !1
    })), $(".user-pro").rateYo({
        starWidth: "15px",
        spacing: "5px"
    }), $(".visitor").rateYo({
        rating: 3.2,
        readOnly: !0,
        starWidth: "15px",
        spacing: "5px"
    }), $(".user").rateYo({
        starWidth: "15px",
        spacing: "5px"
    }), $(".fa-heart-o").on("click", function() {
        $(this).toggleClass("active")
    }), $(".grid").isotope({
        itemSelector: ".grid-item",
        layoutMode: "fitRows"
    })
});
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-71155940-7', 'auto');
ga('send', 'pageview');
(function(w, i, d, g, e, t, s) {
    w[d] = w[d] || [];
    t = i.createElement(g);
    t.async = 1;
    t.src = e;
    s = i.getElementsByTagName(g)[0];
    s.parentNode.insertBefore(t, s);
})(window, document, '_gscq', 'script', '//widgets.getsitecontrol.com/46851/script.js');