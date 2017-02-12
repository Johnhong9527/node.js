requirejs(['/js/config-one.js'], function () {
    require(['Fyd'])
});

define('Fyd', ['jquery','lodash','lazyload'], function ($,_) {
    $(".lazy").lazyload({effect: "fadeIn"});
    var id = location.search.substring(6);
    $.ajax({
        url: '/api/user/licai',
        type: 'POST',
        data: {
            _id: id
        },
        success: function (data) {
            //调用理财模板页
            $.get('../pages/tpl/fyd.tpl.html', function (html) {
                var complied = _.template(html);
                var myhtml = complied({list: data.doc});
                $("#fangyidai").html(myhtml);
            })
        },
        error: function (err) {
            console.log(err)
        }
    })
});