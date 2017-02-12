requirejs(['/js/config.js'], function () {
    require(['Register'])
});

define('Register', ['jquery'], function ($) {
    $(function () {
        function checkUsername() {
            var myReg = /[a-zA-Z0-9]{6,11}/;
            var username = $.trim($('#username').val());
            if (!myReg.test(username)) {
                $('#usernametip').html('注册账号格式不正确，请重新输入');
                $('#usernameimg').attr('src', '../src/images/19.png');
                return false;
            }
            return true;
        }

        function checkEmail() {
            var myReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            var email = $('#email').val();
            if (!myReg.test(email)) {
                $('#emailtip').html('注册邮箱格式不正确，请重新输入');
                $('#emailimg').attr('src', '../src/images/19.png');
                return false;
            }
            return true;
        }

        function checkPassword() {
            var password = $('#password').val();
            if (password == "" || password == null) {
                $("#passwordtip").html("您还没有输入密码哦");
                return false;
            } else if (password.length < 6 || password.length > 16) {
                $("#passwordtip").html("请设置密码为6-16位字符，这样更安全");
                return false;
            } else {
                $("#passwordtip").html(" ");
                $("#passwordimg").attr("src", "../src/images/63.png");
                return true;
            }
        }

        function checkRepasswd() {
            var repassword = $("#repassword").val();
            var password = $('#password').val();
            if (password == null) {
                $("#repasswordtip").html("您还没有输入密码哦");
                return false;
            } else if (repassword == "" || repassword == null) {
                $("#repasswordtip").html("请再次输入密码");
                return false;
            } else if (password != repassword) {
                $("#repasswordtip").html("您两次输入的密码不一致，请重新输入");
                return false;
            } else if (password == repassword) {
                $("#repasswordtip").html(" ");
                $("#repasswordimg").attr("src", "../src/images/63.png");
                return true;
            }
        }

        $('.sign_submit').click(function () {
            var t = checkUsername();
            if (!t)
                return false;

            t = checkEmail();
            if (!t)
                return false;

            t = checkPassword();
            if (!t)
                return false;

            t = checkRepasswd();
            if (!t)
                return false;

            var agreement = $("#i-agree").is(":checked");
            if (agreement != true) {
                alert("您尚未同意盈盈理财账户开通相关协议，请勾选同意");
                return false;
            }
            var username = $("#username").val();
            var email = $("#email").val();
            var pwd = $("#password").val();
            $.ajax({
                url: '/api/user/register',
                type: 'POST',
                data: {
                    username: username,
                    email: email,
                    pwd: pwd
                },
                success: function (data) {
                    if (data && data.isSuccess) {
                        alert('注册成功');
                        //$("#sign1Form").submit();
                       window.location.href="login.html";
                    } else {
                        if (data.isusername == false) {
                            alert('注册失败,用户名重复')
                        } else if (data.isemail == false) {
                            alert('注册失败,邮箱重复')
                        }else {
                            alert('注册失败,用户名和邮箱重复')
                        }

                    }
                },
                error: function (err) {
                    console.log(err);
                }
            });
        });

    })

});






