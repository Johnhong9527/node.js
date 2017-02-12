var userCtrl = require('../controller/user');

//注册
exports.Register = function (req, res) {
    var username = req.body.username;
    var email = req.body.email;
    var pwd = req.body.pwd;
    var user = {
        username: username,
        email: email,
        pwd: pwd
    };
    userCtrl.Register(user, function (data) {
        res.status(200).json(data);
    })
};

//登录
exports.Login = function (req, res) {
    var username = req.body.username;
    var pwd = req.body.pwd;
    var user = {
        username: username,
        pwd: pwd
    };
    userCtrl.Login(user, function (data) {
        res.status(200).json(data)
    })
};


//理财
exports.licai = function (req, res) {
    var id = req.body._id;
    var id = {
        _id: id
    };
    userCtrl.licai(id, function (data) {
        res.status(200).json(data);
    })
};
//新闻
exports.news = function (req, res) {
    userCtrl.news(function (data) {
        res.status(200).json(data);
    })
};
//媒体
exports.media = function (req, res) {
    userCtrl.media(function (data) {
        res.status(200).json(data);
    })
};