$(function(){
    get((response) => {
        let week = ["周一","周二","周三","周四","周五","周六","周日"];
        let diet = response.diet.value;
        let shopping = response.shopping.value;
        let life = response.life.value;
        let traffic = response.traffic.value;
        let entertainment = response.entertainment.value;
        let social = response.social.value;
        let finance = response.finance.value;
        let medicine = response.medicine.value;
        let other = response.other.value;
        let htmlStr = "";
        

        for(let i = 0; i < week.length; i++){
            htmlStr += `
            <section class="item">
                <span>${week[i]}</span>
                <span contenteditable="true">${diet[i]}</span>
                <span contenteditable="true">${shopping[i]}</span>
                <span contenteditable="true">${life[i]}</span>
                <span contenteditable="true">${traffic[i]}</span>
                <span contenteditable="true">${entertainment[i]}</span>
                <span contenteditable="true">${social[i]}</span>
                <span contenteditable="true">${finance[i]}</span>
                <span contenteditable="true">${medicine[i]}</span>
                <span contenteditable="true">${other[i]}</span>
            </section>
           `
        }      
        $(".tbody").html(htmlStr);
        sumNumber();

        
    });
})



