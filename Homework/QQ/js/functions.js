function get(name, classname, subclassname, line){
    let htmlStr = "";
    let num = 0;
    name.forEach((data) => {
        htmlStr += `
        <li class="clearFix">
            <div class="headimg fl"><img src="${data.headimg}"></div>
            <div class="des fr">
                <h1>${data.name}</h1>
                <span class="state">${data.state}</span>
                <span class="signature">${data.signature}</span>
            </div
        </li>
    `;

    if(data.state == "在线"){
        return num++;
    }
    });
    $(classname).html(htmlStr);
    $(subclassname).text(name.length);
    $(line).text(num);
}

function state(classname, subclassname){
    $(classname).on("click", () => {
        $(subclassname).toggle();
    })
}