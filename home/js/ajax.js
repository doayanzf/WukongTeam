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
                var SArr = newArr[i].coupon_info.zk_price.split('.');
                if (SArr[1]) {} else SArr[1] = 0;
                if (newArr[i].item_count == 1) {
                    str += `<a href="http://www.sqkb.com/zk/${newArr[i].coupon_info.coupon_id}/">`;
                } else {
                    str += `<a href="http://www.sqkb.com/topic/${newArr[i].topic_id}/">`;
                };


                if ((i + 1) % 4 == 0) {
                    str += `
                            <div class="DSload" style = "margin-right:0;">`;
                } else {
                    str += `
                            <div class="DSload">`;
                }
                if (newArr[i].coupon_info.is_new) {
                    str += `
                            <img src="img/is-new-5a514b7e13.png" alt="">`;
                } else {
                    str += `
                            <img src="" alt="">`;
                }
                str += `
                                <img src="http://img.hb.aicdn.com/564f1cd1b8a9dbfc9b1abcffee416b37995aae223276-FkRO5c_fw658" alt="">
                                <ul>
                                    <li class="Ll1">
                                        <img  src="img/1.gif" alt="" data-original="${newArr[i].coupon_info.thumbnail_pic}" class="lazy" width="265" height="265">
                                    </li>
                                    <li class="Ll2">
                                        <span>包邮</span>
                                        <span>${newArr[i].coupon_info.title}</span>`

                if (newArr[i].item_count != 1){
                    str += `<p>共${newArr[i].item_count}件</p>`
                }

                str += `                        
                                    </li>
                                    <li class="Ll3">
                                        <span>现价:￥${newArr[i].coupon_info.raw_price}</span>
                                        <span>销量:${newArr[i].coupon_info.month_sales}</span>
                                    </li>
                                    <li class="Ll4">
                                        <span>券后价:￥
                                            <b>${SArr[0]}</b>
                                            <b>.${SArr[1]}</b>
                                        </span>
                                        <span>立即抢购</span>
                                    </li>
                                </ul>
                            </div>
                        </a>`
            }
            // $('.Dload').html(str);
            $(str).appendTo('.Dload');

            $('.DSload').hover(
                function() {
                    $(this).css('box-shadow','0 0 10px #bbbbbb')
                },
                function () {
                    $(this).css('box-shadow','')
                }
            )
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
