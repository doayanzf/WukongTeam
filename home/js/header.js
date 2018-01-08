var Css;
$(".herf").on({
    mouseover: function () {
        Css = $(this).parent().css("background-color");
        $(this).parent().css({
            "background-color":"#ff472b",
            "cursor":"pointer"
        });
    },
    mouseout: function () {
        $(this).parent().css("background-color", Css);
    },
    click: function() {
        var Wargu = $(this).attr('width');
        var Targu = $(this).text();
        if (Wargu == '85') window.parent.frames.location.href = '../home/home.html';
        if (Targu == '9块9包邮') window.parent.frames.location.href = "../修修/nine.html";
        if (Targu == '排行榜') window.parent.frames.location.href = "../修修/paihangbang.html";
        if (Targu == '品牌特卖') window.parent.frames.location.href = "../王亚坤/temai/temai.html";
        if (Targu == '发现好物') window.parent.frames.location.href = "../王亚坤/faxian/faxian.html";
        if (Targu == '手机版') window.parent.frames.location.href = "../王亚坤/phone/手机版.html";
    }
});

$(window).scroll(function () {
    var Pos = $('.Hnav').css('position');
    if ($(this).scrollTop() > 555 && Pos == 'static') {
        $('.Hnav').css({
            'position':'fixed',
            'top':'0px',
            'z-index':'99999'
        });
    }
    if ($(this).scrollTop() < 555 && Pos == 'fixed') {
        $('.Hnav').css({
            'position': 'static',
            'top': '0px',
            'z-index': '99999'
        });
    }
});