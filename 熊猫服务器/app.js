


// 导入express模块
var express = require('express');

var fs = require('fs');


// 初始化
var app = express();

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//熊猫首页
app.get('/format_nan', (req, res) => {
    console.log(req.query);
    fs.readFile(__dirname + '/format_nan.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.product) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });
    
    //   res.sendFile(__dirname + '/format_nan.json');   
});

app.get('/format_nv', (req, res) => {
    fs.readFile(__dirname + '/format_nv.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.product) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });
});

// zt半糖
// 最新

app.get('/btzuixin', (req, res) => {
   
    
    fs.readFile(__dirname + '/btzuixin.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data.topic) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });
   
});
// 礼物
app.get('/btliwu', (req, res) => {
    
    fs.readFile(__dirname + '/btliwu.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data.topic) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });
    
 });
// 美食
app.get('/meishi', (req, res) => {
    
    fs.readFile(__dirname + '/btmeishi.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data.topic) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });
    
 });
// 生活
app.get('/btshenghuo', (req, res) => {
    
    fs.readFile(__dirname + '/btshenghuo.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data.topic) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });
    
 });
// 设计感
app.get('/btshejigan', (req, res) => {
    
    fs.readFile(__dirname + '/btshejigan.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data.topic) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });
    
 });
// 家居
app.get('/btjiaju', (req, res) => {
    
    fs.readFile(__dirname + '/btjiaju.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data.topic) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });
    
 });
// 数码
app.get('/btshuma', (req, res) => {
    
    fs.readFile(__dirname + '/btshuma.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data.topic) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });
    
 });
// 阅读
app.get('/btyuedu', (req, res) => {
   
    fs.readFile(__dirname + '/btyuedu.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data.topic) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });
   
});
// 学生党
app.get('/btxueshengdang', (req, res) => {
    
    fs.readFile(__dirname + '/btxueshengdang.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data.topic) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });
    
 });
// 上班族
app.get('/btshangbanzu', (req, res) => {
    
    fs.readFile(__dirname + '/btshangbanzu.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data.topic) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });
    
 });
// 美妆
app.get('/btmeizhuang', (req, res) => {
    
    fs.readFile(__dirname + '/btmeizhuang.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data.topic) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });
    
 });
// 护理
app.get('/bthuli', (req, res) => {
    
    fs.readFile(__dirname + '/bthuli.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data.topic) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });
    
 });
// 运动户外
app.get('/btyundonghuwai', (req, res) => {
    
    fs.readFile(__dirname + '/btyundonghuwai.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data.topic) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });
    
 });



 
// 王亚坤
// 发现好物
app.get('/faxian', (req, res) => {
    
    fs.readFile(__dirname + '/faxian.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });

});

// 尹修颖
//9块9
// 精选
app.get('/nine_jingxuan', (req, res) => {
    
    fs.readFile(__dirname + '/nine_jingxuan.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data.coupon_list) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });  

});
// 生活管家
app.get('/nine_shenghuo', (req, res) => {
    
    fs.readFile(__dirname + '/nine_shenghuo.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data.coupon_list) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });    

});
// 美容彩妆
app.get('/nine_meirong', (req, res) => {
    
    fs.readFile(__dirname + '/nine_meirong.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data.coupon_list) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });    

});
// 数码运动
app.get('/nine_shuma', (req, res) => {
    
    fs.readFile(__dirname + '/nine_shuma.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data.coupon_list) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });     

});
// 配饰穿搭
app.get('/nine_peishi', (req, res) => {
    
    fs.readFile(__dirname + '/nine_peishi.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data.coupon_list) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });   

});
// 零食特产
app.get('/nine_lingshi', (req, res) => {
    
    fs.readFile(__dirname + '/nine_lingshi.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data.coupon_list) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });   

});

// 排行榜
// 总榜
app.get('/ph_zongbang', (req, res) => {
    
    fs.readFile(__dirname + '/ph_zongbang.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });   

});
// 女装
app.get('/ph_nvzhuang', (req, res) => {
    
    fs.readFile(__dirname + '/ph_nvzhuang.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });   

});
// 美妆
app.get('/ph_meizhuang', (req, res) => {
    
    fs.readFile(__dirname + '/ph_meizhuang.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });     

});
// 食品生鲜
app.get('/ph_shipinshengxian', (req, res) => {
    
    fs.readFile(__dirname + '/ph_shipinshengxian.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });     

});
// 护肤
app.get('/ph_hufu', (req, res) => {
    
    fs.readFile(__dirname + '/ph_hufu.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });   ;   

});
// 内衣
app.get('/ph_neiyi', (req, res) => {
    
    fs.readFile(__dirname + '/ph_neiyi.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });     

});
// 日用百货
app.get('/ph_riyong', (req, res) => {
    
    fs.readFile(__dirname + '/ph_riyong.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });    

});
// 家纺软饰
app.get('/ph_jiafang', (req, res) => {
    
    fs.readFile(__dirname + '/ph_jiafang.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });     

});
// 女鞋
app.get('/ph_nvxie', (req, res) => {
    
    fs.readFile(__dirname + '/ph_nvxie.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });   

});
// 母婴童装
app.get('/ph_muying', (req, res) => {
    
    fs.readFile(__dirname + '/ph_muying.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });      

});
// 手机周边
app.get('/ph_shouji', (req, res) => {
    
    fs.readFile(__dirname + '/ph_shouji.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });     

});
// 箱包
app.get('/ph_xiangbao', (req, res) => {
    
    fs.readFile(__dirname + '/ph_xiangbao.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });      

});
// 家电
app.get('/ph_jiadian', (req, res) => {
    
    fs.readFile(__dirname + '/ph_jiadian.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });      

});
// 运动健身
app.get('/ph_yundong', (req, res) => {
    
    fs.readFile(__dirname + '/ph_yundong.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });     

});
// 珠宝配饰
app.get('/ph_zhubao', (req, res) => {
    
    fs.readFile(__dirname + '/ph_zhubao.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });      

});

// 品牌特卖
app.get('/temai', (req, res) => {
    
    fs.readFile(__dirname + '/temai.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {

            var dataObj = JSON.parse(data);
            var resultData = [];

            for (var productObj of dataObj.data.activity_list) {
                resultData.push(productObj);
            }

            var pageNum = parseInt(req.query.pageNum);
            var pageSize = parseInt(req.query.pageSize);
            var resultData2 = resultData.slice((pageNum - 1) * pageSize, pageNum * pageSize);

            res.send({
                total_count: resultData.length,
                shop_data: resultData2
            });

        };
    });        

});





// //熊猫首页
// app.get('/format_nan', (req, res) => {
//    var rs =  fs.createReadStream(format_nan.json);
//    var tempChunk = '';
//    rs.on('data', chunk => {
//         tempChunk =+ chunk;
//    })
//    var pageNo = parseInt(req.query.pageNo);
//    var pageSize = parseInt(req.query.pageSize);
//    var resultData2;
//    var pageCount;
//    rs.on('end' , () => {
//        var obj = JSON.parse(tempChunk);
//        var list = obj.product;
//        for (var tempObj of list){
//            pageCount = tempObj.product.length;
//            resultData2 = tempObj.product.slice((pageNo - 1) * pageSize, pageNo * pageSize);
//        }
//        res.send({pageCount: pageCount, data})
//    })
  
//  });






// 监听端口
app.listen(8888, function () {
    console.log('服务器启动成功')
});