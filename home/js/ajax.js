var shopAjax = (urlLink) => {
    $.ajax({
        url: urlLink,
        type: 'GET',
        dataType: 'json',
        cache: false,
        success: data => {
            lazy_a();
            var str = '';
            var newArr = data.shop_data;
            for (i = 0; i < newArr.length; i++) {
                if ((i + 1) % 4 == 0) {
                    str += `
                        <a href="">
                            <div class="DSload" style = "margin-right:0;">`
                } else {
                    str += `
                        <a href="">
                            <div class="DSload">`
                }

                str += `
                                <img src="img/is-new-5a514b7e13.png" alt="">
                                <img src="img/2018-01-03_093138.png" alt="">
                                <ul>
                                    <li class="Ll1">
                                        <img  src="img/1.gif" alt="" data-original="${newArr[i].coupon_info.thumbnail_pic}" class="lazy" width="265" height="265">
                                    </li>
                                    <li class="Ll2">
                                        <span>包邮</span>
                                        <span>${newArr[i].coupon_info.title}</span>
                                    </li>
                                    <li class="Ll3">
                                        <span>现价:￥18</span>
                                        <span>销量:${newArr[i].coupon_info.month_sales}</span>
                                    </li>
                                    <li class="Ll4">
                                        <span>券后价:￥
                                            <b>14</b>
                                            <b>.9</b>
                                        </span>
                                        <span>立即抢购</span>
                                    </li>
                                </ul>
                            </div>
                        </a>`
            }
            // $('.Dload').html(str);
            $(str).appendTo('.Dload');
        }
    });
}
function lazy_a() {
    $(function () {
        $("img.lazy").lazyload({
            placeholder: "img/1407597976.jpg",
            threshold: 200,
            event: "click",
            effect: "fadeIn"
        });
    })
}
