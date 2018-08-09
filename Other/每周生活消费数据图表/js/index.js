/**
 * 功能：每周生活消费数据图表功能
 * 日期：2017/4/7
 **/
var $ = require('jquery');
// 引入 ECharts 主模块
let echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/theme/dark');

/**********************************************/
/* 全局变量定义部分 */
/**********************************************/
// 定义一个周
let WEEK = ["周一","周二","周三","周四","周五","周六","周日"];


/**********************************************/
/* 页面功能入口（文档加载完执行） */
/**********************************************/
$(function () {
	
	// 获取JSON数据
	$.getJSON("data/consume.json")
		// JSON数据获取后的回调处理
		.then(function (data) {
			
			// 柱状图系列的对象值
			let BARSERISE;
			
			// 调用“表格数据载入”函数
			dataLoad(data);
			
			// 调用“类别消费一周总计”函数
			sumExpense();
			
			// 调用“表格输入重计算功能”函数
			inputRecalc(data);
			
			// 生成柱状图
			barOption(data, "dataBar");
			
			// 生成饼状图
			pieOption(data, "dataPie");
			
		});
	
});

/**********************************************/
/* 功能函数定义部分 */
/**********************************************/

/**
 * 功能：图表核心函数
 * 参数1：JSON数据
 * 参数2：元素ID
 * 参数3：配置
 **/
function createCharts(json, ident, option) {
	// 基于准备好的元素的ID，初始化echarts实例
	// 可以选择的主题有"dark"、"infographic"、"macarons"、"roma"、"shine"、"vintage"，默认主题请移除第二个参数
	let initChart = echarts.init($(`#${ident}`)[0],'dark');
	
	// 使用刚指定的配置项和数据显示图表。
	initChart.setOption(option);
}

/**
 * 功能：表格数据载入
 * 参数：获取到的JSON数据
**/
function dataLoad(json) {
	let $weekConsumption = $("#weekConsumption"),
		$wcTbody = $weekConsumption.children("tbody");
	
	// 创建表格中的第一列（周）
	for(let dayOfWeek of WEEK) {
		$wcTbody.append(`<tr><td>${dayOfWeek}</td></tr>`);
	}
	
	// 获取表体中的行
	let tbodyTr =  $wcTbody.children("tr");
	
	// 创建其它消费数据
	tbodyTr.each(function (idx, item) {
		for(let expense in json) {
			$(item).append(`<td data-class=${expense} contenteditable="true">${json[expense]["value"][idx]}</td>`);
		}
	});
}

/**
 * 功能：类别消费一周总计
**/
function sumExpense() {
	// 表格
	let $weekConsumption = $("#weekConsumption");
	// 表体中的行和行数
	let tbodyTr =  $weekConsumption.children("tbody").children("tr"),
		tbodyTr_leng = tbodyTr.length;
	// 表脚的单元格
	let tfootTd = $weekConsumption.children("tfoot").children("tr").children("td");
	// 需要计算的单元格总数（除开一行的开头第一个）
	let calcTotal = tfootTd.length - 1;
	
	tfootTd.each(function (footTdIdx, footTdItem) {
		if(footTdIdx !== 0) {
			// 创建一个数组，接收表体一列的数据
			let arr = [];
			// 用于接收此次一列数据计算之和
			let sumColum = 0;
			
			tbodyTr.each(function (bodyTrIdx, bodyTrItem) {
				// 将当前列的数据添加进arr数组
				let currentVal = $(bodyTrItem).children("td").eq(footTdIdx).text();
				arr.push(currentVal);
			});
			
			// 计算出当前列数据之和
			sumColum = arr.reduce(function (tdCurrent, tdNext) {
				return Number(tdCurrent) + Number(tdNext);
			});
	
			// 设置页脚总计值
			$(footTdItem).text(sumColum);
		}
	});
}

/**
 * 功能：表格输入重计算功能
 * 参数1：JSON数据
 * 参数2：示例话图表对象
**/
function inputRecalc(json) {
	let $table = $("#weekConsumption"),
		$tbody = $table.children("tbody"),
		$tfoot = $table.children("tfoot"),
		$inputCell = $tbody.find("td");
	
	// 找到对应tfoot的单元格索引值
	let thisIdx = 0;
	
	$inputCell.on({
		// 失去焦点事件
		blur: function () {
			// 获取当前输入的值
			let thisVal = $(this).text();
			// 如果输入的值为空，则默认归零
			if(thisVal === "") {
				$(this).text(0);
				// 调用数值计算函数
				numCalc(this);
			}
			// 如果输入的值不全为数值
			else if(!/^\d+$/.test(thisVal)) {
				$tfoot.find("td").eq(thisIdx).text("有错误").addClass("sumErro");
			}
			else {
				//$tfoot.find("td").eq(thisIdx).removeClass("sumErro");
			}
			
			// 柱状图重计算
			barOption(json, "dataBar");
			
			// 饼状图重计算
			pieOption(json, "dataPie");
		},
		
		// 键盘输入事件
		keyup: function () {
			// 调用数值计算函数
			numCalc(this);
			
			// 获取当前输入的值
			let thisVal = $(this).text();
			
			// 如果输入的值不全为数值
			if(!/^\d+$/.test(thisVal) && thisVal !== "") {
				$(this).addClass("erroMesg");
				$tfoot.find("td").eq(thisIdx).text("有错误").addClass("sumErro");
			}
			else {
				$tfoot.find("td").eq(thisIdx).removeClass("sumErro");
				$(this).removeClass("erroMesg");
			}
		}
	});
	
	/* 数值计算函数 */
	function numCalc(ident) {
		// 获取当前的data-class和在该行的索引值
		let thisClass = $(ident).attr("data-class");
		let thisIdx = $(ident).index();
		// 创建一个空数组和求和变量
		let arr = [], sum = 0;
		
		// 找到同一类型的单元格
		let currentClass = $tbody.find(`td[data-class=${thisClass}]`);
		
		// 将这个类型的列的数据存入数组
		currentClass.each(function (idx, item) {
			let thisTxt = $(item).text();
			arr.push(thisTxt);
		})
		
		// 求和
		sum = arr.reduce(function (tdCurrent, tdNext) {
			return Number(tdCurrent) + Number(tdNext);
		});
		
		// 设置页脚总计值
		$tfoot.find("td").eq(thisIdx).text(sum);
	}
}

/**
 * 功能：柱状图配置
 * 参数1：JSON数据
 * 参数2：元素ID
**/
function barOption(json, ident) {
	// 设置图注数据信息
	function setLegendData() {
		let arr = [];
		for(let x in json) {
			arr.push(json[x]["name"]);
		}
		return arr;
	}
	
	// 通过表格获取系列数据
	function getSeriesData() {
		let $table = $("#weekConsumption"),
			$tbody = $table.children("tbody"),
			$tbodyTr = $tbody.children("tr");
		
		let seriesArr = [],
			obj = {},
			arr = [],
			count = 1;
			
		for(let x in json) {
			// 重置数组
			arr = [];
			// 设置类型为柱状图
			obj = {
				"type": "bar"
			};
			// 设置当前系列名称
			obj.name = json[x]["name"];
			// 遍历出这一列的数据添加进数组
			$tbodyTr.each(function (index, item) {
				let thisVal = Number($(item).children("td").eq(count).text());
				arr.push(thisVal);
			});
			obj.data = arr;
			seriesArr.push(obj);
			count++;
		}
		return seriesArr;
	}
	
	// 调用“图表核心函数”
	createCharts(json, ident, {
		title: {
			text: "本周生活消费数据",
			top: 10,
			textStyle: {
				fontWeight: "normal",
				color: "#bcd9fa"
			}
		},
		tooltip: {},
		legend: {
			orient: "vertical",
			right: 10,
			top: 36,
			itemGap: 15,
			// 原来的表示法
			//data: ["食品酒水","购物消费","居家生活","行车交通","休闲娱乐","人情费用","金融保险","药品医疗","其它"]
			// 调用“设置图注数据信息”函数
			data: setLegendData()
		},
		xAxis: {
			data: WEEK
		},
		yAxis: {},
		// 原来的表示法
		/*series: [
			{
				name: "食品酒水",
				type: 'bar',
				data: [46, 36, 42, 66, 48, 50, 106]
			},
			{
				name: "购物消费",
				type: 'bar',
				data: [13, 46, 22, 86, 13, 7, 20]
			},
			{
				name: "居家生活",
				type: 'bar',
				data: [46, 36, 42, 66, 48, 50, 106]
			},
			{
				name: "行车交通",
				type: 'bar',
				data: [60, 46, 36, 28, 72, 32, 42]
			},
			{
				name: "休闲娱乐",
				type: 'bar',
				data: [14, 12, 16, 36, 28, 56, 76]
			},
			{
				name: "人情费用",
				type: 'bar',
				data: [30, 20, 24, 55, 17, 98, 60]
			},
			{
				name: "金融保险",
				type: 'bar',
				data: [0, 0, 0, 120, 0, 0, 100]
			},
			{
				name: "药品医疗",
				type: 'bar',
				data: [0, 0, 45, 72, 0, 0, 0]
			},
			{
				name: "其它",
				type: 'bar',
				data: [15, 45, 22, 88, 19, 0, 68]
			}
		],*/
		series: getSeriesData(),
		grid: {
			left: 34,
			top: 60,
			right: 120,
			bottom: 40
		}
	});
}

/**
 * 功能：饼图配置
 * 参数1：JSON数据
 * 参数2：元素ID
**/
function pieOption(json, ident) {
	// 获取表头的文本
	let $headCell = $("#weekConsumption").children("thead").find("th");
	// 获取数据表格中的总计单元格
	let $sumCell = $("#weekConsumption").children("tfoot").find("td");
	
	// 设置饼状图数据
	function setPieData() {
		let arr = [];
		
		// 根据表格的内容生成数组对象
		$headCell.each(function (idx, item) {
			if(idx !== 0) {
				let obj = {
					value: Number($sumCell.eq(idx).text()),
					name: $headCell.eq(idx).text()
				}
				arr.push(obj);
			}
		});
		return arr;
	}
	
	// 调用“图表核心函数”
	createCharts(json, ident, {
		title: {
			text: "本周生活消费比重",
			top: 10,
			textStyle: {
				fontWeight: "normal",
				color: "#bcd9fa"
			}
		},
		series : [
			{
				name: "本周生活消费比重",
				type: "pie",
				radius: "60%",
				center: ["50%", "55%"],
				// 原本的表示法
				/*data: [
				{value: Number($sumCell.eq(1).text()), name: "食品酒水"},
				{value: Number($sumCell.eq(2).text()), name: "购物消费"},
				{value: Number($sumCell.eq(3).text()), name: "居家生活"},
				{value: Number($sumCell.eq(4).text()), name: "行车交通"},
				{value: Number($sumCell.eq(5).text()), name: "休闲娱乐"},
				{value: Number($sumCell.eq(6).text()), name: "人情费用"},
				{value: Number($sumCell.eq(7).text()), name: "金融保险"},
				{value: Number($sumCell.eq(8).text()), name: "药品医疗"},
				{value: Number($sumCell.eq(9).text()), name: "其它"}
				],*/
				// 该配置调用“设置饼状图数据”函数
				data: setPieData()
			}
		]
	});
}
