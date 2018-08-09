class ZhangZWTool {  
    constructor() {};
   
    //动态生成头部和尾部
    zhangzwloadHtml(){
        let headhtmlStr = '';
        let footloadHtml = '';
        headhtmlStr = `
        <div class="header-content">
            <div class="logo"></div>
            <div class="loginShop clearfix">
                <div class="head-title fl"></div>
                <div class="loginbox fr">
                    <span class="tologin  login"></span>
                    <span class="shopcar">
                        <div class="shopcar-xq">
                            <div class="shopdes">
                                <p>
                                    <span>9成新转角沙发超</span>
                                    <span class="nine">9999</span>
                                    <span>×2</span>
                                </p>
                                <p>
                                    <span>3成新超级大茶几</span>
                                    <span class="nine">9999</span>
                                    <span>×2</span>
                                </p>
                                <p>
                                    <span>7成新超级电视柜</span>
                                    <span class="nine">9999</span>
                                    <span>×2</span>
                                </p>
                            </div>
                            <div class="shop-watch">
                                <button type="button">查看购物车</button>
                            </div>
                        </div>
                    </span>
                    <span class="num">3</span>
                </div>
            </div>
            <div class="select">
                <i class="cdCity" title="成都地区">成都地区</i>
                <dl class="city">
                    <dt>成都地区</dt>
                    <dt>北京地区</dt>
                    <dt>上海地区</dt>
                    <dt>深圳地区</dt>
                    <dt>其他地区</dt>
                </dl>
            </div>
            <div class="main-nav">
                <ul class="menu-list">
                    <li>沙发 SOFAS
                        <div class="submenu-list">
                            <a>单人位</a>
                            <a>双人位</a>
                            <a>三人位</a>
                            <a>休闲沙发</a>
                            <a>转角沙发</a>
                        </div>
                    </li>
                    <li>桌椅 TABLES/CHAIRS
                        <div class="submenu-list">
                            <a>餐&nbsp;&nbsp;&nbsp;&nbsp;椅</a>
                            <a>书&nbsp;&nbsp;&nbsp;&nbsp;桌</a>
                            <a>凳&nbsp;&nbsp;&nbsp;&nbsp;子</a>
                            <a>电脑桌</a>
                            <a>休闲椅</a>
                            <a>梳妆台</a>
                            <a>户外椅</a>
                            <a>其&nbsp;&nbsp;&nbsp;&nbsp;他</a>
                            <a>餐桌</a>
                        </div>
                    </li>
                    <li>床 BEDS
                        <div class="submenu-list">
                            <a>1.5米</a>
                            <a>1.8米</a>
                            <a>其他</a>
                        </div>
                    </li>
                    <li>柜 STORAGE
                        <div class="submenu-list">
                            <a>衣柜</a>
                            <a>储物柜</a>
                            <a>书柜</a>
                            <a>电视柜</a>
                            <a>鞋柜</a>
                            <a>床头柜</a>
                            <a>其他</a>
                        </div>
                    </li>
                    <li>更多 MORE
                        <div class="submenu-list">
                            <a>组合产品</a>
                            <a>日用家居</a>
                            <a>家居饰品</a>
                            <a>其他</a>
                        </div>
                    </li>
                    <li class="list">
                        <input type="text" placeholder="搜索">
                        <p class="search"></p>
                    </li>
                </ul>
            </div>
        </div>  
        `;
        footloadHtml = `
        <div class="foot-title">
            <p>生活要过得朴素而有味道，但不用过得奢华。</p>
        </div>
        <div class="footmenu-list">
            <ul>
                <li>
                    <h2>环保</h2>
                    <p>无甲醛 大自然</p>
                </li>
                <li>
                    <h2>低价</h2>
                    <p>低于购买价6折</p>
                </li>
                <li>
                    <h2>安全</h2>
                    <p>专业清洁消毒处理</p>
                </li>
                <li>
                    <h2>省心</h2>
                    <p>专业物流</p>
                </li>
                <li>
                    <h2>快捷</h2>
                    <p>24小时内送货</p>
                </li>
            </ul>
        </div>
        <div class="foot-nav">
            <ul>
                <li>
                    <dl>
                        <dt>关于我们</dt>
                        <dd>关于户里</dd>
                        <dd>注册协议</dd>
                        <dd>业务合作</dd>
                        <dd>免费声明</dd>
                        <dd>加入户里</dd>
                        <dd>隐私保护</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>流程指南</dt>
                        <dd>购买家具</dd>
                        <dd>出售家具</dd>
                        <dd>支付方式</dd>
                        <dd>配送安装</dd>
                        <dd>售后保障</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>会员中心</dt>
                        <dd>会员计划</dd>
                        <dd>积分规则</dd>
                        <dd>投诉建议</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>联系客服</dt>
                        <dd>电话：</dd>
                        <dd>028-67635062</dd>
                        <dd>邮箱：</dd>
                        <dd>hello@hulihome.com</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt class="xinwei"><span class="xinl"></span>新浪微博@户里网</dt>
                        <p class="xinler"></p>
                </dl>     
                </li>
                <li>
                    <dl>
                        <dt class="xinwei"><span class="weix"></span>关注微信“户里网”</dt>
                        <p class="weixer"></p>
                    </dl>
                </li>
            </ul>
        </div>
        <div class="copy">蜀ICP备15028224号  成都户里科技有限公司</div>
        `

    $('.header').html(headhtmlStr);
    $('.footer').html(footloadHtml);
    $(".shopcar").on("click",()=>{
        $(".shopcar-xq").slideToggle();
    })
    // 设置路由基础路径
    let baseUrl = 'http://localhost:8080/';
    // 设置页面路径
    let urls     = [
        'static/pages/sofa.html',
        'static/pages/tables.html',
        'static/pages/beds.html',
        'static/pages/storage.html',
        'static/pages/more.html',
        'static/pages/loginRegister.html',
        'static/pages/userInfo.html',
        'static/pages/shop.html',
        '/index.html'
    ];
    // 配置页面最终枯井
    urls = urls.map(url => {
        return baseUrl + url
    });
    // 添加点击事件
    $('.menu-list li').on('click', (event) => {
    // 获取点击菜单项的下标
        let index = $(event.currentTarget).index();
        // 根据获取的下标设置页面跳转路径
        location.href = urls[index];
    });
    $(".head-title").on("click",()=>{
        location.href =  urls[8];
    })
    let str = JSON.parse(sessionStorage.getItem('loginState'));
    if(sessionStorage.loginState){        
        $(".tologin").text(str.username).removeClass('login');
    }    
    $(".tologin").on("click", () => {
        if(sessionStorage.loginState){
            location.href = urls[6];
        }else{
            location.href = urls[5];
        }
    })
    $(".shop-watch").on("click",()=>{
        location.href =  urls[7];
    })
    
    }



    //判断输入框输入的值    
    test(type, str) {
        let res = null;
        switch (type) {
            case "username": {
                res = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(str);
            } break;
            case "password": {
                res = /^[A-Za-z0-9_-]{4,16}$/.test(str);
            } break;
        }
        return res;
    }



    //获取随机数
    getVerificationCode(length) {
        //定义随机源
        var str = "";
        str += "QWERTYUUUUUIOPASDFGHJKLZXCVBNM";
        str += "1234567890";
        str += "qwertyuiopasdfghjklzxcvbnm";
        //根据长度截取字符
        var resStr = "";
        for (var i = 0;i < length; i++){
            //获取随机下标
            var index = Math.floor(Math.random() * str.length);
            resStr += str.slice(index, index + 1);
        }
        return resStr;
    }



    //本地存储
    save() {
        var username = getEl(".username"),
            password = getEl(".password");
        var obj = {
            username : username.value,
            password : password.value
        };
        var newObj = JSON.stringify(obj);
        sessionStorage.setItem("infor", newObj);
    }
}


//导出
exports.ZhangZWTool = new ZhangZWTool();