$(window).on('load', function () {
    // ここから文字を<span></span>で囲む記述
    $('.mes').children().andSelf().contents().each(function () {
        if (this.nodeType == 3) {
            $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
        }
    });
    // ここから一文字ずつフェードインさせる記述
    $('.mes').css({ 'opacity': 1 });
    for (var i = 0; i <= $('.mes').children().size(); i++) {
        $('.mes').children('span:eq(' + i + ')').delay(50 * i).animate({ 'opacity': 1 }, 50);
    };

    $(function () {
        $('.header-wrap').hide().fadeIn(2000);
    });
});

$(window).scroll(function () {
    $('.About').each(function () {
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100) {
            $(this).addClass('scrollin');
        }
    });
    $('.Skill').each(function () {
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100) {
            $(this).addClass('scrollin');
        }
    });
    $('.Services').each(function () {
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100) {
            $(this).addClass('scrollin');
        }
    });
    $('.Works').each(function () {
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100) {
            $(this).addClass('scrollin');
        }
    });
});


$(function () {


    $('.works').hover(function () {
        $(this).children('h3').css({
            'display': 'block',
            'opacity': '1'
        });
        $(this).children('a').stop().animate({ 'opacity': '0.2' }, 500);
    }, function () {
        $(this).children('h3').css("display", "none");
        $(this).children('a').stop().animate({ 'opacity': '1' }, 1000);
    }
    );
});


$(function () {
    var topBtn = $('.header-bottom');
    topBtn.hide(2000);

    //スクロールが100達したら表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });


    $("#toTop").click(function () {
        $("html,body").animate({
            scrollTop: $('header').offset().top
        }, 500);
    });


    $("#toAbout").click(function () {
        $("html,body").animate({
            scrollTop: $('.About').offset().top
        }, 500);
    });

    $("#toSkills").click(function(){
        $("html,body").animate({
            scrollTop:$('.Skill').offset().top
        },500);
    });


    $("#toServices").click(function () {
        $("html,body").animate({
            scrollTop: $('.Services').offset().top
        }, 500);
    });


    $("#toWorks").click(function () {
        $("html,body").animate({
            scrollTop: $('.Works').offset().top
        }, 500);
    });


    $("#toContact").click(function () {
        $("html,body").animate({
            scrollTop: $('.Contact').offset().top
        }, 500);
    });



    $("#totop").click(function () {
        $("html,body").animate({
            scrollTop: $('header').offset().top
        }, 500);
    });


    $("#toabout").click(function () {
        $("html,body").animate({
            scrollTop: $('.About').offset().top
        }, 500);
    });

    $("#toskills").click(function(){
        $("html,body").animate({
            scrollTop:$('.Skill').offset().top
        },500);
    });


    $("#toservices").click(function () {
        $("html,body").animate({
            scrollTop: $('.Services').offset().top
        }, 500);
    });


    $("#toworks").click(function () {
        $("html,body").animate({
            scrollTop: $('.Works').offset().top
        }, 500);
    });


    $("#tocontact").click(function () {
        $("html,body").animate({
            scrollTop: $('.Contact').offset().top
        }, 500);
    });

    function toggleNav() {
        var body = document.body;
        var hamburger = document.getElementById('js-hamburger');
        var blackBg = document.getElementById('js-black-bg');
      
        hamburger.addEventListener('click', function() {
          body.classList.toggle('nav-open');
        });
        blackBg.addEventListener('click', function() {
          body.classList.remove('nav-open');
        });
      }
      toggleNav();

});