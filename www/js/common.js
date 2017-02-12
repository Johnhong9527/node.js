requirejs(['/js/config-one.js'], function () {
    require(['Common'])
});

define('Common', ['jquery'], function () {
//置顶
    $(function () {
        $(window).scroll(function () {
            var top = document.body.scrollTop;
            if (top > 400) {
                $('.totop').css({'display': 'inline-block'})
            } else {
                $('.totop').css({'display': 'none'})
            }
        });
        $('.totop').click(function () {
            $("body").animate({'scrollTop': 0}, 1000)
        });
    });
});




