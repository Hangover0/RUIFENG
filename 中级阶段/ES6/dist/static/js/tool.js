"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tool = function () {
    function Tool() {
        _classCallCheck(this, Tool);
    }

    _createClass(Tool, [{
        key: "basic",
        value: function basic() {

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
        }
    }, {
        key: "test",
        value: function test() {
            var myChart = echarts.init(document.querySelector(".test"));
            myChart.setOption({
                title: {
                    text: "一周消费情况",
                    subtext: "数据仅供参考"
                },
                toolbox: {
                    feature: {
                        saveAsImage: {},
                        dataZoom: {},
                        magicType: {
                            type: ["line", "bar"]
                        },
                        restore: {}
                    }
                },
                tooltip: {
                    show: true
                },
                legend: {
                    data: ["休闲娱乐"]
                },
                xAxis: {
                    data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
                },
                yAxis: {},
                series: []
            });
            myChart.showLoading();
            setTimeout(function () {
                $.ajax({
                    url: "./static/json/data.json",
                    type: "GET",
                    dataType: "json",
                    success: function success(response) {
                        myChart.hideLoading();
                        myChart.setOption({
                            series: [{
                                name: "休闲娱乐",
                                type: "line",
                                data: response,
                                markPoint: {
                                    data: [{ type: "min", name: "最小值" }, { type: "max", name: "最大值" }]
                                },
                                markLine: {
                                    data: [{ type: "average", name: "平均值" }]
                                }
                            }]
                        });
                    }
                });
            }, 1500);
        }
    }, {
        key: "test1",
        value: function test1() {
            var myChart = echarts.init(document.querySelector(".test1"));
            myChart.setOption({
                title: {
                    text: "天气状况"
                },
                tooltip: {
                    show: true
                },
                legend: {
                    data: ["降水量", "蒸发量", "平均温度"]
                },
                toolbox: {
                    feature: {
                        saveAsImage: {},
                        restore: {}
                    }
                },
                series: [{
                    name: "降水量",
                    type: "bar",
                    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                }, {
                    name: "蒸发量",
                    type: "bar",
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                }, {
                    name: "平均温度",
                    type: "line",
                    yAxisIndex: 1,
                    data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                }],
                xAxis: {
                    data: function () {
                        var month = [];
                        for (var i = 0; i <= 12; i++) {
                            month.push(i + "\u6708");
                        }
                        return month;
                    }()
                },
                yAxis: [{
                    type: "value",
                    name: "降水量",
                    min: 0,
                    max: 250,
                    interval: 50,
                    axisLabel: {
                        formatter: "{value} ml"
                    }
                }, {
                    type: "value",
                    name: "温度",
                    min: 0,
                    max: 25,
                    interval: 5,
                    axisLabel: {
                        formatter: "{value} ℃"
                    }
                }]
            });
        }
    }]);

    return Tool;
}();