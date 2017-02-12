var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var UserSchema=new Schema({
    username:String,
    email:String,
    pwd:String,
    addtime:Date
});


//理财表
var licaiSchema = new Schema({
    title: String,
    initial: String,
    sum: String,
    money: String,
    expect: String,
    day: String,
    addtime: String
});
//新闻表
var NewsSchema = new Schema({
    title: String,
    time: String
});
//媒体表
var MediaSchema = new Schema({
    title: String,
    content: String,
    time: String
});


mongoose.connect('mongodb://192.168.31.88/common', function (err) {

});

var userTable=mongoose.model('user',UserSchema);
var userProduct = mongoose.model('product', licaiSchema);
var userNews = mongoose.model('news', NewsSchema);
var userMedia = mongoose.model('media', MediaSchema);

//登录
exports.Login= function (user, callback) {
    userTable.findOne(user, function (err,doc) {
        if(err){
            var errjson={
                err:err,
                isSuccess:false
            };
            callback(errjson)
        }else{
            var successjson={
                isSuccess:true,
                doc:doc
            };
            callback(successjson)
        }
    })
};

//注册

exports.Register = function (user, callback) {
    user.addtime = new Date();
    //查找用户名
    userTable.find({'username': user.username}, function (err, docs) {
        //查找邮箱
        userTable.find({'email': user.email}, function (err, doc) {
            //有重复docs!='' doc!=''
            if (docs.length == '' && doc.length == '') {
                userTable.create(user, function () {
                    var successjson = {
                        isSuccess: true
                    };
                    callback(successjson)
                });
            } else {
                console.log(docs);
                console.log(doc);
                // ajax 邮箱重复
                if (docs.length == '' && doc.length != '') {
                    var emailjson = {
                        err: err,
                        isemail: false
                    };
                    callback(emailjson);

                } else if (docs.length != '' && doc.length == '') {
                    //ajax 用户名重复
                    var usernamejson = {
                        err: err,
                        isusername: false
                    };
                    callback(usernamejson);
                } else {
                    //ajax 都重复了
                    var errjson = {
                        err: err,
                        isSuccess: false
                    };
                    callback(errjson);
                }
            }
        })
    });
};


//理财
exports.licai = function (id, callback) {
    if (id._id == undefined) {
        userProduct.find('', function (err, doc) {
            if (err) {
                var errjson = {err: err, isSuccess: false};
                callback(errjson);
            } else {
                var successjson = {doc: doc, isSuccess: true};
                callback(successjson);
            }
        }).limit(4).sort({_id: -1});
    } else {
        userProduct.find(id, function (err, doc) {
            if (err) {
                var errjson = {err: err, isSuccess: false};
                callback(errjson);
            } else {
                var successjson = {doc: doc, isSuccess: true};
                callback(successjson);
            }
        })
    }
}
;
//新闻
exports.news = function (callback) {
    userNews.find('', function (err, doc) {
        if (err) {
            var errjson = {
                err: err,
                isSuccess: false
            };
            callback(errjson);
        } else {
            var successjson = {
                doc: doc,
                isSuccess: true
            };
            callback(successjson);
        }
    }).limit(5).sort({time: -1});
};
//媒体
exports.media = function (callback) {
    userMedia.find('', function (err, doc) {
        if (err) {
            var errjson = {
                err: err,
                isSuccess: false
            };
            callback(errjson);
        } else {
            var successjson = {
                doc: doc,
                isSuccess: true
            };
            callback(successjson);
        }
    }).limit(5).sort({time: -1});
};


