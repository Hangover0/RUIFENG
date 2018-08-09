$(function(){
    // 记录登陆/注册
    let isLogin   = true;
    location.hash = "login";

    var username = getEl(".username"),
        password = getEl(".password"),
        remember = getEl(".remember");

    if(localStorage.infor){
        var newArr = JSON.parse(localStorage.infor);
        username.value = newArr.username;
        password.value = newArr.password;
        remember.checked = true;
    }


    //注册BMOB
    Bmob.initialize("64a9c3e0f4a2c8278a1e05d29d288b4b", "3da1d46c77e0ea49a376c6b8b71f02da");

    // 点击前往注册
    $(".go-register").on("click", () => {
        isLogin = false;
        $(".register").removeClass("hidden");
        $(".code").removeClass("hidden");
        $(".validate-code").removeClass("hidden");
        $(".login").addClass("hidden");
        $(".title").text("REGISTER");
        $(".login-register-btn").text("注册");
        $(".input-box input").each((index, el) => {
            $(el).val("");
        });
        location.hash = "register";
        document.title = "BMOB - REGISTER";
    });
    // 点击登陆
    $(".go-login").on("click", () => {
        isLogin = true;
        $(".register").addClass("hidden");
        $(".login").removeClass("hidden");
        $(".code").addClass("hidden");
        $(".validate-code").addClass("hidden");
        $(".title").text("LOGIN");
        $(".login-register-btn").text("登陆");
        $(".input-box").removeClass("error");
        $(".input-box input").each((index, el) => {
            $(el).val("");
        });
        location.hash = "login";
        document.title = "BMOB - LOGIN";
    });

    // 注册
    $(".input-box input").on("blur", (e) => {
        let $target = $(e.target);
        if(!isLogin) {
            if(!Validate.test($target.prop("className"), $target.val())) {
                $target.parent().addClass("error");
            }else {
                $target.parent().removeClass("error");
            }
        }
    });

    $(".login-register-btn").on("click", () => {
        if(isLogin) {
            if(!$(".username").val() || !$(".password").val()) {
                new LHYAlertView({
                    type: "alert",
                    message: "请完善信息！"
                })
            }else {

                if(remember.checked){
                    save();
                }else{
                    localStorage.removeItem("infor");
                }



                Bmob.User.logIn($(".username").val(), $(".password").val(), {
                    success: (user) => {
                        new LHYAlertView({
                            type: "alert",
                            message: "登陆成功！",
                            sureCallBack: () => {
                                sessionStorage.loginState = true;
                                location.href = "./index.html";
                            }
                        })

                    },
                    error: (user,error) => {
                        new LHYAlertView({
                            type: "alert",
                            message: "用户名或密码错误！"
                        })
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
                new LHYAlertView({
                    type: "alert",
                    message: "请完善信息！"
                })
            }else if(!isThough) {
                new LHYAlertView({
                    type: "alert",
                    message: "信息不合法！"
                })
            }else {
                //注册用户
                //创建用户
                let user = new Bmob.User();
                //设置用户属性
                user.set("username",$(".username").val());
                user.set("password",$(".password").val());
                user.set("email",$(".email").val());
                user.set("phone",$(".phone").val());


                //执行注册
                user.signUp(null, {
                    success: (user) => {
                        new LHYAlertView({
                            type: "alert",
                            message: "注册成功！",
                            sureCallBack: () => {
                                sessionStorage.loginState = true;
                                location.href = "./index.html";
                            }
                        })
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


    // 获取存储验证码元素
    var validateCode = document.querySelector(".validate-code");
    var input = document.querySelector(".verify");
    var inputBox = document.querySelector(".code");
    // 设置默认验证码
    validateCode.textContent = getVerificationCode(4);
    // 点击验证码/切换
    validateCode.onclick = function() {
        validateCode.textContent = getVerificationCode(4);
    }
    // 判断验证码是否输入正确
    input.onblur = function() {
        // 根据验证码生成正则表达式
        // i 忽略大小写
        var reg = new RegExp(`^${validateCode.textContent}$`, "i");


        console.log(reg);
        console.log(this.value);
        // 通过正则表达式判断验证码是否输入正确
        if(!reg.test(this.value)) {
            inputBox.classList.add("error");
        }else {
            inputBox.classList.remove("error");
        }
    }



});