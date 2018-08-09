require('Common-LESS');
import '../less/index.less';
import '../less/swiper.min.less';
import '../js/swiper.min.js';
const ZhangZWTool =  require('./zhangzw-tool');
ZhangZWTool.ZhangZWTool.zhangzwloadHtml();


$(function () {
    $('.head-title').on("click", () => {
        location.href = "../../index.html";
    })
    $(".cdCity").on("click", () => {
        $(".city").slideToggle();
    })
    var trList=['leftUp','moveRight','moveDown','centerBig','rightDownBig'];
    var swiper = new Swiper('.swiper-container',{
		speed:500,
		autoplay:4400,
		autoplayDisableOnInteraction:false,
		effect:'fade',
		pagination : '.swiper-pagination',
		paginationClickable :true,
		onSlideChangeStart: function(swiper){
			var nextSlide=swiper.slides.eq(swiper.activeIndex);
			nextSlide.addClass(trList[Math.floor(Math.random()*5)]);
           },
	    onSlideChangeEnd: function(swiper){
		    var prevSlide=swiper.slides[swiper.previousIndex];
		    prevSlide.className="swiper-slide";
	       },
        });	
  
});