requirejs(['/js/config.js'], function () {
   require(['Index']);
});

//requirejs(['/js/userinfo.js'], function () {
//   require(['UserInfo'])
//});


define('Index',['jquery'], function ($) {


//轮播
    var carousel;
    var float;
    var i = 0;
    function lunbo() {
        carousel = $('.carousel').children();
        float = $('.float').children();
        $(float).children('li').eq(i - 1).css('opacity', 1).siblings().css('opacity', 0.5);
        //.css({'opaction':1})
        $(carousel[i]).children().fadeIn('Slow');
        $(carousel[i]).siblings().children().fadeOut('Slow');
        if (i < 3) {
            i++;
        } else {
            i = 0;
        }
        time = setTimeout(lunbo, 4000);
    }
//鼠标事件
    window.onload = function () {
        var liarr = $('.float-ul-li');
        for (var x = 0; x < liarr.length; x++) {
            liarr[x].onmouseover = function () {
                i = this.innerText;
                carousel = $('.carousel').children();
                $(carousel[i]).children().fadeIn('Slow');
                $(carousel[i]).siblings().children().fadeOut('Slow');
                $(float).children('li').eq(i - 1).css('opacity', 1).siblings().css('opacity', 0.5);
            };
        }

    };

//轮播图
    $(function () {
        lunbo();
        var uls = $('.roll-img ul'),
            lis = uls.children('li'),
            width = lis.eq(0).width();
        $('#ac1').click(
            function () {
                uls.animate(
                    {'margin-left': '+' + width + 'px'},
                    120,
                    function () {
                        uls.css({'margin-left': 0}).children('li').first().before(
                            uls.children('li').last()
                        )
                    }
                )
            }
        );
        $('#ac2').click(
            function () {
                uls.animate(
                    {'margin-left': '-' + width + 'px'},
                    120,
                    function () {
                        uls.css({'margin-left': 0}).children('li').last().after(
                            uls.children('li').first()
                        )
                    }
                )
            }
        );
    });
    //置顶按钮
    $(function () {
        $(window).scroll(function () {
            var top = document.body.scrollTop;
            //console.log(top);
            if (top > 400) {
                $('.totop').css({'display': 'inline-block'})
            }else{
                $('.totop').css({'display': 'none'})
            }
        });
        $('.totop').click(function () {
            $("body").animate({'scrollTop': 0}, 1000)
        });
    });
});








