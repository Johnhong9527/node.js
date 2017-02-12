requirejs(['/js/config.js'], function () {
    require(['Login']);
});

define('Login', ['cookie','jquery'], function (cookie,$) {

    $("#login_submit").on('click', function () {
        var user='';
        var username = $('#username').val();
        var pwd = $('#password').val();
        $.ajax({
            url: '/api/user/login',
            type: 'POST',
            data: {
                username: username,
                pwd: pwd
            },
            success: function (data) {
                if (data.doc) {
                    var user=data.doc.username;
                    console.log(user);
                    //$.cookie('username',user,{path:'/',expires:10});
                    window.localStorage.setItem('username',user);
                    alert('登录成功');
                    window.location.href = 'user.html'
                } else {
                    alert('登录失败');
                }
            },
            error: function (err) {
                console.log(err)
            }
        })
    })
});