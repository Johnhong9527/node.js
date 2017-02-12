//引入配置文件
requirejs(['/js/config-one.js'], function () {
    require(['Info'])
});
//定义注册主模块
define('Info', ['jquery', 'lodash', 'index', 'common'], function ($, _) {
    //理财内容
    $.ajax({
        url: '/api/user/licai',
        type: 'POST',
        data: {
            id: ''
        },
        success: function (data) {
            //调用理财模板页

            $.get('./pages/tpl/list.tpl.html', function (html) {
                var complied = _.template(html);
                var myhtml = complied({list: data.doc});
                $("#listtpl").html(myhtml);
            });
        },
        error: function (err) {
            console.log(err)
        }
    });
    //新闻
    $.ajax({
        url: '/api/user/news',
        type: 'POST',
        success: function (data) {
            //调用新闻模板页
            $.get('./pages/tpl/news.tpl.html', function (html) {
                var complied = _.template(html);
                var myhtml = complied({list: data.doc});
                $("#newstpl").html(myhtml);
            })
        },
        error: function (err) {
            console.log(err)
        }
    });
    //媒体
    $.ajax({
        url: '/api/user/media',
        type: 'POST',
        success: function (data) {
            ////调用媒体模板页
            $.get('./pages/tpl/media.tpl.html', function (html) {
                var complied = _.template(html);
                var myhtml = complied({list: data.doc});
                $("#mediatpl").html(myhtml);
            })
        },
        error: function (err) {
            console.log(err)
        }
    });
});
