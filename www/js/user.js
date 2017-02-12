requirejs(['/js/config.js'], function () {
    require(['UserAPP']);
});

//获取用户登录信息
requirejs(['/js/userinfo.js'], function () {
    require(['UserInfo'])
});


define('UserAPP',['jquery', 'angular-route'], function ($) {
    //路由
    var app = angular.module('myapp', ['ngRoute']);  //定义一个模块
    //配置模块
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/user-date', {
            templateUrl: './tpl/user-date-tpl.html'
        }).when('/user-withdraw', {
            templateUrl: './tpl/user-withdraw-tpl.html'
        }).when('/user-fund', {
            templateUrl: './tpl/user-fund-tpl.html'
        }).when('/wenyingdai', {
            templateUrl: './tpl/user-wenyingdai-tpl.html'
        }).when('/huobijijin', {
            templateUrl: './tpl/user-huobijijin-tpl.html'
        }).when('/qitalicai', {
            templateUrl: './tpl/user-qitalicai-tpl.html'
        }).when('/zuorishouyi', {
            templateUrl: './tpl/user-zuorishouyi-tpl.html'
        }).when('/leijishouyi', {
            templateUrl: './tpl/user-leijishouyi-tpl.html'
        }).when('/', {
            templateUrl: './tpl/main-tpl.html'
        }).otherwise({redirectTo: '/'});
    }]);
    //绑定，渲染
    angular.bootstrap(document, ['myapp']);

    $(".cz").on('click', function () {
        $(".chongzhi").css("display","block");
        $(".body").css("display","block");
    });
    $(".tx").on('click', function () {
        $(".tixian").css("display","block");
        $(".body").css("display","block");
    });
    $(".close").on("click",function () {
        $(".chongzhi").css("display","none");
        $(".tixian").css("display","none");
        $(".body").css("display","none");
    });

});











