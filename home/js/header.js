$(".herf").click(function () {
    var Wargu = $(this).attr('width');
    var Targu = $(this).text();
    if (Wargu == '85') window.parent.frames.location.href = "./home.html";
    if (Targu == '9块9包邮') window.parent.frames.location.href = "../修修/nine.html";
    if (Targu == '排行榜') window.parent.frames.location.href = "../修修/paihangbang.html";
    if (Targu == '品牌特卖') window.parent.frames.location.href = "../王亚坤/temai/temai.html";
    if (Targu == '发现好物') window.parent.frames.location.href = "../半糖首页/好物.html";
    if (Targu == '手机版') window.parent.frames.location.href = "../王亚坤/phone/手机版.html";
});