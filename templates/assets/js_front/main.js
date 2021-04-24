// ==========menu hamburger============

var but = document.querySelector(' .menu-hamburger');
var con = document.querySelector(' .header .mobile-content');

but.addEventListener('click', function () {
    if (this.classList.contains("active-mobil-menu")) {
        this.classList.remove('active-mobil-menu');
        con.classList.remove('active');
        backgroundHidden.removeClass("show");
        $(".search-block").removeClass("show");
        $('body').removeClass("overflow-hidden");
    } else {
        this.classList.add('active-mobil-menu');
        con.classList.add('active');
        backgroundHidden.addClass("show");
        $('body').addClass("overflow-hidden");
        $(".search-block").removeClass("show");
        $(".basket-menu").removeClass("show");
        $(".header-basket").removeClass("active");
    }
});

// ===============search=======================

$(document).ready(function () {

    $(".header-search").click(function () {
        $(".search-block").addClass("show");
        $(".menu-hamburger").removeClass('active-mobil-menu');
        $(".header .mobile-content").removeClass('active');
        backgroundHidden.addClass("show")
        $('body').addClass("overflow-hidden");
        $(".header-basket").removeClass("active");
        $(".basket-menu").removeClass("show");
        $(".header-profile span").removeClass("active");
        $(".header-profile .header-profile__content").css("height", 0);

    })

    $(".search-block .search-but").click(function () {
        $(".search-block").removeClass("show");
        backgroundHidden.removeClass("show")
        $('body').removeClass("overflow-hidden");
    });
})

// ================show modal=================

$(document).ready(function () {
    // $(".open-modal-profile").click(function () {
    //     $('.modal-sign-in').toggleClass("active")
    //     $("body").toggleClass("overflow-hidden")
    // });

    $(".modal-sign-in .but-finish").click(function () {
        closeAllAuthModals();
    })
})


// =============close modal==============

$(document).ready(function () {
    $(".close-modal_global").click(function () {
        $(".modal-sign-in").removeClass("active");
        $(".modal-change-number").removeClass("active")
    })
})

// ==========profile dropdown===========

$(document).ready(function () {
    let but = $(".header-profile");

    but.find("span").click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).siblings(".header-profile__content").css("height", 0);
        } else {
            $(this).addClass("active");
            $(this).siblings(".header-profile__content").css("height", $(this).siblings(".header-profile__content")[0].scrollHeight);
            backgroundHidden.removeClass("show")
            $(".header-basket").removeClass("active");
            $(".basket-menu").removeClass("show");
            $("body").removeClass("overflow-hidden");
            $(".search-block").removeClass("show");
            $(".menu-hamburger").removeClass('active-mobil-menu');
            $(".header .mobile-content").removeClass('active');
        }
    })
})

var backgroundHidden = $(".background-hidden");

backgroundHidden.on("click", function () {
    $(this).removeClass("show")
    $(".header-basket").removeClass("active");
    $(".basket-menu").removeClass("show");
    $("body").removeClass("overflow-hidden");
    $(".search-block").removeClass("show");
    $(".menu-hamburger").removeClass('active-mobil-menu');
    $(".header .mobile-content").removeClass('active');
})

// ============open and close basket============

$(document).ready(function () {
    var but = $(".header-basket");
    var con = $(".basket-menu");
    var body = $("body");

    but.click(function () {
        if ($(this).hasClass("active")) {
            con.removeClass("show");
            $(this).removeClass("active");
            body.removeClass("overflow-hidden");
            backgroundHidden.removeClass("show")
        } else {
            con.addClass("show");
            $(this).addClass("active");
            body.addClass("overflow-hidden");
            backgroundHidden.addClass("show")
            $(".search-block").removeClass("show");
            $(".menu-hamburger").removeClass('active-mobil-menu');
            $(".header .mobile-content").removeClass('active');
            $(".header-profile span").removeClass("active");
            $(".header-profile .header-profile__content").css("height", 0);
        }
    });


    $(".basket-menu__total .basket-but").click(function () {
        but.removeClass("active");
        con.removeClass("show");
        body.removeClass("overflow-hidden")
        backgroundHidden.removeClass("show")
    })

    // $(document).on("click", function (e) {
    //     if ($(e.target).closest(".basket-menu__content").length || $(e.target).closest(".header-basket").length) {
    //         return
    //     }
    //     but.removeClass("active");
    //     con.removeClass("show");
    //     body.removeClass("overflow-hidden")
    // })


    // ========basket input=======

    var minus = ".sum-product .minus";
    var plus = ".sum-product .plus";
    $(document).on('click', minus, function () {
        var val = $(this).siblings(".input-num").find("input");
        if (val.val() <= 1) {
            val.val(1);
        } else {
            var minus = val.val()
            minus--
            val.val(minus)
        }
    })

    $(document).on('click', plus, function () {
        var val = $(this).siblings(".input-num").find("input");
        var plus = val.val();
        plus++
        val.val(plus)
    })

})


// =============hide modal index page ===============

$(document).ready(function () {
    $(".subscribe-modal .close-modal").click(function () {
        $(".subscribe-modal").addClass("hide");
    })
})


// =================scroll color=============

$(document).ready(function () {
    var block = $(".bestseller__card .color-all");

    block.each(function (i, obj) {
        if ($(obj).width() > (block.find(".color").width() + 6) * $(obj).find(".color").length) {
            $(obj).siblings(".color-arrow").addClass("hide");
        }
    })

    $(block).on("scroll", function () {

        if ($(this).scrollLeft() > 0) {
            $(this).closest('.color-all__scroll ').css("padding", 0)
            $(this).siblings(".color-arrow").addClass("hide");
        } else {
            $(this).siblings(".color-arrow").removeClass("hide");
            $(this).closest('.color-all__scroll ').css("paddingRight", 20)
        }
    })
})


// ==========custom select===========

$('select').each(function () {

    var $this = $(this),
        numberOfOptions = $(this).children('option').length;

    $this.addClass('s-hidden');

    $this.wrap('<div class="select"></div>');

    $this.after('<div class="styledSelect"></div>');

    var $styledSelect = $this.next('div.styledSelect');

    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function (e) {
        e.stopPropagation();
        $('div.styledSelect.active').each(function () {
            $(this).removeClass('active').next('ul.options').hide();
        });
        $(this).toggleClass('active').next('ul.options').toggle();
    });

    $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $listItems.removeClass("active")
        $(this).addClass("active")
        $this.val($(this).attr('rel'));
        $list.hide();
    });

    $(document).click(function () {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});

$(document).ready(function () {
    var inputSelector = '.input-reg :input';

    function checkForm() {
        var isValidForm = true;
        $(this.form).find(inputSelector).each(function () {
            if (!this.value.trim()) {
                isValidForm = false;
            }
        });

        $(this.form).find('.button-form__disabled').prop('disabled', !isValidForm);
        return isValidForm;
    }

    $('.button-form__disabled').closest('form').submit(function () {
        return checkForm.apply($(this).find(':input')[0]);
    }).find(inputSelector).keyup(checkForm).keyup();
})


// =================slider for main-card=============

$(document).ready(function () {
    activateImg()
})

function activateImg() {
    $(".favorites-model__card").each(function (i, obj) {
        $(obj).find(".card-img:eq(0)").addClass("active")
        $(obj).find(".color:eq(0)").addClass("active")
    })

    $(".favorites-model__card .color").click(function () {
        $(this).closest(".favorites-model__card").find(".color").removeClass("active");
        $(this).closest(".favorites-model__card").find(".card-img").removeClass("active");
        $(this).addClass("active");
        var indexImg = $(this).index();
        $(this).closest(".favorites-model__card").find(".card-img:eq(" + indexImg + ")").addClass("active")
    })
}

$(".phone5").on("input", function () {
    $(".change-nmb-btn-continue").prop("disabled", false)
})


// Simple example on click

// $('.yourBtnClass').on('click', function() {
// 	rocketcss(this,'.yourTargetClass', 'rocketPulse');
// 	$('.yourTargetClass').addClass('targetPulse');
// });





