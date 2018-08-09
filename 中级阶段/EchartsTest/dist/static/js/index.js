"use strict";

$(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    var legend = ["语文", "数学", "英语", "政治", "历史", "地理", "化学", "生物", "物理", "体育", "音乐", "美术"];
    var stus = ["张三", "李四", "赵二", "王五", "欧阳修", "luck"];
    //配置
    myChart.setOption({
        //标题样式
        title: {
            text: "学员成绩表",
            subtext: "数据仅供参考",
            link: "http://github.com/Lihongyao"
        },
        //工具箱
        toolbox: {
            feature: {
                // 保存为图片
                saveAsImage: {},
                // 缩放
                dataZoom: {},
                // 切换图标类型
                magicType: {
                    type: ["line", "bar"]
                },
                // 还原
                restore: {}
            }
        },
        // 提示
        tooltip: {
            trigger: "axis",
            formatter: "学科：{a}</br>姓名：{b}</br>成绩：{c}"
        },
        //图例设置
        legend: {
            // 滚动
            type: "scroll",
            data: legend,
            // 水平显示
            orient: "horizontal",
            // 相当于绝对定位
            bottom: 0,
            // 设置图例为单选
            selectedMode: "single",
            // 设置图例选中状态
            selected: function () {
                var selected = {};
                legend.forEach(function (key, index) {
                    if (index < 1) {
                        selected[key] = true;
                    } else {
                        selected[key] = false;
                    }
                });
                return selected;
            }()
        },
        xAxis: {
            type: "category",
            data: stus
        },
        yAxis: {},
        series: function () {
            var series = [];
            legend.forEach(function (item) {
                series.push({
                    name: item,
                    type: "line",
                    markPoint: {
                        data: [{ type: "min", name: "最小值" }, { type: "max", name: "最大值" }]
                    },
                    markLine: {
                        data: [{ type: "average", name: "平均值" }]
                    },
                    data: function () {
                        var grades = [];
                        stus.forEach(function (element) {
                            grades.push(Math.floor(Math.random() * 100) + 1);
                        });
                        return grades;
                    }()
                });
            });
            return series;
        }()
    });
});