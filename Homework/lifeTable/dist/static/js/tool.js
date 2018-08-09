// 获取数据
let get = callback => {
    $.ajax({
        url: "./static/json/data.json",
        type: "GET",
        dataType: "json",
        success: response => {
            callback && callback(response);
        }
    });
};

let weekArr = [];
let updata = () => {
    //求和   
    weekArr = [];
    for (let k = 0; k < 9; k++) {
        let sum = 0;
        let arr = [];
        for (let l = 0; l < 7; l++) {
            let res = $(".tbody .item")[l].children[k + 1].textContent;
            sum += parseInt(res);
            arr.push(res);
        }
        $(".tfoot span")[k + 1].textContent = sum;
        weekArr.push(arr);
    }
};

let sumNumber = () => {
    updata();

    $(".tbody span").on("blur", () => {
        //求和
        updata();
    });

    let legends = ["食品酒水", "购物消费", "居家生活", "行车交通", "休闲娱乐", "人情费用", "金融保险", "药品医疗", "其它消费"];
    let week = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
    let dataBar = echarts.init(document.querySelector("#dataBar"));
    dataBar.setOption({
        //标题样式
        title: {
            text: "本周生活消费数据"
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
            show: true
        },
        //图例设置
        legend: {
            data: legends,
            // 水平显示
            orient: "vertical",
            right: 0,
            top: 50
        },
        xAxis: {
            type: "category",
            data: week
        },
        yAxis: {},
        series: function () {
            updata();
            let series = [];
            legends.forEach((name, index) => {
                series.push({
                    name: name,
                    type: 'bar',
                    data: weekArr[index]
                });
            });
            return series;
        }()
    });
    $(".tbody span").on("blur", () => {
        //求和
        updata();
        dataBar.setOption({
            series: function () {
                let series = [];
                legends.forEach((name, index) => {
                    series.push({
                        name: name,
                        type: 'bar',
                        data: weekArr[index]
                    });
                });
                return series;
            }()
        });
    });

    let dataPie = echarts.init(document.querySelector("#dataPie"));
    let sumPieArr = [];
    for (let p = 0; p < 9; p++) {
        let sumPie = $(".tfoot span")[p + 1].textContent;
        sumPieArr.push(sumPie);
    }

    dataPie.setOption({
        title: {
            text: '同名数量统计',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 20,
            bottom: 20,
            data: legends

        },
        series: [{
            name: '姓名',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            data: function () {
                let data = [];
                legends.forEach((name, index) => {
                    data.push({
                        name: name,
                        value: sumPieArr[index]
                    });
                });
                return data;
            }(),
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    });
};