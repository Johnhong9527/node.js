var express=require('express');
var path=require('path');
var bodyParser=require('body-parser');
var userRoute=require('./route/user');

var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//注册
app.post('/api/user/register', userRoute.Register);
//登录
app.post('/api/user/login',userRoute.Login);
//理财
app.post('/api/user/licai',userRoute.licai);
//新闻
app.post('/api/user/news',userRoute.news);
//媒体
app.post('/api/user/media',userRoute.media);

app.use(express.static(path.join(__dirname,'www')));

app.use(function (req, res) {
    res.send('<h1>Error 404</h1>')
});

app.listen(8080, function () {
    console.log('server start')
});