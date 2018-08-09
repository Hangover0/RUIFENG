var ifr1 = document.getElementById("ifr1");
var ifr2 = document.getElementById("ifr2");
setTimeout(function () {

    var ifr1_doc = ifr1.contentDocument;
    var text1 = ifr1_doc.getElementById("text1").textContent;
    var text2 = ifr1_doc.getElementById("text2").textContent;
    var text3 = ifr1_doc.getElementById("text3").textContent;
    var ifr2_doc = ifr2.contentDocument;
    var baby = ifr2_doc.getElementById("baby");
    var form = ifr2_doc.getElementById("form");
    var skill = ifr2_doc.getElementById("skill");
    var btn = ifr2_doc.getElementById("btn");
    btn.onclick = function () {
        baby.value = text1;
        form.value = text2;
        skill.value = text3;
    }
},100);