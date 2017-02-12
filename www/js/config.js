require.config({
    baseUrl: '/',
    paths: {
        "jquery": './components/jquery/dist/jquery',
        "cookie": './components/jquery.cookie',
        'calender': './components/lyz.calendar.min',
        "lazyload": './components/jquery_lazyload/jquery.lazyload',
        "angular": './components/angular/angular.min',
        "angular-route": './components/angular-route/angular-route.min'
    },
    shim: {
        "lazyload": ['jquery'],
        "cookie": ['jquery'],
        'calender': ['jquery'],
        "jquery": {
            exports: '$'
        },
        "angular-route": ["angular"]
    },
    urlArgs: '_v=' + new Date().getTime()
});

//require(['UserInfo']);