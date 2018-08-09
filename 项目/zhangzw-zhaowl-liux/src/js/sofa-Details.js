const ZhaoWLTool =  require('./zhaowenl-tool');
import '../less/sofa-Details.less';
require('Common-LESS');

const ZhangZWTool =  require('./zhangzw-tool');
ZhangZWTool.ZhangZWTool.zhangzwloadHtml();
ZhaoWLTool.ZhaoWLTool.smallBig();



$(function(){
    $(".product-one").on("click",()=>{
       location.href = "./sofa-Details.html";
    })








})