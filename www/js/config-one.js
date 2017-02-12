require.config({
    baseUrl: '/',
    paths: {
        'jquery': './components/jquery/dist/jquery',
        'bootstrap': './components/bootstrap/dist/js/bootstrap',
        'lodash': './components/lodash/dist/lodash',
        'index': './js/index',
        'common': './js/common',
        'fyd': './js/fyd',
        "lazyload": './components/jquery_lazyload/jquery.lazyload'
    },
    shim: {
        "lazyload": ['jquery'],
        'bootstrap': ['jquery'],
        'lodash': ['jquery'],
        'jquery': {
            exports: '$'
        }
    },
    urlArgs: '_v=' + new Date().getTime
});