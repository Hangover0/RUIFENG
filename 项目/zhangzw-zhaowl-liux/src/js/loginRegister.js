
require('Common-LESS');
const ZhangZWTool =  require('./zhangzw-tool');
ZhangZWTool.ZhangZWTool.zhangzwloadHtml();
ZhangZWTool.ZhangZWTool.getVerificationCode();
import '../less/loginRegister.less';



$(function(){
   // 记录登陆/注册
   let isLogin   = true;
   location.hash = "login";

   var username = $(".username"),
       password = $(".password"),
       remember = $(".remember");

   if(localStorage.infor){
       var newArr = JSON.parse(localStorage.infor);
       username.value = newArr.username;
       password.value = newArr.password;
       remember.checked = true;
   }
   //注册BMOB
   Bmob.initialize("8a6e5291277c8984730cbd3e53befc56", "93a2923b604bee6842d7c77db776945b");

   // 点击前往注册
   $(".go-register").on("click", (e) => {
        isLogin = false;
        $(e.currentTarget).addClass("hidden");
        $(".code").removeClass("hidden");
        $(".validate-code").removeClass("hidden");
        $(".register").removeClass("hidden");
        $(".title").text("注册");
        $(".login-register-btn").text("注册");
        $(".input-box input").each((index, el) => {
            $(el).val("");
        });
        location.hash = "register";
        document.title = "注册";
    });
    // 点击登陆
    $(".go-login").on("click", (e) => {
        isLogin = true;
        $(e.currentTarget).addClass("hidden");
        $(".go-register").removeClass("hidden");
        $(".login").removeClass("hidden");
        $(".code").addClass("hidden");
        $(".validate-code").addClass("hidden");
        $(".title").text("登录");
        $(".login-register-btn").text("登录");
        $(".input-box").removeClass("error");
        $(".input-box input").each((index, el) => {
            $(el).val("");
        });
        location.hash = "login";
        document.title = "登录";
    });

    // 注册
    $(".input-box input").on("blur", (e) => {
        let $target = $(e.target);
        if(!isLogin) {
            if(!ZhangZWTool.ZhangZWTool.test($target.prop("className"), $target.val())) {
                $target.parent().addClass("error");
            }else {
                $target.parent().removeClass("error");
            }
        }
    });

    $(".login-register-btn").on("click", () => {
        if(isLogin) {
            if(!$(".username").val() || !$(".password").val()) {
                alert('请完善信息');
            }else {
                Bmob.User.logIn($(".username").val(), $(".password").val(), {
                    success: (user) => {
                        alert("登陆成功！");
                        sessionStorage.loginState = JSON.stringify(user);
                        location.href = "../../index.html";

                    },
                    error: (user,error) => {
                        alert("用户名或密码错误！");
                    }
                });
            }
        }else {
            let isThough = true, isEmpty = false;
            // 判断是否验证通过
            $(".input-box").each((index, el) => {
                if($(el).hasClass("error")) {
                    isThough = false;
                    return false;
                }
            });
            // 判断是否完善信息
            $(".input-box input").each((index, el) => {
                if(!$(el).val()) {
                    isEmpty = true;
                    return false;
                }
            });
            if(isEmpty) {
                alert("请完善信息！")
            }else if(!isThough) {
                alert("信息不合法！")
            }else {
                //注册用户
                //创建用户
                let user = new Bmob.User();
                //设置用户属性
                user.set("username",$(".username").val());
                user.set("password",$(".password").val());


                //执行注册
                user.signUp(null, {
                    success: (user) => {
                        alert("注册成功！");
                        sessionStorage.loginState = JSON.stringify(user);
                  
                        location.href = "../../index.html";
                    },
                    error: (user, error) => {
                        let alertMsg = "";
                        switch (error.code){
                            case 202:{alertMsg = "用户名已经存在！"}break;
                            case 203:{alertMsg = "邮箱已被注册！"}break;
                        }
                        new LHYAlertView(
                            {
                                type: "default",
                                autoClose: 1000,
                                title: "温馨提示",
                                message: alertMsg
                            }
                        )
                    }
                });
            }

        }
    });


    var validateCode = document.querySelector(".validate-code");
    // 设置默认验证码
    $(".validate-code").text(ZhangZWTool.ZhangZWTool.getVerificationCode(4));
    // 点击验证码/切换
    $(".validate-code").on("click", (e) => {
        $(e.currentTarget).text(ZhangZWTool.ZhangZWTool.getVerificationCode(4));
    })
    // 判断验证码是否输入正确
    $('.verify').on("blur", (e) => {
        // 根据验证码生成正则表达式
        // i 忽略大小写
        var reg = new RegExp(`^${validateCode.textContent}$`, "i");
        // 通过正则表达式判断验证码是否输入正确
        if(!reg.test($(e.currentTarget).val())) {
            $('.code').addClass("error");
        }else {
            $('.code').removeClass("error");
        }
    })

})