
//用户登录信息模块
define('UserInfo', ['jquery'], function ($) {

//读取用户名
    $("#username").html(window.localStorage.getItem("username"));

//判断用户是否登录
    if ( window.localStorage.getItem("username") == ''||window.localStorage.getItem("username") ==null) {
        alert('请先登录');
        window.location.href = '../pages/login.html'
    } else {
        $(".register").html('');
        $(".login").html('').html('欢迎回到盈盈理财，' + '<span style="color:red">' + window.localStorage.getItem("username") + '</span>&nbsp;<a style="display: inline;" href="../pages/login.html" class="drop">退出</a>');
    }

//用户退出清理缓存
    $('.drop').on('click', function () {
        window.localStorage.setItem('username', '');
    });

});