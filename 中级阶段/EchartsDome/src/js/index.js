$(function(){
    let mycharts = echarts.init(document.querySelector(".box"));
    mycharts.setOption({
        backgroundColor:"#2c343c",
        title:{
            text:"Customized Pie",
            left:"center",
            top:20,
            textStyle:{
                color:"#ccc"
            }
        },
        tooltip:{
            trigger:"item",
            formatter:"{a} </br>{b} : {c} ({d}%)"
        },
        visualMap:{
            show:false,
            min:80,
            max:600,
            inRange:{
                colorLightness:[0, 1]
            }
        },
        series:[
            {
                name:"访问来源",
                type:"pie",
                radius:"55%",
                center:["50%","50%"],
                data:[
                    {value:400,name:'王者荣耀'},
                    {value:310,name:'英雄联盟'},
                    {value:274,name:'穿越火线'},
                    {value:235,name:'绝地求生'},
                    {value:367,name:'阴阳师'}                    
                ].sort(function(a, b){
                    return a.value - b.value;
                }),
                roseType:"radius",
                label:{
                    normal:{
                        textStyle:{
                            color:"rgba(255,255,255,0.3)"
                        }
                    }  
                },
                labelLine:{
                    normal:{
                        lineStyle:{
                            color:"rgba(255,255,255,0.3)"
                        },
                        smooth:0.2,
                        length:10,
                        length2:20
                    }
                },
                itemStyle:{
                    normal:{
                        color:"#c23531",
                        shadowBlur:200,
                        shadowColor:"rgba(0,0,0,0.5)"
                    }
                },
                animationType:"scale",
                animationEasing:"elasticOut",
                animationDelay:function(idx){
                    return Math.random() * 200;
                }              
            }
        ]
    })
})