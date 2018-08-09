/**
 * 功能：图片轮播
 * 日期：2017-8-28
 **/

/*************************************************/
/* 全局变量、对象定义部分 */
/*************************************************/
var imgURL_list = ["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg","img/02.jpg","img/03.jpg"];


/*************************************************/
/* 页面加载完统一执行部分 */
/*************************************************/
window.onload = function() {
	// 实例化“图片轮播构造函数”，并进行配置
	var carous = new Imgcarousel("carousel", 3400, false);
	// 调用“生成图片和控制点”方法
	carous.createImageAndPoint();
	// 调用“点击控制点切换图片”方法
	carous.tabImageShow();
	// 调用“图片自动轮播定时器”方法
	carous.imageCarousInterval();
	// 调用“左右翻页按钮功能”方法
	carous.flip();
}

/*************************************************/
/* 功能函数及方法定义部分 */
/*************************************************/

/**
 * 功能：图片轮播构造函数
 * 参数1：图片轮播的主容器ID（String）
 * 参数2：图片轮播的毫秒时间间隔（Number）
 * 参数3：是否反相播放（Boolean。true：反相播放；false：正向播放，缺省值）
 **/
function Imgcarousel(ident, timeInterval, reverse) {
	// 图片轮播的主容器
	this.container = document.getElementById(ident);
	// 图片列表
	this.imageList = this.container.getElementsByClassName("imageList")[0];
	// 控制点列表
	this.pointList = this.container.getElementsByClassName("pointList")[0];
	// 获取图片URL的个数
	this.imageLength = imgURL_list.length;
	
	/**
	* 功能：生成图片和控制点
	**/
	this.createImageAndPoint = function() {
		// 临时DOM字符串
		var imgStr = "";
		var pointStr = "";
		for(var i = 0; i < this.imageLength; i++) {
			// 新增图片
			imgStr += '<img src="' + imgURL_list[i] + '">';
			// 新增控制点
			pointStr += '<i></i>';
		}
		// 将图片渲染进视图
		this.imageList.innerHTML = imgStr;
		// 将控制点渲染进视图
		this.pointList.innerHTML = pointStr;

		// 显示第一张图片
		this.imageList.firstElementChild.className = "show";
		// 第一个控制点选中
		this.pointList.firstElementChild.className = "checked";
	}
	/**
	* 功能：点击控制点切换图片
	**/
	this.tabImageShow = function() {
		// 图片元素集合
		var img = this.imageList.children;
		// 控制点集合
		var point = this.pointList.children;
		// 存储imageList对象和pointList对象（因为点击事件内的this不再指向当前构造函数被实例化后的对象）
		var thisImgList = this.imageList;
		var thisPointList = this.pointList;
		
		// 通过图片URL个数来决定循环次数
		for(var i = 0; i < this.imageLength; i++) {
			point[i].index = i;
			point[i].onclick = function() {
				// 清除所有图片的显示class和控制点的选中class
				thisImgList.getElementsByClassName("show")[0].className = "";
				thisPointList.getElementsByClassName("checked")[0].className = "";
				// 当前控制点添加选中效果
				this.className = "checked";
				// 对应控制点索引值的图片添加显示class
				img[this.index].className = "show";
			}
		}
	}
	/**
	* 功能：图片自动轮播定时器
	**/
	this.imageCarousInterval = function() {
		// 存储控制点列表和图片列表
		var thisPoint = this.pointList;
		var thisImage = this.imageList;
		
		// 通过传入的第三个参数决定使用哪种播放方式
		var carousel;
		// 反向播放
		if(reverse === true) {
		    carousel = this.prevImageShow;
	    }
		// 正向播放
		else {
			carousel = this.nextImageShow;
		}
		
		
		// 声明一个定期器，开始执行图片自动轮播
		var timer = setInterval(function() {
			carousel(thisPoint, thisImage);
		}, timeInterval);
		
		// 当鼠标移入图片主容器之后
		this.container.onmouseenter = function() {
			// 清除定时器
			clearInterval(timer);
		}
		
		// 当鼠标移出图片主容器之后
		this.container.onmouseleave = function() {
			// 重建定时器
			timer = setInterval(function() {
				carousel(thisPoint, thisImage);
			}, timeInterval);
		}
	}
	/**
	* 功能：左右翻页按钮功能
	**/
	this.flip = function() {
		// 存储控制点列表和图片列表
		var thisPoint = this.pointList;
		var thisImage = this.imageList;
		// 翻页控件
		var filpCtrl = this.container.getElementsByClassName("filp")[0];
		// 到上一张和下一张图片的方法
		var toPrev = this.prevImageShow;
		var toNext = this.nextImageShow;
		// 上一页按钮事件
		filpCtrl.firstElementChild.onclick = function() {
			toPrev(thisPoint,thisImage);
		}
		// 下一页按钮事件
		filpCtrl.lastElementChild.onclick = function() {
			toNext(thisPoint,thisImage);
		}
	}
	/**
	* 功能: 显示下一张图片
	* 参数1：当前控制点（Element）
	* 参数2：当前图片（Element）
	**/
	this.nextImageShow = function(point, image) {
		var cdkPoint = point.getElementsByClassName("checked")[0];
		var showImg = image.getElementsByClassName("show")[0];
		// 当前控制点/图片移除选中/显示效果
		cdkPoint.className = "";
		showImg.className = "";
		// 下一个控制点/图片
		var nextPoint = cdkPoint.nextElementSibling;
		var nextImage = showImg.nextElementSibling;
		// 如果后方仍然存在元素节点则继续
		if(nextPoint) {
			// 获取到的最新控制点/图片添加选中/显示效果
			nextPoint.className = "checked";
			nextImage.className = "show";
		}
		// 否则选中首个控制点，显示第一张图片
		else {
			point.firstElementChild.className = "checked";
			image.firstElementChild.className = "show";
		}
	}
	/**
	* 功能: 显示上一张图片
	* 参数1：当前控制点（Element）
	* 参数2：当前图片（Element）
	**/
	this.prevImageShow = function(point, image) {
		var cdkPoint = point.getElementsByClassName("checked")[0];
		var showImg = image.getElementsByClassName("show")[0];
		// 当前控制点/图片移除选中/显示效果
		cdkPoint.className = "";
		showImg.className = "";
		// 上一个控制点/图片
		var prevPoint = cdkPoint.previousElementSibling;
		var prevImage = showImg.previousElementSibling;
		// 如果前方仍然存在元素节点则继续
		if(prevPoint) {
			// 获取到的最新控制点/图片添加选中/显示效果
			prevPoint.className = "checked";
			prevImage.className = "show";
		}
		// 否则选中首个控制点，显示第一张图片
		else {
			point.lastElementChild.className = "checked";
			image.lastElementChild.className = "show";
		}
	}
}

